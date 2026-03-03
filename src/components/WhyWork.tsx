const reasons = [
  { title: "First income", desc: "Work with real companies and Earn money" },
  { title: "Passion", desc: "Make your passion as your profession" },
  { title: "Learning", desc: "Experiential Learning by working on real projects" },
  { title: "Certification", desc: "Build your profile by getting experience certificates" },
];

export default function WhyWork() {
  return (
    <section className="py-20 px-6 bg-funngroDark">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 text-balance">Why work in your teenage?</h2>
        <p className="text-gray-400 italic">"Warren Buffet, Bill Gates, Steve Jobs, all started working in their Teens..."</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {reasons.map((reason, i) => (
          <div key={i} className="p-8 rounded-3xl border border-gray-800 bg-gradient-to-b from-slate-900 to-transparent hover:border-funngroGreen transition-all group">
            <div className="w-12 h-12 bg-funngroGreen/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
               <span className="text-funngroGreen text-2xl">💰</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}