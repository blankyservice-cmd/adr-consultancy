"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Building2,
  Wrench,
  Target,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

const industries = [
  "Real Estate / Property Management",
  "Professional Services",
  "Retail / E-commerce",
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Logistics / Transportation",
  "Technology / SaaS",
  "Construction",
  "Education",
  "Hospitality",
  "Other",
];

const teamSizes = [
  "Just me (solopreneur)",
  "2-5 employees",
  "6-15 employees",
  "16-50 employees",
  "51-200 employees",
  "200+ employees",
];

const currentTools = [
  "Spreadsheets (Excel / Google Sheets)",
  "CRM (HubSpot, Salesforce, etc.)",
  "Project Management (Asana, Monday, etc.)",
  "Accounting Software (QuickBooks, Xero, etc.)",
  "Email Marketing (Mailchimp, etc.)",
  "Social Media Tools",
  "Custom Internal Software",
  "AI Tools (ChatGPT, Copilot, etc.)",
  "Automation (Zapier, Make, etc.)",
  "None of the above",
];

const painPoints = [
  "Too much manual data entry",
  "Slow or inconsistent customer response times",
  "Difficulty tracking leads and sales pipeline",
  "Time-consuming reporting and analytics",
  "Inconsistent marketing and content creation",
  "Employee onboarding and training takes too long",
  "Compliance and documentation overhead",
  "Difficulty scaling without adding headcount",
  "Poor visibility into business performance",
  "Communication gaps between teams or departments",
];

const interestAreas = [
  "AI-powered chatbots or virtual assistants",
  "Workflow automation (reduce manual tasks)",
  "Marketing automation (content, email, social)",
  "Sales pipeline automation and lead scoring",
  "Custom dashboards and analytics",
  "Document processing and generation",
  "Customer service automation",
  "Internal knowledge base or AI search",
  "Full custom software / SaaS platform",
  "Not sure -- I want expert guidance",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within 1-2 months",
  "Within 3-6 months",
  "6+ months (planning ahead)",
  "Just exploring options",
];

