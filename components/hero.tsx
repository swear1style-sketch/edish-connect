'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Award, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type CultureKey = 'germany' | 'usa' | 'nordics' | 'swiss';

const CULTURAL_PRESETS: Record<
  CultureKey,
  {
    flag: string;
    name: string;
    standard: string;
    tag: string;
    sub: string;
    image: string;
    heritageText: string;
    rule: string;
  }
> = {
  germany: {
    flag: '🇩🇪',
    name: 'Germany',
    standard: 'German DIN Precision',
    tag: 'MUNICH • DIN EN ISO 9001',
    sub: 'Zero ambiguity, mathematical architectural compliance, and strict engineering determinism.',
    image: '/assets/images/munich_industrial_precision.jpg',
    heritageText: 'Jantar Mantar 1727 • ±2s Celestial Precision',
    rule: 'Calculated Determinism & Zero Defects',
  },
  usa: {
    flag: '🇺🇸',
    name: 'USA',
    standard: 'US High Velocity & Scale',
    tag: 'SILICON VALLEY • AGILITY',
    sub: 'Asynchronous sprint autonomy, distributed pods, and aggressive delivery cadence.',
    image: '/assets/images/modern_tech_center.jpg',
    heritageText: 'Continuous Pod Delivery & Cloud Scale',
    rule: 'Sprint Autonomy & High Velocity',
  },
  nordics: {
    flag: '🇸🇪',
    name: 'Nordics',
    standard: 'Nordic Flat Hierarchy',
    tag: 'STOCKHOLM • CONSENSUS',
    sub: 'Psychological safety, rigorous peer audits, and zero middle-management overhead.',
    image: '/assets/images/engineering_pod_collaboration.jpg',
    heritageText: 'Direct Engineer-to-Stakeholder Alignment',
    rule: 'Radical Transparency & High Retention',
  },
  swiss: {
    flag: '🇨🇭',
    name: 'Swiss',
    standard: 'Swiss FINMA Rigor',
    tag: 'ZÜRICH • ZERO TRUST',
    sub: 'Military-grade cryptographic data isolation and 100% sovereign balance-sheet IP.',
    image: '/assets/images/executive_boardroom_gcc.jpg',
    heritageText: 'Air-Gapped Sovereign Captive Perimeters',
    rule: 'Zero-Trust Security & Sovereign IP',
  },
};

export function Hero() {
  const [activeCulture, setActiveCulture] = useState<CultureKey>('germany');
  const preset = CULTURAL_PRESETS[activeCulture];

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden scroll-mt-28">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(20,50,90,0.55),rgba(8,20,38,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Focused Executive Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk'] shadow-[0_0_15px_rgba(200,155,60,0.15)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>TIER-2 GLOBAL CAPABILITY • JAIPUR, INDIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.08]">
              Where Global Ethos <br className="hidden sm:inline" />
              Meets <span className="text-gold-gradient italic">Indian Heritage</span>.
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
              We engineer dedicated ODCs and sovereign Global Capability Centers (GCCs) in Tier-2 Jaipur—uniting enterprise governance with deterministic mathematical rigor and 98% team retention.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#operating-models"
                className="btn-gold-solid inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-['Space_Grotesk'] shadow-lg group hover:shadow-[0_0_24px_rgba(200,155,60,0.4)] transition-all cursor-pointer"
              >
                <span>Explore Operating Models</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-['Space_Grotesk'] transition-all"
              >
                <span>Estimate Model</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Balanced Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] tracking-tight transition-transform duration-200 group-hover:-translate-y-0.5">
                  98.2%
                </div>
                <div className="text-[0.65rem] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                  Team Retention
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-['Space_Grotesk'] tracking-tight transition-transform duration-200 group-hover:-translate-y-0.5">
                  40–60%
                </div>
                <div className="text-[0.65rem] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                  Cost Advantage
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] tracking-tight transition-transform duration-200 group-hover:-translate-y-0.5">
                  100%
                </div>
                <div className="text-[0.65rem] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                  Sovereign IP
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Streamlined Cultural Synthesis Console */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-4 duration-700 fill-mode-both">
            <div className="rounded-2xl border border-white/15 bg-[#0b1c33]/85 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(200,155,60,0.06)] relative space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold tracking-wider text-white font-['Space_Grotesk']">
                    CULTURAL SYNTHESIS
                  </span>
                </div>
                <div className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  <span>9 HZ RESONANCE</span>
                </div>
              </div>

              {/* Compact Culture Switcher */}
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
                {(['germany', 'usa', 'nordics', 'swiss'] as CultureKey[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCulture(c)}
                    className={`py-1.5 px-1 text-center rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      activeCulture === c
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(200,155,60,0.35)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {CULTURAL_PRESETS[c].flag} {CULTURAL_PRESETS[c].name}
                  </button>
                ))}
              </div>

              {/* Dynamic Preset Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCulture}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 pt-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[0.65rem] uppercase tracking-wider text-amber-400 font-bold font-['Space_Grotesk']">
                        {preset.flag} Benchmark Standard
                      </span>
                      <span className="text-[0.60rem] font-mono text-slate-400">
                        {preset.tag}
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-serif mt-0.5">
                      {preset.standard}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans mt-0.5">
                      {preset.sub}
                    </p>
                  </div>

                  {/* Dual Image Comparison Banner */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 relative aspect-[16/10] group">
                      <img
                        src={preset.image}
                        alt={preset.standard}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[0.58rem] font-mono text-amber-300 font-bold tracking-tight">
                          {preset.tag.split('•')[0].trim()}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 relative aspect-[16/10] group">
                      <img
                        src="/assets/images/jantar_mantar_precision.jpg"
                        alt="Jaipur Heritage"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[0.58rem] font-mono text-amber-300 font-bold tracking-tight">
                          JAIPUR 1727 • ±2S
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Concise Governance Rule */}
                  <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-2.5 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-[0.68rem] font-medium text-amber-200 font-['Space_Grotesk'] leading-tight">
                      <strong className="text-white font-bold">{preset.rule}:</strong> Synchronized with Tier-2 Jaipur talent loyalty.
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
