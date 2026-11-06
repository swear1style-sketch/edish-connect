'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-end pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden scroll-mt-28"
    >
      {/* Background Video Layer - Full Cinematic Panorama */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-100"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Minimal neutral gradient for bottom-left text contrast - NO blue wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-[#081426]/40 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Bottom-Left Executive Content Anchor */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/35 bg-black/40 backdrop-blur-md text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk'] shadow-[0_0_20px_rgba(200,155,60,0.2)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>TIER-2 GLOBAL CAPABILITY • JAIPUR, INDIA</span>
          </div>

          {/* Luxury Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white font-serif leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Where Global Ethos <br />
            Meets <span className="text-gold-gradient italic">Indian Heritage</span>.
          </h1>

          {/* Concise Executive Proposition */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] font-light">
            We engineer dedicated ODCs and sovereign Global Capability Centers (GCCs) in Tier-2 Jaipur—uniting enterprise governance with deterministic mathematical rigor and 98% team retention.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <a
              href="#operating-models"
              className="btn-gold-solid inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-['Space_Grotesk'] shadow-[0_8px_25px_rgba(200,155,60,0.35)] group hover:shadow-[0_0_35px_rgba(200,155,60,0.55)] transition-all cursor-pointer"
            >
              <span>Explore Operating Models</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 hover:border-white/50 bg-black/40 hover:bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-['Space_Grotesk'] transition-all shadow-md"
            >
              <span>Estimate Model</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Horizontal Key Metrics Strip */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 border-t border-white/15 max-w-xl">
            <div className="group cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                98.2%
              </div>
              <div className="text-[0.65rem] sm:text-xs text-slate-300 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                Team Retention
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />
            <div className="group cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-['Space_Grotesk'] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                40–60%
              </div>
              <div className="text-[0.65rem] sm:text-xs text-slate-300 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                Cost Advantage
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />
            <div className="group cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                100%
              </div>
              <div className="text-[0.65rem] sm:text-xs text-slate-300 font-semibold tracking-wider uppercase font-['Space_Grotesk'] mt-0.5">
                Sovereign IP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
