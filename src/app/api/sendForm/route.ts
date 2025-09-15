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

export async function POST(request: NextRequest) {
  try {
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
        user: "Info@bulkbrothersmove.com",
        pass: "znhl jccz oisn fhov",
      },
    });

    // Email options for sending to your own inbox
    const mailOptionToYou = {
      from: email, // Use the user's email address directly
      // developer@innovativemojo.com,projectlead@innovativemojo.com, donte.bulkbros@gmail.com
      to: "Info@bulkbrothersmove.com,",
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
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
