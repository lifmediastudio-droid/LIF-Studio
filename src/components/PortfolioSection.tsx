import React, { useState } from 'react';
import { PROJECTS, CaseStudy } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: CaseStudy) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Paid Media' | 'Brand Strategy' | 'Creative & CRO'>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              02 // Portfolio
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F9FA]">
              Selected{' '}
              <span className="font-serif italic font-normal text-white">
                Work
              </span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg text-[#C5CAD8] leading-relaxed mb-6">
              Strategy, creativity, and performance — brought together to solve real marketing challenges.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.05] border border-white/10 w-fit backdrop-blur-md">
              {(['All', 'Paid Media', 'Brand Strategy', 'Creative & CRO'] as const).map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#06070B] shadow-md'
                        : 'text-[#A2A9BD] hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{filter === 'All' ? 'All Projects' : filter}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} cinematic-surface rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer flex flex-col justify-between transition-all duration-300 relative hover:border-white/40 hover:shadow-2xl hover:-translate-y-1.5`}
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/90">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center contrast-110 brightness-95 transition-all duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E101A] via-[#0E101A]/30 to-transparent opacity-90" />

                  {/* Project Number & Flag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white border border-white/20 font-bold">
                      {project.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider font-semibold text-white/90">
                      Concept Campaign
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category Label */}
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="font-semibold text-white/80 group-hover:text-white transition-colors">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F8F9FA] transition-colors mb-3">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-[#B4BACB] leading-relaxed line-clamp-2 mb-6">
                      {project.summary}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-white/80 group-hover:text-white transition-colors">
                    <span className="text-[11px] font-mono text-[#9DA4B7] group-hover:text-white transition-colors">
                      View Strategic Case Study
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
