"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Stethoscope,
  ClipboardList,
  Hammer,
  GraduationCap,
  TrendingUp,
  ChevronDown,
  ArrowLeft,
  CheckSquare,
  AlertTriangle,
  Lightbulb,
  Clock,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PhaseData {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  duration: string;
  objective: string;
  activities: string[];
  deliverables: string[];
  tools: string[];
  pitfalls: string[];
  tips: string[];
  transitionCriteria: string;
}

const phases: PhaseData[] = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "Understand the business",
    icon: Search,
    duration: "Week 1",
    objective:
      "Develop a deep understanding of the client's business model, operations, pain points, and goals before proposing any solution.",
    activities: [
      "30-minute intake call: business model, revenue streams, team structure",
      "Process shadowing: watch them work, document manual steps and workarounds",
      "Data audit: systems inventory, data sources, disconnections, duplication",
      "Stakeholder mapping: who uses what, who decides what, who blocks what",
      "Competitive landscape review: what are peers doing with AI?",
    ],
    deliverables: [
      "Discovery Summary document (1-2 pages)",
      "Current state process map (visual)",
      "Stakeholder map with roles and influence",
      "Systems inventory spreadsheet",
    ],
    tools: [
      "AI Readiness Assessment form (/audit)",
      "Google Meet / Zoom for discovery calls",
      "Miro or FigJam for process mapping",
      "Google Sheets for systems inventory",
    ],
    pitfalls: [
      "Jumping to solutions before fully understanding the problem",
      "Only speaking to decision-makers, missing frontline user pain",
      "Taking the client's self-diagnosis at face value without verification",
      "Underestimating change resistance in the organization",
    ],
    tips: [
      "Ask 'show me how you do that today' instead of 'tell me'",
      "Look for the spreadsheet -- if there's a spreadsheet, there's an automation opportunity",
      "Document exact time spent on manual tasks (for ROI calculations later)",
      "Pay attention to what they DON'T say -- often the biggest pain is normalized",
    ],
    transitionCriteria:
      "You can articulate the client's top 3 pain points, their current tech stack, and who the key stakeholders are.",
  },
  {
    id: 2,
    title: "Diagnosis",
    subtitle: "Identify opportunities",
    icon: Stethoscope,
    duration: "Week 2",
    objective:
      "Analyze findings from Discovery to categorize every process as Keep Manual, AI-Assisted, or Fully Automate, then rank by ROI.",
    activities: [
      "Process classification: Keep Manual | AI-Assisted | Fully Automate",
      "ROI ranking: (hours saved x hourly cost) / implementation effort",
      "Technology assessment: what they have vs. what's needed",
      "Marketing and Sales audit: how they acquire and retain customers",
      "Quick wins vs. strategic builds identification",
      "Risk assessment: data privacy, compliance, integration complexity",
    ],
    deliverables: [
      "Opportunity Matrix (ranked by ROI and effort)",
      "Process classification document",
      "Technology gap analysis",
      "Quick wins list (things fixable in days, not weeks)",
    ],
    tools: [
      "Opportunity Matrix template (Google Sheets)",
      "ROI Calculator spreadsheet",
      "Process classification framework",
    ],
    pitfalls: [
      "Ranking by 'coolness' instead of business impact",
      "Ignoring integration complexity in effort estimates",
      "Overlooking training requirements in the ROI calculation",
      "Promising ROI numbers without sufficient data",
    ],
    tips: [
      "Start with the process that has the highest frequency AND highest manual effort",
      "Factor in error rates: manual processes with high error costs are gold mines",
      "Consider the 'domino effect' -- one automation can unlock three others",
      "Always have at least one quick win to build early momentum and trust",
    ],
    transitionCriteria:
      "You have a ranked list of opportunities with estimated ROI, and the client agrees with the prioritization.",
  },
  {
    id: 3,
    title: "Prescription",
    subtitle: "Recommend the path",
    icon: ClipboardList,
    duration: "Week 2-3",
    objective:
      "Present a clear roadmap with 3 horizons, budget breakdown, and expected outcomes. The client chooses -- you advise.",
    activities: [
      "Build 3-horizon roadmap: Now (days) | Next (weeks) | Later (months)",
      "Budget breakdown per initiative with expected ROI",
      "Recommended sequencing based on dependencies and quick wins",
      "Present 2-3 options (good / better / best) for scope",
      "Risk mitigation plan for top concerns",
      "Define success metrics for each initiative",
    ],
    deliverables: [
      "AI Roadmap document (3-5 pages)",
      "Budget breakdown with 3 tier options",
      "Proposal / SOW for approved scope (/proposal)",
      "Success metrics definition",
      "Risk mitigation plan",
    ],
    tools: [
      "Proposal Builder (/proposal)",
      "Roadmap template (PowerPoint or Google Slides)",
      "Pricing calculator",
    ],
    pitfalls: [
      "Presenting only one option -- always give choices",
      "Making the roadmap too long and ambitious for an SMB budget",
      "Not defining what 'success' looks like before starting",
      "Skipping the 'out of scope' section -- leads to scope creep",
    ],
    tips: [
      "Lead with the quick win -- show them a tangible result they can get in week 1",
      "Use their language, not yours. Say 'fewer data entry errors' not 'automated ETL pipeline'",
      "Price the 'best' option at the max you think they'll pay, then anchor with the 'good' option",
      "The client should feel like they chose the plan, not that it was imposed",
    ],
    transitionCriteria:
      "Client has signed the SOW, paid the deposit, and both parties agree on scope, timeline, and success metrics.",
  },
  {
    id: 4,
    title: "Build & Deploy",
    subtitle: "Execute the plan",
    icon: Hammer,
    duration: "Weeks 3-8+",
    objective:
      "Build the solution iteratively with weekly demos, built-in monitoring, and no surprises.",
    activities: [
      "Sprint planning: break scope into 1-2 week sprints",
      "Weekly demo calls: never let the client go more than 5 days without seeing progress",
      "Build on standardized stack: Next.js + Supabase + n8n",
      "Implement monitoring and error handling from day 1",
      "Security review: RLS, encryption, access control",
      "UAT (User Acceptance Testing) with real users before go-live",
    ],
    deliverables: [
      "Working software or automation (deployed)",
      "Admin documentation",
      "Error monitoring setup (n8n error handler pattern)",
      "UAT sign-off from client",
    ],
    tools: [
      "Next.js + TypeScript + Tailwind + shadcn/ui",
      "Supabase (PostgreSQL + Auth + Storage + RLS)",
      "n8n (workflow automation)",
      "OpenRouter (AI model access)",
      "Vercel (hosting)",
      "GitHub (version control)",
    ],
    pitfalls: [
      "Going dark for weeks then revealing a big build -- always demo weekly",
      "Building the perfect solution instead of the working solution",
      "Skipping error handling because 'we'll add it later'",
      "Not involving end users in UAT -- only showing managers",
    ],
    tips: [
      "Record every demo call -- it becomes free documentation",
      "Build the happy path first, then edge cases",
      "If a feature takes more than 2x the estimate, stop and re-scope with the client",
      "Deploy early, deploy often. A staging environment builds client confidence",
    ],
    transitionCriteria:
      "Solution is deployed, UAT is passed, and the client has confirmed it meets the agreed scope.",
  },
  {
    id: 5,
    title: "Adopt & Train",
    subtitle: "Drive real usage",
    icon: GraduationCap,
    duration: "Week of Launch",
    objective:
      "Ensure the team actually uses what was built. Adoption is where most AI projects fail -- this phase is non-negotiable.",
    activities: [
      "Hands-on training sessions with end users (not just managers)",
      "Create documentation and video walkthroughs",
      "Identify and train an AI champion inside the client org",
      "Define adoption metrics: usage rate, time saved, errors reduced",
      "Set up feedback channel for user issues",
      "30-day check-in schedule",
    ],
    deliverables: [
      "User training guide (with screenshots)",
      "Video walkthroughs (Loom recordings)",
      "AI Champion designation and training",
      "Adoption metrics dashboard or tracking sheet",
      "30-day support plan",
    ],
    tools: [
      "Loom for video walkthroughs",
      "Notion or Google Docs for documentation",
      "Google Analytics or custom tracking for usage metrics",
    ],
    pitfalls: [
      "Training only managers and expecting them to train their team",
      "Building documentation nobody reads -- make it visual and searchable",
      "Treating launch day as the finish line instead of the starting line",
      "Not having a feedback mechanism for early issues",
    ],
    tips: [
      "The AI champion should be a frontline user, not a manager",
      "Do the first training in-person if possible -- it dramatically increases adoption",
      "Create a 'cheat sheet' (1-pager) for the most common workflows",
      "Schedule the first check-in within 5 business days of launch -- not 30",
    ],
    transitionCriteria:
      "At least 70% of target users are actively using the system within 30 days of launch.",
  },
  {
    id: 6,
    title: "Optimize & Scale",
    subtitle: "Continuous improvement",
    icon: TrendingUp,
    duration: "Ongoing",
    objective:
      "Turn the project into a partnership. Monthly performance reviews, new opportunity identification, and expanding scope.",
    activities: [
      "Monthly performance reviews against success metrics",
      "Adoption check-ins with AI champion",
      "Identify new automation and AI opportunities (upsell naturally)",
      "Feature iterations based on user feedback",
      "Quarterly business review with stakeholders",
      "Update documentation as features evolve",
    ],
    deliverables: [
      "Monthly performance report",
      "Optimization recommendations",
      "Updated roadmap (quarterly)",
      "Feature iteration releases",
    ],
    tools: [
      "Performance dashboard (custom or Google Sheets)",
      "n8n monitoring for automation health",
      "Client feedback form or channel",
    ],
    pitfalls: [
      "Letting the relationship go cold after deployment",
      "Only reaching out when you want to upsell",
      "Not tracking actual ROI vs. projected ROI",
      "Ignoring small user complaints -- they compound",
    ],
    tips: [
      "Lead the monthly review with their wins, not your features",
      "Track cumulative hours saved and dollars saved -- it makes renewal conversations easy",
      "When you spot a new opportunity, frame it as 'based on what we're seeing in the data' not 'here's another thing we can sell you'",
      "This phase is where the recurring revenue lives -- invest in it",
    ],
    transitionCriteria:
      "Ongoing managed services agreement in place. Client treats you as their AI partner, not a vendor.",
  },
];

