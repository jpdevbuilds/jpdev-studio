interface BentoProfileProps {
  image: string;
}

export default function BentoProfile({ image }: BentoProfileProps) {
  return (
    <div className="group relative md:col-span-4 md:row-span-2 overflow-hidden rounded-3xl bg-white border border-black/5 p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">

      {/* subtle engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#111111 0.8px, transparent 0.8px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">

        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">
          // Founder
        </span>

        <div className="flex-1 flex flex-col justify-center items-center text-center">

          <div className="w-28 h-28 rounded-full overflow-hidden border border-black/10 bg-[#F1EFE7] mb-6">
            <img
              src={image}
              alt="Jasper Okhipo"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#111111]">
            Jasper Okhipo
          </h2>

          <p className="mt-1 text-[11px] uppercase tracking-[0.24em] font-mono text-[#2A5D9E]">
            Founder · JPDEV.STUDIO
          </p>

          <p className="mt-6 max-w-xs text-sm leading-7 text-black/65">
            I design operational software that helps businesses replace
            fragmented workflows with systems that are easier to manage,
            scale, and improve over time.
          </p>

        </div>

      </div>

    </div>
  );
}