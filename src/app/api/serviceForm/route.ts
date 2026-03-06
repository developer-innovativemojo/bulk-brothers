import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

type ServiceId = "moving" | "trash" | "delivery" | "labor";

interface ContactData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
}

interface VolumePhotoDetailDataSerialized {
  volume: string | null;
  location: string;
  propertyType: string;
  elevator: boolean;
  serviceElevator: boolean;
  flightsOfStairs: string;
  origin: string;
  destination: string;
  productWeight: string;
  workersNeeded: string;
  description: string;
  photoFileNames: string[];
}

interface ServiceFormPayload {
  selectedServices: ServiceId[];
  detailFormData: Record<string, VolumePhotoDetailDataSerialized>;
  contact: ContactData;
  submittedAt: string;
  photoFileOrder?: string[];
}

const SERVICE_LABELS: Record<ServiceId, string> = {
  moving: "Moving",
  trash: "Trash",
  delivery: "Delivery",
  labor: "Labor",
};

const PROPERTY_LABELS: Record<string, string> = {
  single_family: "Single Family Home",
  townhouse: "Townhouse",
  apartment: "Apartment",
};

const PRODUCT_WEIGHT_LABELS: Record<string, string> = {
  less_50: "Less than 50lbs",
  "50_100": "Between 50lbs-100lbs",
  "100_150": "100lbs-150lbs",
  "150_200": "150lbs-200lbs",
  over_200: "Greater than 200lbs",
};

