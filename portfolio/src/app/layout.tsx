import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Divanshu Bhargava | Portfolio",
  description:
    "Portfolio of Divanshu Bhargava - CSE student at IIIT Jabalpur. Full-stack developer, data analyst, and competitive programmer.",
  keywords: [
    "Divanshu Bhargava",
    "Portfolio",
    "Developer",
    "Data Analyst",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
