import { TECH_STACK } from '../config/data';

export default function Marquee() {
  return (
    <div className="bg-white border-y border-[rgba(17,17,17,0.06)] py-6 overflow-hidden flex">
      <div className="flex gap-16 animate-[marquee_40s_linear_infinite] shrink-0">
        {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
          <span key={idx} className="text-sm font-mono tracking-wider font-bold text-gray-400 uppercase flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>{tech}
          </span>
        ))}
      </div>
    </div>
  );
}