export default function BentoStats() {
  return (
    <div className="md:col-span-4 md:row-span-1 bg-white border border-[#111111]/5 rounded-3xl p-6 flex items-center justify-between shadow-sm font-mono">
      <div className="text-center">
        <span className="block text-2xl font-bold text-[#2A5D9E]">7</span>
        <span className="text-[9px] font-bold uppercase text-[#111111]/40">Shipping</span>
      </div>
      <div className="text-center">
        <span className="block text-2xl font-bold text-[#2A5D9E]">3+</span>
        <span className="text-[9px] font-bold uppercase text-[#111111]/40">Learning</span>
      </div>
      <div className="text-center">
        <span className="block text-xl font-bold text-[#111111]">NYSC</span>
        <span className="text-[9px] font-bold uppercase text-[#111111]/40">Active</span>
      </div>
    </div>
  );
}