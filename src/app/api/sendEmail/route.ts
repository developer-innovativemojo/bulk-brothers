import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

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

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      request.headers.get("x-client-ip") ||
      "unknown";

    // Check rate limit (2 requests per hour per IP)
    if (!checkRateLimit(ip, 2, 3600000)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { fname, email, phone, startDate } = await request.json();

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

    // Email options for sending to your own inbox
    const mailOptionToYou = {
      from: email,
      to: "Info@bulkbrothersmove.com, developer@innovativemojo.com,projectlead@innovativemojo.com, donte.bulkbros@gmail.com",
      subject: "Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <ul>
          <li>First Name: ${fname}</li>
          <li>Email: ${email}</li> 
          <li>Number: ${phone}</li> 
          <li>Date: ${startDate}</li> 
        </ul>
      `,
    };

    // Email options for sending thank you email to the user
    const mailOptionToUser = {
      from: "BULK BROTHERS <Info@bulkbrothersmove.com>",

      to: email,
      subject: "Thank You for Contacting Us",
      html: `
        <h3>Dear ${fname},</h3>
        <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>BULK BROTHERS,</p>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionToYou);
    await transporter.sendMail(mailOptionToUser);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        message: "Failed to Send Email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
