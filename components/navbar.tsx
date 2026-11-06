'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 35);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 md:px-6">
        <nav
          id="navbar"
          className={`pointer-events-auto mt-3 md:mt-4 flex items-center justify-between w-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? 'max-w-5xl px-5 py-2.5 md:px-6 md:py-3 glass-nav-scrolled'
              : 'max-w-6xl px-6 py-3 md:px-8 md:py-3.5 glass-nav-transparent'
          }`}
        >
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
            <svg
              className="w-7 h-7 flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(200,155,60,0.4)] transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 36 36"
              fill="none"
            >
              <defs>
                <linearGradient id="goldNavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D48A" />
                  <stop offset="50%" stopColor="#C89B3C" />
                  <stop offset="100%" stopColor="#936717" />
                </linearGradient>
              </defs>
              <rect
                x="2"
                y="2"
                width="32"
                height="32"
                rx="7"
                stroke="url(#goldNavGrad)"
                strokeWidth="1.2"
                strokeOpacity="0.35"
                fill="rgba(200, 155, 60, 0.08)"
              />
              <path
                d="M8 28C8 16.954 16.954 8 28 8"
                stroke="url(#goldNavGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <line
                x1="18"
                y1="12"
                x2="18"
                y2="24"
                stroke="url(#goldNavGrad)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="18"
                x2="24"
                y2="18"
                stroke="url(#goldNavGrad)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="18" cy="18" r="2.2" fill="#FFFFFF" />
            </svg>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-['Space_Grotesk'] font-extrabold text-[0.84rem] tracking-[0.14em] text-white leading-tight">
                EDISH CONNECT
              </span>
              <span className="hidden sm:inline font-['Space_Grotesk'] text-[0.48rem] tracking-[0.18em] uppercase text-[#dfb15b] font-bold">
                ENGINEERING MEETS INSPIRATION
              </span>
            </div>
          </a>

          {/* Desktop Links (One single line, centered) */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 whitespace-nowrap">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider font-['Space_Grotesk']"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>HOME</span>
            </a>
            <a
              href="#operating-models"
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide font-['Space_Grotesk']"
            >
              MODELS
            </a>
            <a
              href="#cultural-fit"
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide font-['Space_Grotesk']"
            >
              CULTURAL FIT
            </a>
            <a
              href="#gallery"
              className="px-3 py-1 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors tracking-wide font-['Space_Grotesk']"
            >
              3D GALLERY
            </a>
            <a
              href="#staircase"
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide font-['Space_Grotesk']"
            >
              JOURNEY
            </a>
            <a
              href="#why-jaipur"
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide font-['Space_Grotesk']"
            >
              JAIPUR
            </a>
            <a
              href="#why-9hz"
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide font-['Space_Grotesk']"
            >
              WHY 9 HZ
            </a>
            <a
              href="#proof"
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide font-['Space_Grotesk']"
            >
              PROOF
            </a>
          </div>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 btn-gold-solid rounded-full px-4 py-1.5 md:px-5 md:py-2 text-[0.70rem] font-bold tracking-wider uppercase font-['Space_Grotesk'] cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#081426]/95 backdrop-blur-2xl flex flex-col p-6 pt-24 space-y-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center py-3 btn-gold-solid rounded-full text-sm font-bold uppercase tracking-wider font-['Space_Grotesk']"
          >
            Schedule Executive Briefing
          </a>
          <nav className="flex flex-col space-y-4 text-base font-semibold font-['Space_Grotesk']">
            <a
              href="#operating-models"
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-amber-400 py-1 transition-colors border-b border-white/10"
            >
              Operating Models (ODC / BOT / GCC)
            </a>
            <a
              href="#cultural-fit"
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-amber-400 py-1 transition-colors border-b border-white/10"
            >
              Cultural Fit Simulation
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileOpen(false)}
              className="text-amber-400 hover:text-amber-300 py-1 transition-colors border-b border-white/10"
            >
              3D Cylindrical Gallery Showcase
            </a>
            <a
              href="#staircase"
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-amber-400 py-1 transition-colors border-b border-white/10"
            >
              The Staircase Journey
            </a>
            <a
              href="#why-jaipur"
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-amber-400 py-1 transition-colors border-b border-white/10"
            >
              Jaipur Tier-2 Advantage
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-amber-400 py-1 transition-colors border-b border-white/10"
            >
              Model Estimator
            </a>
            <a
              href="#proof"
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-amber-400 py-1 transition-colors border-b border-white/10"
            >
              Verified Proof & Impact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
