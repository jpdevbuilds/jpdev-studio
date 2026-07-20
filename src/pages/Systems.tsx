import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';
import { Project } from '../types/project';


// Sub-component to isolate image fallback state handling per project card
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/Systems/${project.slug}`} className="group space-y-4 block">
      {/* High-Fidelity Aspect Ratio Frame */}
      <div className="aspect-[16/10] rounded-2xl bg-[#111111]/5 border border-[#111111]/5 overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[#2A5D9E]/30 group-hover:shadow-[0_12px_40px_rgba(42,93,158,0.08)] relative flex items-center justify-center">
        {project.coverImage && !imageError ? (
          <img 
            src={project.coverImage} 
            alt={`${project.title} Interface Preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Clean Editorial Fallback if image asset is missing */
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#111111]/5">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#2A5D9E] border border-[#2A5D9E]/20 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
        )}
        
      </div>

      {/* Metadata Layout */}
      <div className="space-y-1 font-mono">
        <div className="flex justify-between text-[10px] font-bold text-[#111111]/40">
          <span>0{index + 1} / {project.systemType.toUpperCase()}</span>
          <span className="text-[#2A5D9E] uppercase tracking-wider">{project.status}</span>
        </div>
        <h3 className="text-base font-bold uppercase text-[#111111] group-hover:text-[#2A5D9E] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-[#111111]/60 font-sans line-clamp-2 mt-1 font-normal leading-relaxed">
          {project.solution}
        </p>
      </div>
    </Link>
  );
}

export default function Systems() {
  useEffect(() => {
    document.title = "Systems & Projects | JPDEV.STUDIO";
  }, []);
  // Sort projects automatically by production priority
  const displayProjects = projectData
    .filter((p) => p.published)
    .sort((a, b) => a.priority - b.priority);

  return (
    <div className="w-full space-y-16 py-12 md:py-20">
      
      <div className="max-w-2xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2A5D9E] block">
          // PRODUCTION LOGS
        </span>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-[#111111] font-mono">
          Shipped Systems & Projects
        </h1>
        <p className="text-base text-[#111111]/70 font-sans leading-relaxed">
          A running index of websites, custom storefronts, and internal automation tools engineered to solve specific business bottlenecks.
        </p>
      </div>

      <hr className="border-[#111111]/10" />

      {/* REFINED CARD MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

    </div>
  );
}