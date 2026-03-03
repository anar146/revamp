const faqs = [
  { q: "How can I start earning money?", a: "Register on the Funngro app, complete your profile, and apply to projects that match your skills." },
  { q: "Why should Teens work?", a: "To gain real-world experience, financial independence, and build a professional portfolio early." },
  { q: "What kind of work can I do?", a: "Categories include Content Writing, Social Media, Web Design, and more." },
];

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-funngroDark border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-gray-800 hover:border-funngroGreen/50 transition-colors cursor-pointer">
              <h3 className="text-white font-bold flex justify-between items-center">
                {faq.q} <span className="text-funngroGreen">+</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}