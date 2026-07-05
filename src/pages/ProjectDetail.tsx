import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, ExternalLink } from 'lucide-react';
import { ProjectQuery } from '../lib/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? ProjectQuery.bySlug(slug) : undefined;

  if (!project) {
    return (
      <section className="max-w-xl mx-auto py-32 text-center px-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E]">// PROJECT UNAVAILABLE</p>
        <h2 className="mt-4 text-2xl font-bold">This case study isn't published yet.</h2>
        <button 
          onClick={() => navigate('/work')}
          className="mt-8 px-6 py-3 border border-[#111111]/10 rounded-xl hover:bg-[#EAE7DC] text-sm font-bold uppercase tracking-widest transition-all"
        >
          Return to Work
        </button>
      </section>
    );
  }

  return (
    <article className="max-w-2xl mx-auto py-12 px-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">{project.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-2 text-[#2A5D9E]">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span className="px-2 py-0.5 rounded-full bg-[#EAE7DC] border border-[#2A5D9E]/20">
              {project.status}
            </span>
          </div>
        </div>
      </header>

      {/* WIDER VIEW: Featured Product Image with Debugging */}
      <div className="mb-16 -mx-6 md:-mx-12 lg:-mx-20">
        <div className="aspect-video w-full bg-[#111111]/5 border-y border-[#111111]/10 overflow-hidden relative">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error("Image failed to load. Path attempted:", target.src);
                target.style.display = 'none'; // Hide broken image
              }}
              onLoad={() => console.log("Image loaded successfully:", project.image)}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-[#111111]/20 font-mono text-[10px]">
              NO IMAGE DATA PROVIDED
            </div>
          )}
        </div>
      </div>

      {/* Main Action Block */}
      <div className="mb-16">
        {project.liveUrl && project.liveUrl.length > 0 ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-xl hover:bg-[#2A5D9E] transition-all font-bold text-xs uppercase tracking-widest">
            Launch Application <ExternalLink size={14} />
          </a>
        ) : (
          <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 px-6 py-3 bg-[#EAE7DC] text-[#2A5D9E] rounded-xl hover:bg-[#DED9CC] transition-all font-bold text-xs uppercase tracking-widest border border-[#2A5D9E]/20">
            Request a Private Demo <MessageSquare size={14} />
          </button>
        )}
      </div>

      <div className="space-y-12">
        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#FFD166] mb-3">// THE CHAOS</h3>
          <p className="leading-relaxed text-[#2F2F2F]">{project.challenge}</p>
        </section>

        <section className="bg-[#EAE7DC] p-6 rounded-2xl">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#2A5D9E] mb-3">// THE SYSTEM</h3>
          <p className="leading-relaxed text-[#2F2F2F]">{project.description}</p>
          {project.features && (
            <ul className="mt-4 space-y-2">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-[#6E6A5E] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2A5D9E] rounded-full" /> {f}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#2A5D9E] mb-3">// THE OUTCOME</h3>
          <p className="leading-relaxed text-[#2F2F2F]">{project.approach}</p>
        </section>

        {project.technologies && (
          <section className="border-t border-[#111111]/10 pt-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">// TECH STACK</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-2 py-1 bg-[#F1EFE7] border border-[#111111]/5 rounded text-[10px] font-mono">{t}</span>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-20 pt-10 border-t border-[#111111]/10">
        <div className="mb-10">
          <h3 className="font-bold text-lg mb-2">Need a system like this?</h3>
          <p className="text-[#6E6A5E]">Tell me what's still being managed manually and I'll outline a workflow for it.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => navigate('/work')} className="flex items-center justify-center gap-2 px-6 py-3 border border-[#111111]/10 rounded-xl hover:bg-[#EAE7DC] transition-all text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Work
          </button>
          <button onClick={() => navigate('/contact')} className="flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-xl hover:bg-[#2A5D9E] transition-all text-sm font-bold uppercase tracking-widest">
            Start a Project <MessageSquare size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}