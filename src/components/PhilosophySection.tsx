import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/portfolioData';
import { ShieldCheck, Quote } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Quote Box */}
        <div className="relative rounded-3xl bg-[#0E101A]/90 backdrop-blur-md border border-white/15 p-8 sm:p-14 mb-16 overflow-hidden shadow-2xl">
          <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
            <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 font-semibold">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Core Marketing Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-[#F8F9FA] leading-tight">
              &ldquo;Every campaign begins with a question. Every strategy needs a reason. Every result should teach us something.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-[#C5CAD8] leading-relaxed">
              In an industry obsessed with short-term vanity clicks, true competitive advantage belongs
              to brands that marry quantitative execution with enduring cultural resonance.
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            06 // Principles
          </p>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8F9FA]">
            Built on Trust.{' '}
            <span className="font-serif italic font-normal text-white">
              Driven
            </span>{' '}
            by Learning.
          </h3>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            return (
              <div
                key={idx}
                className="cinematic-surface rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden hover:border-white/40 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  <span className="text-xs font-mono font-bold block mb-4 text-white/50 group-hover:text-white transition-colors">
                    Principle 0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold text-[#F8F9FA] mb-3 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#B8BED0] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-white/80 font-semibold">Non-Negotiable Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
