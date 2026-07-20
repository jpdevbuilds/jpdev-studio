// src/components/BentoGrid/BentoCTA.tsx

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BentoCTA() {
  return (
    <div className="md:col-span-6 md:row-span-1 bg-[#2A5D9E] text-[#F1EFE7] rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">

      {/* Label */}
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFD166]">
        // DISCOVERY
      </span>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight leading-tight">
          Let's examine your workflow.
        </h3>

        <p className="text-sm leading-7 text-[#F1EFE7]/80 max-w-md">
          Every engagement begins with understanding how your business
          currently operates before recommending software or automation.
        </p>
      </div>

      {/* CTA */}
      <div className="pt-6">
        <Link
          to="/discovery"
          className="inline-flex items-center gap-2 bg-[#FFD166] text-[#111111] px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Start Discovery
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}