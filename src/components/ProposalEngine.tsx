import { useState } from 'react';
import { PRICING_MATRIX } from '../config/data';
import { supabase } from '../utils/supabaseClient';
import { sendDiscordAlert } from '../utils/discordNotifier';

export default function ProposalEngine() {
  const [product, setProduct] = useState("Commerce System");
  const [budget, setBudget] = useState("₦250k – ₦500k");
  const [timeline, setTimeline] = useState("1-2 Weeks (Rapid Sprint Build)");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const isEnterprise = budget === "₦1M+";
  const calculatedCost = isEnterprise ? "Custom Quote" : (PRICING_MATRIX[product]?.[timeline] || "Contact Studio");
  const calculatedDelivery = timeline.includes("1-2 Weeks") ? "7–10 Days" : "21 Days";

  const message = `Hello JpDev! I just generated a project estimate on your site.\n\nProject Details:\n- Business: ${businessName || 'Not Provided'}\n- Product Needed: ${product}\n- Target Budget: ${budget}\n- Timeline: ${timeline}`;
  const whatsappProposalUrl = `https://wa.me/2349042490292?text=${encodeURIComponent(message)}`;

  const handleProposalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!businessName || !phone) {
      setValidationError("Please enter your Business Name and Phone number to lock in your calculation.");
      return;
    }

    setIsSubmitting(true);

    const leadPayload = {
      business_name: businessName,
      contact_phone: phone,
      selected_system: product,
      estimated_budget: budget,
      selected_timeline: timeline,
      calculated_quote: calculatedCost
    };

    const { error } = await supabase
      .from('platform_leads')
      .insert([{ ...leadPayload, status: 'pending' }]);

    setIsSubmitting(false);

    if (error) {
      console.error("Database Error:", error.message);
      setValidationError("Database sync error. Please try clicking submit again.");
    } else {
      setSubmitSuccess(true);
      
      try {
        await sendDiscordAlert(leadPayload);
      } catch (discordErr) {
        console.error("Discord Notification relay bypass crash:", discordErr);
      }

      window.open(whatsappProposalUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 font-jasper">
      {/* Reframed Clean SME Header */}
      <div className="mb-12 border-b border-brand-dark/10 pb-6">
        <span className="text-xs font-bold tracking-widest text-brand-blue uppercase block mb-1">04 // PRICING CALCULATOR</span>
        <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase">Get an Instant Project Estimate</h2>
        <p className="text-xs text-brand-dark/60 mt-1 font-medium normal-case">
          Select your business needs below to calculate your estimated cost and delivery timeline immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side Form */}
        <div className="lg:col-span-6 bg-white border border-brand-dark/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <form onSubmit={handleProposalSubmit} className="space-y-5">
            
            {validationError && (
              <div className="p-3 bg-brand-warning/5 border border-brand-warning/20 text-brand-warning text-xs font-medium rounded-xl">
                {validationError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-brand-dark/40 uppercase mb-1.5">Your Business Name</label>
              <input 
                type="text" 
                value={businessName} 
                onChange={(e) => setBusinessName(e.target.value)} 
                placeholder="e.g. Amina's Boutique" 
                className="w-full bg-brand-bg/40 border border-brand-dark/5 p-3.5 text-xs rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white font-medium text-brand-dark transition-all" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark/40 uppercase mb-1.5">WhatsApp Number</label>
              <input 
                type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="e.g. 08012345678" 
                className="w-full bg-brand-bg/40 border border-brand-dark/5 p-3.5 text-xs rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white font-medium text-brand-dark transition-all" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark/40 uppercase mb-1.5">What are we building?</label>
              <select 
                value={product} 
                onChange={(e) => setProduct(e.target.value)} 
                className="w-full bg-brand-bg/40 border border-brand-dark/5 p-3.5 text-xs rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white font-medium text-brand-dark transition-all"
              >
                <option value="Commerce System">WhatsApp Storefront (Smart Catalog)</option>
                <option value="Content Automation Engine">Social Media Content Generator (AI Carousels)</option>
                <option value="Custom Digital Product Suite">Custom Website / Dynamic Portal System</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark/40 uppercase mb-1.5">What is your target budget range?</label>
              <select 
                value={budget} 
                onChange={(e) => setBudget(e.target.value)} 
                className="w-full bg-brand-bg/40 border border-brand-dark/5 p-3.5 text-xs rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white font-medium text-brand-dark transition-all"
              >
                <option value="₦250k – ₦500k">₦250k – ₦500k</option>
                <option value="₦500k – ₦1M">₦500k – ₦1M</option>
                <option value="₦1M+">₦1M+ (Custom Scale)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark/40 uppercase mb-1.5">Preferred Launch Timeline</label>
              <select 
                value={timeline} 
                onChange={(e) => setTimeline(e.target.value)} 
                className="w-full bg-brand-bg/40 border border-brand-dark/5 p-3.5 text-xs rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white font-medium text-brand-dark transition-all"
              >
                <option value="1-2 Weeks (Rapid Sprint Build)">1-2 Weeks (Fast-Track Build)</option>
                <option value="3-4 Weeks (Full Core Launch)">3-4 Weeks (Standard Production)</option>
              </select>
            </div>

            <div className="mt-8 pt-6 border-t border-[#111111]/10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#111111] hover:bg-[#2A5D9E] disabled:bg-[#111111]/40 text-white text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Saving Project Details...</span>
                ) : (
                  <>
                    <span>Lock Estimate & Send on WhatsApp</span>
                    <span className="text-[#FFD166]">→</span>
                  </>
                )}
              </button>
              
              <p className="text-[10px] text-center text-[#111111]/40 uppercase tracking-wider mt-3">
                Secure Client Portal Connection Active
              </p>
            </div>
          </form>
        </div>

        {/* Right Side Live Display Panel */}
        <div className="lg:col-span-6 bg-[#111111] border border-[#111111] rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue">AUTOMATED PROJECT ESTIMATE</span>
              <span className={`text-[9px] uppercase font-bold border px-2 py-0.5 rounded ${
                submitSuccess 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-white/5 text-brand-blue border-brand-blue/30'
              }`}>
                {submitSuccess ? "Confirmed" : "Live Estimate"}
              </span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <span className="text-[10px] text-white/40 block uppercase font-medium tracking-wide">Estimated Investment Cost</span>
                <span className="text-3xl font-bold tracking-tight mt-1 block text-white">{calculatedCost}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[10px] text-white/40 block uppercase font-medium tracking-wide">Target Delivery</span>
                  <span className="text-sm font-bold text-brand-bg mt-0.5 block">{isEnterprise ? "To Be Discussed" : calculatedDelivery}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block uppercase font-medium tracking-wide">Setup Type</span>
                  <span className="text-sm font-bold text-brand-bg mt-0.5 block">Managed & Hosted</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] text-white/40 block uppercase font-medium tracking-wide mb-2">Core Features Included</span>
                <div className="grid grid-cols-2 gap-y-1.5 text-xs text-white/60">
                  <span>• Responsive Design Layout</span>
                  <span>• WhatsApp Direct Ordering</span>
                  <span>• High-Speed Performance hosting</span>
                  <span>• 30-Day Technical Maintenance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-[10px] text-white/40 bg-black/30 p-3 rounded-lg border border-white/5 leading-normal truncate font-sans">
            {message}
          </div>
        </div>
      </div>
    </section>
  );
}