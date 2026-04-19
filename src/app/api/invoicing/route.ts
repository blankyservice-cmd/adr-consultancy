import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientName, clientEmail, items, total } = body;

    if (!clientName || !clientEmail || !items?.length) {
      return NextResponse.json(
        { error: "Client details and line items are required." },
        { status: 400 }
      );
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json(
        { error: "Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local." },
        { status: 503 }
      );
    }

    // Create Stripe invoice
    // 1. Find or create customer
    const customerRes = await fetch("https://api.stripe.com/v1/customers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: clientName,
        email: clientEmail,
      }),
    });
    const customer = await customerRes.json();

    if (customer.error) {
      throw new Error(customer.error.message);
    }

    // 2. Create invoice items
    for (const item of items) {
      const itemRes = await fetch("https://api.stripe.com/v1/invoiceitems", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${stripeKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          customer: customer.id,
          description: item.description,
          quantity: String(item.quantity),
          unit_amount: String(Math.round(item.unitPrice * 100)), // cents
          currency: "cad",
        }),
      });
      const invoiceItem = await itemRes.json();
      if (invoiceItem.error) {
        throw new Error(invoiceItem.error.message);
      }
    }

    // 3. Create and send invoice
    const invoiceRes = await fetch("https://api.stripe.com/v1/invoices", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        customer: customer.id,
        collection_method: "send_invoice",
        days_until_due: "30",
        auto_advance: "true",
      }),
    });
    const invoice = await invoiceRes.json();

    if (invoice.error) {
      throw new Error(invoice.error.message);
    }

    // 4. Finalize and send
    const finalizeRes = await fetch(
      `https://api.stripe.com/v1/invoices/${invoice.id}/finalize`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${stripeKey}` },
      }
    );
    const finalizedInvoice = await finalizeRes.json();

    await fetch(`https://api.stripe.com/v1/invoices/${invoice.id}/send`, {
      method: "POST",
      headers: { Authorization: `Bearer ${stripeKey}` },
    });

    return NextResponse.json({
      success: true,
      invoiceId: finalizedInvoice.id,
      invoiceUrl: finalizedInvoice.hosted_invoice_url,
      total,
    });
  } catch (err) {
    console.error("Invoice error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create invoice." },
      { status: 500 }
    );
  }
}
