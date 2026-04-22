import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore ADR Consultancy's 7 AI service pillars and flexible pricing tiers. From strategy consulting to full managed services -- find the right fit for your business.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ServicesContent />
      </main>
      <Footer />
    </>
  );
}
