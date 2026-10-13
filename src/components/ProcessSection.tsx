import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Search, Compass, Rocket, LineChart } from 'lucide-react';

const STEP_ICONS = [Search, Compass, Rocket, LineChart];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              05 // Methodology
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F9FA]">
              From Insight{' '}
              <span className="font-serif italic font-normal text-white">
                to Impact
              </span>.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#C5CAD8] max-w-md leading-relaxed">
            A repeatable four-phase sprint cadence that turns raw customer insights into scaled performance campaigns.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-[1px] bg-white/15 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index % STEP_ICONS.length];

              return (
                <div
                  key={step.step}
                  className="cinematic-surface rounded-2xl p-7 flex flex-col justify-between group transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    {/* Step Badge with Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl border border-white/15 bg-white/5 text-white/90 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black group-hover:border-white">
                        <Icon className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                      </div>
                      <span className="text-sm font-mono font-bold tracking-wider text-white/50 group-hover:text-white transition-colors">
                        {step.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold tracking-tight text-[#F8F9FA] transition-colors mb-3">
                      {step.title}
                    </h3>

                    {/* Step Summary */}
                    <p className="text-sm text-[#B8BED0] leading-relaxed mb-6">
                      {step.summary}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">
                      Key Outputs
                    </p>
                    <p className="text-xs font-semibold leading-snug text-white/95">
                      {step.deliverables}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
