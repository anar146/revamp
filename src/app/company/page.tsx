// src/app/company/page.tsx
import HeroCompany from '@/components/HeroCompany';
import CompanyFeatures from '@/components/CompanyFeatures';
import CompanyProcess from '@/components/CompanyProcess';
import Trust from '@/components/Trust';
import { Metadata } from 'next';

// Adding Metadata for SEO
export const metadata: Metadata = {
  title: 'Hire Smart Talent | Funngro for Companies',
  description: 'Scale your business with energetic Teenlancers. Cost-effective and high-quality solutions.',
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-funngroDark selection:bg-funngroGreen selection:text-black overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroCompany />

      {/* 2. Social Proof */}
      <Trust />

      {/* 3. Why Hire Teens? */}
      <CompanyFeatures />

      {/* 4. The 3-Step Workflow */}
      <CompanyProcess />

      {/* 5. Company Footer */}
      <footer className="py-16 text-center border-t border-gray-800 bg-slate-900/20">
        <p className="text-gray-500 text-sm">© 2026 Funngro Company Solutions. Built for Smart Companies.</p>
        <p className="text-funngroGreen font-bold mt-2 tracking-widest text-xs uppercase">Empowering the Future Workforce</p>
      </footer>
    </main>
  );
}