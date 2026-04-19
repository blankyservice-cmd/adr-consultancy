import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ADR Consultancy terms of service and conditions of use.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-4">
          <Link href="/">
            <Image src="/logo.svg" alt="ADR Consultancy" width={180} height={40} />
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-navy tracking-[-0.03em] mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-charcoal/40 mb-10">
          Last updated: April 2026
        </p>

        <div className="prose prose-sm max-w-none text-charcoal/70 leading-[1.8] space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              1. Services
            </h2>
            <p>
              ADR Consultancy provides AI consulting, software development,
              workflow automation, and related technology services
              (&quot;Services&quot;). The specific scope, deliverables, and terms
              for each engagement are defined in a separate Statement of Work
              (SOW) or proposal agreed upon by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              2. Engagement Process
            </h2>
            <p>
              All projects follow our consultative framework: Discovery,
              Diagnosis, Prescription, Build, Adopt, and Optimize. Work begins
              only after mutual agreement on scope and terms through a signed
              proposal or SOW.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              3. Payment Terms
            </h2>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Payment terms are specified in each project proposal or SOW.
              </li>
              <li>
                Standard terms are 50% upfront and 50% upon project completion,
                unless otherwise agreed.
              </li>
              <li>
                Managed services and retainers are billed monthly in advance.
              </li>
              <li>
                All prices are in Canadian dollars (CAD) unless stated otherwise.
              </li>
              <li>
                Late payments may incur a fee of 1.5% per month on outstanding
                balances.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              4. Intellectual Property
            </h2>
            <p>
              Upon full payment, all custom work product created specifically for
              the client (custom code, designs, and content) is assigned to the
              client. ADR Consultancy retains the right to use general
              methodologies, frameworks, and reusable components developed during
              the engagement.
            </p>
            <p className="mt-2">
              Pre-existing intellectual property, including proprietary tools,
              templates, and libraries, remains the property of ADR Consultancy
              and is licensed for the client&apos;s use as part of the delivered
              solution.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              5. Confidentiality
            </h2>
            <p>
              Both parties agree to keep confidential any proprietary
              information, business data, trade secrets, or other sensitive
              information shared during the engagement. This obligation survives
              the termination of the engagement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              6. Revisions and Scope Changes
            </h2>
            <p>
              Each proposal includes a defined number of revision rounds
              (typically 2). Changes beyond the agreed scope require a written
              change order with adjusted timeline and pricing. We will always
              communicate scope implications before proceeding with additional
              work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              7. Warranties and Limitations
            </h2>
            <p>
              ADR Consultancy provides services on a best-efforts basis and
              warrants that all work will be performed in a professional and
              competent manner. We do not guarantee specific business outcomes,
              revenue increases, or ROI figures, as these depend on factors
              beyond our control.
            </p>
            <p className="mt-2">
              To the maximum extent permitted by law, ADR Consultancy&apos;s
              total liability for any claim arising from or related to our
              services is limited to the fees paid for the specific engagement
              giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              8. Termination
            </h2>
            <p>
              Either party may terminate an engagement with 14 days written
              notice. In the event of termination, the client is responsible for
              payment of all work completed up to the termination date. Any
              deposits for uncompleted work will be refunded on a pro-rata basis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              9. Website Use
            </h2>
            <p>
              By using this website, you agree not to misuse the site or its
              content, attempt to gain unauthorized access to our systems, or use
              automated tools to scrape or collect data from the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              10. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the Province of Ontario and
              the federal laws of Canada applicable therein. Any disputes arising
              from these terms or our services will be resolved through
              arbitration in Ontario, Canada.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              11. Contact
            </h2>
            <p>
              For questions about these terms, contact us at:
            </p>
            <p className="mt-2">
              <strong>ADR Consultancy</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:info@adrconsultancy.ca"
                className="text-blue hover:text-navy transition-colors"
              >
                info@adrconsultancy.ca
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
