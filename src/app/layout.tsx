import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Funngro | Be Independent Before 18",
  description: "Real companies, real projects, real earnings for teens.",
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