'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Activity } from 'lucide-react';

export function Why9Hz() {
  const [selectedFreq, setSelectedFreq] = useState<number>(9);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const midY = h / 2;

      // Draw subtle grid line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();

      // Draw wave
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = selectedFreq === 9 ? '#dfb15b' : selectedFreq === 20 ? '#ef4444' : '#38bdf8';

      const cycles = selectedFreq === 9 ? 3.5 : selectedFreq === 20 ? 8 : 1.5;
      const amplitude = selectedFreq === 9 ? 28 : selectedFreq === 20 ? 14 : 36;
      const speed = selectedFreq === 9 ? 0.04 : selectedFreq === 20 ? 0.09 : 0.02;

      for (let x = 0; x < w; x++) {
        const angle = (x / w) * Math.PI * 2 * cycles + offset;
        const y = midY + Math.sin(angle) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      offset += speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedFreq]);

  return (
    <section id="why-9hz" className="py-20 md:py-28 bg-[#081426] text-white relative border-y border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,155,60,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
              <Activity className="w-3.5 h-3.5" />
              <span>THE ORIGIN OF OUR NAME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif leading-[1.12]">
              <span className="italic block font-normal text-2xl sm:text-3xl text-gold-gradient mb-1">
                The 9 Hz Principle
              </span>
              The State of Effortless Flow Where Engineering Meets Inspiration.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              In neuroscience, the <strong>Alpha brainwave frequency sits between 8 Hz and 12 Hz, with 9 Hz as its exact harmonic anchor</strong>. At 9 Hz, the human mind transitions out of fragmented beta stress and enters the flow state: a rare neurological equilibrium where analytical logic and creative intuition operate in complete synthesis.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              This is why we named our company <strong>Edish</strong>. We reject the false dichotomy that engineering is merely cold, mechanical code, or that inspiration is undisciplined artistic daydreaming. At Edish, we synchronize rigorous deterministic systems with deep human inspiration.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setSelectedFreq(9)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase font-['Space_Grotesk'] transition-all ${
                  selectedFreq === 9
                    ? 'bg-amber-500 text-slate-950 shadow-lg'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                9 Hz (Alpha Flow)
              </button>
              <button
                onClick={() => setSelectedFreq(20)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase font-['Space_Grotesk'] transition-all ${
                  selectedFreq === 20
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                20 Hz (Beta Churn)
              </button>
              <button
                onClick={() => setSelectedFreq(5)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase font-['Space_Grotesk'] transition-all ${
                  selectedFreq === 5
                    ? 'bg-sky-500 text-slate-950 shadow-lg'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                5 Hz (Theta Dream)
              </button>
            </div>
          </div>

          {/* Interactive Wave Widget */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-[#0b1c33]/80 backdrop-blur-xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center text-xs font-['Space_Grotesk']">
              <span className="uppercase tracking-widest text-amber-400 font-bold text-[0.68rem]">
                Harmonic Waveform Synthesizer
              </span>
              <span className="text-slate-300 font-mono text-[0.68rem]">
                {selectedFreq === 9
                  ? 'Alpha Wave • Flow State'
                  : selectedFreq === 20
                  ? 'Beta Wave • Churn & Noise'
                  : 'Theta Wave • Deep Drift'}
              </span>
            </div>

            <canvas
              ref={canvasRef}
              width={480}
              height={140}
              className="w-full h-32 rounded-xl bg-black/40 border border-white/10"
            />

            <div className="flex justify-between items-center pt-2 border-t border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono text-amber-400">{selectedFreq}</span>
                <span className="text-xs text-slate-400 font-['Space_Grotesk']">Hz Resonance</span>
              </div>
              <div className="text-[0.70rem] text-slate-400 text-right max-w-[200px] leading-tight">
                Where rational software architecture unites with human creative passion.
              </div>
            </div>
          </div>
        </div>

        {/* Founding Mandate Quote */}
        <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-8 md:p-10 text-center space-y-3">
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-amber-200/90 leading-relaxed max-w-3xl mx-auto">
            “Engineering without inspiration creates systems. Inspiration without engineering creates ideas. Together they build the future.”
          </p>
          <div className="text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-amber-400">
            — The Edish Founding Mandate
          </div>
        </div>
      </div>
    </section>
  );
}
