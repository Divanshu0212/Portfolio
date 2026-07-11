import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "Divanshu Bhargava | Portfolio",
  description:
    "Portfolio of Divanshu Bhargava - Final-year CSE student at IIIT Jabalpur. GenAI & Agentic AI engineer, full-stack developer, and competitive programmer building distributed systems at scale.",
  keywords: [
    "Divanshu Bhargava",
    "Portfolio",
    "GenAI",
    "Agentic AI",
    "Full-Stack Developer",
    "Microservices",
    "Machine Learning",
    "IIIT Jabalpur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
