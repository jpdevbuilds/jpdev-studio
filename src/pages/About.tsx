import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';

export default function About() {
  // Future-proof matching array for active projects
  const activeStatuses = ['IN PRODUCTION', 'In Progress', 'Experimenting', 'Active'];
  
  const activeBuilds = projectData.filter((project) => 
    activeStatuses.includes(project.status)
  );

  return (
    <div className="w-full space-y-24 py-12 md:py-20">
      
      {/* SECTION 01 & 02: HERO & STORY PLACEMENT */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Intentional Overlaid Portrait Treatment */}
        <div className="md:col-span-5">
          <div className="relative max-w-sm mx-auto md:max-w-none group">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-[#111111]/5 bg-[#F1EFE7] shadow-sm">
              <img
                src="/images/jpdevphoto.png"
                alt="Jasper Okhipo"
                className="w-full h-full object-cover filter contrast-[101%]"
              />
            </div>
            
            {/* Contextual Floating Identity Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/90 backdrop-blur-md border border-[#111111]/5 rounded-xl px-4 py-2.5 font-mono shadow-sm">
                <p className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                  Jasper Okhipo
                </p>
                <p className="text-[10px] text-[#111111]/60 font-bold tracking-wider mt-0.5">
                  Founder · JpDev.STUDIO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Clear Positioning */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2 font-mono">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2A5D9E] block">
              // ABOUT ME
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111111]">
              Building tools that simplify business.
            </h1>
          </div>

          <div className="font-sans text-base text-[#111111]/80 space-y-4 leading-relaxed">
            <p>
              I build practical software systems for businesses that want more ownership, less operational friction, and fewer recurring platform costs.
            </p>
            <p>
              During my NYSC year, I am using this period as an experimentation runway to design, ship, and document digital products entirely in public.
            </p>
            <p>
              My focus is straightforward: engineering custom tools, clear ordering workflows, and lightweight setups that solve real everyday problems for operations and creators.
            </p>
          </div>
        </div>

      </section>

      <hr className="border-[#111111]/10" />

      {/* SECTION 03: WHAT I BUILD (Approachable Columns) */}
      <section className="space-y-6">
        <span className="text-[10px] font-mono font-bold text-[#111111]/40 uppercase tracking-widest block">
          // CAPABILITIES
        </span>
        <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111] font-mono">
          What I Build
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-6 rounded-2xl border border-[#111111]/5 space-y-3 font-mono">
            <h3 className="text-xs font-bold uppercase text-[#2A5D9E]">Commerce Systems</h3>
            <p className="text-xs text-[#111111]/60 font-sans leading-relaxed">
              Instant digital catalogs, structured inventory lookups, and lightweight ordering processes that replace messy messages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#111111]/5 space-y-3 font-mono">
            <h3 className="text-xs font-bold uppercase text-[#2A5D9E]">Automation Tools</h3>
            <p className="text-xs text-[#111111]/60 font-sans leading-relaxed">
              Custom price calculators, automated multi-channel lead routing, and connected webhooks that clear out admin work.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#111111]/5 space-y-3 font-mono">
            <h3 className="text-xs font-bold uppercase text-[#2A5D9E]">Learning Platforms</h3>
            <p className="text-xs text-[#111111]/60 font-sans leading-relaxed">
              Independent knowledge hubs, user dashboards, and custom progress trackers designed around step-by-step content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#111111]/5 space-y-3 font-mono">
            <h3 className="text-xs font-bold uppercase text-[#2A5D9E]">Creator Tools</h3>
            <p className="text-xs text-[#111111]/60 font-sans leading-relaxed">
              Clean asset generators, distribution engines, and automated media utilities tailored for smooth workflows.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 04: STUDIO TRAJECTORY TIMELINE */}
      <section className="space-y-6 bg-white border border-[#111111]/5 rounded-2xl p-8 md:p-12 shadow-sm">
        <span className="text-[10px] font-mono font-bold text-[#111111]/40 uppercase tracking-widest block">
          // TRAJECTORY
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
          
          <div className="space-y-2">
            <span className="text-sm font-bold text-[#2A5D9E]">2025</span>
            <h4 className="font-bold uppercase text-[#111111]">Core Fundamentals</h4>
            <p className="font-sans text-xs text-[#111111]/60 leading-relaxed">
              Learning modern frontend development, diving into reactive frameworks, and experimenting with basic digital products.
            </p>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#111111]/10 pt-4 md:pt-0 md:pl-8">
            <span className="text-sm font-bold text-[#2A5D9E]">2026 (NYSC)</span>
            <h4 className="font-bold uppercase text-[#111111]">Studio Launch</h4>
            <p className="font-sans text-xs text-[#111111]/60 leading-relaxed">
              Launching JPDEV.STUDIO and building software publicly while experimenting with ideas that evolve into standalone tools.
            </p>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#111111]/10 pt-4 md:pt-0 md:pl-8">
            <span className="text-sm font-bold text-[#2A5D9E]">Next Stage</span>
            <h4 className="font-bold uppercase text-[#111111]">Product Studio</h4>
            <p className="font-sans text-xs text-[#111111]/60 leading-relaxed">
              Growing into a focused product studio serving independent businesses, online creators, and local operators.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 05: CURRENTLY BUILDING LOG */}
      {activeBuilds.length > 0 && (
        <section className="space-y-4">
          <span className="text-[10px] font-mono font-bold text-[#111111]/40 uppercase tracking-widest block">
            // CURRENT BUILDS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {activeBuilds.map((project) => (
              <Link 
                to={`/work/${project.slug}`} 
                key={project.slug}
                className="flex items-center justify-between p-4 bg-white border border-[#111111]/5 rounded-xl transition-all duration-300 hover:border-[#2A5D9E]/30 hover:scale-[1.01] hover:shadow-sm"
              >
                <div className="space-y-0.5">
                  <span className="text-[9px] text-[#2A5D9E] font-bold uppercase">// ACTIVE LAB WORK</span>
                  <p className="text-sm font-bold uppercase text-[#111111]">{project.title}</p>
                </div>
                <span className="text-[10px] font-bold text-[#2A5D9E] bg-[#2A5D9E]/5 px-2.5 py-1 rounded">
                  WIP
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 06: CLEAN TRUST CTA */}
      <section className="bg-white border border-[#111111]/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto space-y-6 font-mono shadow-sm">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-[#2A5D9E] tracking-widest block uppercase">// HAVE AN IDEA?</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight text-[#111111]">
            Let's turn it into software.
          </h2>
        </div>
        <div>
          <Link 
            to="/contact" 
            className="inline-block text-xs font-bold bg-[#111111] text-white px-6 py-3 rounded transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider hover:bg-[#2A5D9E] hover:shadow-lg"
          >
            Start a Project
          </Link>
        </div>
      </section>

    </div>
  );
}