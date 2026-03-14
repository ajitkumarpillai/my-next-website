import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import NavigationWrapper from "@/components/NavigationWrapper";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GlobalFooter from "@/components/GlobalFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellnest Care | Homeopathy doctor Abu Dhabi & Ayurveda UAE",
  description: "Abu Dhabi's leading holistic center for Ayurveda and Homeopathy. DOH License #MF-90210. Featuring exclusive Male (Onyx) and Female (Emerald) Wings for ultimate privacy.",
  keywords: ["Homeopathy doctor Abu Dhabi", "Ayurveda for Men/Women UAE", "Athletic Recovery Abu Dhabi", "Holistic Center", "Panchakarma", "Clinical Athletic Recovery"],
  other: {
    "DOH-License": "MF-90210",
    "Gender-Specific-Wings": "Male Onyx Wing, Female Emerald Wing",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
        <NavigationWrapper />
        {children}
        <GlobalFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
