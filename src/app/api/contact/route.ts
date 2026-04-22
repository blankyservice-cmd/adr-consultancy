import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

// Simple in-memory rate limiter (resets on server restart)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, message, source } = body;

    // Input length validation
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid input." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum length." },
        { status: 400 }
      );
    }

    if (company && (typeof company !== "string" || company.length > 200)) {
      return NextResponse.json(
        { error: "Company name exceeds maximum length." },
        { status: 400 }
      );
    }

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const lead = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 254),
      company: company?.trim().slice(0, 200) || null,
      message: message.trim().slice(0, 5000),
      source: source || "contact-form",
      created_at: new Date().toISOString(),
    };

    // 1. Store in Supabase (if configured)
    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error: dbError } = await supabase
        .from("leads")
        .insert([lead]);

      if (dbError) {
        console.error("Supabase insert error:", dbError);
      }
    }

    // 2. Send email notification via Resend (if configured)
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFICATION_EMAIL;
    if (resendKey && notifyEmail) {
      // Escape HTML to prevent XSS in email
      const esc = (s: string) =>
        s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ADR Consultancy <info@adrconsultancy.ca>",
            to: [notifyEmail],
            subject: `New Lead: ${esc(lead.name)} from ${esc(lead.company || "Unknown Company")}`,
            html: `
              <h2>New Lead from ADR Consultancy Website</h2>
              <p><strong>Name:</strong> ${esc(lead.name)}</p>
              <p><strong>Email:</strong> ${esc(lead.email)}</p>
              <p><strong>Company:</strong> ${esc(lead.company || "Not provided")}</p>
              <p><strong>Source:</strong> ${esc(lead.source)}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="border-left: 3px solid #D4A574; padding-left: 12px; color: #555;">
                ${esc(lead.message)}
              </blockquote>
              <p style="color: #999; font-size: 12px;">Received at ${lead.created_at}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
      }
    }

    // 3. Trigger n8n webhook (if configured)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (webhookError) {
        console.error("n8n webhook error:", webhookError);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
