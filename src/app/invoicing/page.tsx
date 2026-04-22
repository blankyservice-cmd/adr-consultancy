import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InvoicingDashboard } from "./invoicing-dashboard";

export const metadata: Metadata = {
  title: "Invoicing | ADR Consultancy",
  description: "Send invoices and manage payments via Stripe.",
  robots: { index: false, follow: false },
};

export default function InvoicingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <InvoicingDashboard />
      </main>
      <Footer />
    </>
  );
}
