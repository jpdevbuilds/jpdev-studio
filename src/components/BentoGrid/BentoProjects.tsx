// src/components/BentoGrid/BentoProjects.tsx

import { Link } from 'react-router-dom';
import { StudioCard } from './StudioCard';

const projects = [
  {
    slug: 'smart-catalog',
    title: 'Smart Catalog',
    type: 'Retail Operations System',
    description:
      'Centralizes fragmented inventory enquiries into a single operational workflow.',
    status: 'Launched',
  },
  {
    slug: 'mindops',
    title: 'MindOps',
    type: 'Knowledge Operating System',
    description:
      'Transforms fragmented knowledge into structured operational assets.',
    status: 'Building',
  },
  {
    slug: 'carousel-architect',
    title: 'Carousel Architect',
    type: 'Content Production System',
    description:
      'Standardizes educational content production from idea to publication.',
    status: 'Launched',
  },
  {
    slug: 'omnipost',
    title: 'OmniPost',
    type: 'Content Distribution Platform',
    description:
      'Coordinates publishing workflows across multiple channels.',
    status: 'Building',
  },
];

export default function BentoProjects() {
  return (
    <StudioCard label="Selected Systems" className="md:col-span-8 md:row-span-1">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#111111]">
          Selected Systems
        </h2>

        <Link
          to="/systems"
          className="text-sm font-medium text-[#2A5D9E] hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/systems/${project.slug}`}
            className="group block border-b border-black/5 pb-6 last:border-0 transition-opacity hover:opacity-80"
          >
            <div className="flex items-start justify-between mb-3">

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#111111]">
                  {project.title}
                </h3>

                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-[#2A5D9E]">
                  {project.type}
                </p>
              </div>

              <span className="font-mono text-[10px] uppercase text-[#111111]/35">
                {project.status}
              </span>

            </div>

            <p className="text-sm leading-7 text-[#111111]/65">
              {project.description}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#2A5D9E] transition-all group-hover:gap-3">
              View System →
            </div>

          </Link>
        ))}

      </div>

    </StudioCard>
  );
}