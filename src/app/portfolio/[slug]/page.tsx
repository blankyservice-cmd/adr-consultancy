import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyData } from "@/lib/case-studies";
import { CaseStudyDetail } from "./case-study-detail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyData(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | ADR Consultancy`,
    description: cs.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyData(slug);
  if (!cs) notFound();

  return <CaseStudyDetail slug={slug} />;
}
