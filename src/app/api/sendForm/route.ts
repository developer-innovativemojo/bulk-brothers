import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  living: { [key: string]: string }[]; 
  bedroom: { [key: string]: string }[];
  kitchen: { [key: string]: string }[];
  bathroom: { [key: string]: string }[];
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    const { living, bedroom, kitchen, bathroom, email } = formData;

    // Convert objects to arrays
    const livingArray = Object.values(living);
    const bedroomArray = Object.values(bedroom);
    const kitchenArray = Object.values(kitchen);
    const bathroomArray = Object.values(bathroom);

    // Map values in HTML
    const livingHTML = livingArray.map(item => `<li>Description: ${item.description}, Number: ${item.number}, Packed: ${item.packed}, Unpacked: ${item.unpacked}</li>`).join("");
    const bedroomHTML = bedroomArray.map(item => `<li>Description: ${item.description}, Number: ${item.number}, Packed: ${item.packed}, Unpacked: ${item.unpacked}</li>`).join("");
    const kitchenHTML = kitchenArray.map(item => `<li>Description: ${item.description}, Number: ${item.number}, Packed: ${item.packed}, Unpacked: ${item.unpacked}</li>`).join("");
    const bathroomHTML = bathroomArray.map(item => `<li>Description: ${item.description}, Number: ${item.number}, Packed: ${item.packed}, Unpacked: ${item.unpacked}</li>`).join("");

    // Continue with your nodemailer code
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        // user: "salmanamjad902@gmail.com",
        // pass: "cnez szon gozh motb",
      },
    });

    // Email options for sending to your own inbox
    const mailOptionToYou = {
      from: email, // Use the user's email address directly
      to: "salmanamjad902@gmail.com",
      subject: " Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <h3>${email}</h3>
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
        // from: "BULK BROTHERS <salmanamjad902@gmail.com >",
  
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


    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error handling form data:", error);
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
