import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#111111]/5 bg-[#F1EFE7] pt-16 pb-8 mt-24">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Primary Monogram + Wordmark Anchor Block */}
          <div className="space-y-4 max-w-xs">
            <img 
              src="/images/Wordmark_Layout.svg" 
              alt="JPDEV.STUDIO Primary Logo" 
              className="h-12 w-auto"
            />
            <p className="text-xs text-[#111111]/60 font-sans leading-relaxed">
              Engineering high-utility custom software layouts and independent tools for growth-focused operations.
            </p>
          </div>

          {/* Quick Matrix Map Links */}
          <div className="grid grid-cols-2 gap-12 font-mono text-xs">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-[#111111]/40 uppercase tracking-widest block">// NAVIGATION</span>
              <ul className="space-y-2 font-bold">
                <li><Link to="/" className="text-[#111111]/70 hover:text-[#2A5D9E] transition-colors">Home</Link></li>
                <li><Link to="/work" className="text-[#111111]/70 hover:text-[#2A5D9E] transition-colors">Systems Index</Link></li>
                <li><Link to="/services" className="text-[#111111]/70 hover:text-[#2A5D9E] transition-colors">Capabilities</Link></li>
                <li><Link to="/about" className="text-[#111111]/70 hover:text-[#2A5D9E] transition-colors">Our Story</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-bold text-[#111111]/40 uppercase tracking-widest block">// CONNECT</span>
              <ul className="space-y-2 font-bold">
                <li><Link to="/contact" className="text-[#111111]/70 hover:text-[#2A5D9E] transition-colors">Start a Project</Link></li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#111111]/70 hover:text-[#2A5D9E] transition-colors">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="text-[#111111]/70 hover:text-[#2A5D9E] transition-colors">
                    Twitter / X ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Global Compliance / Taxonomy Bottom Metadata Bar */}
        <div className="pt-8 border-t border-[#111111]/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] font-bold text-[#111111]/40 uppercase tracking-wider">
          <div>
            © {currentYear} JPDEV.STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-2 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A5D9E] animate-pulse" />
            <span>BUILDING IN PUBLIC DURING NYSC</span>
          </div>
        </div>

      </div>
    </footer>
  );
}