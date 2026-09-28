import React from 'react';
import { ServiceItem } from '../types';
import { BRAND_ASSETS } from '../data/agencyData';

interface ScopeModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceName: string) => void;
}

export const ScopeModal: React.FC<ScopeModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#131b2e] border border-[#222a3d] p-6 sm:p-8 shadow-2xl text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#171f33] hover:bg-[#222a3d] text-[#c7c4d7] hover:text-white flex items-center justify-center transition-colors border border-[#222a3d]"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#222a3d] flex items-center justify-center text-secondary border border-secondary/20">
            <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest">
              Discipline {service.number} Scope
            </span>
            <h3 className="text-2xl font-extrabold text-on-surface">{service.title}</h3>
          </div>
        </div>

        <p className="text-base text-[#c7c4d7] mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mb-6 bg-[#171f33] border border-[#222a3d] rounded-2xl p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">task_alt</span>
            <span>Included Deliverables &amp; Milestones</span>
          </h4>
          <ul className="space-y-2.5">
            {service.deliverables?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#dae2fd]">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                  verified
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d]">
            <span className="text-xs text-[#908fa0] uppercase tracking-wider font-semibold block mb-1">
              Estimated Timeline
            </span>
            <span className="text-sm font-bold text-on-surface flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
              {service.timeline || '1 - 2 weeks'}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d]">
            <span className="text-xs text-[#908fa0] uppercase tracking-wider font-semibold block mb-1">
              Core Tech &amp; Tooling
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-[#222a3d] text-[11px] font-mono text-[#c0c1ff]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#222a3d]">
          <button
            onClick={() => {
              onSelectForQuote(service.title);
              onClose();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] text-[#060e20] text-sm font-bold shadow-lg hover:opacity-95 transition-all"
          >
            <span>Request Quotation for {service.title}</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <a
            href={`${BRAND_ASSETS.whatsappUrl}?text=${encodeURIComponent(
              `Hello Digital Sixers, I'd like to discuss the ${service.title} service for my business.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-secondary border border-[#4cd7f6]/30 text-sm font-semibold transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
