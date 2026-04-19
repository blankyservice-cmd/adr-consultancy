import type { Metadata } from "next";
import { PortfolioGrid } from "./portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio | ADR Consultancy",
  description:
    "Explore our portfolio of AI-powered software, automation suites, marketing systems, and brand work -- all production, all shipped.",
};

export default function PortfolioPage() {
  return <PortfolioGrid />;
}
