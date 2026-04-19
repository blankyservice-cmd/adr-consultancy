import type { Metadata } from "next";
import { ProposalBuilder } from "./proposal-builder";

export const metadata: Metadata = {
  title: "Proposal Builder | ADR Consultancy",
  description:
    "Generate a professional AI project proposal and statement of work.",
};

export default function ProposalPage() {
  return <ProposalBuilder />;
}