function PhaseCard({ phase }: { phase: PhaseData }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = phase.icon;

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-8 py-6 flex items-center gap-5 text-left hover:bg-light-bg/50 transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
          <Icon size={22} className="text-navy" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              Phase {phase.id}
            </span>
            <span className="text-xs text-charcoal/30">{phase.duration}</span>
          </div>
          <h3 className="text-lg font-semibold text-navy mt-0.5">{phase.title}</h3>
          <p className="text-sm text-charcoal/50">{phase.subtitle}</p>
        </div>
        <ChevronDown
          size={20}
          className={`text-charcoal/30 transition-transform duration-300 shrink-0 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2 space-y-6 border-t border-border">
              {/* Objective */}
              <div>
                <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  Objective
                </h4>
                <p className="text-sm text-charcoal/70 leading-[1.7]">{phase.objective}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Activities */}
                <div>
                  <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckSquare size={13} />
                    Activities
                  </h4>
                  <ul className="space-y-1.5">
                    {phase.activities.map((a, i) => (
                      <li key={i} className="text-sm text-charcoal/60 flex items-start gap-2">
                        <span className="text-gold mt-1 shrink-0">--</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText size={13} />
                    Deliverables
                  </h4>
                  <ul className="space-y-1.5">
                    {phase.deliverables.map((d, i) => (
                      <li key={i} className="text-sm text-charcoal/60 flex items-start gap-2">
                        <span className="text-gold mt-1 shrink-0">--</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock size={13} />
                  Tools & Resources
                </h4>
                <div className="flex flex-wrap gap-2">
                  {phase.tools.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-light-bg text-charcoal/60 border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pitfalls */}
                <div className="bg-red-50/50 rounded-xl p-5">
                  <h4 className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertTriangle size={13} />
                    Common Pitfalls
                  </h4>
                  <ul className="space-y-1.5">
                    {phase.pitfalls.map((p, i) => (
                      <li key={i} className="text-sm text-red-600/70 flex items-start gap-2">
                        <span className="mt-1 shrink-0">--</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div className="bg-gold/5 rounded-xl p-5">
                  <h4 className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Lightbulb size={13} />
                    Pro Tips
                  </h4>
                  <ul className="space-y-1.5">
                    {phase.tips.map((t, i) => (
                      <li key={i} className="text-sm text-charcoal/60 flex items-start gap-2">
                        <span className="text-gold mt-1 shrink-0">--</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Transition */}
              <div className="bg-navy/5 rounded-xl p-5">
                <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  Transition Criteria
                </h4>
                <p className="text-sm text-charcoal/70 leading-[1.7]">
                  {phase.transitionCriteria}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Playbook() {
  return (
    <div className="min-h-screen bg-light-bg">
      <nav className="bg-white border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="ADR Consultancy" width={180} height={40} />
          </Link>
          <span className="text-xs text-charcoal/40 hidden sm:block">Internal Playbook</span>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-navy transition-colors"
          >
            <ArrowLeft size={14} />
          </Link>
          <span className="text-xs font-semibold text-gold uppercase tracking-wider">
            Internal Reference
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em] mb-2">
          Consultative Playbook
        </h1>
        <p className="text-sm text-charcoal/50 mb-10 max-w-2xl">
          The ADR 6-phase consultative framework. Every engagement follows this structure.
          Click each phase to expand the full guide with activities, deliverables, pitfalls, and tips.
        </p>

        {/* Phase Flow Indicator */}
        <div className="flex items-center justify-between mb-10 px-4">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <div key={phase.id} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-medium text-navy hidden sm:block">
                    {phase.title}
                  </span>
                </div>
                {i < phases.length - 1 && (
                  <div className="w-6 sm:w-12 h-px bg-gold mx-1 sm:mx-2" />
                )}
              </div>
            );
          })}
        </div>

        {/* Phase Cards */}
        <div className="space-y-4">
          {phases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 bg-white rounded-xl border border-border p-6 text-center">
          <p className="text-sm text-charcoal/50">
            This playbook is a living document. Update it after every engagement with
            new learnings, templates, and patterns.
          </p>
          <p className="text-xs text-charcoal/30 mt-2">
            ADR Consultancy -- We consult first, build second.
          </p>
        </div>
      </div>
    </div>
  );
}
