import React, { useEffect } from 'react';
import { ServiceItem } from '../data/portfolioData';
import { X, ArrowRight, CheckCircle2, Target, Compass } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#0E101A] border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/15 bg-[#0E101A]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white text-[#06070B] shadow-sm">
              Service {service.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-white/80 font-semibold">
              Capability Architecture
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full bg-white/[0.08] hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close service modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-[#F8F9FA] overflow-y-auto max-h-[80vh]">
          <div>
            <h2 id="service-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {service.title}
            </h2>
            <p className="text-sm sm:text-base text-[#C5CAD8] leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* Strategic Methodology */}
          <div className="p-5 rounded-2xl bg-[#141624] border border-white/15 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">
              <Compass className="w-4 h-4 text-white" />
              <span>Core Methodology</span>
            </div>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              {service.methodology}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/80 font-semibold">
              <span>Concrete Deliverables & Outputs</span>
            </div>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15 flex items-start gap-3 text-xs sm:text-sm text-[#E2E8F0] hover:border-white/35 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-white/90 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Fit */}
          <div className="p-5 rounded-2xl bg-[#141624] border border-white/15 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/80 font-semibold">
              <Target className="w-4 h-4 text-white" />
              <span>Ideal Partnership Profile</span>
            </div>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              {service.idealFor}
            </p>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#A2A9BD]">
              Available for full campaign builds or strategic sprints.
            </span>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="btn-primary px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
