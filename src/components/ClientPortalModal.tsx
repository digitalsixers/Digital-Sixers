import React from 'react';
import { BRAND_ASSETS } from '../data/agencyData';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#131b2e] border border-[#222a3d] p-6 sm:p-8 shadow-2xl text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#171f33] hover:bg-[#222a3d] text-[#c7c4d7] hover:text-white flex items-center justify-center transition-colors border border-[#222a3d]"
          aria-label="Close Portal Modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Portal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[26px]">terminal</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider">
                Digital Sixers Portal
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold font-mono">
                ACTIVE SPRINT
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-on-surface">
              Client Project Sprint Dashboard
            </h3>
          </div>
        </div>

        {/* Active Project Card */}
        <div className="p-5 rounded-2xl bg-[#171f33] border border-[#222a3d] mb-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs text-[#908fa0] uppercase tracking-wider font-mono">
                Project Ref: #DSX-2026-089
              </span>
              <h4 className="text-lg font-bold text-white">
                Apex Industrial Export Portal &amp; SEO Engine
              </h4>
            </div>
            <span className="text-xs font-mono text-secondary px-2.5 py-1 rounded bg-[#222a3d]">
              Coimbatore Hub
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 mb-4">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#c7c4d7]">Sprint 03 / Production Velocity</span>
              <span className="text-secondary font-bold">82% Complete</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#0b1326] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] w-[82%] rounded-full"></div>
            </div>
          </div>

          {/* Milestone List */}
          <div className="space-y-2 pt-2 border-t border-[#222a3d] text-xs">
            <div className="flex items-center justify-between text-[#c7c4d7]">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">check_circle</span>
                <span>Requirement Discovery &amp; Information Architecture</span>
              </span>
              <span className="text-[#908fa0] font-mono">Completed</span>
            </div>
            <div className="flex items-center justify-between text-[#c7c4d7]">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">check_circle</span>
                <span>High-Fidelity Wireframes &amp; Design Approval</span>
              </span>
              <span className="text-[#908fa0] font-mono">Completed</span>
            </div>
            <div className="flex items-center justify-between text-[#c7c4d7]">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-secondary animate-pulse">pending</span>
                <span className="text-white font-medium">Headless CMS &amp; Sub-Second Edge Integration</span>
              </span>
              <span className="text-secondary font-mono font-bold">In Progress</span>
            </div>
            <div className="flex items-center justify-between text-[#908fa0]">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span>
                <span>Final Core Web Vitals &amp; Local SEO Indexing</span>
              </span>
              <span className="font-mono">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Staging URL Link */}
        <div className="p-4 rounded-xl bg-[#0b1326] border border-[#222a3d] flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">preview</span>
            <span className="text-xs text-[#c7c4d7] font-mono">
              staging-preview.digitalsixers.io/apex
            </span>
          </div>
          <span className="text-[11px] font-mono font-bold text-secondary bg-[#171f33] px-2 py-1 rounded">
            Live Staging
          </span>
        </div>

        {/* Assigned Team */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#171f33] border border-[#222a3d] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold font-mono">
              DS
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                Digital Sixers Engineering Lead
              </span>
              <span className="text-[11px] text-[#908fa0]">Coimbatore Tech Desk</span>
            </div>
          </div>
          <a
            href={BRAND_ASSETS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] text-secondary text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Direct WhatsApp</span>
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-on-surface text-sm font-bold transition-all"
        >
          Return to Website
        </button>
      </div>
    </div>
  );
};
