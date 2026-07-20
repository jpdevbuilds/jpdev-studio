import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Systems', path: '/systems' },
  { label: 'Process', path: '/process' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#111111]/5 bg-[#F1EFE7]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0"
          >
            <img
              src="/images/Horizontal_Layout.svg"
              alt="JpDEV Studio"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em]">
            {links.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors ${
                  isActive(path)
                    ? 'text-[#2A5D9E]'
                    : 'text-[#111111] hover:text-[#2A5D9E]'
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/discovery"
              className="ml-2 rounded-full border border-[#2A5D9E]/20 bg-[#EAE7DC] px-5 py-2 text-[#2A5D9E] font-bold transition-all hover:bg-[#2A5D9E] hover:text-white"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open navigation menu"
            className="md:hidden p-2 hover:text-[#2A5D9E] transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-[100] bg-[#F1EFE7] p-6 flex flex-col transition-all duration-300 ${
          menuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between mb-16">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/Horizontal_Layout.svg"
              alt="JpDEV Studio"
              className="h-12 w-auto"
            />
          </Link>

          <button
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="p-2 hover:text-[#2A5D9E]"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-8 text-3xl font-bold uppercase tracking-tight">
          {links.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={isActive(path) ? 'text-[#2A5D9E]' : ''}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-[#111111]/10">
          <Link
            to="/discovery"
            className="inline-flex w-full items-center justify-between rounded-xl bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A5D9E]"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}