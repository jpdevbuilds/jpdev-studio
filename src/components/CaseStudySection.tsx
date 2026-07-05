export default function CaseStudySection({ chaos, system, outcome }: { chaos: string, system: string, outcome: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      <div className="space-y-2">
        <h3 className="text-[10px] font-bold text-[#FFD166] uppercase tracking-widest">Chaos</h3>
        <p className="text-sm text-white/70 leading-relaxed">{chaos}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-[10px] font-bold text-[#FFD166] uppercase tracking-widest">System</h3>
        <p className="text-sm text-white/70 leading-relaxed">{system}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-[10px] font-bold text-[#FFD166] uppercase tracking-widest">Outcome</h3>
        <p className="text-sm text-white/70 leading-relaxed">{outcome}</p>
      </div>
    </div>
  );
}