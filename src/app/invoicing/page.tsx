import type { Metadata } from "next";
import { InvoicingDashboard } from "./invoicing-dashboard";

export const metadata: Metadata = {
  title: "Invoicing | ADR Consultancy",
  description: "Send invoices and manage payments via Stripe.",
};

export default function InvoicingPage() {
  return <InvoicingDashboard />;
}
