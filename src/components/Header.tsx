import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS } from '../data/agencyData';

interface HeaderProps {
  onOpenEstimator?: () => void;
  onOpenClientPortal?: () => void;
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEstimator,
  onOpenClientPortal,
  onOpenContact,
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'why-us', 'process', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b1326]/90 backdrop-blur-xl border-b border-[#222a3d]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : 'bg-[#0b1326]/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-20 max-w-[1360px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              alt="Digital Sixers Brand Mark"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={BRAND_ASSETS.logo}
            />
            <span className="font-bold text-xl md:text-2xl text-on-surface tracking-tight flex items-center gap-1.5">
              Digital <span className="text-secondary font-extrabold">Sixers</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav Bar */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#131b2e]/60 px-3 py-1.5 rounded-full border border-[#222a3d]/50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 font-semibold ${
                  isActive
                    ? 'bg-[#222a3d] text-on-surface shadow-sm text-secondary'
                    : 'text-[#c7c4d7] hover:text-on-surface hover:bg-[#171f33]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Quick Scope Estimator Button */}
          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#171f33] hover:bg-[#222a3d] text-[#c0c1ff] border border-[#8083ff]/20 text-xs font-semibold transition-all"
              title="Calculate estimated cost & timeline"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">calculate</span>
              <span>Scope Estimator</span>
            </button>
          )}

          {/* WhatsApp Direct */}
          <a
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#171f33] text-secondary hover:bg-[#222a3d] border border-[#4cd7f6]/20 transition-all text-sm font-semibold"
            href={BRAND_ASSETS.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Let's Talk CTA */}
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] text-[#060e20] text-sm font-bold shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:opacity-95 hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] transition-all cursor-pointer"
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                // optional hook
              }
            }}
          >
            <span>Let's Talk</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>

          {/* Client Portal Demo Trigger */}
          <button
            onClick={onOpenClientPortal}
            title="Digital Sixers Client Portal"
            className="w-9 h-9 rounded-full bg-[#c0c1ff] hover:bg-white text-[#1000a9] flex items-center justify-center transition-transform hover:scale-105 shadow-md"
            aria-label="Client Portal"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <div className="xl:hidden relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-on-surface hover:bg-[#171f33] transition-all flex items-center border border-[#222a3d]"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
              <div className="absolute right-0 mt-3 w-72 p-4 rounded-2xl bg-[#171f33] border border-[#222a3d] shadow-2xl flex flex-col gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-1.5 pb-3 border-b border-[#222a3d] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#908fa0] font-bold">
                    Navigation
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#4cd7f6]/10 text-secondary font-mono">
                    Coimbatore, TN
                  </span>
                </div>

                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                      activeSection === item.id
                        ? 'bg-[#222a3d] text-secondary'
                        : 'text-[#c7c4d7] hover:text-on-surface hover:bg-[#222a3d]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    )}
                  </a>
                ))}

                <div className="pt-2 border-t border-[#222a3d] flex flex-col gap-2">
                  {onOpenEstimator && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenEstimator();
                      }}
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#222a3d] text-secondary text-sm font-semibold border border-[#4cd7f6]/20"
                    >
                      <span className="material-symbols-outlined text-[18px]">calculate</span>
                      <span>Scope &amp; Cost Estimator</span>
                    </button>
                  )}
                  <a
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#222a3d] text-secondary text-sm font-semibold"
                    href={BRAND_ASSETS.whatsappUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>WhatsApp Direct</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenClientPortal) onOpenClientPortal();
                    }}
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#131b2e] text-[#c0c1ff] text-sm font-semibold"
                  >
                    <span className="material-symbols-outlined text-[18px]">dashboard</span>
                    <span>Client Portal Tracker</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
