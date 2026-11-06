'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const STAIR_STEPS = [
  {
    step: 'STEP 01',
    badge: 'Stage 01 • Scoped Proof of Capability',
    title: 'Engineering Pod',
    sub: 'Immediate backlog velocity & proof',
    heading: 'Validate India with High-Velocity Dedicated Pods.',
    description:
      'The fastest, lowest-friction entry point. A self-contained, senior engineering pod executing against an explicit backlog, managed under your sprint rituals. Zero legal overhead, immediate velocity.',
    specs: [
      { label: 'Deployment Velocity', value: '2 to 4 Weeks' },
      { label: 'Entity Requirement', value: 'None (Under Edish)' },
      { label: 'Governance Model', value: 'Direct Agile / JIRA' },
      { label: 'Intellectual Property', value: '100% Assignment' },
    ],
    controlPercent: 40,
    meterLabel: 'Sprint & Backlog Governance',
    photo: '/assets/images/engineering_pod_collaboration.jpg',
    cxoNote: 'Test our cultural alignment, technical quality, and delivery rhythm before committing capital expenditure or establishing an Indian legal entity.',
  },
  {
    step: 'STEP 02',
    badge: 'Stage 02 • Dedicated Facility & Identity',
    title: 'Dedicated ODC',
    sub: 'Branded center, zero foreign entity drag',
    heading: 'Scale to a Branded Dedicated Development Center.',
    description:
      'Your private engineering wing in Jaipur. Custom biometric access, corporate network VLANs, branded interior design, and dedicated leadership pods operating exclusively for your enterprise.',
    specs: [
      { label: 'Target Team Scale', value: '15 to 40 Specialists' },
      { label: 'Facility Security', value: 'Biometric Air-Gapped' },
      { label: 'Cost Structure', value: 'Cost-Plus Transparency' },
      { label: 'Retention Rate', value: '98.2% in Tier-2 Hub' },
    ],
    controlPercent: 65,
    meterLabel: 'Process & Infrastructure Control',
    photo: '/assets/images/modern_tech_center.jpg',
    cxoNote: 'Gain an institutional offshore delivery engine without foreign tax audits, permanent establishment risks, or Indian corporate compliance drag.',
  },
  {
    step: 'STEP 03',
    badge: 'Stage 03 • Structured Transition Highway',
    title: 'Build-Operate-Transfer',
    sub: 'Incubated scale with structured equity buyout',
    heading: 'Incubate Capability with Contracted Balance-Sheet Transfer.',
    description:
      'Edish finances, recruits, and matures the entire capability center over 18 to 36 months. At your target milestone, execute a pre-priced equity transfer to absorb the facility and team into your corporate balance sheet.',
    specs: [
      { label: 'Transfer Window', value: '18 to 36 Months' },
      { label: 'Buyout Formula', value: 'Pre-Agreed Valuation' },
      { label: 'Talent Continuity', value: '100% Employment Handoff' },
      { label: 'Real Estate Rights', value: 'Novated Leasehold' },
    ],
    controlPercent: 85,
    meterLabel: 'Asset Accumulation & Governance',
    photo: '/assets/images/executive_boardroom_gcc.jpg',
    cxoNote: 'De-risk market entry completely. Build institutional momentum and transfer a mature, zero-attrition team straight onto your balance sheet.',
  },
  {
    step: 'STEP 04',
    badge: 'Stage 04 • Sovereign Multinational Asset',
    title: 'Sovereign GCC',
    sub: 'Wholly-owned Indian legal entity & campus',
    heading: 'Permanent Sovereign Global Capability Center.',
    description:
      'A wholly-owned Indian subsidiary (Pvt. Ltd.) operating from Jaipur IT SEZ corridors. Direct capitalization, permanent IP sovereignty, and long-term enterprise valuation enhancement.',
    specs: [
      { label: 'Ownership Structure', value: '100% Direct Equity' },
      { label: 'Regulatory Scope', value: 'SEZ / STPI Tax Benefits' },
      { label: 'Corporate Value', value: 'Permanent Asset' },
      { label: 'Scalability Potential', value: '100 to 500+ Engineers' },
    ],
    controlPercent: 100,
    meterLabel: 'Total Sovereign Control',
    photo: '/assets/images/enterprise_capability_campus.jpg',
    cxoNote: 'The gold standard for Fortune 500 enterprises: maximum IP sovereignty, zero agency markups, and long-term enterprise valuation enhancement.',
  },
];

