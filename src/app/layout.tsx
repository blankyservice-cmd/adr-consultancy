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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
