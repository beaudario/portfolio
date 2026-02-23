import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s — Dario Douma",
    default: "Dario Douma — Software Engineer",
  },
  description:
    "Personal portfolio of Dario Douma — software engineer and builder specializing in C#, .NET, Unity, and mobile development.",
  keywords: [
    "Dario Douma",
    "software engineer",
    "portfolio",
    "C#",
    ".NET",
    "Unity",
    "augmented reality",
    "mobile development",
  ],
  authors: [{ name: "Dario Douma", url: siteConfig.url }],
  creator: "Dario Douma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Dario Douma",
    title: "Dario Douma — Software Engineer",
    description:
      "Personal portfolio of Dario Douma — software engineer and builder specializing in C#, .NET, Unity, and mobile development.",
    images: [
      {
        url: "/images/me.jpg",
        width: 600,
        height: 800,
        alt: "Dario Douma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dario Douma — Software Engineer",
    description:
      "Personal portfolio of Dario Douma — software engineer and builder.",
    images: ["/images/me.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dario Douma",
  url: siteConfig.url,
  jobTitle: "Software Engineer",
  sameAs: siteConfig.socials.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-lg focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
