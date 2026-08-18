import { NextRequest, NextResponse } from "next/server";
import { CONTACT_LIMITS, buildContactEmailHtml, buildContactEmailText, parseContactPayload } from "@/app/lib/contact";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "jamalabuattaya@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  const headers = { "Cache-Control": "no-store, max-age=0" };
  try {
    if (!(request.headers.get("content-type") || "").toLowerCase().includes("application/json")) {
      return NextResponse.json({ error: "Content-Type must be application/json." }, { status: 415, headers });
    }

    const origin = request.headers.get("origin");
    const requestOrigin = new URL(request.url).origin;
    const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin : null;
    if (origin && origin !== requestOrigin && origin !== configuredOrigin) {
      return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403, headers });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (Number.isFinite(contentLength) && contentLength > CONTACT_LIMITS.requestBytes) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413, headers });
    }
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > CONTACT_LIMITS.requestBytes) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413, headers });
    }

    let body: unknown;
    try { body = JSON.parse(rawBody); }
    catch { return NextResponse.json({ error: "Request body must contain valid JSON." }, { status: 400, headers }); }

    const parsed = parseContactPayload(body);
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400, headers });
    if (parsed.spam) return NextResponse.json({ success: true }, { status: 200, headers });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact service is missing RESEND_API_KEY.");
      return NextResponse.json({ error: "Email service is temporarily unavailable. Please use the direct email link." }, { status: 503, headers });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: parsed.data.email,
        subject: `New portfolio message from ${parsed.data.name}`,
        html: buildContactEmailHtml(parsed.data),
        text: buildContactEmailText(parsed.data),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`Email provider returned ${response.status}.`);
      return NextResponse.json({ error: "Message could not be sent. Please try again or use direct email." }, { status: 502, headers });
    }
    return NextResponse.json({ success: true }, { status: 200, headers });
  } catch (error) {
    console.error(`Contact request failed: ${error instanceof Error ? error.name : "UnknownError"}.`);
    return NextResponse.json({ error: "An unexpected error occurred. Please use direct email if the issue continues." }, { status: 500, headers });
  }
}
