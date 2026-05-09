import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import ScrollProgress from "@/components/layout/ScrollProgress";

export const metadata: Metadata = {
  title: "Gayathri U — Backend & Data Engineer · NLP · ML · Distributed Systems",
  description:
    "Portfolio of Gayathri U — B.Tech CSE at Amrita Vishwa Vidyapeetham. Backend and data engineer working across distributed systems, data pipelines, NLP, ML/DL, and infrastructure engineering.",
  keywords: [
    "Gayathri U",
    "backend engineer",
    "data engineer",
    "data pipelines",
    "NLP",
    "machine learning",
    "distributed systems",
    "ML infrastructure",
    "Go",
    "Python",
    "portfolio",
  ],
  authors: [{ name: "Gayathri U" }],
  openGraph: {
    title: "Gayathri U — Backend & Data Engineer · NLP · ML",
    description:
      "Building distributed backends, data pipelines, and NLP/ML systems. B.Tech CSE at Amrita Vishwa Vidyapeetham.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080f0a] text-beige antialiased noise-overlay">
        <ScrollProgress />
        <Sidebar />
        {/* Main content offset for sidebar on desktop */}
        <main className="xl:pl-[220px] transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
