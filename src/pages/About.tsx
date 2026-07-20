import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About | JPDEV.STUDIO";
  }, []);

  const activeStatuses = ['IN PRODUCTION', 'In Progress', 'Experimenting', 'Active'];
  const activeBuilds = projectData.filter((project) => activeStatuses.includes(project.status));

  return (
    <div className="w-full space-y-24 py-12 md:py-20 max-w-5xl mx-auto px-4">
      
      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-[#111111]/5 bg-[#F1EFE7]">
            <img src="/images/jpdevphoto.png" alt="Jasper Okhipo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border border-[#111111]/5 rounded-xl px-4 py-2.5 shadow-sm font-mono">
            <p className="text-xs font-bold text-[#111111] uppercase">Jasper Okhipo</p>
            <p className="text-[10px] text-[#111111]/60 font-bold uppercase mt-0.5">Founder · JPDEV.STUDIO</p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111]">We build software people actually use.</h1>
          <p className="text-lg text-[#111111]/80 leading-relaxed">
            Software should adapt to your business—not force your business to adapt to the software. JPDEV.STUDIO exists to replace operational friction with tools that are simple to adopt, easy to own, and designed around the realities of everyday work.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY & PRINCIPLES */}
      <section className="space-y-12">
        <div className="space-y-4">
          <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest">// PHILOSOPHY</span>
          <p className="text-xl font-sans text-[#111111]/70 leading-relaxed max-w-3xl">
            JPDEV.STUDIO began as a deliberate effort to design, ship, and refine operational software through continuous real-world experimentation. We don't aim to build the most software—we aim to build the software that businesses continue relying on years after launch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Simple", desc: "Software should reduce complexity, not create it. We prioritize tools that get the job done." },
            { title: "Practical", desc: "We don't build for technology's sake. Every system solves a specific operational bottleneck." },
            { title: "Built to Last", desc: "We create digital infrastructure with long-term sustainability and scalability in mind." }
          ].map((p) => (
            <div key={p.title} className="bg-white p-8 rounded-2xl border border-[#111111]/5">
              <h3 className="text-sm font-bold uppercase text-[#2A5D9E] mb-3">{p.title}</h3>
              <p className="text-xs text-[#111111]/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="space-y-8">
        <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest">// HOW WE WORK</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
          {[
            { step: "01", title: "Understand", desc: "We study how your business works before writing a single line of code." },
            { step: "02", title: "Design", desc: "We remove unnecessary complexity and build around your actual workflow." },
            { step: "03", title: "Deliver", desc: "We ship software your team can confidently use and continue to own." }
          ].map((item) => (
            <div key={item.step} className="space-y-2 border-l-2 border-[#2A5D9E] pl-6">
              <span className="text-2xl font-bold text-[#2A5D9E]">{item.step}</span>
              <h4 className="font-bold uppercase text-[#111111]">{item.title}</h4>
              <p className="text-xs text-[#111111]/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO MISSION */}
      <section className="bg-white border border-[#111111]/5 rounded-2xl p-12 space-y-6">
        <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest">// STUDIO MISSION</span>
        <p className="text-lg text-[#111111]/80 leading-relaxed max-w-3xl">
          JPDEV.STUDIO is a laboratory for digital infrastructure. Every client system and every internal product—from <strong>Smart Catalog</strong> to <strong>MindOps</strong> and <strong>RecallHQ</strong>—helps us refine a growing ecosystem of operational software designed to make the working world clearer and more efficient.
        </p>
      </section>

      {/* TRAJECTORY & BUILDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section className="space-y-6">
          <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest">// TRAJECTORY</span>
          <div className="space-y-8">
            {[
              { year: "2025", title: "Core Fundamentals", desc: "Learning modern frontend development and experimenting with digital products." },
              { year: "2026", title: "Studio Launch", desc: "Launching JPDEV.STUDIO to build and ship operational software in public." },
              { year: "Next", title: "Product Studio", desc: "Growing into a focused studio serving independent businesses and creators." }
            ].map((t) => (
              <div key={t.year} className="flex gap-4">
                <span className="text-xs font-bold text-[#2A5D9E] font-mono w-12">{t.year}</span>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#111111]">{t.title}</h4>
                  <p className="text-xs text-[#111111]/60 mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {activeBuilds.length > 0 && (
          <section className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#2A5D9E] uppercase tracking-widest">// CURRENT BUILDS</span>
            <div className="grid gap-4">
              {activeBuilds.map((p) => (
                <Link to={`/systems/${p.slug}`} key={p.slug} className="flex items-center justify-between p-4 bg-white border border-[#111111]/5 rounded-xl hover:border-[#2A5D9E]/30 transition-all">
                  <span className="text-sm font-bold uppercase">{p.title}</span>
                  <span className="text-[10px] font-bold text-[#2A5D9E] bg-[#2A5D9E]/5 px-2 py-1 rounded">WIP</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}