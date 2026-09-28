import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS } from '../data/agencyData';
import { ContactFormData } from '../types';

interface ContactProps {
  prefilledRequirement?: string;
  prefilledDetails?: string;
}

export const Contact: React.FC<ContactProps> = ({
  prefilledRequirement = '',
  prefilledDetails = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    requirement: '',
    budgetRange: '₹30k - ₹60k',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (prefilledRequirement) {
      setFormData((prev) => ({
        ...prev,
        requirement: prefilledRequirement,
      }));
    }
    if (prefilledDetails) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prefilledDetails,
      }));
    }
  }, [prefilledRequirement, prefilledDetails]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift server/webhook dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Project Inquiry for Digital Sixers*
*Name:* ${formData.fullName || 'Prospective Client'}
*Phone:* ${formData.phoneNumber || 'N/A'}
*Email:* ${formData.emailAddress || 'N/A'}
*Requirement:* ${formData.requirement || 'Digital Services'}
*Budget:* ${formData.budgetRange}
*Details:* ${formData.projectDetails || 'Interested in discussing a digital growth project.'}`;

    window.open(`${BRAND_ASSETS.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="w-full bg-[#060e20] py-20 lg:py-28 relative border-t border-[#171f33]" id="contact">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="flex flex-col gap-3 max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8083ff]/15 border border-[#8083ff]/30 text-[#c0c1ff] w-fit text-xs uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-[16px]">connect_without_contact</span>
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
            Start Your Project With Digital Sixers
          </h2>
          <p className="text-base md:text-lg text-[#c7c4d7]">
            Reach out directly to consult with our Coimbatore team or send us your scope for a structured quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Reach Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h3 className="text-xl md:text-2xl text-on-surface font-bold">Direct Channels</h3>

              {/* Phone & WhatsApp */}
              <a
                className="p-5 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-secondary/50 hover:bg-[#171f33] transition-all duration-300 flex items-start gap-4 group shadow-sm"
                href={BRAND_ASSETS.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-[#003640] transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[24px]">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#908fa0] uppercase tracking-wider font-bold font-mono">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="text-lg text-on-surface font-extrabold group-hover:text-secondary transition-colors">
                    {BRAND_ASSETS.phone}
                  </span>
                  <span className="text-xs text-secondary font-medium">Click to chat or call instantly</span>
                </div>
              </a>

              {/* Email */}
              <a
                className="p-5 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-[#8083ff]/50 hover:bg-[#171f33] transition-all duration-300 flex items-start gap-4 group shadow-sm"
                href={`mailto:${BRAND_ASSETS.email}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-[#c0c1ff] group-hover:bg-[#8083ff] group-hover:text-[#060e20] transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[24px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#908fa0] uppercase tracking-wider font-bold font-mono">
                    Direct Email
                  </span>
                  <span className="text-lg text-on-surface font-extrabold group-hover:text-[#c0c1ff] transition-colors">
                    {BRAND_ASSETS.email}
                  </span>
                  <span className="text-xs text-[#c7c4d7]">Inquiries &amp; detailed RFPs</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                className="p-5 rounded-2xl bg-[#131b2e] border border-[#222a3d] hover:border-tertiary/50 hover:bg-[#171f33] transition-all duration-300 flex items-start gap-4 group shadow-sm"
                href={BRAND_ASSETS.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-[#36003e] transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[24px]">photo_camera</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#908fa0] uppercase tracking-wider font-bold font-mono">
                    Official Instagram
                  </span>
                  <span className="text-lg text-on-surface font-extrabold group-hover:text-tertiary transition-colors">
                    {BRAND_ASSETS.instagramHandle}
                  </span>
                  <span className="text-xs text-tertiary">Follow our creative updates</span>
                </div>
              </a>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-[#131b2e] border border-[#222a3d] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#222a3d] flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#908fa0] uppercase tracking-wider font-bold font-mono">
                    Headquarters
                  </span>
                  <span className="text-lg text-on-surface font-extrabold">Coimbatore, Tamil Nadu</span>
                  <span className="text-xs text-[#c7c4d7]">India</span>
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d] flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">timer</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface">24-Hour Commitment</span>
                <span className="text-xs text-[#c7c4d7]">
                  We respond to every business inquiry within 24 business hours.
                </span>
              </div>
            </div>
          </div>

          {/* High-Converting Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-[#131b2e] border border-[#222a3d] relative shadow-xl">
              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary border border-secondary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[36px]">task_alt</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-on-surface">Message Received!</h3>
                    <p className="text-sm text-[#c7c4d7] mt-2 max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-white">{formData.fullName}</strong>. Our engineering and strategy team in Coimbatore will review your scope and get in touch within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#171f33] border border-[#222a3d] w-full text-left text-xs text-[#c7c4d7] space-y-1.5 mt-2">
                    <div className="flex justify-between">
                      <span className="text-[#908fa0]">Requirement:</span>
                      <span className="font-semibold text-white">{formData.requirement || 'Custom Solution'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#908fa0]">Contact:</span>
                      <span className="font-semibold text-white">{formData.phoneNumber} | {formData.emailAddress}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4 w-full">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="flex-1 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
                    >
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                      <span>Send Direct via WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="py-3.5 px-5 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-on-surface text-sm font-semibold transition-all"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form className="flex flex-col gap-5" id="agency-contact-form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-on-surface uppercase tracking-wider font-mono font-bold" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-[#171f33] border border-[#222a3d] text-on-surface placeholder:text-[#908fa0] focus:outline-none focus:border-secondary focus:bg-[#222a3d] transition-all text-sm"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        required
                        type="text"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-on-surface uppercase tracking-wider font-mono font-bold" htmlFor="phoneNumber">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-[#171f33] border border-[#222a3d] text-on-surface placeholder:text-[#908fa0] focus:outline-none focus:border-secondary focus:bg-[#222a3d] transition-all text-sm"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        type="tel"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-on-surface uppercase tracking-wider font-mono font-bold" htmlFor="emailAddress">
                      Email Address *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-[#171f33] border border-[#222a3d] text-on-surface placeholder:text-[#908fa0] focus:outline-none focus:border-secondary focus:bg-[#222a3d] transition-all text-sm"
                      id="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      type="email"
                    />
                  </div>

                  {/* Requirement Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-on-surface uppercase tracking-wider font-mono font-bold" htmlFor="requirement">
                      Business Requirement *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-[#171f33] border border-[#222a3d] text-on-surface focus:outline-none focus:border-secondary focus:bg-[#222a3d] transition-all text-sm"
                      id="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                    >
                      <option className="text-[#908fa0]" disabled value="">
                        Select your primary objective...
                      </option>
                      <option value="Landing Page Development">Landing Page Development</option>
                      <option value="E-commerce Website Development">E-commerce Website Development</option>
                      <option value="Service Website Development">Service Website Development</option>
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Full Digital Growth Package">Full Digital Growth Package</option>
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-on-surface uppercase tracking-wider font-mono font-bold">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['₹20k - ₹40k', '₹40k - ₹75k', '₹75k - ₹1.5L', '₹1.5L+'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budgetRange: tier }))}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all ${
                            formData.budgetRange === tier
                              ? 'bg-secondary/15 border-secondary text-secondary'
                              : 'bg-[#171f33] border-[#222a3d] text-[#908fa0] hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-on-surface uppercase tracking-wider font-mono font-bold" htmlFor="projectDetails">
                      Project Details / Goals
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl bg-[#171f33] border border-[#222a3d] text-on-surface placeholder:text-[#908fa0] focus:outline-none focus:border-secondary focus:bg-[#222a3d] transition-all text-sm"
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly describe your business, timeline, and what you aim to achieve..."
                      rows={4}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] text-[#060e20] text-sm font-bold shadow-lg hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending Scope...' : 'Send Message'}</span>
                    <span className="material-symbols-outlined text-[20px]">
                      {isSubmitting ? 'hourglass_top' : 'send'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
