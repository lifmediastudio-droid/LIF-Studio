import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onContactClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Cinematic Photography Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="images\pexels-bertellifotografia-20184105.jpg"
          alt="Creative Strategy Studio"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
          loading="eager"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Availability Badge & Lost in Frame Descriptor */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 text-xs font-mono tracking-widest text-[#B4B9C8]">
          <div className="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-sans font-semibold uppercase tracking-wider text-[11px] text-white">
              Open to Marketing Opportunities
            </span>
          </div>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="text-white/80 uppercase font-sans text-[11px] tracking-wider hidden sm:inline">
            <span className="font-bold text-white">LOST IN FRAME</span> · Performance Marketing · Creative Strategy
          </span>
        </div>

        {/* Cinematic Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold text-[#F8F9FA] tracking-tight leading-[1.08] mb-6">
            Making Brands{' '}
            <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-white">
              Impossible
            </span>{' '}
            to Ignore.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#C5CAD8] font-normal leading-relaxed max-w-2xl mb-10">
            I combine performance marketing, brand strategy, and creative thinking to turn
            attention into measurable, enduring commercial growth.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExploreWork}
              className="btn-primary px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onContactClick}
              className="btn-secondary px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Let&apos;s Build Something</span>
            </button>
          </div>
        </div>

        {/* Quick Discipline Ticker */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="group p-4 rounded-2xl cinematic-surface cinematic-surface-hover">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/70 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Focus 01
              </span>
            </div>
            <p className="text-sm font-semibold text-white/95">Paid Acquisition & Scale</p>
          </div>

          <div className="group p-4 rounded-2xl cinematic-surface cinematic-surface-hover">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/70 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Focus 02
              </span>
            </div>
            <p className="text-sm font-semibold text-white/95">Brand Positioning & Story</p>
          </div>

          <div className="group p-4 rounded-2xl cinematic-surface cinematic-surface-hover">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/70 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Focus 03
              </span>
            </div>
            <p className="text-sm font-semibold text-white/95">Creative Strategy & Ad Hooks</p>
          </div>

          <div className="group p-4 rounded-2xl cinematic-surface cinematic-surface-hover">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/70 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Focus 04
              </span>
            </div>
            <p className="text-sm font-semibold text-white/95">CRO & Funnel Optimization</p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-12">
        <a
          href="#capabilities"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/60 hover:text-white transition-colors p-2 flex flex-col items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest"
          aria-label="Scroll to core capabilities"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-white/80" />
        </a>
      </div>
    </section>
  );
};
