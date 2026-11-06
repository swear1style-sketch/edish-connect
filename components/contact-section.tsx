'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#081426] relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <span>SCHEDULE STRATEGIC CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
            Initiate Your Tier-2 Sovereign Capability
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans">
            Schedule a confidential executive briefing with our leadership team in Munich, Zürich, or Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details */}
          <div className="lg:col-span-5 space-y-6 rounded-2xl border border-white/10 bg-[#0b1c33]/70 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white font-serif">Executive Liaison Office</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct consultation with our Founding Partners and Senior GCC Architects. We assess feasibility, SEZ structuring, and pod capability within 48 hours.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>World Trade Park & Mahindra World City SEZ, Jaipur, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>executive@edishconnect.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+91 141 350 4900 (Global Enterprise Desk)</span>
              </div>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-[0.72rem] text-amber-200">
              <strong className="block text-white font-bold mb-1">Standard Non-Disclosure:</strong>
              All strategic inquiries are governed by reciprocal bi-lateral NDAs compliant with Swiss FINMA and GDPR standards.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#0a182d] p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-2xl font-bold text-white font-serif">Briefing Request Confirmed</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you. An Edish Connect Managing Partner will contact you within 24 business hours to coordinate the bilateral NDA and agenda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-slate-300 mb-1.5">
                      Executive Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Thomas Weber"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-slate-300 mb-1.5">
                      Enterprise Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="t.weber@enterprise.de"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-slate-300 mb-1.5">
                      Enterprise / Organization
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Global Tech AG"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-slate-300 mb-1.5">
                      Planned Pod Size
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e213b] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option>10–25 Engineers (Dedicated ODC)</option>
                      <option>25–50 Engineers (BOT Vehicle)</option>
                      <option>50–150+ Engineers (Sovereign Captive GCC)</option>
                      <option>Exploratory Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-slate-300 mb-1.5">
                    Strategic Scope & Objective
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief outline of domain, target launch timeframe, or cultural requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold-solid w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider font-['Space_Grotesk'] shadow-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Executive Briefing</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
