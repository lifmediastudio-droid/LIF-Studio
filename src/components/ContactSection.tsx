import React, { useState } from 'react';
import { Check, Copy, Mail, Send } from 'lucide-react';
import { supabase } from '../config/supabase';

interface ContactSectionProps {
  initialSubject?: string;
  initialInquiryType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInquiryType = 'Marketing Opportunity',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: initialInquiryType,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'lifmedia.studio@gmail.com';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message or project description.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert({
          inquiry_type: formData.inquiryType,
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || null,
          message: formData.message.trim(),
        });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);

      // Optional: reset the form after successful submission
      // setFormData({
      //   inquiryType: 'Marketing Opportunity',
      //   name: '',
      //   email: '',
      //   company: '',
      //   message: '',
      // });
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
      alert('Failed to submit your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                07 // Inquiries & Collaborations
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F9FA] leading-[1.08]">
                Have a Brand{' '}
                <br />
                <span className="font-serif italic font-normal text-white">
                  Worth Building
                </span>?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#C5CAD8] leading-relaxed">
              Let&apos;s talk about your next campaign, a performance marketing opportunity, or a brand positioning challenge.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0E101A]/90 backdrop-blur-md border border-white/15 space-y-3 hover:border-white/35 transition-all shadow-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold block">
                Direct Contact
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${directEmail}`}
                  className="text-base sm:text-lg font-medium text-white hover:text-white/80 transition-colors flex items-center gap-2.5 truncate"
                >
                  <Mail className="w-5 h-5 text-white/90 shrink-0" />
                  <span className="truncate">{directEmail}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-white border border-white/15 transition-all cursor-pointer shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs font-mono text-emerald-400 animate-fadeIn">
                  Copied to clipboard.
                </p>
              )}
            </div>

            {/* Response Promise */}
            <div className="flex items-center gap-3 text-xs text-[#B4BACB] font-mono">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Direct personal response within 24–48 hours</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="cinematic-surface rounded-2xl sm:rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl border-white/15">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent
                  </h3>
                  <p className="text-sm text-[#B8BED0] max-w-md">
                    Thank you, {formData.name}. Your inquiry regarding{' '}
                    <span className="text-white font-semibold">{formData.inquiryType}</span> has been received. I will reach out to you directly at{' '}
                    <span className="text-white font-mono">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        inquiryType: 'Marketing Opportunity',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/[0.1] hover:bg-white hover:text-black text-xs font-mono text-white transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Inquiry Type Radio / Pill selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B8BED0] mb-2.5">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Marketing Opportunity',
                        'Brand Strategy',
                        'Creative Campaign',
                      ].map((type) => {
                        const isSelected = formData.inquiryType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, inquiryType: type })}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer flex items-center justify-center ${
                              isSelected
                                ? 'bg-white text-[#06070B] border-white shadow-sm'
                                : 'bg-white/[0.04] border-white/15 text-[#C4C4C4] hover:border-white/35 hover:text-white'
                            }`}
                          >
                            <span>{type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#B8BED0] mb-2">
                        Your Name <span className="text-white/70">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Lin"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/15 focus:border-white focus:ring-1 focus:ring-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#B8BED0] mb-2">
                        Email Address <span className="text-white/70">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/15 focus:border-white focus:ring-1 focus:ring-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company / Brand Name */}
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-mono uppercase tracking-wider text-[#B8BED0] mb-2">
                      Company or Brand (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Consumer Goods"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#B8BED0] mb-2">
                      Project Goals or Challenge <span className="text-white/70">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your current growth targets, brand positioning challenge, or creative campaign scope..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/15 focus:border-white focus:ring-1 focus:ring-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 text-black">
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
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
