export default function Products() {
  const systems = [
    {
      num: "01",
      name: "Custom Storefront Systems",
      subtitle: "For brands scaling product lines online",
      description: "A fast, standalone checkout catalog that enables customers to instantly select goods and dispatch completely structured orders directly into your sales line.",
      timeline: "2–4 Weeks",
      price: "From ₦250k"
    },
    {
      num: "02",
      name: "Pricing & Proposal Engines",
      subtitle: "For modern service-based businesses",
      description: "Interactive parameter estimators that let potential leads pick sizes, options, or metrics, instantly outputting a firm quote value without back-and-forth emails.",
      timeline: "2 Weeks",
      price: "From ₦200k"
    }
  ];

  return (
    <section id="services" className="w-full clear-both block">
      {/* Demystified Landing Text */}
      <div className="mb-16">
        <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: '#2A5D9E' }}>
          01 // WORKFLOW SOLUTIONS
        </span>
        <h2 className="text-4xl font-bold uppercase tracking-tight text-[#111111]">
          Systems We Build
        </h2>
        <p className="text-sm mt-3 max-w-xl text-[#111111]/60 leading-relaxed font-sans">
          Practical digital systems built around your specific business operations. Every build includes full codebase ownership, custom layout styling, and zero hidden platform overhead.
        </p>
      </div>

      {/* Systems Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {systems.map((sys) => (
          <div 
            key={sys.num} 
            className="bg-white border border-[rgba(17,17,17,0.06)] p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-8 hover:border-[#111111]/15 transition-all"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-[rgba(17,17,17,0.06)] text-[10px] font-bold uppercase tracking-wider text-[#111111]/40 font-mono">
                <span>SYSTEM TYPE // {sys.num}</span>
                <span className="text-[#2A5D9E]">{sys.timeline} Delivery</span>
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
                {sys.name}
              </h3>
              <p className="text-[11px] font-semibold text-[#2A5D9E]/80 uppercase tracking-wider font-sans -mt-1">
                {sys.subtitle}
              </p>
              <p className="text-xs text-[#111111]/60 leading-relaxed font-sans pt-1">
                {sys.description}
              </p>
            </div>

            {/* Price Anchors and Direct Action Call */}
            <div className="pt-4 border-t border-[rgba(17,17,17,0.04)] flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold text-[#111111]/40 uppercase tracking-widest font-mono">Investment</p>
                <p className="text-base font-black text-[#111111] mt-0.5">{sys.price}</p>
              </div>
              
              <a 
                href="/contact" 
                className="bg-[#111111] hover:bg-[#2A5D9E] text-white text-[10px] font-bold uppercase tracking-widest py-3 px-5 rounded-xl transition-colors text-center"
              >
                Inquire About This Build
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}