const VOLUME_LABELS: Record<string, string> = {
  small: "Small (Pickup Truck / Sprinter Van)",
  medium: "Medium (14' Box Truck / 16' Box Truck)",
  large: "Large (26' Box Truck)",
};

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(
  ip: string,
  maxRequests: number = 3,
  windowMs: number = 3600000
): boolean {
  const now = Date.now();
  const key = `serviceForm:${ip}`;
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

function escapeHtml(s: string): string {
  if (!s || typeof s !== "string") return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildServiceDetailHtml(
  serviceId: ServiceId,
  data: VolumePhotoDetailDataSerialized,
  photoCids?: string[]
): string {
  const rows: string[] = [];

  const row = (label: string, value: string | boolean | null | undefined) => {
    if (value === undefined || value === null || value === "") return;
    const display =
      typeof value === "boolean" ? (value ? "Yes" : "No") : String(value);
    rows.push(
      `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#333;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#191A05;">${escapeHtml(display)}</td></tr>`
    );
  };

  row("Roughly how much", data.volume ? VOLUME_LABELS[data.volume] ?? data.volume : null);

  if (serviceId === "moving" || serviceId === "trash") {
    row("Location", data.location);
    row("Property type", data.propertyType ? PROPERTY_LABELS[data.propertyType] ?? data.propertyType : null);
    row("Elevator", data.elevator);
    row("Service elevator", data.serviceElevator);
    if (!data.elevator && !data.serviceElevator && data.flightsOfStairs) {
      row("Flights of stairs", data.flightsOfStairs);
    }
  }

  if (serviceId === "delivery") {
    row("Origin", data.origin);
    row("Destination", data.destination);
    row("Product weight", data.productWeight ? PRODUCT_WEIGHT_LABELS[data.productWeight] ?? data.productWeight : null);
  }

  if (serviceId === "labor") {
    row("Workers needed", data.workersNeeded);
  }

  row("Description", data.description);

  if (photoCids && photoCids.length > 0) {
    const imgs = photoCids
      .map(
        (cid) =>
          `<img src="cid:${cid}" alt="Uploaded" style="max-width:100%;width:auto;max-height:240px;height:auto;display:block;margin:8px 0;border-radius:8px;border:1px solid #eee;" />`
      )
      .join("");
    rows.push(
      `<tr><td colspan="2" style="padding:12px;border-bottom:1px solid #eee;color:#333;">Photos</td></tr>`,
      `<tr><td colspan="2" style="padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;">${imgs}</td></tr>`
    );
  } else if (data.photoFileNames && data.photoFileNames.length > 0) {
    row("Photos (file names)", data.photoFileNames.join(", "));
  }

  if (rows.length === 0) return "";
  return `
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
      <tbody>${rows.join("")}</tbody>
    </table>
  `;
}

function buildEmailHtml(
  payload: ServiceFormPayload,
  cidsByService?: Record<string, string[]>
): string {
  const c = payload.contact;
  const submittedDate = payload.submittedAt
    ? new Date(payload.submittedAt).toLocaleString()
    : "—";

  let servicesHtml = "";
  for (const serviceId of payload.selectedServices) {
    const detail = payload.detailFormData[serviceId];
    const label = SERVICE_LABELS[serviceId] ?? serviceId;
    const photoCids = cidsByService?.[serviceId];
    const detailHtml = detail
      ? buildServiceDetailHtml(serviceId as ServiceId, detail, photoCids)
      : "<p style='color:#888;'>No details provided.</p>";
    servicesHtml += `
      <div style="margin-bottom:24px;">
        <h3 style="margin:0 0 12px 0;font-size:16px;color:#191A05;border-bottom:2px solid #E2E1DB;padding-bottom:8px;">${escapeHtml(label)}</h3>
        ${detailHtml}
      </div>
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f5f5f5;padding:20px;">
      <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <div style="background:#191A05;color:#E2E1DB;padding:20px 24px;">
          <h1 style="margin:0;font-size:22px;font-weight:700;">New Service Form Submission</h1>
          <p style="margin:8px 0 0 0;font-size:14px;opacity:0.9;">Submitted at ${escapeHtml(submittedDate)}</p>
        </div>
        <div style="padding:24px;">
          <h2 style="margin:0 0 16px 0;font-size:16px;color:#191A05;">Contact information</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tbody>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#191A05;">${escapeHtml(c.name)}</td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#191A05;">${escapeHtml(c.phone)}</td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#191A05;">${escapeHtml(c.email)}</td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;">Preferred date</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#191A05;">${escapeHtml(c.preferredDate || "—")}</td></tr>
            </tbody>
          </table>

          <h2 style="margin:28px 0 16px 0;font-size:16px;color:#191A05;">Selected services & details</h2>
          ${servicesHtml}
        </div>
        <div style="padding:12px 24px;background:#f9f9f9;font-size:12px;color:#888;">
          This email was sent from the Bulk Brothers service form.
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildThankYouHtml(name: string): string {
  const n = escapeHtml(name || "there");
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f5f5f5;padding:20px;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <h2 style="margin:0 0 16px 0;color:#191A05;">Dear ${n},</h2>
        <p style="margin:0 0 16px 0;color:#333;line-height:1.6;">Thank you for submitting your service request. We have received your details and will get back to you as soon as possible with a quote.</p>
        <p style="margin:0 0 16px 0;color:#333;line-height:1.6;">If you have any questions in the meantime, feel free to reach out.</p>
        <p style="margin:24px 0 0 0;color:#333;">Best regards,<br><strong>BULK BROTHERS</strong></p>
      </div>
    </body>
    </html>
  `;
}

function validatePayload(body: unknown): body is ServiceFormPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  if (!Array.isArray(b.selectedServices) || b.selectedServices.length === 0)
    return false;
  if (!b.contact || typeof b.contact !== "object") return false;
  const contact = b.contact as Record<string, unknown>;
  if (
    typeof contact.name !== "string" ||
    typeof contact.email !== "string" ||
    typeof contact.phone !== "string"
  )
    return false;
  if (typeof contact.preferredDate !== "string") return false;
  if (!b.detailFormData || typeof b.detailFormData !== "object") return false;
  return true;
}

async function parseRequestPayload(
  request: NextRequest
): Promise<{
  payload: ServiceFormPayload;
  attachments: { filename: string; content: Buffer; cid: string }[];
  cidsByService: Record<string, string[]>;
}> {
  const contentType = request.headers.get("content-type") ?? "";
  const isMultipart = contentType.includes("multipart/form-data");

  if (isMultipart) {
    const formData = await request.formData();
    const payloadStr = formData.get("payload");
    if (typeof payloadStr !== "string") {
      throw new Error("Missing payload");
    }
    const payload = JSON.parse(payloadStr) as ServiceFormPayload;
    if (!validatePayload(payload)) {
      throw new Error("Invalid payload");
    }
    const photoFileOrder = payload.photoFileOrder ?? [];
    const photoEntries = formData.getAll("photos") as Blob[];
    const files = photoEntries.filter((e): e is Blob => e instanceof Blob);
    if (files.length !== photoFileOrder.length) {
      throw new Error("Photo count does not match order");
    }
    const cidsByService: Record<string, string[]> = {};
    const attachments: { filename: string; content: Buffer; cid: string }[] = [];
    for (let i = 0; i < files.length; i++) {
      const cid = `img${i}`;
      const buf = Buffer.from(await (files[i] as Blob).arrayBuffer());
      const name = (files[i] as File).name ?? `photo-${i}`;
      attachments.push({ filename: name, content: buf, cid });
      const sid = photoFileOrder[i];
      if (sid) {
        if (!cidsByService[sid]) cidsByService[sid] = [];
        cidsByService[sid].push(cid);
      }
    }
    return { payload, attachments, cidsByService };
  }

  const body = await request.json();
  if (!validatePayload(body)) {
    throw new Error("Invalid form data");
  }
  return {
    payload: body as ServiceFormPayload,
    attachments: [],
    cidsByService: {},
  };
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      request.headers.get("x-client-ip") ||
      "unknown";

    if (!checkRateLimit(ip, 3, 3600000)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { payload, attachments, cidsByService } =
      await parseRequestPayload(request);

    const email = payload.contact.email?.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Valid email is required." },
        { status: 400 }
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

    const htmlToYou = buildEmailHtml(payload, cidsByService);
    const mailOptionToYou = {
      from: "BULK BROTHERS <Info@bulkbrothersmove.com>",
      replyTo: email,
      to: "Info@bulkbrothersmove.com, developer@innovativemojo.com, projectlead@innovativemojo.com, donte.bulkbros@gmail.com",
      subject: `Service Form: ${payload.contact.name || "New submission"} – ${payload.selectedServices.map((s) => SERVICE_LABELS[s] ?? s).join(", ")}`,
      html: htmlToYou,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    const mailOptionToUser = {
      from: "BULK BROTHERS <Info@bulkbrothersmove.com>",
      to: email,
      subject: "We received your service request – Bulk Brothers",
      html: buildThankYouHtml(payload.contact.name),
    };

    await transporter.sendMail(mailOptionToYou);
    await transporter.sendMail(mailOptionToUser);

    return NextResponse.json(
      { message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Service form email error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error";
    const status =
      message.includes("Invalid") || message.includes("Missing")
        ? 400
        : 500;
    return NextResponse.json(
      {
        message: status === 400 ? message : "Failed to send email.",
        error: status === 500 ? message : undefined,
      },
      { status }
    );
  }
}
