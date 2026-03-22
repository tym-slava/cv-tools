import { NextResponse } from "next/server";

import { isValidEmail } from "@/utils/validation";

export async function POST(request: Request) {
  let body: { name?: string; email?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email } = body;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SUBSCRIBE_URL;

  if (!scriptUrl) {
    return NextResponse.json({ error: "Service not available" }, { status: 500 });
  }

  let response: Response;

  try {
    response = await fetch(scriptUrl, {
      method: "POST",
      // Google Apps Script Web Apps redirect (HTTP 302) before responding.
      // "follow" is required so Node.js follows the redirect automatically.
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
  } catch {
    return NextResponse.json({ error: "Failed to reach script" }, { status: 500 });
  }

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }

  const data: unknown = await response.json();

  if (
    typeof data === "object" &&
    data !== null &&
    (data as { result?: string }).result === "error"
  ) {
    return NextResponse.json({ error: "Script error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
