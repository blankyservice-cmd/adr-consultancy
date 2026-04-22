import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ADR Consultancy | End-to-End AI Solutions for Your Business",
    template: "%s | ADR Consultancy",
  },
  description:
    "We consult first, build second. From AI strategy to software development, marketing automation to team training -- ADR Consultancy delivers tailored AI solutions for small and medium businesses.",
  metadataBase: new URL("https://adrconsultancy.ca"),
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://adrconsultancy.ca",
    siteName: "ADR Consultancy",
    title: "ADR Consultancy | End-to-End AI Solutions for Your Business",
    description:
      "We consult first, build second. From AI strategy to software development, marketing automation to team training -- ADR Consultancy delivers tailored AI solutions for small and medium businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADR Consultancy | End-to-End AI Solutions",
    description:
      "End-to-end AI solutions for small and medium businesses. Strategy, software, automation, marketing, training, and governance.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ADR Consultancy",
  url: "https://adrconsultancy.ca",
  logo: "https://adrconsultancy.ca/logo.svg",
  description:
    "End-to-end AI solutions for small and medium businesses. Strategy, software, automation, marketing, training, and governance.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@adrconsultancy.ca",
    contactType: "sales",
    availableLanguage: ["English", "French"],
  },
  sameAs: [
    "https://www.linkedin.com/in/peter-miranda-4a4113215",
  ],
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Strategy",
    "Workflow Automation",
    "Software Development",
    "Marketing Automation",
    "AI Training",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "ADR Consultancy",
  },
  serviceType: "AI Consulting",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Consulting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Strategy & Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workflow Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing & Advertising AI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales Enablement AI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Training & Adoption" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Governance & Compliance" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="ADR Consultancy Blog"
          href="/blog/rss.xml"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
