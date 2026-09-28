import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const getAccentClass = (accent: 'secondary' | 'primary' | 'tertiary') => {
    switch (accent) {
      case 'secondary':
        return {
          numColor: 'text-secondary',
          iconColor: 'text-secondary',
          borderColor: 'border-secondary/30',
        };
      case 'primary':
        return {
          numColor: 'text-[#c0c1ff]',
          iconColor: 'text-[#c0c1ff]',
          borderColor: 'border-[#8083ff]/30',
        };
      case 'tertiary':
        return {
          numColor: 'text-tertiary',
          iconColor: 'text-tertiary',
          borderColor: 'border-[#fbabff]/30',
        };
    }
  };

  return (
    <section className="w-full bg-[#0b1326] py-20 lg:py-28 relative border-t border-[#171f33]" id="process">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8083ff]/15 border border-[#8083ff]/30 text-[#c0c1ff] w-fit text-xs uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-[16px]">account_tree</span>
            <span>The Workflow</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
            A Seamless Journey from Idea to Market
          </h2>
          <p className="text-base md:text-lg text-[#c7c4d7]">
            Four deliberate phases designed for transparent collaboration, architectural certainty, and on-schedule execution.
          </p>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const styles = getAccentClass(step.accentColor);
            const isExpanded = activeStepIndex === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(isExpanded ? null : idx)}
                className={`p-6 rounded-2xl bg-[#131b2e] border transition-all duration-300 flex flex-col gap-4 relative group cursor-pointer ${
                  isExpanded
                    ? 'border-secondary bg-[#171f33] shadow-[0_0_30px_rgba(76,215,246,0.15)] ring-1 ring-secondary'
                    : 'border-[#222a3d] hover:border-secondary/40 hover:bg-[#171f33]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-10 h-10 rounded-full bg-[#222a3d] ${styles.numColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {step.number}
                  </span>
                  <span className="text-[11px] text-[#908fa0] uppercase font-mono tracking-widest font-bold">
                    {step.phase}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl text-on-surface font-bold mb-2 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#c7c4d7] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-2 flex items-center gap-2 text-[#908fa0] text-xs font-semibold">
                  <span className={`material-symbols-outlined text-[16px] ${styles.iconColor}`}>
                    {step.icon}
                  </span>
                  <span>{step.deliverable}</span>
                </div>

                {/* Interactive Details Accordion */}
                {isExpanded && (
                  <div className="pt-3 mt-2 border-t border-[#222a3d] flex flex-col gap-1.5 animate-in fade-in duration-200">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-secondary font-bold">
                      Sprint Breakdown:
                    </span>
                    {step.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-[#dae2fd]">
                        <span className="text-secondary">•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="text-[11px] text-[#908fa0] group-hover:text-secondary flex items-center gap-1 mt-auto pt-2">
                  <span>{isExpanded ? 'Click to minimize' : 'Click to inspect sprint'}</span>
                  <span className="material-symbols-outlined text-[12px]">
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
