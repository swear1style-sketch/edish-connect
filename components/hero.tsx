'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Shield, Award, Clock } from 'lucide-react';

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
    foundation: string;
    rule: string;
  }
> = {
  germany: {
    flag: '🇩🇪',
    name: 'Germany',
    standard: 'German DIN Precision',
    tag: 'MUNICH • DIN EN ISO 9001',
    sub: 'Zero ambiguity, mathematical architectural compliance, and strict engineering rigor.',
    image: '/assets/images/munich_industrial_precision.jpg',
    foundation: 'Mathematical Rigor • Jantar Mantar 1727 (±2 sec celestial calibration)',
    rule: 'CALCULATED DETERMINISM & ZERO DEFECTS',
  },
  usa: {
    flag: '🇺🇸',
    name: 'USA',
    standard: 'US High Velocity & Rapid Scale',
    tag: 'SILICON VALLEY • AGILITY',
    sub: 'Asynchronous sprint autonomy, distributed pods, and aggressive delivery velocity.',
    image: '/assets/images/modern_tech_center.jpg',
    foundation: 'Autonomous Pod Ownership & Scalable Cloud Microservices',
    rule: 'CONTINUOUS DEPLOYMENT & VELOCITY',
  },
  nordics: {
    flag: '🇸🇪',
    name: 'Nordics',
    standard: 'Nordic Flat Hierarchy & Trust',
    tag: 'STOCKHOLM • TRANSPARENT CONSENSUS',
    sub: 'Unflinching psychological safety, peer code audits, and sustainable high-performance.',
    image: '/assets/images/engineering_pod_collaboration.jpg',
    foundation: 'Direct Engineer-to-Stakeholder Alignment • No Middle Management Bloat',
    rule: 'RADICAL TRANSPARENCY & SUSTAINED EXCELLENCE',
  },
  swiss: {
    flag: '🇨🇭',
    name: 'Swiss',
    standard: 'Swiss Financial & Cryptographic Rigor',
    tag: 'ZÜRICH • ZERO TOLERANCE SECURITY',
    sub: 'Military-grade access isolation, FINMA-compliant data compartmentalization, and 100% sovereign IP.',
    image: '/assets/images/executive_boardroom_gcc.jpg',
    foundation: 'Complete Cryptographic Data Isolation & Sovereign Captive Centers',
    rule: 'ZERO-TRUST COMPARTMENTALIZATION & SOVEREIGN IP',
  },
};

export function Hero() {
  const [activeCulture, setActiveCulture] = useState<CultureKey>('germany');
  const preset = CULTURAL_PRESETS[activeCulture];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,50,90,0.5),rgba(8,20,38,0))] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Executive Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>TIER-2 GLOBAL CAPABILITY • JAIPUR, INDIA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.08]">
              Where Global Ethos <br className="hidden sm:inline" />
              Meets <span className="text-gold-gradient italic">Indian Heritage</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
              We engineer dedicated ODCs and sovereign Global Capability Centers (GCCs) in Tier-2 Jaipur—uniting your enterprise standards with mathematical precision and 98% team retention.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#operating-models"
                className="btn-gold-solid inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider font-['Space_Grotesk']"
              >
                <span>Explore Operating Models</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-['Space_Grotesk'] transition-all"
              >
                <span>Estimate Model</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metric Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">98.2%</div>
                <div className="text-[0.65rem] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                  Team Retention
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-['Space_Grotesk']">40–60%</div>
                <div className="text-[0.65rem] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                  Cost Efficiency
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">100%</div>
                <div className="text-[0.65rem] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                  Sovereign IP
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cultural Synthesis Interactive Console */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-[#0b1c33]/80 backdrop-blur-xl p-5 sm:p-6 shadow-2xl relative space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-bold tracking-wider text-white font-['Space_Grotesk']">
                    CULTURAL SYNTHESIS
                  </span>
                </div>
                <div className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  9 HZ RESONANCE
                </div>
              </div>

              {/* Preset Selector Pills */}
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-black/30 border border-white/10">
                {(['germany', 'usa', 'nordics', 'swiss'] as CultureKey[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCulture(c)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-semibold tracking-wide transition-all ${
                      activeCulture === c
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {CULTURAL_PRESETS[c].flag} {CULTURAL_PRESETS[c].name}
                  </button>
                ))}
              </div>

              {/* Dynamic Preset Content */}
              <div className="space-y-4 pt-1 transition-all duration-300">
                <div className="space-y-1">
                  <div className="text-[0.65rem] uppercase tracking-wider text-amber-400 font-bold font-['Space_Grotesk']">
                    {preset.flag} Client Benchmark
                  </div>
                  <div className="text-lg font-bold text-white font-serif">{preset.standard}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{preset.sub}</p>
                </div>

                {/* Synthesis Split */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 relative aspect-video">
                    <img src={preset.image} alt={preset.standard} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[0.60rem] font-mono text-amber-300 font-bold tracking-tight">
                        {preset.tag}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 relative aspect-video">
                    <img
                      src="/assets/images/jantar_mantar_precision.jpg"
                      alt="Jaipur Heritage"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[0.60rem] font-mono text-amber-300 font-bold tracking-tight">
                        JAIPUR 1727 • ±2 SEC
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rule Callout */}
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-[0.70rem] font-medium text-amber-200 leading-snug font-['Space_Grotesk']">
                    <strong className="block text-white font-bold">{preset.rule}</strong>
                    Synchronized with Tier-2 Jaipur talent retention & Indian mathematical rigor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
