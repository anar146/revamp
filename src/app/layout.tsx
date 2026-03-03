import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Funngro | Be Independent Before 18",
  description: "Join 50 Lakh+ teens earning real money by working with real companies. Featured on Shark Tank India.",
  verification: {
    // UPDATED: Using your new verification code
    google: "i8-E3NImLlOSX4-xaqNvwowflxbDkaWN4nzHuFv9O0I", 
  },
  openGraph: {
    title: "Funngro | Be Independent Before 18",
    description: "Real companies, real projects, real earnings for teens.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback tag for immediate Google detection */}
        <meta name="google-site-verification" content="i8-E3NImLlOSX4-xaqNvwowflxbDkaWN4nzHuFv9O0I" />
      </head>
      <body className="bg-funngroDark antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}