'use client';

import React, { useState } from 'react';
import { CheckCircle2, Layers, ShieldCheck, Building2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const MODELS = [
  {
    id: 'odc',
    title: 'Dedicated Offshore Development Center',
    subtitle: 'High-Velocity Pod Extension',
    badge: 'Immediate Agility',
    description:
      'Turnkey, dedicated squads of engineers, QA leads, and architects working directly within your daily sprints and ticketing systems with zero long-term lease liabilities.',
    benefits: [
      'Engineers assigned exclusively to your codebase',
      'Direct integration with your daily Jira/Slack standups',
      'Sub-2% attrition with multi-year institutional retention',
      'Predictable monthly billing with zero CapEx outlay',
    ],
    timeline: '2–4 Weeks Launch',
    commitment: '6+ Months',
  },
  {
    id: 'bot',
    title: 'Build-Operate-Transfer (BOT)',
    subtitle: 'Zero-Risk Subsidiary Incubation',
    badge: 'Risk Mitigation',
    description:
      'We recruit, manage, and incubate your dedicated engineering entity in Jaipur. After meeting predetermined maturity and velocity milestones, 100% of staff, IP, and facilities transfer to your balance sheet.',
    benefits: [
      'Zero setup friction—Edish shoulders initial statutory compliance',
      'Mature team with deeply ingrained company culture pre-transfer',
      'Built-in legal and corporate transfer framework with $0 buyout fee',
      'Eliminates the standard 40% metro recruiter churn tax',
    ],
    timeline: '6–18 Months Incubation',
    commitment: '18–24 Month Transfer',
  },
  {
    id: 'gcc',
    title: 'Sovereign Global Capability Center (GCC)',
    subtitle: 'Wholly-Owned Enterprise Asset',
    badge: 'Full Balance Sheet Sovereign',
    description:
      'We design, architect, and establish your direct captive center in Tier-2 Jaipur—complete with bespoke security perimeters, biometric access, and permanent corporate presence.',
    benefits: [
      '100% direct captive ownership on your company balance sheet',
      'Tier-2 cost advantage: 40%–60% lower opex than metro centers',
      'Full statutory and tax-incentive advisory with local authorities',
      'Permanent campus presence in Jaipur IT SEZ corridors',
    ],
    timeline: '12–16 Weeks Launch',
    commitment: 'Strategic Horizon',
  },
];

export function OperatingModels() {
  const [activeModel, setActiveModel] = useState('odc');

  return (
    <section id="operating-models" className="py-20 md:py-28 bg-[#081426] relative scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <span>OPERATING VEHICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
            Three Progressive Engagement Models
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans">
            Whether starting with dedicated engineering pods or establishing a wholly-owned sovereign captive center, choose the model that fits your governance timeline.
          </p>
        </motion.div>

        {/* 3 Model Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {MODELS.map((model, idx) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setActiveModel(model.id)}
              className={`rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between space-y-6 cursor-pointer ${
                activeModel === model.id
                  ? 'border-amber-400/80 bg-[#0d223f] shadow-[0_16px_40px_rgba(200,155,60,0.18)]'
                  : 'border-white/10 bg-[#0b1c33]/70 hover:border-white/30 hover:bg-[#0b1c33]'
              }`}
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

                <p className="text-xs text-slate-300 leading-relaxed font-sans">{model.description}</p>

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
                  <span className="block text-[0.60rem] uppercase tracking-wider text-slate-500 font-['Space_Grotesk']">Timeline</span>
                  <span className="text-white font-semibold">{model.timeline}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[0.60rem] uppercase tracking-wider text-slate-500 font-['Space_Grotesk']">Term</span>
                  <span className="text-amber-300 font-semibold">{model.commitment}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
