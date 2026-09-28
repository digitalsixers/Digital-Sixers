import React, { useState } from 'react';
import { SERVICES_DATA, BRAND_ASSETS } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ScopeModal } from './ScopeModal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const getAccentClass = (accent: 'secondary' | 'primary' | 'tertiary') => {
    switch (accent) {
      case 'secondary':
        return {
          iconText: 'text-secondary',
          hoverText: 'group-hover:text-secondary',
          circleText: 'text-secondary',
          buttonText: 'text-secondary',
        };
      case 'primary':
        return {
          iconText: 'text-[#c0c1ff]',
          hoverText: 'group-hover:text-[#c0c1ff]',
          circleText: 'text-[#c0c1ff]',
          buttonText: 'text-[#c0c1ff]',
        };
      case 'tertiary':
        return {
          iconText: 'text-tertiary',
          hoverText: 'group-hover:text-tertiary',
          circleText: 'text-tertiary',
          buttonText: 'text-tertiary',
        };
    }
  };

  const handleGetStarted = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#0b1326] py-20 lg:py-28 relative border-t border-[#171f33]" id="services">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03b5d3]/20 border border-[#4cd7f6]/30 text-secondary w-fit text-xs uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[16px]">build_circle</span>
              <span>Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
              Engineered for Performance &amp; Scalability
            </h2>
            <p className="text-base md:text-lg text-[#c7c4d7]">
              Explore our specialized service capabilities designed to drive conversion, rank on Google, and convert casual visitors into lifetime clients.
            </p>
          </div>
          <span className="text-[#908fa0] text-xs font-mono hidden md:block uppercase tracking-widest">
            05 CORE DISCIPLINES
          </span>
        </div>

        {/* 5 Core Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isWideCard = index === 4; // Social Media Marketing span 2 on desktop
            const styles = getAccentClass(service.accentColor);

            return (
              <div
                key={service.id}
                className={`p-8 rounded-2xl bg-[#131b2e] border border-[#222a3d] flex flex-col justify-between hover:-translate-y-1.5 hover:border-secondary/40 transition-all duration-300 shadow-lg group ${
                  isWideCard ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center ${styles.iconText} transition-transform group-hover:scale-110`}
                    >
                      <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                    </span>
                    <span className="text-[#464554] text-xs font-mono font-bold">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl text-on-surface font-bold mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base text-[#c7c4d7] ${
                        isWideCard ? 'max-w-2xl' : ''
                      }`}
                    >
                      {service.id === 'social-media' ? (
                        <>
                          Strategic visual storytelling and paid performance campaigns across Instagram (
                          <a
                            className="text-secondary hover:underline font-medium"
                            href={BRAND_ASSETS.instagram}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            @digitalsixers
                          </a>
                          ) and Meta channels. We generate brand recall that directly feeds your acquisition funnel.
                        </>
                      ) : (
                        service.description
                      )}
                    </p>
                  </div>

                  {/* Wide card special grid for Social Media Marketing */}
                  {isWideCard ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center gap-2.5 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">movie</span>
                        <span className="font-semibold">Reels &amp; Video Frameworks</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center gap-2.5 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">pie_chart</span>
                        <span className="font-semibold">Demographic Audience Segments</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center gap-2.5 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">insights</span>
                        <span className="font-semibold">Creative Ad Testing &amp; Retargeting</span>
                      </div>
                    </div>
                  ) : (
                    <ul className="flex flex-col gap-2.5 pt-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-on-surface">
                          <span
                            className={`material-symbols-outlined ${styles.circleText} text-[18px] shrink-0`}
                          >
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-[#222a3d]/50 mt-4">
                  <button
                    onClick={() => handleGetStarted(service.title)}
                    className={`inline-flex items-center gap-2 ${styles.buttonText} hover:brightness-125 transition-all text-sm font-bold`}
                  >
                    <span>Get Started</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedServiceForModal(service)}
                    className="text-xs text-[#908fa0] hover:text-[#c0c1ff] font-medium transition-colors flex items-center gap-1"
                  >
                    <span>View Scope</span>
                    <span className="material-symbols-outlined text-[14px]">info</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scope Details Modal */}
      <ScopeModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onSelectForQuote={(name) => handleGetStarted(name)}
      />
    </section>
  );
};
