import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#111111]/5 bg-[#F1EFE7]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/Horizontal_Layout.svg" 
            alt="JPDEV.STUDIO" 
            className="h-10 sm:h-12 w-auto transition-transform duration-200 group-hover:scale-[1.01]"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 font-mono text-[10px] font-bold tracking-widest uppercase">
          {/* Hide these on mobile to prevent overflow */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/work" 
              className={`transition-colors ${isActive('/work') ? 'text-[#2A5D9E]' : 'text-[#111111]/70 hover:text-[#111111]'}`}
            >
              Work
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-[#2A5D9E]' : 'text-[#111111]/70 hover:text-[#111111]'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-[#2A5D9E]' : 'text-[#111111]/70 hover:text-[#111111]'}`}
            >
              About
            </Link>
          </div>

          {/* Primary CTA - Always Visible */}
          <Link 
            to="/contact" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111111] text-white hover:bg-[#2A5D9E] transition-colors text-[10px]"
          >
            Start Project <ArrowRight size={10} strokeWidth={3} />
          </Link>
        </nav>

      </div>
    </header>
  );
}