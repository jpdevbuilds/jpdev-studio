import { Link } from 'react-router-dom';

// src/components/BentoGrid/BentoCTA.tsx
export default function BentoCTA() {
  return (
    <div className="md:col-span-6 md:row-span-1 bg-black text-white p-6 rounded-3xl flex flex-col justify-center space-y-1 font-mono hover:bg-[#2A5D9E] transition-colors">
      <Link to="/contact" className="text-xs font-bold uppercase tracking-wider block">
        Start an automation project ➔
      </Link>
      <span className="text-[9px] text-white/50">Tell me what’s slowing your business down.</span>
    </div>
  );
}