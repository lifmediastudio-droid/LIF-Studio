import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LifLogo } from './LifLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 pt-16 pb-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-start">
              <LifLogo size="md" showSubtitle={true} className="items-start" />
            </div>

            <p className="text-base font-serif italic max-w-sm pt-2 text-white">
              &ldquo;Strategy with purpose. Creativity with direction.&rdquo;
            </p>

            <p className="text-xs text-[#9DA4B7] leading-relaxed max-w-sm">
              Performance marketing architecture and creative strategy designed to turn market attention into sustainable business equity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white/50 font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#B4BACB]">
              <li>
                <button
                  onClick={() => scrollTo('work')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('capabilities')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Core Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services & Sprints
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About the Strategist
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Four-Phase Process
                </button>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white/50 font-semibold">
              Network & Inquiries
            </p>
            <p className="text-xs text-[#9DA4B7] leading-relaxed">
              Open for full-time leadership, fractional strategic advisory, and creative campaign commissions.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono">
              <a
                href="https://instagram.com/lifcultures?psln=MTV0NW5mYXEzNTg5dQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-[#E2E8F0] hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
              >
                Instagram
              </a>


              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-[#E2E8F0] hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
              >
                WhatsApp
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E95AA]">
          <p>
            © {currentYear} LOST IN FRAME (LIF). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/60">Architectural Grid System &middot; Celestial Cosmos</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-white/90" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
