import React from 'react';
import { BRAND_ASSETS } from '../data/agencyData';

interface FooterProps {
  onSelectService?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const handleServiceClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#060e20] text-[#c7c4d7] pt-16 pb-12 border-t border-[#171f33]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Digital Sixers Brand Mark"
                className="h-8 w-auto object-contain"
                src={BRAND_ASSETS.logo}
              />
              <span className="text-xl md:text-2xl text-on-surface font-extrabold tracking-tight">
                Digital <span className="text-secondary">Sixers</span>
              </span>
            </div>
            <p className="text-sm md:text-base text-[#c7c4d7] max-w-sm leading-relaxed">
              Digital solutions for businesses that want to build, grow and succeed online.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center justify-center text-[#c7c4d7] hover:text-secondary hover:bg-[#222a3d] transition-all"
                href={BRAND_ASSETS.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center justify-center text-[#c7c4d7] hover:text-secondary hover:bg-[#222a3d] transition-all"
                href={BRAND_ASSETS.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
              <a
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center justify-center text-[#c7c4d7] hover:text-secondary hover:bg-[#222a3d] transition-all"
                href={`mailto:${BRAND_ASSETS.email}`}
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm">
              <a className="text-[#c7c4d7] hover:text-secondary transition-colors" href="#hero">
                Home
              </a>
              <a className="text-[#c7c4d7] hover:text-secondary transition-colors" href="#about">
                About
              </a>
              <a className="text-[#c7c4d7] hover:text-secondary transition-colors" href="#services">
                Services
              </a>
              <a className="text-[#c7c4d7] hover:text-secondary transition-colors" href="#why-us">
                Why Us
              </a>
              <a className="text-[#c7c4d7] hover:text-secondary transition-colors" href="#process">
                Process
              </a>
              <a className="text-[#c7c4d7] hover:text-secondary transition-colors" href="#portfolio">
                Portfolio
              </a>
              <a className="text-[#c7c4d7] hover:text-secondary transition-colors" href="#contact">
                Contact
              </a>
            </nav>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              Core Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li
                onClick={() => handleServiceClick('Landing Page Development')}
                className="hover:text-secondary transition-colors cursor-pointer"
              >
                Landing Pages
              </li>
              <li
                onClick={() => handleServiceClick('Service Website Development')}
                className="hover:text-secondary transition-colors cursor-pointer"
              >
                Web Development
              </li>
              <li
                onClick={() => handleServiceClick('E-commerce Website Development')}
                className="hover:text-secondary transition-colors cursor-pointer"
              >
                E-commerce
              </li>
              <li
                onClick={() => handleServiceClick('Search Engine Optimization (SEO)')}
                className="hover:text-secondary transition-colors cursor-pointer"
              >
                SEO (Search Engine Optimization)
              </li>
              <li
                onClick={() => handleServiceClick('Social Media Marketing')}
                className="hover:text-secondary transition-colors cursor-pointer"
              >
                Social Media Marketing
              </li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              Direct Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                className="flex items-center gap-2 hover:text-secondary transition-colors"
                href={BRAND_ASSETS.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  photo_camera
                </span>
                <span>{BRAND_ASSETS.instagramHandle}</span>
              </a>

              <a
                className="flex items-center gap-2 hover:text-secondary transition-colors"
                href={BRAND_ASSETS.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                <span>{BRAND_ASSETS.phone}</span>
              </a>

              <a
                className="flex items-center gap-2 hover:text-secondary transition-colors"
                href={`mailto:${BRAND_ASSETS.email}`}
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
                <span>{BRAND_ASSETS.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-xs text-[#908fa0]">
                <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5 shrink-0">
                  location_on
                </span>
                <span>{BRAND_ASSETS.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#171f33] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#908fa0]">
          <p>© 2026 Digital Sixers. All rights reserved.</p>
          <p className="text-secondary font-mono">Engineered for High-Conversion Performance.</p>
        </div>
      </div>
    </footer>
  );
};
