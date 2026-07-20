import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'JPDEV.STUDIO | Operational Systems',
      '/about': 'About | JPDEV.STUDIO',
      '/services': 'Services | JPDEV.STUDIO',
      '/work': 'Work | JPDEV.STUDIO',
      '/Discovery': 'Discovery | JPDEV.STUDIO',
    };

    document.title = location.pathname.startsWith('/work/')
      ? 'Project | JPDEV.STUDIO'
      : titles[location.pathname] || 'JPDEV.STUDIO';
  }, [location]);

  return (
    <div
      className="min-h-screen w-full flex flex-col font-sans"
      style={{ backgroundColor: '#F1EFE7' }}
    >
      <Navbar />

      <main className="flex-1 max-w-[1360px] mx-auto px-6 md:px-12 py-16 w-full box-border">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}