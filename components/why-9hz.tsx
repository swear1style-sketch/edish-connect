'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Activity, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Why9Hz() {
  const [selectedFreq, setSelectedFreq] = useState<number>(9);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.beginPath();
      ctx.lineWidth = selectedFreq === 9 ? 2.5 : 1.8;

      if (selectedFreq === 9) {
        ctx.strokeStyle = '#c89b3c';
        ctx.shadowColor = 'rgba(200, 155, 60, 0.8)';
        ctx.shadowBlur = 12;
      } else if (selectedFreq === 20) {
        ctx.strokeStyle = '#ef4444';
        ctx.shadowColor = 'rgba(239, 68, 68, 0.6)';
        ctx.shadowBlur = 8;
      } else {
        ctx.strokeStyle = '#38bdf8';
        ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
        ctx.shadowBlur = 8;
      }

      const frequency = selectedFreq === 9 ? 0.025 : selectedFreq === 20 ? 0.07 : 0.012;
      const amplitude = selectedFreq === 9 ? 34 : selectedFreq === 20 ? 18 : 42;
      const speed = selectedFreq === 9 ? 0.045 : selectedFreq === 20 ? 0.09 : 0.02;

      for (let x = 0; x < width; x++) {
        const y = centerY + Math.sin(x * frequency + offset) * amplitude;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      offset += speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedFreq]);

  return (
    <section id="why-9hz" className="py-20 md:py-28 bg-[#081426] text-white relative border-y border-white/10 overflow-hidden scroll-mt-28">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,155,60,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
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

            <div className="flex flex-wrap gap-2.5 pt-2">
              <button
                onClick={() => setSelectedFreq(9)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase font-['Space_Grotesk'] transition-all cursor-pointer ${
                  selectedFreq === 9
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_18px_rgba(200,155,60,0.4)]'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                9 Hz (Alpha Flow)
              </button>
              <button
                onClick={() => setSelectedFreq(20)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase font-['Space_Grotesk'] transition-all cursor-pointer ${
                  selectedFreq === 20
                    ? 'bg-red-500 text-white shadow-[0_0_18px_rgba(239,68,68,0.4)]'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                20 Hz (Beta Churn)
              </button>
              <button
                onClick={() => setSelectedFreq(5)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase font-['Space_Grotesk'] transition-all cursor-pointer ${
                  selectedFreq === 5
                    ? 'bg-sky-500 text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.4)]'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                5 Hz (Theta Dream)
              </button>
            </div>
          </motion.div>

          {/* Interactive Wave Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-2xl border border-white/15 bg-[#0b1c33]/85 backdrop-blur-xl p-6 shadow-2xl space-y-4"
          >
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

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-['Space_Grotesk']">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[0.62rem] uppercase tracking-wider text-slate-400 block font-mono">
                  State
                </span>
                <span className="text-amber-300 font-bold">
                  {selectedFreq === 9
                    ? 'Effortless Flow'
                    : selectedFreq === 20
                    ? 'High Stress & Churn'
                    : 'Hypnagogic Drift'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[0.62rem] uppercase tracking-wider text-slate-400 block font-mono">
                  Engineering Impact
                </span>
                <span className="text-white font-semibold">
                  {selectedFreq === 9
                    ? '100% Code Determinism'
                    : selectedFreq === 20
                    ? 'Syntax Errors & Friction'
                    : 'Unfinished Visions'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founding Mandate Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-[#0b1c33]/90 to-amber-500/10 p-8 sm:p-10 text-center relative max-w-4xl mx-auto shadow-xl"
        >
          <Quote className="w-8 h-8 text-amber-400 mx-auto mb-3 opacity-60" />
          <p className="text-lg sm:text-xl font-serif text-white leading-relaxed italic max-w-2xl mx-auto">
            &ldquo;We built Edish Connect on a single, uncompromising belief: that the highest form of engineering is not merely compliance—it is harmony.&rdquo;
          </p>
          <div className="pt-4 text-xs font-['Space_Grotesk'] tracking-widest uppercase text-amber-300 font-bold">
            FOUNDING MANDATE • JAIPUR & GLOBAL
          </div>
        </motion.div>
      </div>
    </section>
  );
}
