import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  // Dynamic Title Management
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'JpDev.STUDIO | Operational Systems',
      '/about': 'About | JpDev.STUDIO',
      '/work': 'Work | JpDev.STUDIO',
      '/contact': 'Contact | Start a Project',
    };
    
    // Fallback for project details: if the path starts with /work/, keep it clean
    if (location.pathname.startsWith('/work/')) {
        document.title = 'Project | JpDev.STUDIO';
    } else {
        document.title = titles[location.pathname] || 'JpDev.STUDIO';
    }
  }, [location]);

  return (
    <div className="min-h-screen w-full flex flex-col font-sans" style={{ backgroundColor: '#F1EFE7' }}>
      <Navbar />
      
      <main className="flex-1 max-w-[1360px] mx-auto px-6 md:px-12 py-16 w-full box-border">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}