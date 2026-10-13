import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LifLogo } from './LifLogo';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06070B]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl shadow-black/60'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark (Lost in Frame Logo) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="flex items-center group cursor-pointer transition-opacity hover:opacity-90"
            aria-label="Lost in Frame Homepage"
          >
            <LifLogo size="md" showSubtitle={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C4C7D0]">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('work');
              }}
              className="hover:text-white transition-colors py-1"
            >
              Work
            </a>
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('capabilities');
              }}
              className="hover:text-white transition-colors py-1"
            >
              Capabilities
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
              className="hover:text-white transition-colors py-1"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="hover:text-white transition-colors py-1"
            >
              About
            </a>
            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('process');
              }}
              className="hover:text-white transition-colors py-1"
            >
              Process
            </a>
          </nav>

          {/* Action CTA with Clean Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onContactClick}
              className="btn-primary px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-white p-2 rounded-lg border border-white/15 hover:border-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#06070B]/98 backdrop-blur-xl border-b border-white/15 flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <LifLogo size="md" showSubtitle={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white border border-white/15 rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8 text-lg font-medium text-white/90">
            <button
              onClick={() => scrollTo('work')}
              className="text-left hover:text-white py-1 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo('capabilities')}
              className="text-left hover:text-white py-1 transition-colors"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left hover:text-white py-1 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left hover:text-white py-1 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="text-left hover:text-white py-1 transition-colors"
            >
              Process
            </button>
          </nav>

          <div className="mt-auto pt-6 border-t border-white/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="btn-primary w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center cursor-pointer"
            >
              Let&apos;s Talk
            </button>
            <p className="mt-4 text-center text-xs text-[#9DA2B0]">
              Performance Marketing · Brand Strategy · Creative Direction
            </p>
          </div>
        </div>
      )}
    </>
  );
};
