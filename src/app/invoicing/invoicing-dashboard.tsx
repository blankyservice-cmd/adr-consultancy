"use client";

import { useState } from "react";
import {
  DollarSign,
  Send,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  Plus,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export function InvoicingDashboard() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<InvoiceLineItem[]>([
    { id: generateId(), description: "", quantity: 1, unitPrice: 0 },
  ]);

  const stripeConfigured = false; // Will be true when STRIPE_SECRET_KEY is set

  function addItem() {
    setItems((prev) => [
      ...prev,
      { id: generateId(), description: "", quantity: 1, unitPrice: 0 },
    ]);
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateItem(id: string, field: keyof InvoiceLineItem, value: string | number) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tax = 0; // HST/GST can be added later
  const total = subtotal + tax;

  async function handleSendInvoice() {
    if (!clientName || !clientEmail || items.every((i) => !i.description.trim())) {
      setErrorMsg("Please fill in client details and at least one line item.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/invoicing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          dueDate,
          notes,
          items: items.filter((i) => i.description.trim()),
          subtotal,
          tax,
          total,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send invoice.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue";
  const labelClass = "block text-sm font-medium text-navy mb-1.5";

  return (
    <div className="min-h-screen bg-light-bg">
      <nav className="bg-white border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="ADR Consultancy" width={180} height={40} />
          </Link>
          <span className="text-xs text-charcoal/40 hidden sm:block">Invoicing</span>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-navy transition-colors"
          >
            <ArrowLeft size={14} />
          </Link>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em]">
              Create Invoice
            </h1>
            <p className="text-sm text-charcoal/50 mt-1">
              Send a professional invoice to your client via Stripe.
            </p>
          </div>
        </div>

        {!stripeConfigured && (
          <div className="bg-gold/5 border border-gold/20 rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertCircle size={18} className="text-gold mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-navy">Stripe Not Connected</p>
              <p className="text-xs text-charcoal/50 mt-1">
                Add your <code className="bg-white px-1.5 py-0.5 rounded text-xs">STRIPE_SECRET_KEY</code> and{" "}
                <code className="bg-white px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>{" "}
                to <code className="bg-white px-1.5 py-0.5 rounded text-xs">.env.local</code> to
                enable live invoicing. The form below will show you the invoice structure.
              </p>
            </div>
          </div>
        )}

        {status === "success" ? (
          <div className="bg-white rounded-2xl border border-border p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-navy mb-2">Invoice Sent</h2>
            <p className="text-sm text-charcoal/60 mb-6">
              An invoice for ${total.toLocaleString()} has been sent to {clientEmail}.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setClientName("");
                setClientEmail("");
                setDueDate("");
                setNotes("");
                setItems([{ id: generateId(), description: "", quantity: 1, unitPrice: 0 }]);
              }}
              className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
            >
              Create Another Invoice
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Client Details */}
            <section className="bg-white rounded-2xl border border-border p-8">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard size={18} className="text-navy" />
                <h2 className="text-base font-semibold text-navy">Client Details</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className={labelClass}>Client Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Client Email</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Due Date</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </section>

            {/* Line Items */}
            <section className="bg-white rounded-2xl border border-border p-8">
              <div className="flex items-center gap-2 mb-5">
                <DollarSign size={18} className="text-navy" />
                <h2 className="text-base font-semibold text-navy">Line Items</h2>
              </div>

              <div className="space-y-3">
                {/* Header */}
                <div className="hidden sm:grid grid-cols-[1fr_80px_100px_100px_40px] gap-2 text-xs font-medium text-charcoal/40 px-1">
                  <span>Description</span>
                  <span className="text-right">Qty</span>
                  <span className="text-right">Unit Price</span>
                  <span className="text-right">Amount</span>
                  <span />
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_80px_100px_100px_40px] gap-2 items-start"
                  >
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateItem(item.id, "description", e.target.value)}
                      placeholder="Service description"
                      className={inputClass}
                    />
                    <input
                      type="number"
                      value={item.quantity || ""}
                      onChange={(e) =>
                        updateItem(item.id, "quantity", parseInt(e.target.value) || 0)
                      }
                      placeholder="1"
                      className={inputClass + " text-right"}
                    />
                    <input
                      type="number"
                      value={item.unitPrice || ""}
                      onChange={(e) =>
                        updateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)
                      }
                      placeholder="0.00"
                      className={inputClass + " text-right"}
                    />
                    <div className="py-3 text-sm font-medium text-navy text-right">
                      ${(item.quantity * item.unitPrice).toLocaleString()}
                    </div>
                    {items.length > 1 && (
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-charcoal/30 hover:text-red-500 transition-colors p-2 mt-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={addItem}
                className="inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-dark transition-colors mt-4"
              >
                <Plus size={14} /> Add line item
              </button>

              {/* Totals */}
              <div className="mt-6 pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/50">Subtotal</span>
                  <span className="font-medium text-navy">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/50">Tax</span>
                  <span className="text-charcoal/40">${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base pt-2 border-t border-border">
                  <span className="font-semibold text-navy">Total</span>
                  <span className="font-bold text-navy">${total.toLocaleString()}</span>
                </div>
              </div>
            </section>

            {/* Notes */}
            <section className="bg-white rounded-2xl border border-border p-8">
              <label className={labelClass}>Notes (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Payment instructions, project reference, or additional details..."
                className={inputClass + " resize-none"}
              />
            </section>

            {/* Error */}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-red-500 shrink-0" />
                <p className="text-sm text-red-600">{errorMsg}</p>
              </div>
            )}

            {/* Send Button */}
            <button
              onClick={handleSendInvoice}
              disabled={status === "loading" || !stripeConfigured}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending Invoice...
                </>
              ) : (
                <>
                  <Send size={18} />
                  {stripeConfigured ? "Send Invoice" : "Connect Stripe to Send"}
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
