import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProposalBuilder } from "./proposal-builder";

export const metadata: Metadata = {
  title: "Proposal Builder | ADR Consultancy",
  description:
    "Generate a professional AI project proposal and statement of work.",
  robots: { index: false, follow: false },
};

export default function ProposalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ProposalBuilder />
      </main>
      <Footer />
    </>
  );
}
