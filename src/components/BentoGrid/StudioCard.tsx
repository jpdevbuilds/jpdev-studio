// src/components/BentoGrid/StudioCard.tsx
export const StudioCard = ({ children, className = "", label = "" }: { children: React.ReactNode, className?: string, label?: string }) => (
  <div className={`group relative bg-white border border-black/5 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${className}`}>
    {label && (
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40 mb-6 block">
        // {label}
      </span>
    )}
    {children}
  </div>
);