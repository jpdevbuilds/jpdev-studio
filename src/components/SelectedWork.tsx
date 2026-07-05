import { SELECTED_WORK } from '../config/data';

export default function SelectedWork() {
  return (
    <section id="systems" className="scroll-mt-24">
      <div className="mb-12 border-b border-[rgba(17,17,17,0.06)] pb-6">
        <span className="text-xs font-semibold tracking-widest text-[#2A5D9E] uppercase block mb-1">03 // SELECTED WORK</span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Systems</h2>
      </div>
      <div className="divide-y divide-[rgba(17,17,17,0.08)]">
        {SELECTED_WORK.map((system, idx) => (
          <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-all duration-200">
            <div className="max-w-xl">
              <h3 className="font-bold text-lg text-gray-900 flex items-center gap-3">{system.name}<span className="text-xs font-mono text-gray-400 font-normal">2026</span></h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{system.desc}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {system.tags.map(t => (<span key={t} className="text-[10px] font-mono font-bold bg-white text-gray-400 px-2 py-0.5 border border-gray-100 rounded">{t}</span>))}
              <span className="text-xs font-semibold text-[#2A5D9E] sm:ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Explore →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}