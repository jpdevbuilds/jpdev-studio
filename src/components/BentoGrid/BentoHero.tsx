// src/components/BentoGrid/BentoHero.tsx
export default function BentoHero() {
  return (
    <div className="md:col-span-8 md:row-span-2 bg-[#1d2440] text-white p-8 rounded-3xl flex flex-col justify-between border border-black/5 font-sans">
      <div className="space-y-4">
        <span className="text-[10px] font-bold text-[#FFD166] uppercase tracking-widest font-mono">
          // JpDev.STUDIO
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.2]">
          Operational software for businesses that have outgrown spreadsheets.
        </h1>
      </div>
      
      <div className="space-y-6">
        <p className="text-sm text-white/70 max-w-lg leading-relaxed">
          Stop managing your inventory, orders, and workflows in scattered chats. 
          We build custom digital systems designed specifically for your business. 
          <strong> You own the software. No subscriptions attached.</strong>
        </p>

        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 bg-[#FFD166] text-[#1d2440] font-bold text-sm rounded-xl hover:bg-white transition-colors"
        >
          Start a project
        </a>
      </div>
    </div>
  );
}