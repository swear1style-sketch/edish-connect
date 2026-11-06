'use client';

import React from 'react';
import { X, Check } from 'lucide-react';

export function CulturalFit() {
  return (
    <section id="cultural-fit" className="py-20 md:py-28 bg-[#F1EBE3] text-[#151a22] relative border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#8c6515] text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]"></span>
            <span>THE CORE DIFFERENTIATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#081426] font-serif">
            <span className="italic block font-normal text-2xl sm:text-3xl text-[#8c6515] mb-1">
              Why Traditional Outsourcing Breaks
            </span>
            Moving from Transient Staffing to Cultural Osmosis.
          </h2>

          <p className="text-sm sm:text-base text-[#4a5568] font-sans leading-relaxed">
            Enterprise failure in offshore engineering rarely stems from technical competence—it breaks on cultural dissonance, misaligned expectations, and catastrophic turnover. Edish Connect builds teams that think, communicate, and govern exactly like your headquarters.
          </p>
        </div>

        {/* Narrative Split: Legacy vs Edish */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Legacy Card */}
          <div className="rounded-2xl border border-red-200 bg-white/70 p-6 sm:p-8 space-y-5 shadow-sm">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-red-100 text-red-700 font-['Space_Grotesk']">
              The Traditional Vendor Model
            </span>
            <h3 className="text-xl font-bold text-[#081426] font-serif">
              Transactional Staff Augmentation
            </h3>
            <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
              Engineers are fungible billable heads assigned to tickets. They possess zero context on your product architecture, rotate every six months, and sit in hyper-crowded metros where competitor poaching is non-stop.
            </p>
            <div className="space-y-3 pt-3 border-t border-black/5 text-xs text-[#2d3748]">
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✕</span>
                <span><strong>High Attrition Churn:</strong> 35%–40% annual turnover in metro vendor pools.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✕</span>
                <span><strong>Transactional Mindset:</strong> "Ticket closed" rather than systemic product excellence.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✕</span>
                <span><strong>Cultural Friction:</strong> Lack of shared context creates endless management overhead.</span>
              </div>
            </div>
          </div>

          {/* Edish Card */}
          <div className="rounded-2xl border border-[#c89b3c]/40 bg-[#081426] text-white p-6 sm:p-8 space-y-5 shadow-xl">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-['Space_Grotesk'] border border-amber-500/30">
              The Edish Paradigm
            </span>
            <h3 className="text-xl font-bold text-white font-serif">
              Integrated Cultural Fit & Ownership
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We embed your operational principles directly into the team’s DNA. Operating out of Jaipur, we build teams that view your engineering roadmap as their life’s craft—retaining architectural knowledge for decades.
            </p>
            <div className="space-y-3 pt-3 border-t border-white/10 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</span>
                <span><strong className="text-white">Under 2% Annual Attrition:</strong> Deep loyalty and stability in high-quality Tier-II talent hubs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</span>
                <span><strong className="text-white">Ethos Alignment:</strong> Rigorous assimilation of your corporate cadence, compliance, and rituals.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</span>
                <span><strong className="text-white">Balance Sheet Asset:</strong> Pre-architected for eventual transfer to your sovereign ownership.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Jantar Mantar Architectural Proof Vignette */}
        <div className="rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold font-['Space_Grotesk'] tracking-widest text-[#8c6515] uppercase">
              Heritage of Precision
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#081426] font-serif leading-tight">
              Jaipur: India’s Original Capital of Mathematical Precision.
            </h3>
            <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
              In 1727, Maharaja Sawai Jai Singh II founded Jaipur not through accidental organic growth, but through a rigorous mathematical nine-square grid based on Vedic vastu geometry and astronomical axes. At its heart stands <strong>Jantar Mantar</strong>—the world's largest stone astronomical observatory, housing sundials capable of measuring solar time accurate to two seconds.
            </p>
            <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
              When we partner with global leaders—whether precision German manufacturers or Swiss financial institutions—we bring that exact legacy of structural discipline to modern software architecture and enterprise cloud platforms.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-black/10 relative aspect-[4/3] bg-black">
                <img src="/assets/images/jantar_mantar_precision.jpg" alt="Jantar Mantar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-white">
                  <span className="text-[0.58rem] font-mono text-amber-300 uppercase tracking-wider font-bold">1727 Astrometry</span>
                  <span className="text-[0.70rem] font-serif font-bold leading-tight">Jantar Mantar (±2s Precision)</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-black/10 relative aspect-[4/3] bg-black">
                <img src="/assets/images/engineering_pod_collaboration.jpg" alt="Dedicated Pods" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-white">
                  <span className="text-[0.58rem] font-mono text-amber-300 uppercase tracking-wider font-bold">Today Capability</span>
                  <span className="text-[0.70rem] font-serif font-bold leading-tight">Dedicated Pods (Zero Defects)</span>
                </div>
              </div>
            </div>
            <p className="text-[0.75rem] text-[#64748b] italic leading-snug border-t border-black/5 pt-2 text-center">
              “Precision was not imported to India—it was founded here 300 years ago. We translate that deterministic heritage into your roadmap.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
