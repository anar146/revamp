export default function CompanyFeatures() {
  const features = [
    { title: "Cost Effective", desc: "Get quality work at student-friendly budgets." },
    { title: "High Energy", desc: "Tap into the creativity of Gen-Z digital natives." },
    { title: "Smart Solutions", desc: "Vetted talent across 12+ categories like Web and Social Media." }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-10 rounded-3xl border border-gray-800 bg-funngroDark hover:border-funngroGreen transition">
            <h3 className="text-funngroGreen font-bold text-2xl mb-4">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}