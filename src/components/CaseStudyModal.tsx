import React, { useEffect } from 'react';
import { CaseStudy } from '../data/portfolioData';
import { X, ArrowRight, CheckCircle2, TrendingUp, Lightbulb, Compass, Target, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onInitiateInquiry: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onInitiateInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E101A] border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto">
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#0E101A]/95 backdrop-blur border-b border-white/15">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white text-[#06070B] shadow-sm">
              Project {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20 bg-white/5 text-white">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-white/70 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 hidden sm:inline">
              Concept Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full bg-white/[0.08] hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-8 space-y-10 text-[#F8F9FA]">
          {/* Hero Banner */}
          <div className="space-y-4">
            <h2 id="case-study-title" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#C5CAD8] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Thumbnail */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/15 bg-black shadow-lg">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E101A] via-transparent to-transparent opacity-80" />
          </div>

          {/* 1. The Challenge & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#141624] border border-white/15 space-y-2">
              <div className="flex items-center gap-2 text-white/90 text-xs font-mono uppercase tracking-wider font-semibold">
                <Target className="w-4 h-4 text-white" />
                <span>01. The Challenge</span>
              </div>
              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141624] border border-white/15 space-y-2">
              <div className="flex items-center gap-2 text-white/90 text-xs font-mono uppercase tracking-wider font-semibold">
                <Compass className="w-4 h-4 text-white" />
                <span>02. Target Audience</span>
              </div>
              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                {project.targetAudience}
              </p>
            </div>
          </div>

          {/* 2. Strategy & Creative Direction */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70 font-semibold">
              <Layers className="w-4 h-4 text-white" />
              <span>03. Strategy & Creative Direction</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#141624] border border-white/15 space-y-4">
              <div>
                <span className="text-xs font-mono text-white/50 block mb-1">Strategic Architecture</span>
                <p className="text-sm text-[#D1D5DB] leading-relaxed">
                  {project.strategy}
                </p>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-mono text-white/50 block mb-1">Creative Direction</span>
                <p className="text-sm text-[#D1D5DB] leading-relaxed">
                  {project.creativeDirection}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Execution Plan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70 font-semibold">
              <Lightbulb className="w-4 h-4 text-white" />
              <span>04. Execution Plan</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.executionPlan.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.04] border border-white/15 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="text-xs text-[#E2E8F0] leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Projected Metrics */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70 font-semibold">
              <TrendingUp className="w-4 h-4 text-white" />
              <span>05. Key Projected Commercial Metrics</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.projectedMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#141624] border border-white/15 text-center space-y-1 hover:border-white/35 transition-colors"
                >
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {item.value}
                  </p>
                  <p className="text-xs font-mono uppercase text-[#A2A9BD] tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-[#6B7280]">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Lessons Learned */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-white/70 font-semibold">
              06. Strategic Takeaway
            </p>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              {project.lessonsLearned}
            </p>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#A2A9BD] text-center sm:text-left">
              Interested in applying these frameworks to your marketing challenges?
            </p>
            <button
              onClick={() => {
                onClose();
                onInitiateInquiry(project.title);
              }}
              className="btn-primary px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>Discuss Similar Campaign</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
