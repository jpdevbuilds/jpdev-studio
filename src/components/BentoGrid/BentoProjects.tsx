import { ProjectQuery } from '../../lib/projects';

export default function BentoProjects() {
  const activeProjects = ProjectQuery.all().slice(0, 4);

  if (activeProjects.length === 0) {
    return <div className="p-6 text-xs text-red-500">No projects found.</div>;
  }

  return (
    <div className="md:col-span-6 md:row-span-1 bg-white border border-[#111111]/5 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px]">
        {activeProjects.map((project) => (
          <div key={project.slug} className="border-b border-[#111111]/5 pb-1 flex flex-col">
            <p className="font-bold uppercase text-[#111111]">{project.title}.</p>
            <span className="text-[9px] text-[#2A5D9E] font-bold uppercase">{project.status}.</span>
            
            {/* Technologies moved inside the map loop */}
            <div className="flex flex-wrap gap-1 mt-1">
              {project.technologies.slice(0, 2).map((tech) => (
                <span key={tech} className="text-[8px] bg-[#F1EFE7] px-1 py-0.5 rounded uppercase font-bold text-[#111111]/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}