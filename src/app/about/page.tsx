import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind ADR Consultancy. Built by a builder, not a salesperson -- hands-on AI expertise across strategy, development, automation, and training.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
