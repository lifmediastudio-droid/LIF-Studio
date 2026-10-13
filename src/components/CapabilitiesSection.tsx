import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { Target, Compass, Zap, TrendingUp } from 'lucide-react';

const ICONS = [Target, Compass, Zap, TrendingUp];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              01 // Core Foundations
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F9FA]">
              Built for Growth.{' '}
              <span className="font-serif italic font-normal text-white">
                Anchored
              </span>{' '}
              in Rigor.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B8BED0] max-w-md leading-relaxed">
            Four disciplines interconnected to ensure brand creativity drives commercial leverage without sacrificing identity.
          </p>
        </div>

        {/* 4 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const IconComponent = ICONS[index % ICONS.length];

            return (
              <div
                key={cap.number}
                className="cinematic-surface rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-mono font-bold tracking-wider text-white/50 group-hover:text-white transition-colors">
                      {cap.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 text-white/90 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black group-hover:border-white">
                      <IconComponent className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight text-[#F8F9FA] mb-3 transition-colors">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#B8BED0] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Focus Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8E95AA]">Focus Area</span>
                  <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/95 text-[11px] font-sans font-semibold group-hover:border-white/35 transition-all">
                    {cap.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
