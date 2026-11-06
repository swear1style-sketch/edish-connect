'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

const MODELS = [
  {
    id: 'odc',
    badge: 'RAPID COMMENCEMENT',
    title: 'Dedicated ODC',
    subtitle: 'High-Velocity Pods Under Edish Legal Entity',
    description:
      'Begin operations within 4–6 weeks. Zero foreign entity incorporation overhead, turnkey Class-A Jaipur facility, with sovereign IP assignments and dedicated biometric security.',
    benefits: [
      '4–6 week deployment without establishing Indian legal entity',
      '40–60% operational cost savings compared to US/EU in-house',
      'Zero cross-client contamination with isolated network VLANs',
      '98.2% retention rate with Tier-2 Jaipur engineering talent',
    ],
    timeline: '4–6 Weeks',
    commitment: '12 Months',
  },
  {
    id: 'bot',
    badge: 'STRATEGIC MATURITY',
    title: 'Build-Operate-Transfer (BOT)',
    subtitle: 'De-risked Incubation & Seamless Balance Sheet Transfer',
    description:
      'We build, staff, and operationalize your dedicated center under mature governance. At your chosen horizon (typically 18–36 months), transfer the entire entity and team to your books.',
    benefits: [
      'Zero legal risk during initial growth and culture assimilation',
      'Pre-negotiated entity transfer valuation and governance handoff',
      'Retain 100% of institutional domain knowledge and code history',
      'Full HR, compliance, and real estate operational continuity',
    ],
    timeline: '18–36 Months Transfer',
    commitment: '24 Months',
  },
  {
    id: 'gcc',
    badge: 'PERMANENT SOVEREIGNTY',
    title: 'Sovereign Captive GCC',
    subtitle: 'Wholly-Owned Indian Subsidiary with Permanent IP',
    description:
      'For enterprises scaling past 50+ engineers requiring a long-term sovereign presence. We execute turnkey entity incorporation, SEZ tax structuring, campus selection, and talent acquisition.',
    benefits: [
      '100% direct balance-sheet ownership and sovereign IP governance',
      'Full compliance with RBI, SEBI, FINMA, and international tax treaties',
      'Direct executive oversight with zero agency margin markups',
      'Permanent campus presence in Jaipur IT SEZ corridors',
    ],
    timeline: '12–16 Weeks Launch',
    commitment: 'Strategic Horizon',
  },
];

export function OperatingModels() {
  const [activeModel, setActiveModel] = useState('odc');

  return (
    <section id="operating-models" className="py-20 md:py-28 bg-[#081426] relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <span>OPERATING VEHICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
            Three Progressive Engagement Models
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans">
            Whether starting with dedicated engineering pods or establishing a wholly-owned sovereign captive center, choose the model that fits your governance timeline.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {MODELS.map((model) => (
            <div
              key={model.id}
              className={`rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between space-y-6 ${
                activeModel === model.id
                  ? 'border-amber-400/60 bg-[#0d223f] shadow-[0_12px_36px_rgba(200,155,60,0.15)] scale-[1.02]'
                  : 'border-white/10 bg-[#0b1c33]/70 hover:border-white/25 hover:bg-[#0b1c33]'
              }`}
              onClick={() => setActiveModel(model.id)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold font-['Space_Grotesk'] tracking-widest text-amber-400 px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {model.badge}
                  </span>
                  <Layers className="w-5 h-5 text-slate-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-serif">{model.title}</h3>
                  <div className="text-xs text-amber-300/90 font-medium font-['Space_Grotesk'] mt-0.5">
                    {model.subtitle}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{model.description}</p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {model.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div>
                  <span className="block text-[0.60rem] uppercase tracking-wider text-slate-500">Timeline</span>
                  <span className="text-white font-semibold">{model.timeline}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[0.60rem] uppercase tracking-wider text-slate-500">Term</span>
                  <span className="text-amber-300 font-semibold">{model.commitment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
