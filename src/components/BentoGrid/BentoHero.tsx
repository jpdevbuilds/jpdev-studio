import { Link } from 'react-router-dom';

export default function BentoHero() {
  return (
    <div className="relative md:col-span-8 md:row-span-2 overflow-hidden rounded-3xl bg-[#1D3557] text-[#F1EFE7] p-10 md:p-14 flex flex-col justify-between border border-white/5">

      {/* Top */}
      <div className="space-y-8 relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD166]/90">
          // JPDEV.STUDIO
        </span>

        <h1 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          Operational systems for businesses that have outgrown manual work.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[#F1EFE7]/75">
          I design internal tools, knowledge systems, and workflow automation
          that replace fragmented operations with structured software built
          around the way your business actually works.
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-12 space-y-8">

        <div className="h-px bg-white/10" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
            <span>Operational Systems</span>
            <span>•</span>
            <span>Knowledge Platforms</span>
            <span>•</span>
            <span>Workflow Automation</span>
          </div>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/discovery"
              className="rounded-xl bg-[#FFD166] px-6 py-3 font-semibold text-[#1D3557] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0"
            >
              Start Discovery
            </Link>

            <Link
              to="/systems"
              className="rounded-xl border border-white/15 px-6 py-3 font-medium transition-all duration-200 hover:border-[#FFD166] hover:text-[#FFD166] hover:-translate-y-0.5"
            >
              Explore Systems
            </Link>

          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="absolute bottom-8 right-10 hidden lg:block font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
        Founder-led Systems Studio
      </div>

      {/* Decorative Glow */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2A5D9E]/25 blur-3xl" />

      <div className="absolute -bottom-32 left-20 h-72 w-72 rounded-full bg-[#FFD166]/10 blur-3xl" />
    </div>
  );
}