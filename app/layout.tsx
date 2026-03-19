import type { Metadata } from "next";
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
  title: "Jovani Andrés Zambrano | Actor & Theater Maker",
  description: "New York-raised, Boise-based actor and theater maker. Co-founder of Little Branch Theater. Credits include Shakespeare's Globe, Rutgers MFA, and regional theater across the US.",
  keywords: "Jovani Zambrano, actor, theater maker, Boise theater, Little Branch Theater, AEA actor, Shakespeare's Globe, Rutgers acting",
  openGraph: {
    title: "Jovani Andrés Zambrano | Actor & Theater Maker",
    description: "Actor and theater maker committed to work that asks important questions and builds community through shared stories.",
    url: "https://jovanizambrano.com",
    siteName: "Jovani Andrés Zambrano",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovani Andrés Zambrano | Actor & Theater Maker",
    description: "New York-raised, Boise-based actor and theater maker. Co-founder of Little Branch Theater.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
