import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Funngro | Be Independent Before 18",
  description: "Join 50 Lakh+ teens earning real money by working with real companies. Featured on Shark Tank India.",
  // Verification for Search Console
  verification: {
    google: "google0462a5697f9d1c22", 
  },
  // Social Media Preview (Boosts SEO score)
  openGraph: {
    title: "Funngro | Be Independent Before 18",
    description: "Real companies, real projects, real earnings for teens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-funngroDark antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}