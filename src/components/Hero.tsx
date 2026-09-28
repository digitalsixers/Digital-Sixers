import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/agencyData';

interface HeroProps {
  onSelectService?: (serviceName: string) => void;
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService, onOpenEstimator }) => {
  const [timeframe, setTimeframe] = useState<'7D' | '30D' | '90D'>('30D');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Timeframe-specific simulated telemetry
  const telemetryData = {
    '7D': {
      label: 'Last 7 Days',
      searchPos: '#1',
      searchBadge: 'Top Tier',
      conversionRatio: '4.1x',
      convBadge: 'Peak Pace',
      points: [
        { x: 30, y: 70, val: '840 visits', phase: 'Launch' },
        { x: 100, y: 55, val: '1,420 visits', phase: 'Viral Reel' },
        { x: 180, y: 35, val: '2,890 visits', phase: 'Ads Scale' },
        { x: 260, y: 15, val: '4,650 visits', phase: 'Top Rank' },
        { x: 300, y: 8, val: '5,210 visits', phase: 'Active Peak' },
      ],
      pathD: 'M0,78 Q50,72 100,55 T180,35 T260,15 T300,8 L300,90 L0,90 Z',
      strokeD: 'M0,78 Q50,72 100,55 T180,35 T260,15 T300,8',
    },
    '30D': {
      label: 'Last 30 Days',
      searchPos: '#1',
      searchBadge: 'Top Tier',
      conversionRatio: '3.8x',
      convBadge: 'High Pace',
      points: [
        { x: 75, y: 50, val: '12.4k views', phase: 'Phase 1: Setup' },
        { x: 150, y: 42, val: '28.1k views', phase: 'Phase 2: Indexation' },
        { x: 225, y: 20, val: '46.8k views', phase: 'Phase 3: Scale' },
        { x: 300, y: 8, val: '64.2k views', phase: 'Market Dominance' },
      ],
      pathD: 'M0,75 Q40,65 75,50 T150,42 T225,20 T300,8 L300,90 L0,90 Z',
      strokeD: 'M0,75 Q40,65 75,50 T150,42 T225,20 T300,8',
    },
    '90D': {
      label: 'Last 90 Days',
      searchPos: '#1',
      searchBadge: 'Top Rank Held',
      conversionRatio: '5.2x',
      convBadge: 'Compounding',
      points: [
        { x: 50, y: 65, val: '32k reach', phase: 'Month 1' },
        { x: 140, y: 45, val: '89k reach', phase: 'Month 2' },
        { x: 230, y: 18, val: '164k reach', phase: 'Month 3' },
        { x: 300, y: 6, val: '240k reach', phase: 'Qtr Peak' },
      ],
      pathD: 'M0,82 Q45,70 50,65 T140,45 T230,18 T300,6 L300,90 L0,90 Z',
      strokeD: 'M0,82 Q45,70 50,65 T140,45 T230,18 T300,6',
    },
  };

  const current = telemetryData[timeframe];

  return (
    <section className="relative w-full overflow-hidden bg-[#0b1326] py-12 md:py-20 lg:py-24" id="hero">
      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-[#8083ff]/20 to-[#4cd7f6]/15 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#e14ef6]/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#222a3d]/80 border border-[#4cd7f6]/30 backdrop-blur-md w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-[11px] font-bold text-secondary uppercase tracking-widest">
                Modern Digital Agency in Coimbatore
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] text-on-surface tracking-tight font-extrabold leading-[1.12]">
              Build Your Digital Presence.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c1ff] via-[#4cd7f6] to-[#fbabff]">
                Grow Your Business.
              </span>
            </h1>

            {/* Paragraph Subhead */}
            <p className="text-lg md:text-xl text-[#c7c4d7] max-w-2xl leading-relaxed">
              We engineer high-converting websites, data-driven SEO, and growth-focused digital marketing solutions designed to elevate modern brands across Coimbatore and beyond.
            </p>

            {/* Dual CTAs & Estimator */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] text-[#060e20] text-sm font-bold shadow-[0_4px_24px_rgba(76,215,246,0.3)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                href="#contact"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#222a3d] border border-[#464554]/50 text-on-surface text-sm font-semibold hover:bg-[#2d3449] hover:border-secondary/40 transition-all"
                href="#services"
              >
                <span>View Our Services</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">expand_more</span>
              </a>

              {onOpenEstimator && (
                <button
                  onClick={onOpenEstimator}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-[#c0c1ff] border border-[#8083ff]/30 text-sm font-medium transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">trending_up</span>
                  <span>Calculate Project Cost</span>
                </button>
              )}
            </div>

            {/* Quick Touchpoint Bar */}
            <div className="pt-6 flex flex-wrap items-center gap-3 md:gap-4 border-t border-[#222a3d]/70">
              <span className="text-[11px] text-[#908fa0] uppercase tracking-wider font-bold">
                Fast Direct Touch:
              </span>
              <a
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131b2e] hover:bg-[#171f33] text-secondary text-xs font-semibold border border-[#4cd7f6]/20 transition-colors"
                href={BRAND_ASSETS.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>{BRAND_ASSETS.phone}</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131b2e] hover:bg-[#171f33] text-tertiary text-xs font-semibold border border-[#fbabff]/20 transition-colors"
                href={BRAND_ASSETS.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                <span>{BRAND_ASSETS.instagramHandle}</span>
              </a>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#908fa0]">
                <span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                <span>Replies in &lt; 30 mins</span>
              </span>
            </div>
          </div>

          {/* Hero Graphic & Growth Telemetry Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#131b2e]/90 border border-[#222a3d] backdrop-blur-xl p-6 shadow-2xl overflow-hidden group hover:border-[#4cd7f6]/40 transition-colors">
              {/* Glow Accents inside card */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#4cd7f6]/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-[#8083ff]/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Header inside Mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-[#464554]/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#03b5d3]"></span>
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="text-[11px] text-[#c7c4d7] ml-2 font-mono">
                    analytics.digitalsixers.io
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#03b5d3]/20 border border-[#4cd7f6]/30 text-secondary text-[11px] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">bolt</span>
                    <span>Live Engine</span>
                  </span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5 my-5">
                <div className="p-3.5 rounded-xl bg-[#171f33] border border-[#222a3d] flex flex-col gap-1">
                  <span className="text-[11px] text-[#c7c4d7] uppercase tracking-wider font-semibold">
                    Search Engine Pos
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-on-surface font-black">{current.searchPos}</span>
                    <span className="text-secondary text-[11px] font-bold flex items-center">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                      {current.searchBadge}
                    </span>
                  </div>
                  <span className="text-xs text-[#908fa0]">Coimbatore Keywords</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#171f33] border border-[#222a3d] flex flex-col gap-1">
                  <span className="text-[11px] text-[#c7c4d7] uppercase tracking-wider font-semibold">
                    Conversion Ratio
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-secondary font-black">
                      {current.conversionRatio}
                    </span>
                    <span className="text-tertiary text-[11px] font-bold flex items-center">
                      <span className="material-symbols-outlined text-[14px]">speed</span>
                      {current.convBadge}
                    </span>
                  </div>
                  <span className="text-xs text-[#908fa0]">Landing Page Benchmarks</span>
                </div>
              </div>

              {/* Conversion Funnel & Graph SVG */}
              <div className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d] flex flex-col gap-2 relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-on-surface font-bold">
                      Organic Traffic &amp; Lead Velocity
                    </span>
                    <span className="text-[11px] text-[#908fa0] font-mono ml-2">
                      ({current.label})
                    </span>
                  </div>

                  {/* Interactive Timeframe Toggle */}
                  <div className="flex items-center gap-1 bg-[#131b2e] p-0.5 rounded-lg border border-[#222a3d]">
                    {(['7D', '30D', '90D'] as const).map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setTimeframe(tf)}
                        className={`text-[10px] px-2 py-0.5 rounded transition-all font-mono font-bold ${
                          timeframe === tf
                            ? 'bg-secondary text-[#003640] shadow-sm'
                            : 'text-[#908fa0] hover:text-on-surface'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Curve */}
                <div className="relative">
                  <svg
                    className="w-full h-24 text-secondary overflow-visible"
                    fill="none"
                    viewBox="0 0 300 90"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="curveGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.38"></stop>
                        <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.0"></stop>
                      </linearGradient>
                    </defs>
                    <path d={current.pathD} fill="url(#curveGradient)"></path>
                    <path
                      d={current.strokeD}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    ></path>

                    {/* Interactive Points */}
                    {current.points.map((pt, idx) => (
                      <g key={idx} className="cursor-pointer">
                        <circle
                          className={`transition-all duration-200 ${
                            hoveredPoint === idx
                              ? 'fill-secondary stroke-white stroke-2 r-5'
                              : idx === current.points.length - 1
                              ? 'fill-secondary'
                              : 'fill-[#0b1326] stroke-secondary stroke-2'
                          }`}
                          cx={pt.x}
                          cy={pt.y}
                          r={hoveredPoint === idx ? 5 : idx === current.points.length - 1 ? 4.5 : 3.5}
                          onMouseEnter={() => setHoveredPoint(idx)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Active Point Tooltip */}
                  {hoveredPoint !== null && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#222a3d] border border-secondary text-secondary px-2.5 py-1 rounded text-[11px] font-mono shadow-lg flex items-center gap-1.5 z-20 pointer-events-none">
                      <span>{current.points[hoveredPoint].phase}:</span>
                      <strong className="text-white">{current.points[hoveredPoint].val}</strong>
                    </div>
                  )}
                </div>

                {/* Phase markers */}
                <div className="flex items-center justify-between text-[#908fa0] text-[11px] pt-1 border-t border-[#222a3d]/50">
                  <span>Phase 1: Setup</span>
                  <span>Phase 2: Indexation</span>
                  <span className="text-secondary font-semibold">Phase 3: Scale</span>
                </div>
              </div>

              {/* Tech Badges Footer inside dashboard */}
              <div className="mt-4 pt-3 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-[11px] font-mono border border-[#464554]/30">
                    Next.js 15
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-[11px] font-mono border border-[#464554]/30">
                    Schema 2.0
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-[11px] font-mono border border-[#464554]/30">
                    Lighthouse 99
                  </span>
                </div>

                <span className="flex items-center gap-1 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Verified</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
