import React from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import { ArrowRight, BarChart3, Feather, Layers, Orbit } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

const SERVICE_ICONS = [BarChart3, Layers, Feather, Orbit];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              03 // Services
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F9FA]">
              What I Bring to{' '}
              <span className="font-serif italic font-normal text-white">
                the Table
              </span>.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#C5CAD8] max-w-lg leading-relaxed">
            Modular strategic capabilities deployed as sprint partnerships or end-to-end growth leadership.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];

            return (
              <div
                key={service.id}
                className="cinematic-surface rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-mono font-bold tracking-wider text-white/50 group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 text-white/90 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black group-hover:border-white">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F9FA] mb-4 transition-colors">
                    {service.title}
                  </h3>

                  {/* Concise summary */}
                  <p className="text-sm sm:text-base text-[#B8BED0] leading-relaxed mb-8">
                    {service.summary}
                  </p>

                  {/* Deliverables Preview Tags */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-white/60 font-semibold">
                      Core Scope Highlights
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#E2E8F0]">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          <span className="line-clamp-1">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Explore Service Button */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8E95AA]">
                    Explore Deliverables & Sprints
                  </span>
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase font-mono text-white hover:text-white/80 transition-all cursor-pointer py-1 group/btn"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
