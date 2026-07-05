interface BentoProfileProps {
  image: string;
}

export default function BentoProfile({ image }: BentoProfileProps) {
  return (
    <div className="md:col-span-4 md:row-span-2 bg-white border border-[#111111]/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
      <div className="w-28 h-28 rounded-full overflow-hidden border border-[#111111]/10 bg-[#F1EFE7] shadow-sm mb-4">
        <img 
          src={image} 
          alt="Jasper Okhipo" 
          className="w-full h-full object-cover filter contrast-[101%]" 
        />
      </div>
      <div className="space-y-0.5 font-mono">
        <h3 className="text-base font-bold uppercase tracking-tight text-[#111111]">Jasper Okhipo</h3>
        <p className="text-[10px] text-[#111111]/50 font-bold uppercase tracking-wider">
        Independent Software Builder
        </p>
      </div>
    </div>
  );
}