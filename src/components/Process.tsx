import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BentoProcess } from '../components/BentoGrid';

const phases = [
  { 
    num: "01", 
    title: "Operational Audit", 
    desc: "Every engagement begins by understanding how work actually moves through your business. We map the current workflow, identify repetitive manual tasks, and locate the operational bottlenecks that create delays, errors, or unnecessary overhead." 
  },
  { 
    num: "02", 
    title: "System Blueprint", 
    desc: "Before development begins, we design the structure of the solution. This includes workflow mapping, data relationships, user journeys, and system logic to ensure we're solving the underlying operational problem—not simply digitizing inefficient processes." 
  },
  { 
    num: "03", 
    title: "System Construction", 
    desc: "The system is built through iterative milestones rather than one large delivery. This allows continuous feedback, early validation, and adjustments as the software integrates into real operational workflows." 
  },
  { 
    num: "04", 
    title: "Operational Rollout", 
    desc: "Once validated, the system is deployed into production. Existing data is migrated where required, workflows are tested, and users are onboarded to ensure the transition is smooth and disruption is minimized." 
  },
  { 
    num: "05", 
    title: "Continuous Improvement", 
    desc: "Deployment is not the end of the project. Real-world usage provides valuable operational insights that guide future improvements, additional automations, and system expansion as the business grows." 
  }
];

export default function Process() {
  const navigate = useNavigate();

  return (
    <article className="max-w-2xl mx-auto py-20 px-6">
      <header className="mb-20">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E]">/ / Our Methodology</span>
        <h1 className="text-4xl font-bold mt-4 tracking-tight">How we build systems.</h1>
      </header>

      <div className="space-y-16">
        {phases.map((phase) => (
          <div key={phase.num}>
            <div className="h-[1px] w-full bg-[#111111]/10 mb-8" />
            <div className="font-mono text-[10px] text-[#2A5D9E] mb-4">{phase.num}</div>
            <h3 className="font-bold text-xl mb-4">{phase.title}</h3>
            <p className="text-[#6E6A5E] leading-relaxed">{phase.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-24 py-12 border-t border-[#111111]/10">
        <h3 className="font-bold text-lg mb-4">Operational Principles</h3>
        <ul className="space-y-3">
          {["Understand before building", "Simplify before automating", "Build around workflows, not features", "Measure outcomes, not output"].map((principle) => (
            <li key={principle} className="flex items-center gap-3 text-sm text-[#6E6A5E]">
              <span className="text-[#2A5D9E]">✓</span> {principle}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 p-8 bg-[#F4F4F4] rounded-2xl">
        <h3 className="font-bold mb-4">Every system starts with understanding the workflow.</h3>
        <p className="text-sm text-[#6E6A5E] mb-8 leading-relaxed">
          The goal isn't to sell software—it's to determine whether software is the right solution for your operational bottlenecks.
        </p>
        <button 
          onClick={() => navigate('/discovery')}
          className="flex items-center gap-2 font-bold text-sm hover:underline"
        >
          Begin Discovery <ArrowRight size={16} />
        </button>
      </section>
    </article>
  );
}