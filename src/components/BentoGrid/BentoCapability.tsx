// src/components/BentoGrid/BentoCapability.tsx

export default function BentoCapability() {
  const capabilities = [
    {
      title: "Workflow Automation",
      description:
        "Replace repetitive manual processes with software that improves speed, consistency, and operational visibility.",
    },
    {
      title: "Knowledge Systems",
      description:
        "Centralize documentation, procedures, and institutional knowledge into a searchable source of truth.",
    },
    {
      title: "Operational Platforms",
      description:
        "Design internal tools that connect people, data, and everyday business workflows in one environment.",
    },
  ];

  return (
    <div className="md:col-span-4 md:row-span-1 bg-white border border-[#111111]/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">

      {/* Label */}
      <div className="mb-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E]">
          // CAPABILITIES
        </span>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {capabilities.map((item) => (
          <div
            key={item.title}
            className="pb-6 border-b border-[#111111]/5 last:border-b-0 last:pb-0"
          >
            <h3 className="text-lg font-semibold tracking-tight text-[#111111] mb-2">
              {item.title}
            </h3>

            <p className="text-sm leading-7 text-[#111111]/65">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}