export function StaircaseJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STAIR_STEPS[activeStep];

  return (
    <section id="staircase" className="py-20 md:py-28 bg-[#F1EBE3] text-[#151a22] relative border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-14">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#8c6515] text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <span>SIGNATURE FRAMEWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#081426] font-serif">
            <span className="italic block font-normal text-2xl sm:text-3xl text-[#8c6515] mb-1">
              The Staircase Journey
            </span>
            Four Progressive Steps from Agile Pods to Sovereign GCC.
          </h2>

          <p className="text-sm sm:text-base text-[#4a5568] font-sans leading-relaxed">
            Enterprise clients do not need to commit to a 300-person physical facility on day one. Our Staircase model allows you to begin with immediate technical velocity, prove the cultural fit, and progressively climb toward full balance-sheet ownership.
          </p>
        </div>

        {/* 4 Step Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {STAIR_STEPS.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 md:p-5 text-left rounded-2xl border transition-all ${
                activeStep === idx
                  ? 'border-[#c89b3c] bg-[#081426] text-white shadow-xl scale-[1.02]'
                  : 'border-black/10 bg-white/70 text-[#2d3748] hover:border-black/20 hover:bg-white'
              }`}
            >
              <span className={`text-[0.65rem] font-bold font-mono tracking-widest block mb-1 ${
                activeStep === idx ? 'text-amber-400' : 'text-[#8c6515]'
              }`}>
                {s.step}
              </span>
              <div className="text-base font-bold font-serif leading-tight mb-1">
                {s.title}
              </div>
              <div className={`text-[0.70rem] leading-tight ${
                activeStep === idx ? 'text-slate-300' : 'text-[#718096]'
              }`}>
                {s.sub}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Detail Card */}
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6 sm:p-8 lg:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8c6515] font-['Space_Grotesk'] border border-[#c89b3c]/30">
              {current.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#081426] font-serif leading-tight">
              {current.heading}
            </h3>

            <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
              {current.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {current.specs.map((spec, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#F1EBE3]/70 border border-black/5">
                  <span className="text-[0.62rem] uppercase tracking-wider text-[#718096] font-mono block">
                    {spec.label}
                  </span>
                  <span className="text-xs font-bold text-[#081426] font-['Space_Grotesk']">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-gold-solid inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider font-['Space_Grotesk']"
              >
                <span>Initiate This Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#operating-models"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 bg-white text-xs font-bold uppercase tracking-wider font-['Space_Grotesk'] text-[#081426] hover:bg-slate-50 transition-colors"
              >
                Compare All Models
              </a>
            </div>
          </div>

          {/* Right: Visual Box & Control Meter */}
          <div className="lg:col-span-5 space-y-5 rounded-2xl bg-[#081426] text-white p-5 sm:p-6 shadow-xl">
            <div className="rounded-xl overflow-hidden aspect-video border border-white/10 relative">
              <img src={current.photo} alt={current.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-bold text-amber-300 font-['Space_Grotesk']">
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Control Meter */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-['Space_Grotesk']">
                <span className="text-slate-300">{current.meterLabel}</span>
                <span className="font-bold text-amber-400 font-mono">{current.controlPercent}% Control</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500"
                  style={{ width: `${current.controlPercent}%` }}
                />
              </div>
            </div>

            {/* CXO Note */}
            <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 space-y-1">
              <div className="text-[0.68rem] uppercase tracking-wider font-bold text-amber-400 font-['Space_Grotesk']">
                Why this matters to CXOs:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {current.cxoNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
