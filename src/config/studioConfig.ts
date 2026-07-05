// src/config/studioConfig.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  nairaPrice: number;
  image: string;
  inStock: boolean;
  tags: string[];
}

export const STUDIO_DATA = {
  branding: {
    monogram: "JD",
    signature: "JpDev",
    companyName: "PRODUCTIZED STUDIOS",
    tagline: "Productized systems for modern businesses.",
    colors: {
      bg: "#F7F8FA",
      surface: "#FFFFFF",
      text: "#111111",
      muted: "#6B7280",
      primary: "#2A5D9E",
      border: "rgba(17,17,17,0.08)"
    }
  },
  capabilities: [
    "Product Design",
    "Frontend Engineering",
    "Rapid Prototyping",
    "AI Workflows",
    "Commerce Systems"
  ],
  process: [
    { step: "01", name: "Discover", desc: "Mapping core bottlenecks and defining product scope." },
    { step: "02", name: "Design", desc: "High-fidelity interactive prototypes built in Figma." },
    { step: "03", name: "Build", desc: "Production-grade development using Next.js and Tailwind." },
    { step: "04", name: "Ship", desc: "Continuous deployment, optimization, and handoff." }
  ],
  products: [
    {
      id: "prod_01",
      name: "Smart Catalog",
      category: "Commerce Systems",
      description: "High-speed digital catalog architecture with integrated local checkout pathways.",
      nairaPrice: 250000,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      inStock: true,
      tags: ["React", "Tailwind", "Next.js"]
    },
    {
      id: "prod_02",
      name: "WhatsApp Commerce Node",
      category: "Automation Tools",
      description: "Automated message generation pipeline connecting browser intent straight to conversion channels.",
      nairaPrice: 180000,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      inStock: true,
      tags: ["TypeScript", "Webhooks"]
    },
    {
      id: "prod_03",
      name: "AI Carousel Architect",
      category: "Content Platforms",
      description: "Industrial content serialization engine built for high-velocity distribution.",
      nairaPrice: 320000,
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
      inStock: true,
      tags: ["Next.js", "AI Pipeline"]
    }
  ]
};