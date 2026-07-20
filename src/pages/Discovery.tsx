import { useEffect } from "react";

export default function Discovery() {
  useEffect(() => {
    document.title = "Operational Brief | JPDEV.STUDIO";
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-20">

      {/* ================= HEADER ================= */}

      <section className="max-w-3xl mb-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E]">
          // OPERATIONAL BRIEF
        </span>

        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-[#111111] leading-tight">
          Start your operational review.
        </h1>

        <p className="mt-8 text-lg leading-8 text-[#111111]/65 max-w-2xl">
          Every successful software system begins with understanding how work
          currently flows. Complete this operational brief and I'll review your
          workflow before recommending the most appropriate solution.
        </p>
      </section>

      {/* ================= LAYOUT ================= */}

      <div className="grid lg:grid-cols-12 gap-12">

        {/* ================================================= */}
        {/* LEFT PANEL                                       */}
        {/* ================================================= */}

        <aside className="lg:col-span-4">

          <div className="sticky top-28 bg-white rounded-3xl border border-black/5 p-8">

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E]">
              // WHAT TO EXPECT
            </span>

            <div className="mt-8 space-y-8">

              <div>
                <h3 className="font-semibold mb-2">
                  01 — Workflow Review
                </h3>

                <p className="text-sm text-black/60 leading-7">
                  I'll study your current workflow and identify operational
                  friction.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  02 — Bottleneck Analysis
                </h3>

                <p className="text-sm text-black/60 leading-7">
                  Manual work, duplicated effort and communication breakdowns
                  become visible.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  03 — Recommendation
                </h3>

                <p className="text-sm text-black/60 leading-7">
                  I'll recommend the most appropriate operational system for your
                  business.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  04 — Project Proposal
                </h3>

                <p className="text-sm text-black/60 leading-7">
                  If we're a good fit, you'll receive an implementation roadmap
                  and quotation.
                </p>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-black/5">

              <p className="text-xs uppercase tracking-widest text-black/40 font-mono">
                Average Review Time
              </p>

              <p className="mt-2 text-lg font-semibold">
                24–48 Hours
              </p>

            </div>

          </div>

        </aside>

        {/* ================================================= */}
        {/* FORM                                              */}
        {/* ================================================= */}

        <section className="lg:col-span-8">

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-16"
          >

            {/* BUSINESS */}

            <section>

              <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E] mb-8">
                01 — BUSINESS
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                <input
                  name="company"
                  required
                  placeholder="Organization"
                  className="w-full border-b border-black/10 py-4 outline-none focus:border-[#2A5D9E]"
                />

                <input
                  name="industry"
                  placeholder="Industry"
                  className="w-full border-b border-black/10 py-4 outline-none focus:border-[#2A5D9E]"
                />

                <select
                  name="team"
                  className="w-full border-b border-black/10 py-4 bg-transparent outline-none"
                >
                  <option>Team Size</option>
                  <option>1–5</option>
                  <option>6–20</option>
                  <option>20+</option>
                </select>

                <select
                  name="system"
                  className="w-full border-b border-black/10 py-4 bg-transparent outline-none"
                >
                  <option>System Needed</option>
                  <option>Business Dashboard</option>
                  <option>Workflow Automation</option>
                  <option>Internal Tool</option>
                  <option>Inventory Management</option>
                  <option>Customer Portal</option>
                  <option>Knowledge System</option>
                  <option>AI Integration</option>
                  <option>Not Sure</option>
                </select>

              </div>

            </section>

            {/* WORKFLOW */}

            <section>

              <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E] mb-8">
                02 — CURRENT WORKFLOW
              </h2>

              <textarea
                required
                name="workflow"
                rows={6}
                placeholder="Describe how work currently flows inside your business."
                className="w-full border-b border-black/10 py-4 outline-none resize-none focus:border-[#2A5D9E]"
              />

              <input
                name="tools"
                placeholder="Current tools (Excel, WhatsApp, Google Sheets...)"
                className="w-full border-b border-black/10 py-4 mt-8 outline-none focus:border-[#2A5D9E]"
              />

            </section>

            {/* PROBLEM */}

            <section>

              <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E] mb-8">
                03 — OPERATIONAL BOTTLENECK
              </h2>

              <textarea
                name="problem"
                rows={6}
                placeholder="Where do delays, repetitive work or errors usually occur?"
                className="w-full border-b border-black/10 py-4 outline-none resize-none focus:border-[#2A5D9E]"
              />

            </section>

            {/* GOAL */}

            <section>

              <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E] mb-8">
                04 — SUCCESS LOOKS LIKE
              </h2>

              <textarea
                name="goal"
                rows={6}
                placeholder="If this project succeeds, what changes inside your business?"
                className="w-full border-b border-black/10 py-4 outline-none resize-none focus:border-[#2A5D9E]"
              />

            </section>

            {/* CONTACT */}

            <section>

              <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E] mb-8">
                05 — CONTACT
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                <input
                  required
                  name="name"
                  placeholder="Full Name"
                  className="border-b border-black/10 py-4 outline-none focus:border-[#2A5D9E]"
                />

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border-b border-black/10 py-4 outline-none focus:border-[#2A5D9E]"
                />

              </div>

            </section>

            {/* SUBMIT */}

            <section className="pt-6">

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#2A5D9E] hover:bg-[#234e84] text-white py-5 font-semibold tracking-wide transition-all duration-300"
              >
                Submit Operational Brief
              </button>

              <p className="mt-5 text-center text-sm text-black/45">
                Every submission is reviewed personally. If your project is a
                good fit, I'll contact you within 48 hours.
              </p>

            </section>

          </form>

        </section>

      </div>

    </main>
  );
}