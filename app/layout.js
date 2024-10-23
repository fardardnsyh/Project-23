import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/common/navbar";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/common/googe-analytics";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "CoverLetterMate",
  description: "AI-Powered Cover Letters, Tailored for Success",
  icons: {
    icon: "/logo-color.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`${manrope.className}`}>
        <Toaster />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
