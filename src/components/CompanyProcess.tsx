// src/components/CompanyProcess.tsx
export default function CompanyProcess() {
  const steps = [
    { id: "01", title: "Post Project", desc: "Describe your needs and budget, then review matches." },
    { id: "02", title: "Hire a Teenlancer", desc: "Interview and select the candidate that fits best." },
    { id: "03", title: "Deliver & Pay", desc: "Accept deliverables and release payment securely." }
  ];

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our <span className="text-funngroGreen">3-step</span> process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative p-8 rounded-2xl bg-funngroDark border border-gray-800 hover:border-funngroGreen transition-all group">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-funngroGreen text-black font-black flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
                {step.id}
              </span>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}