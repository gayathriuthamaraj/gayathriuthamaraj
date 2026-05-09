import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gayathri U | Systems Engineering Portfolio",
  description:
    "Developer portfolio focused on distributed systems, backend infrastructure, and ML systems engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
