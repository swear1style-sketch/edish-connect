'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Users, Clock } from 'lucide-react';

export function ModelEstimator() {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [timeline, setTimeline] = useState<'urgent' | 'medium' | 'long'>('medium');
  const [ownership, setOwnership] = useState<'vendor' | 'transfer' | 'direct'>('transfer');

  // Recommendation logic
  const getRecommendation = () => {
    if (ownership === 'direct' || teamSize >= 50) {
      return {
        name: 'Sovereign Captive GCC',
        explanation: `With a target of ${teamSize} specialists and direct ownership objectives, a Sovereign Captive Center maximizes IP permanence, long-term balance-sheet valuation, and zero margin markup.`,
        ramp: '12 to 16 Weeks',
        retention: '98.6%',
      };
    }
    if (ownership === 'transfer' || (teamSize >= 15 && timeline !== 'urgent')) {
      return {
        name: 'Build-Operate-Transfer (BOT)',
        explanation: `A cohort of ${teamSize} specialists is prime for a BOT structure: Edish de-risks initial operations in Jaipur, proving out delivery before transferring legal ownership to you in 24 months.`,
        ramp: '6 to 8 Weeks',
        retention: '97.8%',
      };
    }
    return {
      name: 'Dedicated ODC',
      explanation: `For rapid backlog velocity with ${teamSize} specialists, an ODC operates immediately under Edish legal entity with zero regulatory friction and 100% direct sprint command.`,
      ramp: '3 to 5 Weeks',
      retention: '98.2%',
    };
  };

  const rec = getRecommendation();

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#F1EBE3] text-[#151a22] relative border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#8c6515] text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <Calculator className="w-3.5 h-3.5" />
            <span>DECISION INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#081426] font-serif">
            <span className="italic block font-normal text-2xl sm:text-3xl text-[#8c6515] mb-1">
              Evaluate Your Model
            </span>
            Interactive GCC &amp; ODC Architecture Estimator.
          </h2>

          <p className="text-sm sm:text-base text-[#4a5568] font-sans leading-relaxed">
            Adjust your target scale, desired speed, and corporate ownership preference to identify the optimal entry point on our Staircase Framework.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 border border-black/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
          {/* Controls (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-7">
            {/* Team Size Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider text-[#081426]">
                  Target Engineering Headcount
                </label>
                <span className="text-xl font-bold font-mono text-[#8c6515] bg-[#c89b3c]/15 px-3 py-1 rounded-xl border border-[#c89b3c]/30">
                  {teamSize} Engineers
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#c89b3c]"
              />
              <div className="flex justify-between text-[0.68rem] text-[#718096] font-mono">
                <span>5 (Pod)</span>
                <span>50 (ODC)</span>
                <span>150+ (Sovereign GCC)</span>
              </div>
            </div>

            {/* Target Ramp Timeline */}
            <div className="space-y-2">
              <label className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider text-[#081426] block">
                Target Ramp Timeline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'urgent', label: 'Under 30 Days' },
                  { id: 'medium', label: '60–90 Days' },
                  { id: 'long', label: '6+ Months' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTimeline(t.id as any)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold font-['Space_Grotesk'] transition-all border ${
                      timeline === t.id
                        ? 'bg-[#081426] text-white border-[#081426] shadow-md'
                        : 'bg-white/60 text-[#4a5568] border-black/10 hover:bg-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ownership & Legal Strategy */}
            <div className="space-y-2">
              <label className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider text-[#081426] block">
                Ownership & Legal Strategy
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'vendor', label: 'No Local Entity' },
                  { id: 'transfer', label: 'Phased (BOT)' },
                  { id: 'direct', label: 'Wholly-Owned GCC' },
                ].map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setOwnership(o.id as any)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold font-['Space_Grotesk'] transition-all border ${
                      ownership === o.id
                        ? 'bg-[#081426] text-white border-[#081426] shadow-md'
                        : 'bg-white/60 text-[#4a5568] border-black/10 hover:bg-white'
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output (Right 6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#081426] text-white p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10">
            <div className="space-y-2">
              <span className="text-[0.65rem] uppercase tracking-widest text-amber-400 font-bold font-['Space_Grotesk'] block">
                Recommended Strategic Structure
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-white font-serif">
                {rec.name}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {rec.explanation}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-[0.65rem] uppercase tracking-wider text-slate-400 block font-mono">
                  Estimated Ramp:
                </span>
                <span className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {rec.ramp}
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] uppercase tracking-wider text-slate-400 block font-mono">
                  Projected Retention:
                </span>
                <span className="text-lg font-bold text-amber-400 font-mono">
                  {rec.retention}
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-gold-solid w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider font-['Space_Grotesk'] shadow-xl cursor-pointer"
            >
              <span>Request Custom Scope Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
