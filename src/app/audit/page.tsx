import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuditForm } from "./audit-form";

export const metadata: Metadata = {
  title: "Free AI Readiness Assessment | ADR Consultancy",
  description:
    "Take our AI Readiness Assessment to discover where AI can create the most value in your business. Free, no commitment.",
};

export default function AuditPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <AuditForm />
      </main>
      <Footer />
    </>
  );
}
