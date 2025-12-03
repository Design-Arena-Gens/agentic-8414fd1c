import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

export const metadata = {
  title: "EchoFlow Studio — Minimalist Product Design System",
  description:
    "EchoFlow Studio helps SaaS teams craft minimal, expressive experiences with modular motion libraries and strategy-first design."
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen bg-pearl text-dusk antialiased ${inter.variable}`}>{children}</body>
    </html>
  );
}
