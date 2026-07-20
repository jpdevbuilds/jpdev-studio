export default function Hero() {
  return (
    <section className="w-full pt-8 flex flex-col items-center text-center">
      {/* Strategic Studio Position */}
      <span className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 px-3 py-1 bg-[#111111]/5 rounded-md text-[#111111]/60">
        // Digital Systems & Experience Studio
      </span>

      {/* High-Intent Headline */}
      <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#111111] max-w-4xl leading-[0.95]">
        Sell Faster Online.<br />Own Your System.
      </h1>

      {/* Concretized Subheadline Addressing Direct Pain Points */}
      <p className="text-sm md:text-base mt-6 max-w-2xl text-[#111111]/70 font-sans leading-relaxed">
        We build custom digital tools and storefronts that help growing brands sell directly through WhatsApp, completely own their checkout experience, and eliminate recurring monthly platform fees or marketplace rules.
      </p>

      {/* Direct Response CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <a 
          href="/services" 
          className="px-8 py-3.5 bg-[#111111] text-white text-xs uppercase font-bold tracking-wider rounded-xl hover:bg-[#2A5D9E] transition-colors w-full sm:w-auto text-center"
        >
          Explore Commerce Systems
        </a>
        <a 
          href="/Discovery" 
          className="px-8 py-3.5 bg-white border border-[rgba(17,17,17,0.12)] text-[#111111] text-xs uppercase font-bold tracking-wider rounded-xl hover:bg-white/60 transition-colors w-full sm:w-auto text-center"
        >
          Book a System Consultation
        </a>
      </div>

      {/* --- REAL-WORLD CONVERSION TRUST SIGNALS --- */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[11px] font-bold tracking-wider uppercase text-[#111111]/50 font-mono">
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#2A5D9E' }}>✓</span> Fully Owned Codebase
        </div>
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#2A5D9E' }}>✓</span> Zero Monthly Fees
        </div>
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#2A5D9E' }}>✓</span> Direct WhatsApp Ordering
        </div>
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#2A5D9E' }}>✓</span> Managed Launch Deployment
        </div>
      </div>

      {/* Browser Viewport Visual Proof Canvas */}
      <div className="w-full max-w-5xl mt-16 relative px-2 md:px-0">
        <div className="absolute inset-0 bg-[#2A5D9E]/5 blur-3xl rounded-3xl -z-10 transform scale-95" />
        
        <div className="w-full bg-white border border-[rgba(17,17,17,0.12)] rounded-2xl shadow-xl overflow-hidden text-left">
          {/* Top Window UI bar */}
          <div className="bg-[#F1EFE7]/60 border-b border-[rgba(17,17,17,0.08)] px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/10" />
            </div>
            <div className="bg-white/80 border border-black/5 text-[10px] font-medium font-sans px-10 py-0.5 rounded-md text-[#111111]/40 tracking-tight">
              preview.jpdev.studio/storefront-canvas
            </div>
            <div className="w-4" />
          </div>

          {/* Luxury Visual Frame Layout */}
          <div className="p-6 md:p-10 bg-[#F1EFE7]/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 bg-white border border-black/5 rounded text-[#2A5D9E]">
                Active Preview Blueprint
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111111] leading-none">
                The Minimalist <br />Boutique
              </h3>
              <p className="text-xs text-[#111111]/50 font-sans leading-relaxed">
                A lightning-fast standalone storefront layout. Orders are calculated automatically and routed cleanly into backend business operations.
              </p>
              <div className="w-12 h-[2px]" style={{ backgroundColor: '#2A5D9E' }} />
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-black/5 p-4 rounded-xl">
                <div className="w-full h-32 rounded-lg mb-3 bg-[#E3DFD5]" />
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-[11px] font-bold text-[#111111] uppercase tracking-tight">Structured Jacket</h4>
                    <p className="text-[10px] text-[#111111]/40 font-sans mt-0.5">Apparel // 01</p>
                  </div>
                  <span className="text-xs font-bold text-[#2A5D9E]">₦85,000</span>
                </div>
              </div>

              <div className="bg-white border border-black/5 p-4 rounded-xl hidden sm:block">
                <div className="w-full h-32 rounded-lg mb-3 bg-[#D1C9BC]" />
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-[11px] font-bold text-[#111111] uppercase tracking-tight">Tailored Trouser</h4>
                    <p className="text-[10px] text-[#111111]/40 font-sans mt-0.5">Apparel // 02</p>
                  </div>
                  <span className="text-xs font-bold text-[#2A5D9E]">₦60,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}