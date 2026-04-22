import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Playbook } from "./playbook";

export const metadata: Metadata = {
  title: "Consultative Playbook | ADR Consultancy",
  description:
    "Internal reference for the ADR 6-phase consultative framework.",
  robots: { index: false, follow: false },
};

export default function PlaybookPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Playbook />
      </main>
      <Footer />
    </>
  );
}
