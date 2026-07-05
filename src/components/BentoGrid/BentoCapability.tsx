// src/components/BentoGrid/BentoCapability.tsx
export default function BentoCapability() {
  const offerings = [
    { label: "Order & Inventory Systems", value: "End the WhatsApp order chaos." },
    { label: "Workflow Automation", value: "Eliminate repetitive admin work." },
    { label: "Business Dashboards", value: "Clear records instead of scattered files." }
  ];

  return (
    <div className="md:col-span-4 md:row-span-2 bg-white border border-[#111111]/5 rounded-3xl p-6 flex flex-col gap-6 shadow-sm">
      {offerings.map((offering) => (
        <div key={offering.label}>
          <h3 className="text-xs font-bold uppercase text-[#111111] mb-1">{offering.label}</h3>
          <p className="text-[10px] text-[#111111]/60">{offering.value}</p>
        </div>
      ))}
    </div>
  );
}