'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Users, ArrowRight } from 'lucide-react';

export function ModelEstimator() {
  const [teamSize, setTeamSize] = useState<number>(15);
  const [modelType, setModelType] = useState<'odc' | 'bot' | 'gcc'>('odc');

  // Rates per engineer per year
  const US_RATE = 180000;
  const TIER1_INDIA_RATE = 62000;
  const EDISH_JAIPUR_RATE = modelType === 'odc' ? 36000 : modelType === 'bot' ? 39000 : 34000;

  const totalUsCost = teamSize * US_RATE;
  const totalTier1Cost = teamSize * TIER1_INDIA_RATE;
  const totalEdishCost = teamSize * EDISH_JAIPUR_RATE;

  const savingsVsUs = totalUsCost - totalEdishCost;
  const savingsPercentVsUs = Math.round((savingsVsUs / totalUsCost) * 100);

  const savingsVsTier1 = totalTier1Cost - totalEdishCost;

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#060e1a] relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <Calculator className="w-3.5 h-3.5" />
            <span>FINANCIAL EFFICIENCY ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
            Calculate Your Tier-2 Jaipur Economics
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans">
            Compare dedicated capabilities in Jaipur against domestic US/EU in-house teams and crowded Tier-1 India hubs.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0a182d] border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Controls (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Team Size Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-slate-200">
                  Engineering Pod Size
                </label>
                <span className="text-2xl font-bold font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-xl">
                  {teamSize} Engineers
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[0.65rem] text-slate-400 font-mono">
                <span>5 (Initial Pod)</span>
                <span>25 (Mid-Size ODC)</span>
                <span>50+ (Sovereign GCC)</span>
                <span>100</span>
              </div>
            </div>

            {/* Model Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-slate-200">
                Operating Vehicle
              </label>
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/10">
                {(['odc', 'bot', 'gcc'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setModelType(m)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all font-['Space_Grotesk'] ${
                      modelType === m
                        ? 'bg-amber-500 text-slate-950 shadow-lg'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {m === 'odc' ? 'ODC' : m === 'bot' ? 'BOT' : 'Sovereign GCC'}
                  </button>
                ))}
              </div>
            </div>

            {/* Retention Note */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div className="text-xs text-slate-300 leading-snug">
                <strong className="text-white">98.2% Retention Advantage:</strong> Tier-2 Jaipur eliminates the 25–35% annual attrition endemic to Bengaluru and Gurugram, preserving institutional code knowledge.
              </div>
            </div>
          </div>

          {/* Results Display (Right 6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#0c2240] to-[#081528] p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-['Space_Grotesk']">
                Estimated Annual Net Savings
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                ${(savingsVsUs / 1000).toLocaleString()}k <span className="text-lg text-emerald-400">/ yr</span>
              </div>
              <p className="text-xs text-slate-400">
                Approx. <strong className="text-emerald-400">{savingsPercentVsUs}% reduction</strong> compared to equivalent in-house staffing costs.
              </p>
            </div>

            {/* Breakdown Grid */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>US/EU In-House Benchmark</span>
                <span className="font-mono line-through text-slate-500">
                  ${(totalUsCost / 1000).toLocaleString()}k
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Tier-1 India (Bengaluru)</span>
                <span className="font-mono text-slate-400">
                  ${(totalTier1Cost / 1000).toLocaleString()}k
                </span>
              </div>
              <div className="flex justify-between items-center text-amber-300 font-bold text-sm bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                <span>Edish Jaipur Center ({modelType.toUpperCase()})</span>
                <span className="font-mono text-white">
                  ${(totalEdishCost / 1000).toLocaleString()}k
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-gold-solid w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider font-['Space_Grotesk'] shadow-xl cursor-pointer"
            >
              <span>Request Detailed Financial Model</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
