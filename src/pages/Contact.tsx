import React, { useState } from 'react';

export default function Contact() {
  const [systemType, setSystemType] = useState('commerce');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    scope: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Operational intake handler logic goes here
    console.log('Intake submitted:', { systemType, ...formData });
  };

  return (
    <div className="w-full space-y-16 py-12 md:py-20">
      
      {/* 1. INTRO HEADER */}
      <div className="max-w-2xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2A5D9E] block">
          // INTAKE PIPELINE
        </span>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-[#111111] font-mono">
          Start a Project
        </h1>
        <p className="text-base text-[#111111]/70 font-sans leading-relaxed">
          Ready to build an independent digital system that your business actually owns? Tell me a bit about how you currently operate manually and what you want to automate or scale.
        </p>
      </div>

      <hr className="border-[#111111]/10" />

      {/* 2. TWO-COLUMN INTAKE CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: THE INTENT FORM */}
        <form onSubmit={handleSubmit} className="md:col-span-8 space-y-8 font-mono text-xs">
          
          {/* System Selection Matrix Tabs */}
          <div className="space-y-3">
            <label className="font-bold text-[#111111]/40 uppercase tracking-wider block">
              01 / Select System Target Architecture
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'commerce', label: 'Commerce System' },
                { id: 'automation', label: 'Automation Tool' },
                { id: 'learning', label: 'Learning Platform' },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSystemType(type.id)}
                  className={`p-4 rounded-xl border text-left font-bold uppercase transition-all ${
                    systemType === type.id
                      ? 'border-[#2A5D9E] bg-[#2A5D9E]/5 text-[#2A5D9E]'
                      : 'border-[#111111]/5 bg-white text-[#111111]/70 hover:border-[#111111]/20'
                  }`}
                >
                  <span className="text-[10px] block opacity-50 mb-1">TYPE:</span>
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Input Fields */}
          <div className="space-y-6">
            <label className="font-bold text-[#111111]/40 uppercase tracking-wider block">
              02 / Project Metadata
            </label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[#111111]/60 uppercase text-[10px] block">Your Name *</span>
                <input
                  type="text"
                  required
                  placeholder="e.g., Alexander"
                  className="w-full bg-white border border-[#111111]/5 rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-[#2A5D9E] transition-colors text-[#111111]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <span className="text-[#111111]/60 uppercase text-[10px] block">Email Address *</span>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full bg-white border border-[#111111]/5 rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-[#2A5D9E] transition-colors text-[#111111]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[#111111]/60 uppercase text-[10px] block">Business or Project Name</span>
              <input
                type="text"
                placeholder="e.g., Acme Logistics"
                className="w-full bg-white border border-[#111111]/5 rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-[#2A5D9E] transition-colors text-[#111111]"
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <span className="text-[#111111]/60 uppercase text-[10px] block">Operational Problem / Scope Details *</span>
              <textarea
                required
                rows={5}
                placeholder="Describe what you want to build, how you currently handle it manually, and your ideal timeline..."
                className="w-full bg-white border border-[#111111]/5 rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-[#2A5D9E] transition-colors text-[#111111] leading-relaxed resize-none"
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
              />
            </div>
          </div>

          {/* Submission Execution */}
          <div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#111111] text-white hover:bg-[#2A5D9E] rounded font-bold uppercase tracking-wider transition-colors text-center"
            >
              Submit Intake Request
            </button>
          </div>
        </form>

        {/* RIGHT COLUMN: MANIFESTO / EXPECTATIONS CARD */}
        <div className="md:col-span-4 space-y-6 font-mono text-xs text-[#111111]/70">
          <div className="bg-white border border-[#111111]/5 rounded-xl p-6 space-y-4">
            <span className="text-[10px] font-bold text-[#2A5D9E] tracking-widest block uppercase">// RESPONSE POLICY</span>
            <h3 className="font-bold text-sm text-[#111111] uppercase">What happens next?</h3>
            
            <ul className="space-y-4 font-sans text-xs">
              <li className="flex items-start space-x-2">
                <span className="text-[#2A5D9E] font-mono font-bold">1.</span>
                <span><strong>Scope Review:</strong> I personally review your intake data within 24–48 hours to confirm structural alignment.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#2A5D9E] font-mono font-bold">2.</span>
                <span><strong>Discovery Call:</strong> If the fit is right, we’ll skip back-and-forth emails and jump straight on a short call to finalize parameters.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#2A5D9E] font-mono font-bold">3.</span>
                <span><strong>Static Proposal:</strong> You receive a locked scope document with a clear, fixed price and delivery milestone window.</span>
              </li>
            </ul>
          </div>

          <div className="px-4 text-[10px] uppercase text-[#111111]/40 leading-relaxed font-bold">
            ⚡ Independent systems mean no hidden fees. Once it ships, you own 100% of the codebase.
          </div>
        </div>

      </div>

    </div>
  );
}