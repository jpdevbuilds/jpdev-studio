// src/config/data.ts

export const TECH_STACK = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma", "Supabase", "OpenAI", "Vercel", "Framer Motion"];

export const STUDIO_PRODUCTS = [
  {
    id: "smart-catalog",
    category: "Commerce Systems",
    bgClass: "bg-blue-50 text-[#2A5D9E]",
    title: "Smart Catalog",
    description: "Custom storefronts that help vendors showcase products and receive organized WhatsApp orders instantly.",
    stack: "React / Next.js",
    status: "Available Now"
  },
  {
    id: "skillnest",
    category: "Learning Platforms",
    bgClass: "bg-purple-50 text-purple-600",
    title: "SkillNest",
    description: "A personalized learning platform for guided education, built for seamless content delivery and progress tracking.",
    stack: "TypeScript / Tailwind",
    status: "Private Product"
  },
  {
    id: "carousel-architect",
    category: "Content Automation",
    bgClass: "bg-orange-50 text-orange-600",
    title: "AI Carousel Architect",
    description: "AI-powered internal tools for creating high-converting social media carousels and marketing assets faster.",
    stack: "Next.js / AI Pipeline",
    status: "Internal Tool"
  }
];

export const SELECTED_WORK = [
  { name: "Smart Catalog", desc: "A sleek storefront designed to help vendors showcase inventory and sell directly through WhatsApp.", tags: ["Built in 2 Weeks", "Next.js", "WhatsApp API"] },
  { name: "SkillNest", desc: "A clean, modern learning platform built for premium, structured online educational experiences.", tags: ["React", "Tailwind CSS", "Premium UI"] },
  { name: "AI Carousel Architect", desc: "Automated media layout systems optimized for lightning-fast visual asset distribution.", tags: ["AI Pipeline", "TypeScript", "Vercel Live"] },
  { name: "OmniPost", desc: "A functional rich text document editor combined with an advanced social media feed simulator.", tags: ["Editor Architecture", "Figma Variables"] }
];

export const TEMPLATES = {
  "Fashion Storefront": {
    themeColor: "#2A5D9E",
    bgStyle: "bg-[#F1EFE7]", 
    cardStyle: "rounded-3xl border border-stone-200/60 shadow-sm",
    badge: "✨ Premium Collection",
    items: [
      { name: "Luxury Silk Abaya", price: "45,000", desc: "Premium grade fabric with minimal embroidery." },
      { name: "Suede Ankle Boots", price: "32,000", desc: "Handcrafted leather soles, tailored fit." }
    ]
  },
  "Hardware Store": {
    themeColor: "#EA580C",
    bgStyle: "bg-slate-50",
    cardStyle: "rounded-none border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]",
    badge: "⚡ In Stock",
    items: [
      { name: "20V Cordless Drill Kit", price: "85,000", desc: "Includes 2Ah battery pack and heavy-duty case." },
      { name: "Industrial Grade Leveler", price: "14,500", desc: "Magnetic steel edge with shockproof vials." }
    ]
  },
  "Food Delivery Catalog": {
    themeColor: "#16A34A",
    bgStyle: "bg-emerald-50/40",
    cardStyle: "rounded-xl border border-emerald-100 shadow-md shadow-emerald-900/5",
    badge: "🔥 Best Seller",
    items: [
      { name: "Smoked Jollof & Grilled Chicken", price: "6,500", desc: "Served with sweet plantains and fresh coleslaw." },
      { name: "Gourmet Beef Burger Bundle", price: "8,000", desc: "Double patty, signature sauce, rustic fries." }
    ]
  }
};

// Pricing matrix matching System + Budget Scale
export const PRICING_MATRIX: Record<string, Record<string, string>> = {
  "Commerce System": {
    "1-2 Weeks (Rapid Sprint Build)": "₦250,000",
    "3-4 Weeks (Full Core Launch)": "₦450,000",
  },
  "Content Automation Engine": {
    "1-2 Weeks (Rapid Sprint Build)": "₦350,000",
    "3-4 Weeks (Full Core Launch)": "₦600,000",
  },
  "Custom Digital Product Suite": {
    "1-2 Weeks (Rapid Sprint Build)": "₦650,000",
    "3-4 Weeks (Full Core Launch)": "₦1,200,000",
  }
};