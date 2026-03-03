const categories = [
  "Social media marketing", "Video Creation", "Website Design", 
  "Influencer Marketing", "Mobile App Development", "Campus Ambassador",
  "Data Entry", "Voice Over", "Content Writing", "Graphics Design", "Testing"
];

export default function Categories() {
  return (
    <section className="bg-funngroDark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Project Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((item, index) => (
            <div key={index} className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 hover:border-funngroGreen transition-all cursor-pointer group text-center">
              <div className="text-funngroGreen mb-4 text-3xl group-hover:scale-110 transition-transform">✦</div>
              <p className="text-white font-semibold text-lg">{item}</p>
            </div>
          ))}
          {/* Featured Category from your screenshot */}
          <div className="bg-funngroGreen p-8 rounded-2xl flex items-center justify-center text-center cursor-pointer hover:bg-green-600 transition">
            <p className="text-black font-extrabold text-lg uppercase">Run Surveys & Research</p>
          </div>
        </div>
      </div>
    </section>
  );
}