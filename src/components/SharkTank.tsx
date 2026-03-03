export default function SharkTank() {
  return (
    <section className="py-20 px-6 bg-funngroDark border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          {/* Badge for extra polish */}
          <div className="inline-block bg-red-600/10 text-red-500 px-4 py-1 rounded-full text-sm font-bold mb-6">
            Shark Tank India Season 2
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Funngro @ <span className="text-red-600">Shark Tank</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
            Lakhs of Teens love Funngro, Hundreds of Companies love Funngro, and now the Sharks also loved the mission to empower the next generation.
          </p>
          <button className="border border-red-600 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition">
            View Episode Details
          </button>
        </div>

        {/* Video Embed Container */}
        <div className="lg:w-1/2 w-full aspect-video rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/I0XgtabN8rI" 
            title="Funngro Shark Tank India"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}