export function AuditForm() {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    industryOther: "",
    teamSize: "",
    currentTools: [] as string[],
    painPoints: [] as string[],
    painDescription: "",
    interestAreas: [] as string[],
    budget: "",
    timeline: "",
    additionalInfo: "",
  });

  function updateField(field: string, value: string | string[]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleArrayField(field: "currentTools" | "painPoints" | "interestAreas", value: string) {
    setFormData((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  }

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return !!(formData.name && formData.email && formData.industry && formData.teamSize);
      case 2:
        return formData.painPoints.length > 0;
      case 3:
        return formData.interestAreas.length > 0;
      case 4:
        return !!(formData.budget && formData.timeline);
      default:
        return false;
    }
  }

  async function handleSubmit() {
    setStatus("loading");
    setErrorMsg("");

    const message = [
      `Industry: ${formData.industry === "Other" ? formData.industryOther : formData.industry}`,
      `Team Size: ${formData.teamSize}`,
      `Phone: ${formData.phone || "Not provided"}`,
      "",
      `Current Tools: ${formData.currentTools.join(", ") || "None selected"}`,
      "",
      `Pain Points: ${formData.painPoints.join(", ")}`,
      formData.painDescription ? `Details: ${formData.painDescription}` : "",
      "",
      `Interest Areas: ${formData.interestAreas.join(", ")}`,
      "",
      `Budget: ${formData.budget}`,
      `Timeline: ${formData.timeline}`,
      formData.additionalInfo ? `\nAdditional Info: ${formData.additionalInfo}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message,
          source: "ai-readiness-audit",
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const stepIcons = [
    { icon: Building2, label: "Your Business" },
    { icon: Target, label: "Pain Points" },
    { icon: Wrench, label: "Interests" },
    { icon: DollarSign, label: "Budget & Timeline" },
  ];

  if (status === "success") {
    return (
      <div className="min-h-[80vh] bg-light-bg flex items-center">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy mb-4">
              Assessment Submitted
            </h1>
            <p className="text-charcoal/70 leading-[1.7] mb-2">
              Thank you, {formData.name}. We have received your AI Readiness Assessment.
            </p>
            <p className="text-charcoal/60 leading-[1.7] mb-8">
              We will review your responses and send you a personalized AI opportunity report
              within 48 hours. If we identify quick wins, we will highlight those first.
            </p>
            <div className="bg-white rounded-xl p-6 border border-border mb-8">
              <h3 className="text-sm font-semibold text-navy mb-3">What Happens Next</h3>
              <ol className="space-y-2 text-sm text-charcoal/65 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-px">1.</span>
                  We analyze your responses and research your industry
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-px">2.</span>
                  You receive a personalized AI opportunity report (within 48 hours)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-px">3.</span>
                  We schedule a free 30-minute call to walk through the findings
                </li>
              </ol>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">
            Free Assessment
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-navy tracking-[-0.03em]">
            AI Readiness Assessment
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-lg mx-auto">
            Answer a few questions about your business and we will identify where AI
            can create the most value. Takes about 3 minutes.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
          {stepIcons.map((s, i) => {
            const stepNum = (i + 1) as Step;
            const Icon = s.icon;
            const isActive = step === stepNum;
            const isComplete = step > stepNum;
            return (
              <div key={i} className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-navy text-white"
                        : isComplete
                        ? "bg-gold text-navy"
                        : "bg-white text-charcoal/30 border border-border"
                    }`}
                  >
                    {isComplete ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-medium hidden sm:block ${
                      isActive ? "text-navy" : isComplete ? "text-gold" : "text-charcoal/30"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 3 && (
                  <div
                    className={`w-8 sm:w-12 h-px transition-colors duration-300 ${
                      isComplete ? "bg-gold" : "bg-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Form Card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-border p-8 sm:p-10"
        >
          {/* Step 1: Business Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-navy mb-1">About Your Business</h2>
                <p className="text-sm text-charcoal/50">
                  Help us understand your business so we can tailor our recommendations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@company.com"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    placeholder="Your Company"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="(416) 555-0123"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Industry *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {industries.map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => updateField("industry", ind)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-all text-left ${
                        formData.industry === ind
                          ? "border-navy bg-navy/5 text-navy"
                          : "border-border text-charcoal/60 hover:border-charcoal/30"
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
                {formData.industry === "Other" && (
                  <input
                    type="text"
                    value={formData.industryOther}
                    onChange={(e) => updateField("industryOther", e.target.value)}
                    placeholder="Please specify your industry"
                    className="mt-3 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Team Size *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {teamSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => updateField("teamSize", size)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-all text-left ${
                        formData.teamSize === size
                          ? "border-navy bg-navy/5 text-navy"
                          : "border-border text-charcoal/60 hover:border-charcoal/30"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Pain Points */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-navy mb-1">Current Challenges</h2>
                <p className="text-sm text-charcoal/50">
                  Select the pain points that resonate most with your business. Choose all that apply.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  What tools do you currently use?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentTools.map((tool) => (
                    <button
                      key={tool}
                      type="button"
                      onClick={() => toggleArrayField("currentTools", tool)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-medium border transition-all text-left ${
                        formData.currentTools.includes(tool)
                          ? "border-navy bg-navy/5 text-navy"
                          : "border-border text-charcoal/60 hover:border-charcoal/30"
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Biggest pain points *
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {painPoints.map((pain) => (
                    <button
                      key={pain}
                      type="button"
                      onClick={() => toggleArrayField("painPoints", pain)}
                      className={`px-4 py-3 rounded-lg text-sm border transition-all text-left ${
                        formData.painPoints.includes(pain)
                          ? "border-gold bg-gold/5 text-navy font-medium"
                          : "border-border text-charcoal/60 hover:border-charcoal/30"
                      }`}
                    >
                      {pain}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="painDescription"
                  className="block text-sm font-medium text-navy mb-1.5"
                >
                  Describe your biggest bottleneck (optional)
                </label>
                <textarea
                  id="painDescription"
                  value={formData.painDescription}
                  onChange={(e) => updateField("painDescription", e.target.value)}
                  rows={3}
                  placeholder="What process takes the most time? What keeps you up at night?"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Interest Areas */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-navy mb-1">AI Opportunities</h2>
                <p className="text-sm text-charcoal/50">
                  Which AI and automation capabilities interest you most? Select all that apply.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {interestAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => toggleArrayField("interestAreas", area)}
                    className={`px-4 py-3 rounded-lg text-sm border transition-all text-left ${
                      formData.interestAreas.includes(area)
                        ? "border-gold bg-gold/5 text-navy font-medium"
                        : "border-border text-charcoal/60 hover:border-charcoal/30"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget & Timeline */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-navy mb-1">Budget and Timeline</h2>
                <p className="text-sm text-charcoal/50">
                  This helps us recommend the right scope. No commitment required.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  <DollarSign size={14} className="inline mr-1" />
                  Investment range *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => updateField("budget", range)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-medium border transition-all text-left ${
                        formData.budget === range
                          ? "border-navy bg-navy/5 text-navy"
                          : "border-border text-charcoal/60 hover:border-charcoal/30"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  <Clock size={14} className="inline mr-1" />
                  Desired timeline *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timelines.map((tl) => (
                    <button
                      key={tl}
                      type="button"
                      onClick={() => updateField("timeline", tl)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-medium border transition-all text-left ${
                        formData.timeline === tl
                          ? "border-navy bg-navy/5 text-navy"
                          : "border-border text-charcoal/60 hover:border-charcoal/30"
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium text-navy mb-1.5"
                >
                  Anything else we should know? (optional)
                </label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => updateField("additionalInfo", e.target.value)}
                  rows={3}
                  placeholder="Links to your website, specific goals, previous AI experience, etc."
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{errorMsg}</p>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((step - 1) as Step)}
                className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-navy transition-colors"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-navy transition-colors"
              >
                <ArrowLeft size={16} />
                Home
              </Link>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep((step + 1) as Step)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-navy/90 hover:shadow-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || status === "loading"}
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-dark hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Assessment
                    <CheckCircle2 size={16} />
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>

        {/* Progress text */}
        <p className="text-center text-xs text-charcoal/30 mt-4">
          Step {step} of 4 -- Your information is kept confidential
        </p>
      </div>
    </div>
  );
}
