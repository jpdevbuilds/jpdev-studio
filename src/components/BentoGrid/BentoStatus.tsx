// src/components/BentoGrid/BentoStatus.tsx
export default function BentoStatus() {
  return (
    <div className="md:col-span-3 md:row-span-1 bg-white border border-[#111111]/5 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/40">// CURRENT FOCUS</h3>
      <div className="font-mono text-xs text-[#111111] space-y-1">
        <p>→ Shipping <span className="text-[#2A5D9E]">SkillNest</span></p>
        <p>→ Refining <span className="text-[#2A5D9E]">Smart Catalog</span></p>
        <p>→ NYSC Service 2026</p>
      </div>
    </div>
  );
}