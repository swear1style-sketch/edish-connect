'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050c17] border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-['Space_Grotesk'] font-extrabold text-base tracking-[0.14em] text-white">
                EDISH CONNECT
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Synthesizing European and American enterprise standards with India’s deepest mathematical and architectural heritage. Sovereign GCCs and dedicated ODCs in Tier-2 Jaipur.
            </p>
            <div className="text-[0.70rem] font-mono text-amber-400/80">
              JAIPUR • MUNICH • ZÜRICH • SAN FRANCISCO
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <div className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider text-white">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#operating-models" className="hover:text-amber-400 transition-colors">Dedicated ODCs</a></li>
              <li><a href="#operating-models" className="hover:text-amber-400 transition-colors">Build-Operate-Transfer</a></li>
              <li><a href="#operating-models" className="hover:text-amber-400 transition-colors">Sovereign GCC Setup</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">3D Perspective Gallery</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Cost Estimator</a></li>
            </ul>
          </div>

          {/* Governance */}
          <div className="space-y-3">
            <div className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider text-white">
              Governance
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#proof" className="hover:text-amber-400 transition-colors">100% Sovereign IP</a></li>
              <li><a href="#why-jaipur" className="hover:text-amber-400 transition-colors">Tier-2 Jaipur SEZ</a></li>
              <li><a href="#cultural-fit" className="hover:text-amber-400 transition-colors">DIN & FINMA Compliance</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Executive Briefing</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[0.70rem] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Edish Connect Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015</span>
            <span>SOC 2 Type II</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
