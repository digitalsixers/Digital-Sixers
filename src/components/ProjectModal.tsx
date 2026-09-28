import React from 'react';
import { PortfolioProject } from '../types';
import { BRAND_ASSETS } from '../data/agencyData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#131b2e] border border-[#222a3d] p-6 sm:p-8 shadow-2xl text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#171f33] hover:bg-[#222a3d] text-[#c7c4d7] hover:text-white flex items-center justify-center transition-colors border border-[#222a3d] z-10"
          aria-label="Close Project Modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Featured Image & Badge */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-[#222a3d]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent opacity-80"></div>
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171f33]/90 backdrop-blur-md text-secondary border border-secondary/30 text-xs font-bold font-mono">
            {project.categoryLabel}
          </span>
          {project.location && (
            <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#060e20]/80 backdrop-blur-md text-xs text-[#c7c4d7] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
              <span>{project.location}</span>
            </span>
          )}
        </div>

        {/* Project Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs text-secondary font-mono uppercase tracking-wider mb-1">
            <span>Client: {project.client || 'Enterprise Client'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
            {project.title}
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#c7c4d7] leading-relaxed mb-6">
          {project.fullOverview || project.description}
        </p>

        {/* Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#171f33] border border-[#222a3d] flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl sm:text-3xl font-black text-secondary">
                  {metric.value}
                </span>
                <span className="text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Deliverables / Scope */}
        {project.deliverables && (
          <div className="mb-6 bg-[#171f33] border border-[#222a3d] rounded-2xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Key Architectural Implementations</span>
            </h4>
            <ul className="space-y-2">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#dae2fd]">
                  <span className="text-secondary font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <span className="text-xs text-[#908fa0] font-mono mr-1">Stack:</span>
          {project.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-[#171f33] border border-[#222a3d] text-xs font-mono text-[#c0c1ff]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#222a3d]">
          <button
            onClick={() => {
              onRequestSimilar(project.title);
              onClose();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] text-[#060e20] text-sm font-bold shadow-lg hover:opacity-95 transition-all"
          >
            <span>Request Similar Build for Your Brand</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <a
            href={`${BRAND_ASSETS.whatsappUrl}?text=${encodeURIComponent(
              `Hi Digital Sixers, I saw the case study for "${project.title}" and would like to build something similar for my business.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-secondary border border-secondary/30 text-sm font-semibold transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </div>
  );
};
