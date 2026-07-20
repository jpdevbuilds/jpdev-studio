import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MessageSquare } from 'lucide-react';
import { ProjectQuery } from '../lib/projects';
import { useEffect } from 'react';


export default function SystemDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "System Detail | JPDEV.STUDIO";
  }, []);
  const project = slug ? ProjectQuery.bySlug(slug) : undefined;

  if (!project) {
    return (
      <section className="max-w-xl mx-auto py-32 px-6 text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E]">
          // SYSTEM UNAVAILABLE
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          This system isn't published yet.
        </h2>

        <button
          onClick={() => navigate('/systems')}
          className="mt-8 px-6 py-3 rounded-xl border border-[#111111]/10 hover:bg-[#EAE7DC] transition"
        >
          Return to Systems
        </button>
      </section>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-12 md:py-20 px-6">

      {/* HERO */}

      <header className="mb-16">

        <span className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E]">
          {project.systemType}
        </span>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase mt-3">
          {project.title}
        </h1>

        <div className="flex gap-2 my-6">
          {project.focus.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-[#F4F4F4] text-[#111111] text-[10px] font-mono uppercase tracking-widest rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-2xl text-lg text-[#2F2F2F] leading-relaxed">
          {project.solution}
        </p>

      </header>

      {/* METADATA */}

      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#111111]/10 mb-16">

        <div>
          <p className="font-mono text-[10px] uppercase text-[#111111]/40 mb-2">
            System
          </p>

          <p className="font-semibold">
            {project.systemType}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase text-[#111111]/40 mb-2">
            Category
          </p>

          <p className="font-semibold">
            {project.category}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase text-[#111111]/40 mb-2">
            Status
          </p>

          <p className="font-semibold">
            {project.status}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase text-[#111111]/40 mb-2">
            Year
          </p>

          <p className="font-semibold">
            {project.year}
          </p>
        </div>

      </section>

      {/* CTA */}

      <div className="mb-12">

        {project.links?.live ? (

          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-xl hover:bg-[#2A5D9E] transition-all font-bold uppercase text-xs tracking-widest"
          >
            {'Launch Application'}

            <ExternalLink size={14} />

          </a>

        ) : (

          <button
            onClick={() => navigate('/Discovery')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#EAE7DC] border border-[#2A5D9E]/20 rounded-xl hover:bg-[#DED9CC] text-[#2A5D9E] font-bold uppercase text-xs tracking-widest"
          >
            Request Private Demo

            <MessageSquare size={14} />

          </button>

        )}

      </div>

      {/* HERO IMAGE */}

      <div className="mb-20">

        <div className="aspect-video rounded-3xl overflow-hidden border border-[#111111]/10 bg-[#111111]/5">

          {project.coverImage ? (

            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />

          ) : (

            <div className="flex items-center justify-center h-full font-mono text-[10px] text-[#111111]/30">
              NO IMAGE AVAILABLE
            </div>

          )}

        </div>

      </div>

      {/* CONTENT */}

      <div className="space-y-20">

        <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E] mb-5">
            Operational Bottleneck
        </h2>
        {/* Narrative Story */}
        <section className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E] mb-5">
              01 — Why the old way failed
            </h2>
            <p className="text-[#6E6A5E] leading-relaxed">
              {project.whyFailed || "No data provided."}
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E] mb-5">
              02 — My Approach
            </h2>
            <p className="text-[#6E6A5E] leading-relaxed">
              {project.approach || "No data provided."}
            </p>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E] mb-5">
              03 — The Bottleneck
            </h2>
            <p className="leading-8 text-[#2F2F2F]">{project.problem}</p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E] mb-5">
              04 — The Solution
            </h2>
            <p className="leading-8 text-[#2F2F2F]">{project.solution}</p>
          </section>
        </section>

        {/* Features */}

        <section>

          <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#2A5D9E] mb-8">
           Key Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#111111]/5 bg-white p-6"
              >
                <h3 className="font-semibold">{feature.title}</h3>
                {/* If you add a description later, this will render automatically */}
                {feature.description && (
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                )}
              </div>
            ))}
          </div>

        </section>

        {/* Outcome */}

        <section className="bg-[#111111] rounded-3xl p-10 text-white">

          <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-5">
           Business Outcome
          </p>

          <p className="text-xl leading-9">
            {project.outcome}
          </p>

        </section>
        <section className="grid grid-cols-3 gap-4 my-12">
          {project.impact.map((impact) => (
            <div key={impact.label} className="p-6 border border-[#111111]/10 rounded-2xl">
              <div className="text-[10px] uppercase tracking-widest text-[#6E6A5E] mb-2">
                {impact.label}
              </div>
              <div className="text-xl font-bold tracking-tight">
                {impact.value}
              </div>
            </div>
          ))}
        </section>

        {/* Stack */}

        <section>

          <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/50 mb-6">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">

            {project.stack.map((tech) => (

              <span
                key={tech}
                className="px-3 py-2 rounded-lg bg-[#F1EFE7] border border-[#111111]/5 font-mono text-[11px]"
              >
                {tech}
              </span>

            ))}

          </div>

          <p className="text-[#6E6A5E] max-w-2xl">
            Technologies selected to deliver a responsive interface,
            maintainable architecture, and a scalable operational workflow.
          </p>

        </section>

      </div>

      {/* CTA */}

      <section className="mt-24 pt-16 border-t border-[#111111]/10">

        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Need a similar operational system?
        </h2>

        <p className="text-[#6E6A5E] max-w-2xl mb-8 leading-relaxed">
          Every business has repetitive workflows hidden in spreadsheets,
          emails, or chat threads. Let's map your process and build software
          that eliminates the bottlenecks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <button
            onClick={() => navigate('/systems')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#111111]/10 hover:bg-[#EAE7DC] transition"
          >
            <ArrowLeft size={16} />

            Back to Systems

          </button>

          <button
            onClick={() => navigate('/discovery')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#111111] text-white hover:bg-[#2A5D9E] transition"
          >
            <MessageSquare size={16} />

            Start a Project

          </button>

        </div>

      </section>

    </article>
  );
}