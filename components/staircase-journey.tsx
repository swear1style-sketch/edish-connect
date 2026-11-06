'use client';

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Layers, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const STAIR_STEPS = [
  {
    step: 'STAGE 01',
    title: 'Inception & Cultural Alignment',
    sub: '0 to 30 Days • Zero Overhead',
    badge: 'Immediate Agility',
    heading: 'Step 1: Inception Pods & Rapid Alignment',
    description:
      'We spin up a dedicated 4 to 8 person engineering pod fully matched to your tech stack. We mirror your Jira, Slack, CI/CD pipelines, and coding standards with zero structural friction.',
    specs: [
      { label: 'Time to First Sprint', value: '14 Days' },
      { label: 'Infrastructure', value: 'Edish Hosted' },
      { label: 'Governance', value: 'Joint Scrum' },
      { label: 'Commercial Model', value: 'Monthly Pod Rate' },
    ],
    controlPercent: 30,
    meterLabel: 'Day 1 Velocity & Cultural Immersion',
    photo: '/assets/images/modern_tech_center.jpg',
    cxoNote: 'Allows enterprise VPs to test cultural synergy and code velocity with near-zero financial or legal commitment.',
  },
  {
    step: 'STAGE 02',
    title: 'Pod Incubation & Shadowing',
    sub: '1 to 6 Months • Deep Integration',
    badge: 'Frictionless Scaling',
    heading: 'Step 2: Core Engineering Pod Incubation',
    description:
      'The initial pod expands to 15–30 engineers. Edish assigns dedicated Scrum Masters and Technical Leads trained in your specific domain architecture. Engineers participate in your all-hands and architectural councils.',
    specs: [
      { label: 'Team Size', value: '15–30 Engineers' },
      { label: 'Retention Rate', value: '98.5% in Jaipur' },
      { label: 'Code Contribution', value: 'Direct Git Access' },
      { label: 'SLA Adherence', value: '99.8% Velocity Match' },
    ],
    controlPercent: 60,
    meterLabel: 'Operational Alignment & Code Velocity',
    photo: '/assets/images/engineering_pod_collaboration.jpg',
    cxoNote: 'Solves the 40% metro turnover crisis by securing top Tier-2 engineering minds with multi-year dedication to your codebase.',
  },
  {
    step: 'STAGE 03',
    title: 'Autonomous Sprint Pods',
    sub: '6 to 18 Months • Feature Leadership',
    badge: 'Dedicated ODC',
    heading: 'Step 3: Sovereign Feature Pods & Quality Leadership',
    description:
      'Jaipur teams take end-to-end ownership of core modules, microservices, and product roadmaps. You gain a dedicated physical floor with biometric access, custom VLANs, and corporate branding.',
    specs: [
      { label: 'Team Size', value: '30–80+ Engineers' },
      { label: 'Physical Security', value: 'Dedicated VLAN / Biometrics' },
      { label: 'Leadership', value: 'Embedded Tech Leads' },
      { label: 'IP Ownership', value: '100% Client Owned' },
    ],
    controlPercent: 85,
    meterLabel: 'High Architectural Autonomy & Pod Ownership',
    photo: '/assets/images/executive_boardroom_gcc.jpg',
    cxoNote: 'Provides Fortune 500 scale without metro real-estate lease liabilities or complex multi-year statutory registration headaches.',
  },
  {
    step: 'STAGE 04',
    title: 'Sovereign GCC / BOT Transition',
    sub: '18 to 24 Months • Full Transfer',
    badge: 'Zero-Cost Asset Transfer',
    heading: 'Step 4: Formal Legal & Operational Entity Transfer',
    description:
      'Edish facilitates the complete legal transfer of the physical campus, hardware, leases, and employment contracts into your direct wholly-owned Indian subsidiary (GCC). You assume 100% sovereign ownership with zero recruitment friction.',
    specs: [
      { label: 'Entity Status', value: 'Wholly-Owned Subsidiary' },
      { label: 'Transfer Penalty', value: '$0 (Built-In Contract)' },
      { label: 'Talent Retention', value: '100% Contract Continuity' },
      { label: 'CapEx Efficiency', value: '55% vs Metro GCCs' },
    ],
    controlPercent: 100,
    meterLabel: '100% Sovereign Balance Sheet Asset',
    photo: '/assets/images/enterprise_capability_campus.jpg',
    cxoNote: 'The gold standard for Fortune 500 enterprises: maximum IP sovereignty, zero agency markups, and long-term enterprise valuation enhancement.',
  },
];

export function StaircaseJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STAIR_STEPS[activeStep];

  return (
    <section id="staircase" className="py-20 md:py-28 bg-[#F1EBE3] text-[#151a22] relative border-b border-black/5 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-14">
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
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
        </motion.div>

        {/* 4 Step Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {STAIR_STEPS.map((s, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveStep(idx)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 md:p-5 text-left rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                activeStep === idx
                  ? 'border-[#c89b3c] bg-[#081426] text-white shadow-xl shadow-black/20'
                  : 'border-black/10 bg-white/70 text-[#2d3748] hover:border-black/20 hover:bg-white'
              }`}
            >
              <span
                className={`text-[0.65rem] font-bold font-mono tracking-widest block mb-1 ${
                  activeStep === idx ? 'text-amber-400' : 'text-[#8c6515]'
                }`}
              >
                {s.step}
              </span>
              <div className="text-base font-bold font-serif leading-tight mb-1">
                {s.title}
              </div>
              <div
                className={`text-[0.70rem] leading-tight ${
                  activeStep === idx ? 'text-slate-300' : 'text-[#718096]'
                }`}
              >
                {s.sub}
              </div>
              {activeStep === idx && (
                <motion.div
                  layoutId="activeStepIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Detail Card with AnimatePresence */}
        <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
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
                  className="btn-gold-solid inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-['Space_Grotesk'] group"
                >
                  <span>Initiate This Stage</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href="#operating-models"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/15 bg-white text-xs font-bold uppercase tracking-wider font-['Space_Grotesk'] text-[#081426] hover:bg-slate-50 transition-colors"
                >
                  Compare All Models
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Visual Box & Control Meter */}
          <div className="lg:col-span-5 space-y-5 rounded-2xl bg-[#081426] text-white p-5 sm:p-6 shadow-xl shadow-black/25">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden aspect-video border border-white/10 relative group"
              >
                <img
                  src={current.photo}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-amber-300 font-['Space_Grotesk']">
                    {current.badge}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Control Meter */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-['Space_Grotesk']">
                <span className="text-slate-300">{current.meterLabel}</span>
                <span className="font-bold text-amber-400 font-mono">{current.controlPercent}% Control</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${current.controlPercent}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                />
              </div>
            </div>

            {/* CXO Note */}
            <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 space-y-1">
              <div className="text-[0.68rem] uppercase tracking-wider font-bold text-amber-400 font-['Space_Grotesk']">
                Why this matters to CXOs:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {current.cxoNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
