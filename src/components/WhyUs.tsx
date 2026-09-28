import React from 'react';
import { WHY_US_DATA } from '../data/agencyData';

interface WhyUsProps {
  onOpenEstimator?: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenEstimator }) => {
  const getAccentClass = (accent: string) => {
    switch (accent) {
      case 'secondary':
        return {
          iconColor: 'text-secondary',
        };
      case 'primary':
        return {
          iconColor: 'text-[#c0c1ff]',
        };
      case 'tertiary':
        return {
          iconColor: 'text-tertiary',
        };
      default:
        return {
          iconColor: 'text-secondary',
        };
    }
  };

  return (
    <section className="w-full bg-[#060e20] py-20 lg:py-28 relative border-t border-[#171f33]" id="why-us">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171f33] border border-[#222a3d] text-secondary w-fit text-xs uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Why Partner With Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
              Engineered for Tangible Commercial Impact
            </h2>
            <p className="text-base md:text-lg text-[#c7c4d7]">
              We operate on transparent technical principles and direct accountability. No generic template clones, no inflated vanity metrics.
            </p>
          </div>

          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-secondary border border-secondary/30 text-xs font-bold transition-all shrink-0"
            >
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Interactive ROI &amp; Scope Tool</span>
            </button>
          )}
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_DATA.map((item, index) => {
            const styles = getAccentClass(item.accent);
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-secondary/40 hover:bg-[#171f33] transition-all duration-300 flex flex-col gap-3.5 group shadow-sm"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-[#222a3d] flex items-center justify-center ${styles.iconColor} group-hover:scale-110 transition-transform`}
                >
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl text-on-surface font-bold group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#c7c4d7] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
