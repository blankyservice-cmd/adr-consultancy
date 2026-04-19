import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ADR Consultancy privacy policy and data handling practices.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-charcoal/40 mb-10">
          Last updated: April 2026
        </p>

        <div className="prose prose-sm max-w-none text-charcoal/70 leading-[1.8] space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you use our website or services, we may collect the following
              information:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Contact information:</strong> name, email address,
                company name, and phone number provided through our contact form
                or AI Readiness Assessment.
              </li>
              <li>
                <strong>Business information:</strong> industry, team size, pain
                points, and other details you share to help us understand your
                needs.
              </li>
              <li>
                <strong>Usage data:</strong> pages visited, time on site, and
                other analytics data collected through cookies or similar
                technologies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to your inquiries and provide consultation services</li>
              <li>Prepare AI readiness assessments and project proposals</li>
              <li>Send relevant communications about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              3. Data Storage and Security
            </h2>
            <p>
              Your data is stored securely using industry-standard encryption and
              access controls. We use Supabase (hosted in Canada/US) for data
              storage and implement row-level security policies to protect your
              information.
            </p>
            <p className="mt-2">
              We retain your personal information only as long as necessary to
              fulfill the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              4. PIPEDA Compliance
            </h2>
            <p>
              ADR Consultancy complies with the Personal Information Protection
              and Electronic Documents Act (PIPEDA). We are committed to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Obtaining meaningful consent before collecting personal information</li>
              <li>Limiting collection to what is necessary for identified purposes</li>
              <li>Protecting information with appropriate security safeguards</li>
              <li>Providing you access to your personal information upon request</li>
              <li>Being transparent about our data practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              5. Third-Party Services
            </h2>
            <p>We may share your information with the following service providers:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Supabase:</strong> Database hosting and authentication
              </li>
              <li>
                <strong>Resend:</strong> Email delivery
              </li>
              <li>
                <strong>Stripe:</strong> Payment processing (if applicable)
              </li>
              <li>
                <strong>Vercel:</strong> Website hosting and analytics
              </li>
            </ul>
            <p className="mt-2">
              These providers have their own privacy policies governing how they
              handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              7. Cookies
            </h2>
            <p>
              Our website may use essential cookies to ensure proper
              functionality. We do not use tracking cookies without your consent.
              Analytics data, if collected, is aggregated and anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mt-8 mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy or wish to exercise
              your rights, contact us at:
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
