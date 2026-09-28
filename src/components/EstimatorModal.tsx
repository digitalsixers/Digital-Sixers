import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/agencyData';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToQuote: (details: { service: string; budget: string; description: string }) => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToQuote,
}) => {
  const [projectType, setProjectType] = useState<string>('landing-page');
  const [timelineSpeed, setTimelineSpeed] = useState<string>('standard');
  const [features, setFeatures] = useState<string[]>(['seo', 'mobile']);
  const [pageCount, setPageCount] = useState<number>(3);

  if (!isOpen) return null;

  const toggleFeature = (feat: string) => {
    setFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  // Dynamic calculations
  let basePrice = 25000;
  let estimatedDays = 7;
  let serviceName = 'Landing Page Development';

  if (projectType === 'landing-page') {
    basePrice = 22000;
    estimatedDays = 5;
    serviceName = 'Landing Page Development';
  } else if (projectType === 'ecommerce') {
    basePrice = 55000 + pageCount * 2500;
    estimatedDays = 14;
    serviceName = 'E-commerce Website Development';
  } else if (projectType === 'corporate') {
    basePrice = 38000 + pageCount * 3000;
    estimatedDays = 10;
    serviceName = 'Service Website Development';
  } else if (projectType === 'seo-growth') {
    basePrice = 28000;
    estimatedDays = 30;
    serviceName = 'Search Engine Optimization (SEO)';
  } else if (projectType === 'marketing-full') {
    basePrice = 45000;
    estimatedDays = 30;
    serviceName = 'Social Media Marketing';
  }

  // Feature add-ons
  if (features.includes('whatsapp-bot')) basePrice += 6000;
  if (features.includes('speed-99')) basePrice += 5000;
  if (features.includes('payment-gateway')) basePrice += 7500;
  if (features.includes('analytics-suite')) basePrice += 4000;

  if (timelineSpeed === 'rush') {
    basePrice = Math.round(basePrice * 1.25);
    estimatedDays = Math.max(3, Math.round(estimatedDays * 0.6));
  }

  const handleApply = () => {
    const desc = `Project Scope: ${serviceName} (~${estimatedDays} days). Selected features: ${features.join(
      ', '
    )}. Speed: ${timelineSpeed}. Estimated investment: ₹${basePrice.toLocaleString('en-IN')}.`;
    onApplyToQuote({
      service: serviceName,
      budget: `₹${(Math.round(basePrice / 10000) * 10000).toLocaleString('en-IN')}`,
      description: desc,
    });
    onClose();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#131b2e] border border-[#222a3d] p-6 sm:p-8 shadow-2xl text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#171f33] hover:bg-[#222a3d] text-[#c7c4d7] hover:text-white flex items-center justify-center transition-colors border border-[#222a3d]"
          aria-label="Close Estimator"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary border border-secondary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">calculate</span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-on-surface">
              Project Scope &amp; Investment Estimator
            </h3>
            <p className="text-xs text-[#908fa0]">
              Get an instant baseline estimate for your digital build in Coimbatore
            </p>
          </div>
        </div>

        {/* Step 1: Project Type */}
        <div className="mt-5">
          <label className="text-xs uppercase font-mono font-bold text-[#c0c1ff] tracking-wider block mb-2">
            1. Select Primary Objective
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'landing-page', label: 'Landing Page Funnel', icon: 'web' },
              { id: 'corporate', label: 'Service / Corporate Web', icon: 'domain' },
              { id: 'ecommerce', label: 'E-commerce Store', icon: 'shopping_cart' },
              { id: 'seo-growth', label: 'SEO Authority Sprint', icon: 'travel_explore' },
              { id: 'marketing-full', label: 'Social & Meta Ads', icon: 'share' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setProjectType(item.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                  projectType === item.id
                    ? 'bg-[#171f33] border-secondary text-secondary shadow-sm'
                    : 'bg-[#0f172a] border-[#222a3d] text-[#c7c4d7] hover:border-[#464554]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="text-xs font-bold leading-tight">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Optional Page count if multi-page */}
        {(projectType === 'corporate' || projectType === 'ecommerce') && (
          <div className="mt-4 p-3.5 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-on-surface block">Number of Core Pages</span>
              <span className="text-[11px] text-[#908fa0]">e.g. Home, About, Services, Catalog</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPageCount(Math.max(1, pageCount - 1))}
                className="w-7 h-7 rounded bg-[#222a3d] text-on-surface hover:bg-[#2d3449] font-bold"
              >
                -
              </button>
              <span className="font-mono text-sm font-bold text-secondary w-6 text-center">
                {pageCount}
              </span>
              <button
                onClick={() => setPageCount(Math.min(20, pageCount + 1))}
                className="w-7 h-7 rounded bg-[#222a3d] text-on-surface hover:bg-[#2d3449] font-bold"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Desired Velocity */}
        <div className="mt-4">
          <label className="text-xs uppercase font-mono font-bold text-[#c0c1ff] tracking-wider block mb-2">
            2. Launch Pace
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTimelineSpeed('standard')}
              className={`p-3 rounded-xl border text-left flex items-center justify-between ${
                timelineSpeed === 'standard'
                  ? 'bg-[#171f33] border-secondary text-secondary'
                  : 'bg-[#0f172a] border-[#222a3d] text-[#c7c4d7]'
              }`}
            >
              <div>
                <span className="text-xs font-bold block">Standard Agile Sprint</span>
                <span className="text-[11px] text-[#908fa0]">Best value &amp; deliberate QA</span>
              </div>
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </button>

            <button
              type="button"
              onClick={() => setTimelineSpeed('rush')}
              className={`p-3 rounded-xl border text-left flex items-center justify-between ${
                timelineSpeed === 'rush'
                  ? 'bg-[#171f33] border-tertiary text-tertiary'
                  : 'bg-[#0f172a] border-[#222a3d] text-[#c7c4d7]'
              }`}
            >
              <div>
                <span className="text-xs font-bold block">Priority Express Sprint</span>
                <span className="text-[11px] text-[#908fa0]">Expedited delivery</span>
              </div>
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </button>
          </div>
        </div>

        {/* Step 3: Add-on Capabilities */}
        <div className="mt-4">
          <label className="text-xs uppercase font-mono font-bold text-[#c0c1ff] tracking-wider block mb-2">
            3. Specialized Add-ons
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'whatsapp-bot', label: 'WhatsApp Automation', icon: 'chat' },
              { id: 'speed-99', label: 'Lighthouse 99 Speed', icon: 'speed' },
              { id: 'payment-gateway', label: 'Payment Gateway Setup', icon: 'credit_card' },
              { id: 'analytics-suite', label: 'GTM + Meta Pixel', icon: 'query_stats' },
            ].map((addon) => {
              const checked = features.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleFeature(addon.id)}
                  className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    checked
                      ? 'bg-secondary/10 border-secondary text-secondary'
                      : 'bg-[#0f172a] border-[#222a3d] text-[#908fa0]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{addon.icon}</span>
                  <span className="text-[11px] font-bold leading-tight">{addon.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculation Result Card */}
        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#171f33] to-[#222a3d] border border-secondary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-secondary font-mono uppercase tracking-wider block">
              Estimated Investment
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">
                ₹{basePrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#908fa0]">approximate guidance</span>
            </div>
            <span className="text-xs text-[#c7c4d7] flex items-center gap-1.5 mt-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">timer</span>
              <span>Estimated timeline: ~{estimatedDays} business days</span>
            </span>
          </div>

          <button
            onClick={handleApply}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] text-[#060e20] text-sm font-bold shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Lock In Estimate</span>
            <span className="material-symbols-outlined text-[18px]">check</span>
          </button>
        </div>
      </div>
    </div>
  );
};
