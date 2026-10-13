import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

const SKILLS = [
  'Performance Marketing',
  'Brand Positioning',
  'Creative Strategy',
  'Copywriting & Hooks',
  'Consumer Psychology',
  'Campaign Architecture',
  'Content Systems',
  'Marketing Analytics',
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 sm:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-Contrast Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 aspect-[4/5] bg-black shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Creative Director & Strategist"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070B] via-transparent to-transparent opacity-80" />

              {/* Editorial Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/15">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 font-semibold mb-1 block">
                  The Person Behind the Strategy
                </span>
                <p className="text-sm font-semibold tracking-wide text-white">
                  Strategy &middot; Performance &middot; Vision
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto & Background */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                04 // About the Strategist
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F9FA] leading-[1.15]">
                Where human psychology, culture, and business{' '}
                <span className="font-serif italic font-normal text-white">
                  converge
                </span>.
              </h2>
            </div>

            {/* Core Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-[#C5CAD8] leading-relaxed">
              <p>
                I&apos;m interested in the space where human psychology, culture, creativity, and business meet.
              </p>
              <p>
                For me, good marketing is not just about getting attention. It&apos;s about understanding why people care,
                creating something worth noticing, and connecting that attention to a meaningful business outcome.
              </p>
              <p className="text-white font-medium">
                My focus is on combining strategic thinking, creative communication, and performance-driven execution.
              </p>
            </div>

            {/* Clean Skills & Interests Chips */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-white/60 font-semibold">
                Core Competencies & Research Focus
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#F1F5F9] bg-white/[0.05] border border-white/15 hover:border-white/35 hover:bg-white/[0.08] transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action with Clean Button */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="btn-primary px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
