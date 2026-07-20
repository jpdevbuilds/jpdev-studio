import { Link } from 'react-router-dom';
import { StudioCard } from './StudioCard';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand the operational bottlenecks before proposing solutions.',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Design the workflow, data structure, and system blueprint.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop a focused solution with performance and usability in mind.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy, validate, and document the system for real-world use.',
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Refine the system through feedback and continuous improvement.',
  },
];

export default function BentoProcess() {
  return (
    <StudioCard label="Methodology" className="md:col-span-6 md:row-span-1">
      <h2 className="text-2xl font-semibold tracking-tight text-[#111111] mb-2">
        Operational Pipeline
      </h2>

      <p className="text-sm leading-7 text-[#111111]/60 mb-8 max-w-xl">
        Every engagement follows a structured process designed to reduce uncertainty,
        align expectations, and deliver software that fits the way your business
        actually operates.
      </p>

      <div className="space-y-5">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex gap-5 pb-5 border-b border-black/5 last:border-0 last:pb-0"
          >
            <span className="font-mono text-sm font-semibold text-[#2A5D9E] min-w-8">
              {step.number}
            </span>

            <div>
              <h3 className="font-semibold tracking-tight text-[#111111]">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-[#111111]/60 mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-black/5">
        <Link
          to="/process"
          className="inline-flex items-center gap-2 text-[#2A5D9E] text-sm font-semibold hover:underline"
        >
          View Full Methodology →
        </Link>
      </div>
    </StudioCard>
  );
}