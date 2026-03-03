import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyWork from '@/components/WhyWork';
import Trust from '@/components/Trust';
import Categories from '@/components/Categories';
import Process from '@/components/Process';
import dynamic from 'next/dynamic';

// Heavy sections are loaded only when needed (Lazy Loading)
const SharkTank = dynamic(() => import('@/components/SharkTank'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-funngroDark selection:bg-funngroGreen selection:text-black overflow-x-hidden">
      <Hero />
      <Stats />
      <WhyWork />
      <Trust />
      <Categories />
      <Process />
      
      {/* These components now load lazily to boost Performance score */}
      <SharkTank />
      <FAQ />

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