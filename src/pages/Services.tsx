import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="w-full space-y-16 py-12 md:py-20">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="max-w-2xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2A5D9E] block">
          // CAPABILITIES
        </span>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-[#111111] font-mono">
          Digital Systems Blueprint
        </h1>
        <p className="text-base text-[#111111]/70 font-sans leading-relaxed">
          I design and engineer independent web software architectures built around how your business naturally operates. Every system is built for full client ownership—meaning no bloated third-party platforms, zero commission fees, and minimal maintenance overhead.
        </p>
      </div>

      <hr className="border-[#111111]/10" />

      {/* 2. THE SERVICES MATRIX */}
      <div className="space-y-12">
        
        {/* SYSTEM 01: COMMERCE SYSTEMS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-[#111111]/5 pb-12">
          <div className="md:col-span-4 font-mono">
            <span className="text-xs font-bold text-[#2A5D9E] block">01 / CAPABILITY</span>
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111] mt-1">Commerce Systems</h2>
            <p className="text-[11px] text-[#111111]/50 uppercase tracking-wider font-bold mt-2">Best for: Independent Retail, B2B Wholesalers, Inventory Display</p>
          </div>
          
          <div className="md:col-span-8 space-y-6 font-sans text-sm text-[#111111]/80">
            <p className="leading-relaxed">
              Replaces messy PDF catalogs, scattered WhatsApp product photos, and manual checkout messages with a fast, cohesive interface. Your customers browse live data, filter by product collections, and place structured order inquiries that go directly to your operational dashboards.
            </p>
            <div className="bg-white p-6 rounded-xl border border-[#111111]/5 space-y-3 font-mono text-xs">
              <span className="text-[10px] font-bold text-[#2A5D9E] tracking-widest block uppercase">// STANDARD ARCHITECTURE INCLUDES</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#111111]/70 font-sans">
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Mobile-optimized listing matrices</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Instant keyword filtering & indexing</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Lightweight client-side shopping bags</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Structured WhatsApp / Email dispatch pipelines</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* SYSTEM 02: AUTOMATION SYSTEMS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-[#111111]/5 pb-12">
          <div className="md:col-span-4 font-mono">
            <span className="text-xs font-bold text-[#2A5D9E] block">02 / CAPABILITY</span>
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111] mt-1">Automation Tools</h2>
            <p className="text-[11px] text-[#111111]/50 uppercase tracking-wider font-bold mt-2">Best for: Service Providers, Agencies, Operations Management</p>
          </div>
          
          <div className="md:col-span-8 space-y-6 font-sans text-sm text-[#111111]/80">
            <p className="leading-relaxed">
              Eliminates the friction of manual data collection and repetitive operational work. I build lightweight client lead routers, dynamic price and cost calculators, structured contract generators, and custom API sync tools that sit directly inside your native workflow pipelines.
            </p>
            <div className="bg-white p-6 rounded-xl border border-[#111111]/5 space-y-3 font-mono text-xs">
              <span className="text-[10px] font-bold text-[#2A5D9E] tracking-widest block uppercase">// STANDARD ARCHITECTURE INCLUDES</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#111111]/70 font-sans">
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Custom logic calculation calculators</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Multi-source webhook integrations</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Automated pipeline intake routers</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Independent database collection environments</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* SYSTEM 03: MODULAR LEARNING ENVIRONMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-4">
          <div className="md:col-span-4 font-mono">
            <span className="text-xs font-bold text-[#2A5D9E] block">03 / CAPABILITY</span>
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111] mt-1">Learning Platforms</h2>
            <p className="text-[11px] text-[#111111]/50 uppercase tracking-wider font-bold mt-2">Best for: Instructors, Coaching Businesses, Internal Team Training</p>
          </div>
          
          <div className="md:col-span-8 space-y-6 font-sans text-sm text-[#111111]/80">
            <p className="leading-relaxed">
              Ditches clunky, expensive online course platforms that cut into your margins. I design clean educational roadmaps, curated resource repositories, progress trackers, and secure document sandboxes so your content looks elegant and performs instantly.
            </p>
            <div className="bg-white p-6 rounded-xl border border-[#111111]/5 space-y-3 font-mono text-xs">
              <span className="text-[10px] font-bold text-[#2A5D9E] tracking-widest block uppercase">// STANDARD ARCHITECTURE INCLUDES</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#111111]/70 font-sans">
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Interactive pathway mapping dashboards</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Fast media-optimized grid hubs</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Persistent local state progress caching</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#2A5D9E] font-bold">•</span><span>Protected file/asset delivery rules</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* 3. PHILOSOPHY / ASSURANCE CTA */}
      <section className="bg-[#111111] text-white rounded-xl p-8 md:p-12 space-y-6 text-center max-w-4xl mx-auto font-mono">
        <span className="text-[10px] font-bold text-[#FFD166] tracking-widest block uppercase">// THE GUARANTEE</span>
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-mono">
          Full Codebase & Asset Ownership
        </h2>
        <p className="text-xs sm:text-sm text-white/70 font-sans max-w-xl mx-auto leading-relaxed">
          I deploy your final product infrastructure to serverless ecosystems underneath your own names. You receive full access keys and original codebases. No surprise maintenance licenses, no locked proprietary ecosystems.
        </p>
        <div className="pt-2">
          <Link 
            to="/contact" 
            className="inline-block text-xs font-bold bg-white text-[#111111] px-6 py-3 rounded hover:bg-[#FFD166] transition-colors uppercase tracking-wider"
          >
            Discuss a Project
          </Link>
        </div>
      </section>

    </div>
  );
}