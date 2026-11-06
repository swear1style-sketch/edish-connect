'use client';

import React from 'react';

export function ClientStrip() {
  const clients = [
    'PNC Financial Services',
    'Bank of America',
    'Xponentium',
    'Atos',
    'Material+',
  ];

  return (
    <div className="py-6 border-b border-white/10 bg-[#060d19]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-400 font-['Space_Grotesk'] font-bold">
            CONFIRMED ENGAGEMENT EXPERIENCE
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {clients.map((client, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 font-['Space_Grotesk'] hover:text-white transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
