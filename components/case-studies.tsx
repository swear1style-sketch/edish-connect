'use client';

import React from 'react';
import { Award, ArrowRight } from 'lucide-react';

const CASES = [
  {
    tag: 'BFSI • BANKING PLATFORMS',
    title: 'Deterministic Payment Settlement Engine',
    desc: 'Architected a high-throughput transaction processing engine for institutional financial systems. Maintained sub-10ms latency thresholds and guaranteed compliance with strict zero-loss regulatory mandates.',
    statVal: '99.999%',
    statLabel: 'Uptime Reliability',
    image: '/assets/images/modern_tech_center.jpg',
  },
  {
    tag: 'ENTERPRISE CLOUD & AI',
    title: 'Cloud Platform Migration & GenAI Pipeline',
    desc: 'Transitioned legacy monoliths into scalable microservices and built enterprise-grade RAG and autonomous AI agent workflows with SOC2-compliant data privacy boundaries.',
    statVal: '42%',
    statLabel: 'Faster Time-to-Market',
    image: '/assets/images/precision_robotics_automotive.jpg',
  },
  {
    tag: 'GLOBAL BOT TRANSITION',
    title: 'Autonomous ODC to GCC Equity Transfer',
    desc: 'Built and operated a 65-engineer dedicated capability center over 24 months, orchestrating zero-attrition legal and real estate transfer directly to the client balance sheet.',
    statVal: '0%',
    statLabel: 'Talent Loss in Transition',
    image: '/assets/images/executive_boardroom_gcc.jpg',
  },
];

export function CaseStudies() {
  return (
    <section id="proof" className="py-20 md:py-28 bg-[#081426] text-white relative border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-16">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <Award className="w-3.5 h-3.5" />
            <span>CONFIRMED IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
            <span className="italic block font-normal text-2xl sm:text-3xl text-gold-gradient mb-1">
              Zero Fabricated Case Studies
            </span>
            Verified Capability Across Mission-Critical Domains.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            We don’t publish generic buzzwords. Here is how our engineering squads and capability centers deliver tangible, board-level impact for Tier 1 and Tier 2 enterprises.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CASES.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-[#0b1c33]/70 hover:border-white/20 transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="aspect-[16/10] relative overflow-hidden bg-black">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[0.60rem] font-bold font-mono text-amber-300 uppercase tracking-wider">
                    {c.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h4 className="text-lg font-bold text-white font-serif leading-snug">
                    {c.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-extrabold font-mono text-amber-400 block">
                    {c.statVal}
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-wider text-slate-400 font-['Space_Grotesk'] font-bold">
                    {c.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
