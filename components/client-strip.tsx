'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-400 font-['Space_Grotesk'] font-bold">
            CONFIRMED ENGAGEMENT EXPERIENCE
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {clients.map((client, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05, color: '#f2cc83' }}
                transition={{ duration: 0.2 }}
                className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 font-['Space_Grotesk'] transition-colors cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
