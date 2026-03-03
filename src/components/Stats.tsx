export default function Stats() {
  const data = [
    { label: "Companies", value: "4,000+" },
    { label: "Categories", value: "12" },
    { label: "Teenlancers", value: "50,00,000+" },
    { label: "Live projects", value: "1000+" },
  ];

  return (
    <div className="bg-slate-900/50 border-y border-gray-800 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {data.map((item, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl font-bold text-white mb-1">{item.value}</h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}