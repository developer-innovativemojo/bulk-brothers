import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting maps: IP-based and email-based
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const emailRateLimitMap = new Map<
  string,
  { count: number; resetTime: number }
>();
// Track recent email submissions to prevent duplicates
const recentEmailsMap = new Map<string, number>();

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkRateLimit(
  ip: string,
  maxRequests: number = 2,
  windowMs: number = 3600000
): boolean {
  const now = Date.now();
  const key = ip;
  const current = rateLimitMap.get(key);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

function checkEmailRateLimit(
  email: string,
  maxRequests: number = 3,
  windowMs: number = 3600000
): boolean {
  const now = Date.now();
  const normalizedEmail = email.toLowerCase().trim();
  const key = `email:${normalizedEmail}`;
  const current = emailRateLimitMap.get(key);

  if (!current || now > current.resetTime) {
    emailRateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

function checkDuplicateEmail(
  email: string,
  windowMs: number = 3600000
): boolean {
  const now = Date.now();
  const normalizedEmail = email.toLowerCase().trim();
  const lastSubmission = recentEmailsMap.get(normalizedEmail);

  if (lastSubmission && now - lastSubmission < windowMs) {
    return true; // Duplicate found
  }

  recentEmailsMap.set(normalizedEmail, now);
  // Clean old entries (older than 1 hour)
  Array.from(recentEmailsMap.entries()).forEach(([key, timestamp]) => {
    if (now - timestamp > windowMs) {
      recentEmailsMap.delete(key);
    }
  });
  return false;
}

function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email) {
    return { valid: false, error: "Email is required" };
  }

  const trimmedEmail = email.trim();

  if (trimmedEmail.length === 0) {
    return { valid: false, error: "Email cannot be empty" };
  }

  if (trimmedEmail.length > 254) {
    return { valid: false, error: "Email is too long" };
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { valid: false, error: "Invalid email format" };
  }

  // Additional checks for common invalid patterns
  if (
    trimmedEmail.includes("..") ||
    trimmedEmail.startsWith(".") ||
    trimmedEmail.endsWith(".")
  ) {
    return { valid: false, error: "Invalid email format" };
  }

  if (trimmedEmail.includes("@.") || trimmedEmail.includes(".@")) {
    return { valid: false, error: "Invalid email format" };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP with better detection
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip")?.trim() ||
      request.headers.get("x-client-ip")?.trim() ||
      request.ip ||
      "unknown";

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const { email } = body;

    // Validate email exists and is valid
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { message: emailValidation.error || "Invalid email address" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check IP-based rate limit (2 requests per hour per IP)
    if (!checkRateLimit(ip, 2, 3600000)) {
      return NextResponse.json(
        { message: "Too many requests from this IP. Please try again later." },
        { status: 429 }
      );
    }

    // Check email-based rate limit (3 requests per hour per email)
    if (!checkEmailRateLimit(normalizedEmail, 3, 3600000)) {
      return NextResponse.json(
        {
          message:
            "Too many subscription attempts for this email. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Check for duplicate email submission (same email within 1 hour)
    if (checkDuplicateEmail(normalizedEmail, 3600000)) {
      return NextResponse.json(
        {
          message:
            "This email has already been subscribed recently. Please try again later.",
        },
        { status: 409 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options for sending to your own inbox (use normalized email)
    const mailOptionToYou = {
      from: normalizedEmail,
      to: "Info@bulkbrothersmove.com, developer@innovativemojo.com, projectlead@innovativemojo.com, donte.bulkbros@gmail.com",
      subject: "Subscription Form Submission",
      html: `
        <h3>New Subscription</h3>
        <ul>
          <li>Email: ${normalizedEmail}</li>
          <li>Submitted from IP: ${ip}</li>
          <li>Timestamp: ${new Date().toISOString()}</li>
        </ul>
      `,
    };

    // Email options for sending thank you email to the user
    const mailOptionToUser = {
      from: "BULK BROTHERS <Info@bulkbrothersmove.com>",
      to: normalizedEmail,
      subject: "Thank You for Subscribing",
      html: `
        <h3>Dear Subscriber,</h3>
        <p>Thank you for subscribing to our newsletter!</p>
        <p>We'll keep you updated with our latest news and offers.</p>
        <p>Best regards,</p>
        <p>BULK BROTHERS</p>
      `,
    };

    // Send emails with error handling
    try {
      await transporter.sendMail(mailOptionToYou);
      await transporter.sendMail(mailOptionToUser);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Don't record as successful if email failed to send
      recentEmailsMap.delete(normalizedEmail);
      return NextResponse.json(
        {
          message: "Failed to send email. Please try again later.",
          error:
            emailError instanceof Error ? emailError.message : "Unknown error",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        message: "An error occurred. Please try again later.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
