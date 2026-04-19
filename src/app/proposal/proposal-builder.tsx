"use client";

import { useState, useRef } from "react";
import {
  FileText,
  Download,
  ArrowLeft,
  Building2,
  Calendar,
  DollarSign,
  CheckCircle2,
  Plus,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LineItem {
  id: string;
  description: string;
  hours: number;
  rate: number;
}

interface ProposalData {
  // Client info
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  // Project info
  projectTitle: string;
  projectType: string;
  summary: string;
  // Scope
  objectives: string[];
  deliverables: string[];
  outOfScope: string[];
  // Timeline
  startDate: string;
  endDate: string;
  milestones: { title: string; date: string }[];
  // Pricing
  pricingModel: "fixed" | "hourly" | "retainer";
  lineItems: LineItem[];
  // Terms
  paymentTerms: string;
  revisions: string;
  validUntil: string;
}

const projectTypes = [
  "AI Readiness Assessment",
  "Workflow Automation",
  "Custom Software / SaaS",
  "Marketing AI Setup",
  "Sales Enablement System",
  "AI Training & Adoption",
  "Full Digital Transformation",
];

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export function ProposalBuilder() {
  const printRef = useRef<HTMLDivElement>(null);
  const [showPreview, setShowPreview] = useState(false);

  const [data, setData] = useState<ProposalData>({
    clientName: "",
    clientCompany: "",
    clientEmail: "",
    projectTitle: "",
    projectType: "",
    summary: "",
    objectives: [""],
    deliverables: [""],
    outOfScope: [""],
    startDate: "",
    endDate: "",
    milestones: [{ title: "", date: "" }],
    pricingModel: "fixed",
    lineItems: [{ id: generateId(), description: "", hours: 0, rate: 150 }],
    paymentTerms: "50% upfront, 50% on completion",
    revisions: "2 rounds of revisions included",
    validUntil: "",
  });

  function updateField<K extends keyof ProposalData>(key: K, value: ProposalData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function updateArrayItem(field: "objectives" | "deliverables" | "outOfScope", index: number, value: string) {
    setData((prev) => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  }

  function addArrayItem(field: "objectives" | "deliverables" | "outOfScope") {
    setData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  }

  function removeArrayItem(field: "objectives" | "deliverables" | "outOfScope", index: number) {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  }

  function addMilestone() {
    setData((prev) => ({
      ...prev,
      milestones: [...prev.milestones, { title: "", date: "" }],
    }));
  }

  function removeMilestone(index: number) {
    setData((prev) => ({
      ...prev,
      milestones: prev.milestones.filter((_, i) => i !== index),
    }));
  }

  function updateMilestone(index: number, field: "title" | "date", value: string) {
    setData((prev) => {
      const milestones = [...prev.milestones];
      milestones[index] = { ...milestones[index], [field]: value };
      return { ...prev, milestones };
    });
  }

  function addLineItem() {
    setData((prev) => ({
      ...prev,
      lineItems: [...prev.lineItems, { id: generateId(), description: "", hours: 0, rate: 150 }],
    }));
  }

  function removeLineItem(id: string) {
    setData((prev) => ({
      ...prev,
      lineItems: prev.lineItems.filter((item) => item.id !== id),
    }));
  }

  function updateLineItem(id: string, field: keyof LineItem, value: string | number) {
    setData((prev) => ({
      ...prev,
      lineItems: prev.lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  }

  const totalAmount = data.lineItems.reduce(
    (sum, item) => sum + item.hours * item.rate,
    0
  );

  function handlePrint() {
    window.print();
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue";

  const labelClass = "block text-sm font-medium text-navy mb-1.5";

  if (showPreview) {
    return (
      <div className="min-h-screen bg-white">
        {/* Print-hidden toolbar */}
        <div className="print:hidden bg-light-bg border-b border-border sticky top-0 z-10">
          <div className="mx-auto max-w-4xl px-6 py-3 flex items-center justify-between">
            <button
              onClick={() => setShowPreview(false)}
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-navy transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Editor
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
            >
              <Download size={16} />
              Print / Save as PDF
            </button>
          </div>
        </div>

        {/* Printable Proposal */}
        <div ref={printRef} className="mx-auto max-w-4xl px-8 py-12 print:px-0 print:py-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-12 pb-8 border-b border-border">
            <div>
              <Image src="/logo.svg" alt="ADR Consultancy" width={200} height={44} className="mb-4" />
              <p className="text-xs text-charcoal/40">AI Strategy | Software | Automation</p>
            </div>
            <div className="text-right text-sm text-charcoal/60">
              <p className="font-semibold text-navy">Proposal</p>
              <p>{new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>
              {data.validUntil && <p className="text-xs mt-1">Valid until: {data.validUntil}</p>}
            </div>
          </div>

          {/* Client & Project */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider mb-2">
                Prepared For
              </h3>
              <p className="font-semibold text-navy">{data.clientName || "Client Name"}</p>
              <p className="text-sm text-charcoal/60">{data.clientCompany}</p>
              <p className="text-sm text-charcoal/60">{data.clientEmail}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider mb-2">
                Prepared By
              </h3>
              <p className="font-semibold text-navy">ADR Consultancy</p>
              <p className="text-sm text-charcoal/60">info@adrconsultancy.ca</p>
              <p className="text-sm text-charcoal/60">adrconsultancy.ca</p>
            </div>
          </div>

          {/* Project Title */}
          <div className="mb-10">
            <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em] mb-3">
              {data.projectTitle || "Project Proposal"}
            </h1>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold-dark border border-gold/20">
              {data.projectType || "AI Project"}
            </span>
          </div>

          {/* Summary */}
          {data.summary && (
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
                Executive Summary
              </h2>
              <p className="text-sm text-charcoal/70 leading-[1.8] whitespace-pre-line">
                {data.summary}
              </p>
            </div>
          )}

          {/* Objectives */}
          {data.objectives.some((o) => o.trim()) && (
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
                Objectives
              </h2>
              <ul className="space-y-2">
                {data.objectives.filter((o) => o.trim()).map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deliverables */}
          {data.deliverables.some((d) => d.trim()) && (
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
                Deliverables
              </h2>
              <ul className="space-y-2">
                {data.deliverables.filter((d) => d.trim()).map((del, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <span className="text-gold font-semibold mt-px">{i + 1}.</span>
                    {del}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Out of Scope */}
          {data.outOfScope.some((o) => o.trim()) && (
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
                Out of Scope
              </h2>
              <ul className="space-y-1">
                {data.outOfScope.filter((o) => o.trim()).map((item, i) => (
                  <li key={i} className="text-sm text-charcoal/50 flex items-start gap-2">
                    <span className="mt-px">--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Timeline */}
          {(data.startDate || data.milestones.some((m) => m.title.trim())) && (
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
                Timeline
              </h2>
              {data.startDate && data.endDate && (
                <p className="text-sm text-charcoal/60 mb-4">
                  {data.startDate} -- {data.endDate}
                </p>
              )}
              {data.milestones.some((m) => m.title.trim()) && (
                <div className="space-y-3">
                  {data.milestones.filter((m) => m.title.trim()).map((ms, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm">
                      <span className="text-charcoal/40 w-24 shrink-0">{ms.date}</span>
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      <span className="text-charcoal/70">{ms.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Pricing */}
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
              Investment
            </h2>
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-light-bg">
                    <th className="text-left px-4 py-3 font-medium text-navy">Description</th>
                    <th className="text-right px-4 py-3 font-medium text-navy w-20">Hours</th>
                    <th className="text-right px-4 py-3 font-medium text-navy w-24">Rate</th>
                    <th className="text-right px-4 py-3 font-medium text-navy w-28">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.lineItems.filter((item) => item.description.trim()).map((item) => (
                    <tr key={item.id} className="border-t border-border">
                      <td className="px-4 py-3 text-charcoal/70">{item.description}</td>
                      <td className="px-4 py-3 text-right text-charcoal/60">{item.hours}</td>
                      <td className="px-4 py-3 text-right text-charcoal/60">
                        ${item.rate.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-navy">
                        ${(item.hours * item.rate).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-navy/20">
                    <td colSpan={3} className="px-4 py-4 text-right font-semibold text-navy">
                      Total
                    </td>
                    <td className="px-4 py-4 text-right font-bold text-navy text-base">
                      ${totalAmount.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
              Terms
            </h2>
            <div className="space-y-2 text-sm text-charcoal/60">
              <p><strong className="text-charcoal/80">Payment:</strong> {data.paymentTerms}</p>
              <p><strong className="text-charcoal/80">Revisions:</strong> {data.revisions}</p>
            </div>
          </div>

          {/* Signature block */}
          <div className="grid grid-cols-2 gap-12 mt-16 pt-8 border-t border-border">
            <div>
              <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-8">
                ADR Consultancy
              </p>
              <div className="border-b border-charcoal/20 mb-2" />
              <p className="text-xs text-charcoal/40">Signature / Date</p>
            </div>
            <div>
              <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-8">
                {data.clientCompany || "Client"}
              </p>
              <div className="border-b border-charcoal/20 mb-2" />
              <p className="text-xs text-charcoal/40">Signature / Date</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <nav className="bg-white border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="ADR Consultancy" width={180} height={40} />
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
            >
              <FileText size={16} />
              Preview Proposal
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-navy tracking-[-0.03em]">
            Proposal / SOW Builder
          </h1>
          <p className="mt-2 text-sm text-charcoal/50">
            Fill in the details below and preview a professional proposal ready to print or save as PDF.
          </p>
        </div>

        <div className="space-y-8">
          {/* Client Information */}
          <section className="bg-white rounded-2xl border border-border p-8">
            <div className="flex items-center gap-2 mb-5">
              <Building2 size={18} className="text-navy" />
              <h2 className="text-base font-semibold text-navy">Client Information</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>Client Name</label>
                <input
                  type="text"
                  value={data.clientName}
                  onChange={(e) => updateField("clientName", e.target.value)}
                  placeholder="John Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Company</label>
                <input
                  type="text"
                  value={data.clientCompany}
                  onChange={(e) => updateField("clientCompany", e.target.value)}
                  placeholder="Acme Corp"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  value={data.clientEmail}
                  onChange={(e) => updateField("clientEmail", e.target.value)}
                  placeholder="john@acme.com"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="bg-white rounded-2xl border border-border p-8">
            <div className="flex items-center gap-2 mb-5">
              <FileText size={18} className="text-navy" />
              <h2 className="text-base font-semibold text-navy">Project Details</h2>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Project Title</label>
                  <input
                    type="text"
                    value={data.projectTitle}
                    onChange={(e) => updateField("projectTitle", e.target.value)}
                    placeholder="AI Automation Suite for Operations"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Project Type</label>
                  <select
                    value={data.projectType}
                    onChange={(e) => updateField("projectType", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select type...</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Executive Summary</label>
                <textarea
                  value={data.summary}
                  onChange={(e) => updateField("summary", e.target.value)}
                  rows={4}
                  placeholder="Brief overview of what we will deliver and the expected business impact..."
                  className={inputClass + " resize-none"}
                />
              </div>
            </div>
          </section>

          {/* Scope */}
          <section className="bg-white rounded-2xl border border-border p-8">
            <h2 className="text-base font-semibold text-navy mb-5">Scope of Work</h2>
            <div className="space-y-6">
              {/* Objectives */}
              <div>
                <label className={labelClass}>Objectives</label>
                {data.objectives.map((obj, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={obj}
                      onChange={(e) => updateArrayItem("objectives", i, e.target.value)}
                      placeholder={`Objective ${i + 1}`}
                      className={inputClass}
                    />
                    {data.objectives.length > 1 && (
                      <button
                        onClick={() => removeArrayItem("objectives", i)}
                        className="shrink-0 text-charcoal/30 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem("objectives")}
                  className="inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-dark transition-colors mt-1"
                >
                  <Plus size={14} /> Add objective
                </button>
              </div>

              {/* Deliverables */}
              <div>
                <label className={labelClass}>Deliverables</label>
                {data.deliverables.map((del, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={del}
                      onChange={(e) => updateArrayItem("deliverables", i, e.target.value)}
                      placeholder={`Deliverable ${i + 1}`}
                      className={inputClass}
                    />
                    {data.deliverables.length > 1 && (
                      <button
                        onClick={() => removeArrayItem("deliverables", i)}
                        className="shrink-0 text-charcoal/30 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem("deliverables")}
                  className="inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-dark transition-colors mt-1"
                >
                  <Plus size={14} /> Add deliverable
                </button>
              </div>

              {/* Out of Scope */}
              <div>
                <label className={labelClass}>Out of Scope</label>
                {data.outOfScope.map((item, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateArrayItem("outOfScope", i, e.target.value)}
                      placeholder={`Exclusion ${i + 1}`}
                      className={inputClass}
                    />
                    {data.outOfScope.length > 1 && (
                      <button
                        onClick={() => removeArrayItem("outOfScope", i)}
                        className="shrink-0 text-charcoal/30 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem("outOfScope")}
                  className="inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-dark transition-colors mt-1"
                >
                  <Plus size={14} /> Add exclusion
                </button>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="bg-white rounded-2xl border border-border p-8">
            <div className="flex items-center gap-2 mb-5">
              <Calendar size={18} className="text-navy" />
              <h2 className="text-base font-semibold text-navy">Timeline</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label className={labelClass}>Start Date</label>
                <input
                  type="date"
                  value={data.startDate}
                  onChange={(e) => updateField("startDate", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>End Date</label>
                <input
                  type="date"
                  value={data.endDate}
                  onChange={(e) => updateField("endDate", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Milestones</label>
              {data.milestones.map((ms, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={ms.title}
                    onChange={(e) => updateMilestone(i, "title", e.target.value)}
                    placeholder={`Milestone ${i + 1}`}
                    className={inputClass + " flex-1"}
                  />
                  <input
                    type="date"
                    value={ms.date}
                    onChange={(e) => updateMilestone(i, "date", e.target.value)}
                    className={inputClass + " w-40"}
                  />
                  {data.milestones.length > 1 && (
                    <button
                      onClick={() => removeMilestone(i)}
                      className="shrink-0 text-charcoal/30 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addMilestone}
                className="inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-dark transition-colors mt-1"
              >
                <Plus size={14} /> Add milestone
              </button>
            </div>
          </section>

          {/* Pricing */}
          <section className="bg-white rounded-2xl border border-border p-8">
            <div className="flex items-center gap-2 mb-5">
              <DollarSign size={18} className="text-navy" />
              <h2 className="text-base font-semibold text-navy">Pricing</h2>
            </div>

            <div className="mb-5">
              <label className={labelClass}>Pricing Model</label>
              <div className="flex gap-2">
                {(["fixed", "hourly", "retainer"] as const).map((model) => (
                  <button
                    key={model}
                    onClick={() => updateField("pricingModel", model)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all capitalize ${
                      data.pricingModel === model
                        ? "border-navy bg-navy/5 text-navy"
                        : "border-border text-charcoal/60 hover:border-charcoal/30"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {data.lineItems.map((item) => (
                <div key={item.id} className="flex gap-2 items-start">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                    placeholder="Phase / deliverable description"
                    className={inputClass + " flex-1"}
                  />
                  <div className="w-20">
                    <input
                      type="number"
                      value={item.hours || ""}
                      onChange={(e) => updateLineItem(item.id, "hours", parseInt(e.target.value) || 0)}
                      placeholder="Hrs"
                      className={inputClass + " text-right"}
                    />
                  </div>
                  <div className="w-24">
                    <input
                      type="number"
                      value={item.rate || ""}
                      onChange={(e) => updateLineItem(item.id, "rate", parseInt(e.target.value) || 0)}
                      placeholder="Rate"
                      className={inputClass + " text-right"}
                    />
                  </div>
                  <div className="w-28 py-3 text-right text-sm font-medium text-navy">
                    ${(item.hours * item.rate).toLocaleString()}
                  </div>
                  {data.lineItems.length > 1 && (
                    <button
                      onClick={() => removeLineItem(item.id)}
                      className="shrink-0 text-charcoal/30 hover:text-red-500 transition-colors p-2 mt-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={addLineItem}
                className="inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-dark transition-colors"
              >
                <Plus size={14} /> Add line item
              </button>
              <div className="text-right">
                <span className="text-sm text-charcoal/50 mr-3">Total:</span>
                <span className="text-lg font-bold text-navy">${totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </section>

          {/* Terms */}
          <section className="bg-white rounded-2xl border border-border p-8">
            <h2 className="text-base font-semibold text-navy mb-5">Terms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>Payment Terms</label>
                <input
                  type="text"
                  value={data.paymentTerms}
                  onChange={(e) => updateField("paymentTerms", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Revisions</label>
                <input
                  type="text"
                  value={data.revisions}
                  onChange={(e) => updateField("revisions", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Valid Until</label>
                <input
                  type="date"
                  value={data.validUntil}
                  onChange={(e) => updateField("validUntil", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
