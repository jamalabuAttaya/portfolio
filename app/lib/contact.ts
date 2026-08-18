export const CONTACT_LIMITS = {
  requestBytes: 12_000,
  name: 80,
  email: 254,
  message: 4_000,
  minimumMessage: 10,
  minimumCompletionMs: 2_500,
} as const;

export type ContactPayload = { name: string; email: string; message: string };

type ParseResult =
  | { ok: true; data: ContactPayload; spam: boolean }
  | { ok: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseContactPayload(value: unknown, now = Date.now()): ParseResult {
  if (!isRecord(value)) return { ok: false, error: "Invalid request body." };
  const { name, email, message, company, startedAt } = value;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return { ok: false, error: "Name, email, and message are required." };
  }

  const normalizedName = name.replace(/[\r\n\t]+/g, " ").trim();
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedMessage = message.trim();
  if (!normalizedName || normalizedName.length > CONTACT_LIMITS.name) {
    return { ok: false, error: "Please provide a valid name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) || normalizedEmail.length > CONTACT_LIMITS.email) {
    return { ok: false, error: "Please provide a valid email address." };
  }
  if (normalizedMessage.length < CONTACT_LIMITS.minimumMessage || normalizedMessage.length > CONTACT_LIMITS.message) {
    return { ok: false, error: "Message must contain between 10 and 4,000 characters." };
  }

  const honeypotFilled = typeof company === "string" && company.trim().length > 0;
  const completedTooQuickly =
    typeof startedAt === "number" && Number.isFinite(startedAt) && now - startedAt >= 0 && now - startedAt < CONTACT_LIMITS.minimumCompletionMs;

  return {
    ok: true,
    data: { name: normalizedName, email: normalizedEmail, message: normalizedMessage },
    spam: honeypotFilled || completedTooQuickly,
  };
}

export function escapeHtml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
  return value.replace(/[&<>'"]/g, (character) => entities[character]);
}

export function buildContactEmailHtml(payload: ContactPayload) {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const message = escapeHtml(payload.message);
  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:32px;color:#101827"><h2>New portfolio message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><div style="padding:20px;background:#f4f7fb;border-radius:10px;white-space:pre-wrap">${message}</div></div>`;
}

export function buildContactEmailText(payload: ContactPayload) {
  return `New portfolio message\nName: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`;
}
