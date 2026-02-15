import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-portfolio.vercel.app"),
  title: {
    default: "Dev - Systems Engineer & Open Source Contributor",
    template: "%s | Dev",
  },
  description:
    "AI/ML & Systems Engineer | Open Source Contributor | Building secure systems, contributing to open infrastructure, and engineering production-grade software.",
  keywords: [
    "Systems Engineer",
    "AI/ML Engineer",
    "Open Source Contributor",
    "Bitcoin Developer",
    "Blockchain Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Distributed Systems",
    "Dev10-sys",
  ],
  authors: [{ name: "Dev", url: "https://github.com/Dev10-sys" }],
  creator: "Dev",
  publisher: "Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-portfolio.vercel.app",
    title: "Dev - Systems Engineer & Open Source Contributor",
    description:
      "AI/ML & Systems Engineer specializing in secure systems, open source infrastructure, and production-grade software development.",
    siteName: "Dev Portfolio",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Dev - Systems Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev - Systems Engineer & Open Source Contributor",
    description:
      "Systems Engineer | Open Source Contributor | Building secure systems and production-grade software",
    creator: "@Dev10_shadow",
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
