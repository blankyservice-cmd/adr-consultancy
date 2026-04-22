import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json(
      { error: "Admin access is not configured." },
      { status: 503 }
    );
  }

  const body = await request.json();
  const { password } = body;

  if (typeof password !== "string" || !password) {
    return NextResponse.json({ error: "Password required." }, { status: 400 });
  }

  // Constant-time comparison to prevent timing attacks
  const expected = Buffer.from(adminPassword, "utf-8");
  const received = Buffer.from(password, "utf-8");
  const match =
    expected.length === received.length &&
    crypto.timingSafeEqual(expected, received);

  if (!match) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  // Create a signed session token
  const secret = process.env.ADMIN_SESSION_SECRET || adminPassword;
  const token = crypto
    .createHmac("sha256", secret)
    .update(adminPassword + Date.now().toString().slice(0, -5)) // rotates roughly every ~30s window
    .digest("hex");

  const cookieStore = await cookies();
  cookieStore.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return NextResponse.json({ success: true });
}
