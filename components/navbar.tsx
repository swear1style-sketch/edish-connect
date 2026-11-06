'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'OVERVIEW', href: '#hero', id: 'hero' },
  { label: 'MODELS', href: '#operating-models', id: 'operating-models' },
  { label: 'CULTURAL FIT', href: '#cultural-fit', id: 'cultural-fit' },
  { label: '3D GALLERY', href: '#gallery', id: 'gallery', highlight: true },
  { label: 'JOURNEY', href: '#staircase', id: 'staircase' },
  { label: 'JAIPUR', href: '#why-jaipur', id: 'why-jaipur' },
  { label: 'WHY 9 HZ', href: '#why-9hz', id: 'why-9hz' },
  { label: 'PROOF', href: '#proof', id: 'proof' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll spy and scrolled detection
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          setIsScrolled(scrollPos > 30);

          // Find current section in view
          const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
            Boolean,
          ) as HTMLElement[];

          const current = sections.find((el) => {
            const rect = el.getBoundingClientRect();
            return rect.top <= 160 && rect.bottom >= 160;
          });

          if (current) {
            setActiveSection(current.id);
          } else if (scrollPos < 200) {
            setActiveSection('hero');
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 md:px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'pt-2.5 md:pt-3' : 'pt-4 md:pt-5'
        }`}
      >
        <nav
          id="navbar"
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl rounded-2xl md:rounded-[20px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? 'px-5 py-2.5 md:px-7 md:py-3 bg-[#081426]/92 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_24px_rgba(200,155,60,0.08)]'
              : 'px-6 py-3.5 md:px-8 md:py-4 bg-[#081426]/65 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
          }`}
        >
          {/* Brand Identity */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 flex-shrink-0 group focus:outline-none"
            aria-label="Edish Connect home"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_0_12px_rgba(200,155,60,0.18)]">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="18" y="20" width="34" height="9" rx="2" fill="#FFFFFF" />
                <rect x="18" y="45" width="26" height="9" rx="2" fill="#FFFFFF" />
                <rect x="18" y="70" width="34" height="9" rx="2" fill="#FFFFFF" />
                <rect x="62" y="20" width="10" height="59" rx="2" fill="#C89B3C" />
              </svg>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-['Space_Grotesk'] font-extrabold text-[0.90rem] tracking-[0.06em] text-white leading-tight">
                EDISH <span className="text-[#C89B3C]">CONNECT</span>
              </span>
              <span className="hidden sm:inline font-['Space_Grotesk'] text-[0.48rem] tracking-[0.18em] uppercase text-[#dfb15b] font-bold">
                ENGINEERING MEETS INSPIRATION
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-2.5 py-1.5 rounded-lg text-[0.72rem] xl:text-[0.76rem] font-medium tracking-[0.08em] font-['Space_Grotesk'] transition-all duration-200 ${
                    isActive
                      ? 'text-amber-300 font-semibold bg-white/10 shadow-[0_0_12px_rgba(200,155,60,0.18)]'
                      : item.highlight
                      ? 'text-amber-400 hover:text-amber-200 hover:bg-white/5'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.highlight && <Sparkles className="w-2.5 h-2.5 text-amber-400 inline" />}
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2.5 whitespace-nowrap">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 btn-gold-solid rounded-xl px-4 py-2 md:px-5 md:py-2.5 text-[0.72rem] font-bold tracking-wider uppercase font-['Space_Grotesk'] group cursor-pointer shadow-[0_4px_16px_rgba(200,155,60,0.35)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#081426]/98 backdrop-blur-2xl flex flex-col p-6 pt-24 space-y-6 lg:hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="20" width="34" height="9" rx="2" fill="#FFFFFF" />
                    <rect x="18" y="45" width="26" height="9" rx="2" fill="#FFFFFF" />
                    <rect x="18" y="70" width="34" height="9" rx="2" fill="#FFFFFF" />
                    <rect x="62" y="20" width="10" height="59" rx="2" fill="#C89B3C" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] font-extrabold text-base text-white">
                    EDISH <span className="text-[#C89B3C]">CONNECT</span>
                  </span>
                  <span className="font-['Space_Grotesk'] text-[0.55rem] text-amber-400 tracking-wider uppercase font-bold">
                    ENGINEERING MEETS INSPIRATION
                  </span>
                </div>
              </div>
            </div>

            <nav className="flex flex-col space-y-3 text-base font-medium font-['Space_Grotesk'] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-white/10 text-amber-400 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 btn-gold-solid rounded-xl text-sm font-bold uppercase tracking-wider font-['Space_Grotesk']"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
