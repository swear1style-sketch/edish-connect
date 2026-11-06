'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WelcomeCurtain() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if welcome curtain should play
    if (typeof window === 'undefined') return;
    const hasShown = sessionStorage.getItem('edish_welcome_shown');
    const isBypassed = window.location.search.includes('nowelcome');

    if (hasShown || isBypassed) {
      return;
    }

    // Activate curtain for first-time session visit
    setLoading(true);

    const start = performance.now();
    const duration = 1400; // 1.4 seconds

    const updateProgress = (time: number) => {
      const elapsed = time - start;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem('edish_welcome_shown', 'true');
        }, 200);
      }
    };

    const animId = requestAnimationFrame(updateProgress);

    const fallbackTimer = setTimeout(() => {
      setProgress(100);
      setLoading(false);
      sessionStorage.setItem('edish_welcome_shown', 'true');
    }, 1600);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="welcome-curtain"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050c17] text-white overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(200,155,60,0.18),transparent_65%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0c2242]/50 rounded-full blur-[140px] pointer-events-none" />

          {/* Center Brand Monogram */}
          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-sm px-6 text-center">
            {/* Official Logo Mark */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-3 border border-amber-500/40 bg-white/5 backdrop-blur-md shadow-[0_0_35px_rgba(200,155,60,0.35)] flex items-center justify-center"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect x="18" y="20" width="34" height="9" rx="2" fill="#FFFFFF" />
                <rect x="18" y="45" width="26" height="9" rx="2" fill="#FFFFFF" />
                <rect x="18" y="70" width="34" height="9" rx="2" fill="#FFFFFF" />
                <rect x="62" y="20" width="10" height="59" rx="2" fill="#C89B3C" />
              </svg>
            </motion.div>

            {/* Typography */}
            <div className="space-y-1.5">
              <h1 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-extrabold tracking-[0.14em] text-white uppercase leading-none">
                EDISH <span className="text-[#C89B3C]">CONNECT</span>
              </h1>

              <div className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.25em] text-[#dfb15b] uppercase font-bold font-['Space_Grotesk']">
                ENGINEERING MEETS INSPIRATION
              </div>
            </div>

            {/* Location & Ethos Tagline */}
            <div className="text-[0.60rem] tracking-[0.16em] text-slate-400 font-mono uppercase">
              JAIPUR 1727 • MUNICH DIN • 9 HZ HARMONIC
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-48 sm:w-56 space-y-2 pt-1">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[0.62rem] font-mono text-slate-400">
                <span className="text-amber-400/90 font-semibold tracking-wider">
                  INITIALIZING ARCHITECTURE
                </span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Quick Skip Button */}
          <button
            onClick={() => {
              setLoading(false);
              sessionStorage.setItem('edish_welcome_shown', 'true');
            }}
            className="absolute bottom-6 right-6 text-[0.62rem] uppercase tracking-widest text-slate-500 hover:text-white transition-colors font-mono cursor-pointer"
          >
            SKIP [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
