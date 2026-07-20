import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/5 bg-[#F1EFE7] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">

        {/* Top */}

        <div className="grid gap-14 lg:grid-cols-12">

          {/* Brand */}

          <div className="lg:col-span-5">

            <img
              src="/images/Wordmark_Layout.svg"
              alt="JPDEV.STUDIO"
              className="h-12 w-auto"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-black/65">
              JPDEV.STUDIO designs operational software that helps businesses
              replace spreadsheets, repetitive administration and fragmented
              workflows with systems they fully own.
            </p>

            <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[#2A5D9E] font-bold">
              Founder-Led Operational Software Studio
            </div>

          </div>

          {/* Links */}

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">

            {/* Studio */}

            <div>

              <span className="block mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">
                // STUDIO
              </span>

              <ul className="space-y-3">

                <li>
                  <Link
                    to="/"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/systems"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    Systems
                  </Link>
                </li>

                <li>
                  <Link
                    to="/process"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    Process
                  </Link>
                </li>

              </ul>

            </div>

            {/* Systems */}

            <div>

              <span className="block mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">
                // SYSTEMS
              </span>

              <ul className="space-y-3">

                <li>
                  <Link
                    to="/systems/smart-catalog"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    Smart Catalog
                  </Link>
                </li>

                <li>
                  <Link
                    to="/systems/mindops"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    MindOps
                  </Link>
                </li>

                <li>
                  <Link
                    to="/systems/recallhq"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    RecallHQ
                  </Link>
                </li>

                <li>
                  <Link
                    to="/systems/carousel-architect"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    Carousel Architect
                  </Link>
                </li>

              </ul>

            </div>

            {/* Connect */}

            <div>

              <span className="block mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">
                // CONNECT
              </span>

              <ul className="space-y-3">

                <li>
                  <Link
                    to="/discovery"
                    className="font-medium text-[#2A5D9E] hover:opacity-80 transition"
                  >
                    Start Discovery →
                  </Link>
                </li>

                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/jpdevbuilds"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black/70 hover:text-[#2A5D9E] transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">
            © {currentYear} JPDEV.STUDIO · All Rights Reserved
          </p>

          <div className="flex items-center gap-3">

            <span className="w-2 h-2 rounded-full bg-[#2A5D9E] animate-pulse"></span>

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40">
              Building Operational Software
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}