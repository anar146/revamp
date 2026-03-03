export default function Trust() {
  return (
    <section className="py-16 bg-funngroDark text-center border-t border-gray-800">
      <h2 className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-10">We are Trusted by</h2>
      <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all px-6">
        {/* You can use text placeholders or <img> tags for CarDekho, StockPe, etc. */}
        <span className="text-white text-xl font-bold">CarDekho</span>
        <span className="text-white text-xl font-bold">StockPe</span>
        <span className="text-white text-xl font-bold">LegacyNext</span>
        <span className="text-white text-xl font-bold">Two99</span>
      </div>
    </section>
  );
}