export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-20 max-w-7xl mx-auto bg-funngroDark overflow-hidden">
      <div className="lg:w-1/2 text-center lg:text-left z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
          TEEN<span className="text-funngroGreen">LANCERS</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
          Real companies, real projects, real earnings and real money. 
          Smart opportunities for the smart generation.
        </p>
      </div>

      {/* App Preview Container */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative w-full h-[400px] md:h-[500px]">
        {/* Main Phone */}
        <div className="w-56 h-[450px] bg-slate-800 rounded-[2.5rem] border-8 border-slate-700 shadow-2xl relative z-20 overflow-hidden flex items-center justify-center">
            <div className="text-center px-4">
               <p className="text-funngroGreen font-bold text-xs mb-2 italic">Shark Tank Featured</p>
               <p className="text-white font-bold">App Preview</p>
            </div>
        </div>
        {/* Secondary Phone (Shadow Effect) */}
        <div className="absolute left-[55%] top-10 w-56 h-[450px] bg-slate-900/50 rounded-[2.5rem] border-8 border-slate-800 z-10 hidden sm:block"></div>
      </div>
    </section>
  );
}