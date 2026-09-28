import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onRequestProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'websites', label: 'Websites' },
    { id: 'landing-pages', label: 'Landing Pages' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'marketing', label: 'Digital Marketing' },
  ];

  const filteredProjects = PORTFOLIO_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const getBadgeColor = (badge: 'secondary' | 'primary' | 'tertiary') => {
    switch (badge) {
      case 'secondary':
        return 'text-secondary border-secondary/30 bg-[#131b2e]/90';
      case 'primary':
        return 'text-[#c0c1ff] border-[#8083ff]/30 bg-[#131b2e]/90';
      case 'tertiary':
        return 'text-tertiary border-[#fbabff]/30 bg-[#131b2e]/90';
    }
  };

  const getLinkColor = (badge: 'secondary' | 'primary' | 'tertiary') => {
    switch (badge) {
      case 'secondary':
        return 'text-secondary hover:underline';
      case 'primary':
        return 'text-[#c0c1ff] hover:underline';
      case 'tertiary':
        return 'text-tertiary hover:underline';
    }
  };

  return (
    <section className="w-full bg-[#060e20] py-20 lg:py-28 relative border-t border-[#171f33]" id="portfolio">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03b5d3]/20 border border-[#4cd7f6]/30 text-secondary w-fit text-xs uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[16px]">layers</span>
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
              Selected Projects &amp; Digital Experiences
            </h2>
            <p className="text-base md:text-lg text-[#c7c4d7]">
              A showcase of web applications, sales funnels, and enterprise digital solutions designed by Digital Sixers.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#c0c1ff] text-[#1000a9] shadow-md scale-105'
                      : 'bg-[#171f33] hover:bg-[#222a3d] text-[#c7c4d7] border border-[#222a3d]'
                  }`}
                  type="button"
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#131b2e] border border-[#222a3d] overflow-hidden flex flex-col group hover:-translate-y-2 hover:border-secondary/40 transition-all duration-300 shadow-xl"
            >
              {/* Image Preview Container */}
              <div
                className="relative w-full aspect-[16/10] overflow-hidden bg-[#171f33] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent opacity-80"></div>
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-md border text-xs font-mono font-bold ${getBadgeColor(
                    project.badgeColor
                  )}`}
                >
                  {project.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                <div className="flex flex-col gap-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl text-on-surface font-bold group-hover:text-secondary transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#c7c4d7] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-2 border-t border-[#222a3d]/50">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded bg-[#171f33] border border-[#222a3d] text-[#c7c4d7] text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold text-left transition-colors ${getLinkColor(
                      project.badgeColor
                    )}`}
                  >
                    <span>View Project Concept</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      arrow_outward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(name) => {
          onRequestProject(name);
          const contactEl = document.getElementById('contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
};
