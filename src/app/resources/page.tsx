import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LeadMagnet } from "./lead-magnet";

export const metadata: Metadata = {
  title: "Free AI Readiness Checklist",
  description:
    "Download our free AI Readiness Checklist -- 20 questions to evaluate whether your business is ready to benefit from artificial intelligence.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <LeadMagnet />
      </main>
      <Footer />
    </>
  );
}
