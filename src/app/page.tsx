import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyWork from '@/components/WhyWork';
import Trust from '@/components/Trust';
import Categories from '@/components/Categories';
import Process from '@/components/Process';
import SharkTank from '@/components/SharkTank'; // This now contains your video!
import FAQ from '@/components/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funngro Revamp | Earn Money as a Teenlancer',
  description: 'Join 50 Lakh+ teens earning real money by working with real companies. Featured on Shark Tank India.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-funngroDark selection:bg-funngroGreen selection:text-black overflow-x-hidden">
      
      {/* 1. Hero with Phone Mockups */}
      <Hero />

      {/* 2. Impact Numbers Bar */}
      <Stats />

      {/* 3. Value Proposition Section */}
      <WhyWork />

      {/* 4. Company & Partner Trust Grid */}
      <Trust />

      {/* 5. 12 Work Categories Grid */}
      <Categories />

      {/* 6. Step-by-Step Earning Process */}
      <Process />

      {/* 7. NEW: Shark Tank Video Section */}
      <SharkTank />

      {/* 8. Frequently Asked Questions */}
      <FAQ />

      {/* 9. Final Branding Footer */}
      <footer className="py-20 text-center border-t border-gray-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            The name says it all. <br />
            "Its <span className="text-funngroGreen">Fun</span> to <span className="text-funngroGreen">Grow</span>"
          </h2>
          <div className="h-1 w-20 bg-funngroGreen mx-auto mb-10"></div>
          <p className="text-funngroGreen font-black tracking-[0.2em] text-sm uppercase mb-4">
            BE INDEPENDENT BEFORE 18!
          </p>
          <p className="text-gray-600 text-xs mt-12">
            © 2026 Funngro Website Revamp Project. Developed by Arnab.
          </p>
        </div>
      </footer>
    </main>
  );
}