import type { Metadata } from "next";
import { Playbook } from "./playbook";

export const metadata: Metadata = {
  title: "Consultative Playbook | ADR Consultancy",
  description:
    "Internal reference for the ADR 6-phase consultative framework.",
};

export default function PlaybookPage() {
  return <Playbook />;
}
