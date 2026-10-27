// Temporary preview-only check of the Node.js runtime version. Not for production.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    node: process.version,
    openssl: process.versions.openssl,
    region: process.env.VERCEL_REGION ?? null,
  });
}
