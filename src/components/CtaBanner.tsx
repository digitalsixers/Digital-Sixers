import React from 'react';
import { BRAND_ASSETS } from '../data/agencyData';

export const CtaBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#0b1326] py-16 relative overflow-hidden border-t border-[#171f33]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#222a3d] via-[#171f33] to-[#131b2e] border border-[#222a3d] p-10 md:p-16 overflow-hidden shadow-2xl">
          {/* Glow Backlight */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4cd7f6]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8083ff]/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="text-xs text-secondary uppercase tracking-widest font-mono font-bold">
                Start Today
              </span>
              <h2 className="text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
                Ready to Grow Your Business Online?
              </h2>
              <p className="text-base md:text-lg text-[#c7c4d7]">
                Let's build a digital presence that works for your business. Share your vision and get our engineering assessment within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] text-[#060e20] text-sm font-bold shadow-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                href="#contact"
              >
                <span>Let's Talk</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#2d3449] border border-[#4cd7f6]/30 text-secondary hover:bg-[#31394d] text-sm font-bold transition-all shadow-md"
                href={BRAND_ASSETS.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
