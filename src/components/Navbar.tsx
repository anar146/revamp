import Link from 'next/link';

export default function Navbar() {
  return (
    // The 'sticky' and 'backdrop-blur' classes create the effect you want
    <nav className="flex justify-between items-center p-4 md:p-6 bg-funngroDark/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <Link href="/" className="text-xl md:text-2xl font-bold text-white">
        Funngro<span className="text-funngroGreen">.</span>
      </Link>
      
      {/* Navigation links remain sharp while background blurs */}
      <div className="flex gap-4 md:gap-8 text-gray-300 text-sm md:text-base font-medium">
        <Link href="/" className="hover:text-funngroGreen transition">Teen</Link>
        <Link href="/company" className="hover:text-funngroGreen transition">Company</Link>
      </div>

      <button className="bg-funngroGreen text-gray px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm hover:scale-105 transition">
        Earn Now
      </button>
    </nav>
  );
}