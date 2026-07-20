import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function OperationalSystems() {
  useEffect(() => {
    document.title = "Operational Systems | JPDEV.STUDIO";
  }, []);

  const systems = [
    {
      title: "Sell More Efficiently",
      sub: "Best for: Retail, B2B Wholesalers, Inventory",
      desc: "If your team spends hours answering product questions, sending catalog photos, or checking stock manually, we build systems that make that information available instantly—reducing repetitive work while giving your customers a smoother buying experience.",
      deliverables: ["Searchable inventory", "Automated enquiry routing", "Mobile-first catalogs", "Admin dashboard"],
      proof: { title: "Smart Catalog", link: "/systems/smart-catalog" }
    },
    {
      title: "Automate Repetitive Work",
      sub: "Best for: Service Providers, Agencies, Operations",
      desc: "Many businesses lose time copying information between spreadsheets, chat apps, and paper records. We build lightweight internal tools that automate those workflows so your team spends less time on administration and more time serving customers.",
      deliverables: ["Custom cost calculators", "Lead intake routers", "Webhook integrations", "Client databases"],
      proof: { title: "Custom Lead Router", link: "/systems/lead-router" }
    },
    {
      title: "Organize Knowledge",
      sub: "Best for: Coaches, Instructors, Internal Teams",
      desc: "Whether you're training employees or onboarding clients, we build platforms that organize information into clear, actionable pathways without the complexity of generic course software.",
      deliverables: ["Learning dashboards", "Resource repositories", "Progress tracking", "Secure asset access"],
      proof: { title: "MindOps", link: "/systems/mindops" }
    }
  ];

  return (
    <div className="w-full space-y-24 py-12 md:py-20 max-w-5xl mx-auto px-4">
      
      {/* 1. HERO */}
      <div className="max-w-2xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2A5D9E]">// OPERATIONAL SYSTEMS</span>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111]">Software Built Around Your Business</h1>
        <p className="text-lg text-[#111111]/70 font-sans leading-relaxed">
          Every business has repetitive work that steals time. We design operational software that replaces manual processes with clear, reliable systems your team can own.
        </p>
      </div>

      {/* 2. CAPABILITIES MATRIX */}
      <div className="space-y-20">
        {systems.map((s, idx) => (
          <div key={s.title} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#111111]/5 pb-16">
            <div className="md:col-span-4 font-mono">
              <span className="text-xs font-bold text-[#2A5D9E] block">0{idx + 1} / CAPABILITY</span>
              <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111] mt-2">{s.title}</h2>
              <p className="text-[10px] text-[#111111]/50 uppercase tracking-wider font-bold mt-2">{s.sub}</p>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-sm text-[#111111]/80 leading-relaxed font-sans">{s.desc}</p>
              <div className="bg-white p-6 rounded-xl border border-[#111111]/5 space-y-4">
                <span className="text-[10px] font-bold text-[#2A5D9E] tracking-widest uppercase font-mono">// What You'll Receive</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#111111]/70 font-sans">
                  {s.deliverables.map((d) => <li key={d} className="flex items-center gap-2">✓ {d}</li>)}
                </ul>
              </div>
              <div className="pt-2">
                <Link to={s.proof.link} className="text-xs font-bold text-[#2A5D9E] hover:underline font-mono uppercase tracking-wider">
                  View {s.proof.title} Case Study →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. WHO WE WORK WITH */}
      <section className="space-y-6">
        <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest">// WHO WE WORK WITH</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Retail & Commerce', 'Professional Services', 'Internal Teams', 'Educators & Coaches'].map((item) => (
            <div key={item} className="p-4 border border-[#111111]/5 rounded-xl font-bold text-xs text-[#111111]/70">{item}</div>
          ))}
        </div>
      </section>

      {/* 4. ENGAGEMENT */}
      <section className="space-y-6">
        <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest">// HOW WE ENGAGE</span>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "Discovery", desc: "We learn how your business currently works." },
            { step: "Design", desc: "We simplify the workflow before writing code." },
            { step: "Build", desc: "We develop and test the system." },
            { step: "Launch", desc: "We deploy and train your team." },
            { step: "Support", desc: "We refine as your business grows." }
          ].map((item, i) => (
            <div key={item.step} className="p-4 border border-[#111111]/5 rounded-xl font-mono text-[10px]">
              <span className="block mb-2 font-bold text-[#2A5D9E]">0{i + 1}</span>
              <span className="block font-bold uppercase mb-1">{item.step}</span>
              <span className="text-[#111111]/50">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STUDIO PRODUCTS */}
      <section className="bg-[#F1EFE7] rounded-2xl p-8 md:p-12 space-y-6">
        <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest block">// STUDIO PRODUCTS</span>
        <p className="text-sm text-[#111111]/70 max-w-2xl font-sans">
          Every client engagement strengthens the products we build, and every product we build improves how we serve our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "MindOps", tag: "Knowledge Operating System" },
            { name: "RecallHQ", tag: "Personal Knowledge Archive" },
            { name: "Smart Catalog", tag: "Commerce Infrastructure" },
            { name: "Carousel Architect", tag: "Content Operations" }
          ].map((prod) => (
            <div key={prod.name} className="p-4 bg-white rounded-xl border border-[#111111]/5">
              <h4 className="font-bold text-xs uppercase">{prod.name}</h4>
              <p className="text-[10px] text-[#111111]/50 uppercase tracking-wider">{prod.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <div className="text-center pt-8 border-t border-[#111111]/5">
        <Link to="/contact" className="inline-block text-xs font-bold bg-[#111111] text-white px-8 py-4 rounded hover:bg-[#2A5D9E] transition-colors uppercase tracking-wider">
          Discuss a Project
        </Link>
      </div>

    </div>
  );
}