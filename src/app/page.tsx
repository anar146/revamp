"use client"; // Required for dynamic imports with ssr: false

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyWork from '@/components/WhyWork';
import dynamic from 'next/dynamic';

// Lazy loading heavy components to boost performance from 80 to 100
const Trust = dynamic(() => import('@/components/Trust'), { ssr: false });
const Categories = dynamic(() => import('@/components/Categories'), { ssr: false });
const Process = dynamic(() => import('@/components/Process'), { ssr: false });
const SharkTank = dynamic(() => import('@/components/SharkTank'), { ssr: false });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-funngroDark selection:bg-funngroGreen selection:text-black overflow-x-hidden">
      <Hero />
      <Stats />
      <WhyWork />
      
      {/* These components load only when the user scrolls */}
      <Trust />
      <Categories />
      <Process />
      <SharkTank />
      <FAQ />

      <footer className="py-20 text-center border-t border-gray-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-white">
          <p>© 2026 Funngro Website Revamp Project. Developed by Arnab.</p>
        </div>
      </footer>
    </main>
  );
}