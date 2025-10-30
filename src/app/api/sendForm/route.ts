import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  living: { [key: string]: string }[];
  bedroom: { [key: string]: string }[];
  kitchen: { [key: string]: string }[];
  bathroom: { [key: string]: string }[];
  email: string;
  selectedService: string;
}

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

    const formData: FormData = await request.json();
    const { living, bedroom, kitchen, bathroom, email, selectedService } =
      formData;

    // Convert objects to arrays
    const livingArray = Object.values(living);
    const bedroomArray = Object.values(bedroom);
    const kitchenArray = Object.values(kitchen);
    const bathroomArray = Object.values(bathroom);

    // Filter out items where number is null or empty and map values in HTML
    const livingHTML = livingArray
      .filter((item) => item.number)
      .map((item) => {
        let displayValues = "";
        if (item.packed) {
          displayValues += ` ${item.packed}, `;
        }
        if (item.unpacked) {
          displayValues += ` ${item.unpacked}, `;
        }
        return `<li>Description: ${item.description}, Number: ${item.number}, ${displayValues}</li>`;
      })
      .join("");

    const bedroomHTML = bedroomArray
      .filter((item) => item.number)
      .map((item) => {
        let displayValues = "";
        if (item.packed) {
          displayValues += ` ${item.packed}, `;
        }
        if (item.unpacked) {
          displayValues += ` ${item.unpacked}, `;
        }
        return `<li>Description: ${item.description}, Number: ${item.number}, ${displayValues}</li>`;
      })
      .join("");

    const kitchenHTML = kitchenArray
      .filter((item) => item.number)
      .map((item) => {
        let displayValues = "";
        if (item.packed) {
          displayValues += ` ${item.packed}, `;
        }
        if (item.unpacked) {
          displayValues += ` ${item.unpacked}, `;
        }
        return `<li>Description: ${item.description}, Number: ${item.number}, ${displayValues}</li>`;
      })
      .join("");

    const bathroomHTML = bathroomArray
      .filter((item) => item.number)
      .map((item) => {
        let displayValues = "";
        if (item.packed) {
          displayValues += ` ${item.packed}, `;
        }
        if (item.unpacked) {
          displayValues += ` ${item.unpacked}, `;
        }
        return `<li>Description: ${item.description}, Number: ${item.number}, ${displayValues}</li>`;
      })
      .join("");

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
      from: email, // Use the user's email address directly
      // developer@innovativemojo.com,projectlead@innovativemojo.com, donte.bulkbros@gmail.com
      to: "Info@bulkbrothersmove.com, developer@innovativemojo.com,projectlead@innovativemojo.com, donte.bulkbros@gmail.com",
      subject: " Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <h3>${email}</h3>
        <h3>${selectedService}</h3>
        <h4>Living Room Data:</h4>
        <ul>${livingHTML}</ul>
        <h4>Bedroom Data:</h4>
        <ul>${bedroomHTML}</ul>
        <h4>Kitchen Data:</h4>
        <ul>${kitchenHTML}</ul>
        <h4>Bathroom Data:</h4>
        <ul>${bathroomHTML}</ul>
      `,
    };

    const mailOptionToUser = {
      from: "BULK BROTHERS <Info@bulkbrothersmove.com>",

      to: email,
      subject: "Thank You for Contacting Us",
      html: `
          <h3>Dear ${email},</h3>
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
    console.error("Error handling form data:", error);
    return NextResponse.json(
      {
        message: "Failed to Send Email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
