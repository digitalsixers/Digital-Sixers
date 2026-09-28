import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="w-full bg-[#060e20] py-20 lg:py-28 relative border-t border-[#171f33]" id="about">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8083ff]/15 text-[#c0c1ff] border border-[#8083ff]/30 w-fit text-xs uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
            <span>Who We Are</span>
          </div>

          <h2 className="text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
            Bridging Design Craft with Measurable Business Strategy
          </h2>

          <p className="text-base md:text-lg text-[#c7c4d7] leading-relaxed">
            Digital Sixers is an agile digital solutions agency based out of Coimbatore, dedicated to helping ambition-led brands establish, scale, and lead their digital market. We eliminate guesswork by combining technical web engineering with deliberate marketing precision.
          </p>
        </div>

        {/* 5 Value Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-secondary/50 hover:bg-[#171f33] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-[#003640] transition-colors">
              <span className="material-symbols-outlined text-[26px]">palette</span>
            </div>
            <h3 className="text-xl text-on-surface font-bold">Creative Solutions</h3>
            <p className="text-sm md:text-base text-[#c7c4d7] leading-relaxed">
              Aesthetic interfaces that capture attention. We build distinctive brand visuals and responsive layouts that resonate emotionally while conveying unmistakable authority.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-secondary/50 hover:bg-[#171f33] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-[#003640] transition-colors">
              <span className="material-symbols-outlined text-[26px]">monitoring</span>
            </div>
            <h3 className="text-xl text-on-surface font-bold">Business-Focused Strategy</h3>
            <p className="text-sm md:text-base text-[#c7c4d7] leading-relaxed">
              Every line of code and marketing campaign is directly tied to measurable ROI, qualified pipeline growth, and your commercial unit economics.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-secondary/50 hover:bg-[#171f33] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-[#003640] transition-colors">
              <span className="material-symbols-outlined text-[26px]">terminal</span>
            </div>
            <h3 className="text-xl text-on-surface font-bold">Modern Web Development</h3>
            <p className="text-sm md:text-base text-[#c7c4d7] leading-relaxed">
              Lightning-fast, mobile-first, and ultra-secure. Engineered on contemporary frameworks designed for clean code architecture and seamless cross-platform reliability.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-secondary/50 hover:bg-[#171f33] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-[#003640] transition-colors">
              <span className="material-symbols-outlined text-[26px]">campaign</span>
            </div>
            <h3 className="text-xl text-on-surface font-bold">Digital Marketing</h3>
            <p className="text-sm md:text-base text-[#c7c4d7] leading-relaxed">
              Targeted customer acquisition across high-intent search queries and social ecosystems. We connect your offering directly to buyers actively looking for solutions.
            </p>
          </div>

          {/* Pillar 5 (Double Span on Desktop) */}
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-2xl bg-gradient-to-r from-[#131b2e] to-[#171f33] border border-[#222a3d] hover:border-tertiary/50 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
            <div className="flex flex-col gap-3 max-w-xl">
              <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
              </div>
              <h3 className="text-xl text-on-surface font-bold">Growth-Focused Approach</h3>
              <p className="text-sm md:text-base text-[#c7c4d7] leading-relaxed">
                We don't abandon your launch at delivery. Our team provides continuous analytics monitoring, optimization sprints, and structural guidance to sustain momentum over the long haul.
              </p>
            </div>
            <a
              className="shrink-0 px-5 py-3 rounded-xl bg-[#2d3449] text-secondary hover:bg-secondary hover:text-[#003640] text-sm font-bold transition-all flex items-center gap-2 border border-[#4cd7f6]/20"
              href="#services"
            >
              <span>Explore Services</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
