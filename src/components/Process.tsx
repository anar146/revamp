const steps = [
  { id: 1, title: "Register", desc: "Register for Earning on Funngro app" },
  { id: 2, title: "Complete Profile", desc: "Add details about your interests" },
  { id: 3, title: "Finish first project", desc: "Complete one project to show skills" },
  { id: 4, title: "Apply to companies", desc: "Hundreds of companies waiting" },
  { id: 5, title: "Start Earning", desc: "Complete project and get certificate" },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Earning with Funngro</h2>
        <p className="text-gray-400 text-center mb-16">Simple steps to earn income by working with real companies</p>
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-funngroGreen flex items-center justify-center text-black text-2xl font-black mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                {step.id}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}