import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAMA.DEV — Senior Software Engineer",
  description:
    "Personal portfolio and digital universe of a Senior Software Engineer specializing in distributed systems, scalable APIs, and performance engineering.",
  keywords: [
    "Software Engineer",
    "Distributed Systems",
    "Full-Stack Engineer",
    "Three.js Portfolio",
    "Go",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "TAMA" }],
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="bg-[#030712] text-slate-100 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}

