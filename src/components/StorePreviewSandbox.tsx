import { useState } from 'react';

const INDUSTRY_PRESETS = {
  fashion: {
    title: "The Atelier",
    tagline: "Curated Contemporary Essentials",
    products: [
      { id: 'f1', name: "Minimalist Linen Blazer", priceNaira: 75000, color: "#E3DFD5" },
      { id: 'f2', name: "Raw Denim Utility Pant", priceNaira: 55000, color: "#D1C9BC" }
    ]
  },
  lifestyle: {
    title: "Objects & Space",
    tagline: "Form and Function for Modern Living",
    products: [
      { id: 'l1', name: "Travertine Incense Vessel", priceNaira: 32000, color: "#EAE6DF" },
      { id: 'l2', name: "Hand-Blown Glass Decanter", priceNaira: 48000, color: "#DACFBA" }
    ]
  }
};

export default function StorePreviewSandbox() {
  const [businessName, setBusinessName] = useState("Studio Concept");
  const [industry, setIndustry] = useState<keyof typeof INDUSTRY_PRESETS>("fashion");
  const [themeColor, setThemeColor] = useState("#2A5D9E"); 
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  
  const [showCart, setShowCart] = useState(true);
  const [showReviews, setShowReviews] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  const [cartCount, setCartCount] = useState(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Record<string, Array<{name: string, text: string}>>>({
    'f1': [{ name: "Adegoke O.", text: "The tailoring is exceptional. Clean seams." }]
  });
  
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerText, setReviewerText] = useState("");
  const [activeReviewProductId, setActiveReviewProductId] = useState<string | null>(null);

  const currentPreset = INDUSTRY_PRESETS[industry];
  const EXCHANGE_RATE = 1500; 

  const formatPrice = (naira: number) => {
    if (currency === 'USD') {
      return `$${(naira / EXCHANGE_RATE).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    }
    return `₦${naira.toLocaleString()}`;
  };

  const handleAddToCart = (productId: string) => {
    setCartCount(prev => prev + 1);
    setAddedItem(productId);
    setTimeout(() => setAddedItem(null), 1200);
  };

  const handleAddReview = (productId: string) => {
    if (!reviewerName.trim() || !reviewerText.trim()) return;
    setReviews(prev => ({
      ...prev,
      [productId]: [...(prev[productId] || []), { name: reviewerName, text: reviewerText }]
    }));
    setReviewerName("");
    setReviewerText("");
    setActiveReviewProductId(null);
  };

  return (
    <section className="w-full clear-both block">
      {/* Enhanced Section Header */}
      <div className="mb-16">
        <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: '#2A5D9E' }}>
          01 // LIVE CAPABILITY DEMO
        </span>
        <h2 className="text-4xl font-bold uppercase tracking-tight text-[#111111]">
            Storefront Preview Canvas
        </h2>
        <p className="text-base mt-3 max-w-2xl text-[#111111]/60 leading-relaxed font-sans">
          Toggle client settings inside the configuration engine below to preview how the underlying architecture dynamically scales interface state, currency logic, and customer touchpoints in real time.
        </p>
      </div>

      {/* Re-proportioned Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* LEFT PANEL: Padded System Controller */}
        <div className="lg:col-span-4 bg-white border border-[rgba(17,17,17,0.06)] p-8 rounded-2xl shadow-sm space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider pb-3 border-b border-[rgba(17,17,17,0.06)] text-[#111111]">
              System Configuration
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]/40 mb-2">Brand Identity</label>
              <input 
                type="text" 
                value={businessName} 
                onChange={(e) => setBusinessName(e.target.value)} 
                className="w-full border border-[rgba(17,17,17,0.06)] px-4 py-2.5 text-sm rounded-xl bg-[#F1EFE7]/40 text-[#111111] font-medium tracking-tight focus:outline-none focus:border-[#2A5D9E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]/40 mb-2">Industry Matrix</label>
              <div className="relative">
                <select 
                  value={industry} 
                  onChange={(e) => setIndustry(e.target.value as any)}
                  className="w-full border border-[rgba(17,17,17,0.06)] px-4 py-2.5 text-sm rounded-xl bg-[#F1EFE7]/40 text-[#111111] font-medium tracking-tight focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="fashion">Boutique & Apparel</option>
                  <option value="lifestyle">Premium Living & Objects</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]/40 mb-2">Dynamic Color Token</label>
              <div className="flex gap-2.5 pt-1">
                {["#2A5D9E", "#FFD166", "#111111"].map(color => (
                  <button 
                    key={color}
                    onClick={() => setThemeColor(color)}
                    className="w-6 h-6 rounded-full border transition-all"
                    style={{ 
                      backgroundColor: color,
                      border: themeColor === color ? '2px solid #111111' : '1px solid rgba(17,17,17,0.15)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Customer Facing Feature Switches */}
          <div className="pt-6 border-t border-[rgba(17,17,17,0.06)] space-y-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#111111]/40 mb-2">Functional Modules</span>
            
            <label className="flex items-center gap-3 text-sm text-[#111111]/80 cursor-pointer select-none font-sans font-medium">
              <input type="checkbox" checked={showCart} onChange={() => setShowCart(!showCart)} className="w-4 h-4 rounded border-[rgba(17,17,17,0.15)] text-[#2A5D9E] focus:ring-0" />
              <span>Shopping Cart Layer</span>
            </label>

            <label className="flex items-center gap-3 text-sm text-[#111111]/80 cursor-pointer select-none font-sans font-medium">
              <input type="checkbox" checked={showReviews} onChange={() => setShowReviews(!showReviews)} className="w-4 h-4 rounded border-[rgba(17,17,17,0.15)] text-[#2A5D9E] focus:ring-0" />
              <span>Customer Reviews System</span>
            </label>

            <label className="flex items-center gap-3 text-sm text-[#111111]/80 cursor-pointer select-none font-sans font-medium">
              <input type="checkbox" checked={showWhatsApp} onChange={() => setShowWhatsApp(!showWhatsApp)} className="w-4 h-4 rounded border-[rgba(17,17,17,0.15)] text-[#2A5D9E] focus:ring-0" />
              <span>WhatsApp Direct Ordering</span>
            </label>
          </div>
        </div>

        {/* RIGHT PANEL: High-Authority Canvas Display */}
        <div className="lg:col-span-8 bg-white border border-[rgba(17,17,17,0.06)] rounded-2xl overflow-hidden shadow-sm flex flex-col w-full">
          
          <div className="bg-[#111111]/5 border-b border-[rgba(17,17,17,0.04)] px-6 py-3.5 text-[#111111]/40 text-xs uppercase font-bold tracking-widest flex justify-between items-center">
            <span>Core Canvas Frame</span>
            <span style={{ color: '#2A5D9E' }}>Active Client Render</span>
          </div>

          <div className="bg-[#F1EFE7]/40 p-8 min-h-[520px] w-full box-border flex flex-col justify-between">
            
            {/* Extended Clean Sub-Nav */}
            <div className="bg-white p-5 rounded-xl border border-[rgba(17,17,17,0.04)] flex items-center justify-between gap-4 shadow-xs mb-8">
              <div className="overflow-hidden">
                <h4 className="text-base font-bold text-[#111111] uppercase tracking-tight truncate">{businessName || "Untitled Store"}</h4>
                <p className="text-sm text-[#111111]/40 italic tracking-tight font-sans truncate">{currentPreset.tagline}</p>
              </div>
              
              <div className="flex items-center gap-3 flex-shrink-0">
                <button 
                  onClick={() => setCurrency(prev => prev === 'NGN' ? 'USD' : 'NGN')}
                  className="bg-[#111111] text-white text-xs px-3.5 py-2 rounded-lg uppercase font-bold tracking-wider hover:opacity-90 transition-opacity"
                >
                  {currency === 'NGN' ? '→ $ USD' : '→ ₦ NGN'}
                </button>

                {showCart && (
                  <div className="text-xs font-bold px-4 py-2 rounded-lg shadow-xs text-[#111111] flex items-center gap-2" style={{ backgroundColor: '#FFD166' }}>
                    <span>Shopping Cart</span>
                    <span className="bg-[#111111] text-white rounded-md px-2 py-0.5 text-xs font-black">{cartCount}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Imposing High-Authority Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full box-border items-stretch">
              {currentPreset.products.map(prod => (
                <div key={prod.id} className="bg-white border border-[rgba(17,17,17,0.04)] rounded-xl p-6 flex flex-col justify-between shadow-xs box-border overflow-hidden">
                  
                  <div>
                    {/* Imposing solid frame placeholder to act as premium canvas item */}
                    <div 
                      className="w-full min-h-[180px] rounded-lg mb-4 flex items-center justify-center border border-[rgba(17,17,17,0.02)] transition-colors" 
                      style={{ backgroundColor: prod.color }}
                    >
                      <span className="text-xs uppercase tracking-widest text-[#111111]/25 font-bold">Product Blueprint Frame</span>
                    </div>

                    <h5 className="text-sm font-bold text-[#111111] tracking-tight truncate">{prod.name}</h5>
                    <p className="text-sm font-bold mt-1" style={{ color: themeColor }}>
                      {formatPrice(prod.priceNaira)}
                    </p>
                  </div>

                  {/* Modules Column Stack */}
                  <div className="mt-6 space-y-3 w-full">
                    
                    {showReviews && (
                      <div className="pt-3 border-t border-[rgba(17,17,17,0.04)] text-xs font-sans">
                        <div className="max-h-24 overflow-y-auto space-y-1.5 bg-[#F1EFE7]/30 p-3 rounded-lg text-[#111111]/80 mb-2">
                          {(!reviews[prod.id] || reviews[prod.id].length === 0) && (
                            <p className="text-[#111111]/40 italic text-xs">No client ledger logs written.</p>
                          )}
                          {reviews[prod.id]?.map((rev, idx) => (
                            <p key={idx} className="text-xs leading-relaxed">
                              <span className="font-bold border-b border-[#2A5D9E]/20" style={{ color: '#111111' }}>{rev.name}</span>: {rev.text}
                            </p>
                          ))}
                        </div>

                        {activeReviewProductId === prod.id ? (
                          <div className="bg-[#F1EFE7]/30 p-2.5 rounded-lg border border-[rgba(17,17,17,0.06)] space-y-2">
                            <input 
                              type="text" 
                              placeholder="Customer Name" 
                              value={reviewerName}
                              onChange={(e) => setReviewerName(e.target.value)}
                              className="w-full px-3 py-1.5 border border-[rgba(17,17,17,0.06)] text-xs rounded-lg bg-white text-[#111111] focus:outline-none"
                            />
                            <input 
                              type="text"
                              placeholder="Write a message..." 
                              value={reviewerText}
                              onChange={(e) => setReviewerText(e.target.value)}
                              className="w-full px-3 py-1.5 border border-[rgba(17,17,17,0.06)] text-xs rounded-lg bg-white text-[#111111] focus:outline-none"
                            />
                            <div className="flex gap-1 justify-end pt-1">
                              <button onClick={() => setActiveReviewProductId(null)} className="text-[10px] bg-gray-200 text-[#111111] px-2.5 py-1 rounded-md">Cancel</button>
                              <button onClick={() => handleAddReview(prod.id)} className="text-[10px] bg-[#111111] text-white px-2.5 py-1 rounded-md">Submit Entry</button>
                            </div>
                          </div>
                        ) : (
                          <button 
                            onClick={() => setActiveReviewProductId(prod.id)}
                            className="text-xs font-bold uppercase tracking-wider underline block text-[#2A5D9E] hover:opacity-80"
                          >
                            + Write Verified Review
                          </button>
                        )}
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5 pt-1">
                      <button 
                        onClick={() => handleAddToCart(prod.id)}
                        className="w-full text-white text-xs uppercase font-bold py-2.5 px-4 rounded-xl transition-all"
                        style={{ backgroundColor: themeColor }}
                      >
                        {addedItem === prod.id ? "✓ Added to Order" : "Add to Order"}
                      </button>

                      {showWhatsApp && (
                        <a 
                          href="#whatsapp"
                          onClick={(e) => e.preventDefault()}
                          className="w-full border border-[rgba(17,17,17,0.08)] bg-white text-center text-xs uppercase font-bold py-2 px-4 rounded-xl text-[#111111]/70 block hover:bg-gray-50 transition-colors"
                        >
                          💬 Route Order to WhatsApp
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}