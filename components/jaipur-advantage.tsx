'use client';

import React from 'react';
import { MapPin, TrendingDown, Clock, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export function JaipurAdvantage() {
  const metrics = [
    {
      value: '< 2%',
      title: 'Annual Voluntary Attrition',
      desc: 'Engineers build decade-long careers with your centre, preserving core codebase and architectural context.',
      icon: TrendingDown,
    },
    {
      value: '58%',
      title: 'Structural Cost Efficiency',
      desc: 'Materially more favorable cost structure across prime commercial real estate and compensation benchmarks.',
      icon: MapPin,
    },
    {
      value: '45 min',
      title: 'Delhi-NCR Air Corridor',
      desc: 'Seamless daily flights connecting Jaipur to New Delhi International Airport for immediate executive travel.',
      icon: Clock,
    },
    {
      value: '65k+',
      title: 'Annual Tech Graduates',
      desc: 'Premier talent feeder institutions including MNIT, LNMIIT, and Rajasthan Technical University.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="why-jaipur" className="py-20 md:py-28 bg-[#F1EBE3] text-[#151a22] relative border-b border-black/5 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16">
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#8c6515] text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <span>EVIDENCE-LED LOCATION INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#081426] font-serif">
            <span className="italic block font-normal text-2xl sm:text-3xl text-[#8c6515] mb-1">
              Beyond Saturated Metros
            </span>
            Why Global Capability Centers are Thriving in Jaipur.
          </h2>

          <p className="text-sm sm:text-base text-[#4a5568] font-sans leading-relaxed">
            Bengaluru, Hyderabad, and Pune built India&apos;s initial IT wave, but today they suffer from 35% attrition, unsustainable salary spikes, and infrastructural gridlock. Jaipur represents the next decade: exceptional talent, pristine retention, and sovereign economic stability.
          </p>
        </motion.div>

        {/* 4 Metric Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 rounded-2xl border border-black/10 bg-white/75 backdrop-blur-sm shadow-sm space-y-3 hover:shadow-lg transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c89b3c] font-serif">
                {m.value}
              </div>
              <div className="text-sm font-bold text-[#081426] font-serif">
                {m.title}
              </div>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Jaipur Living Heritage & Modern Infrastructure Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="rounded-2xl border border-black/10 bg-white/85 backdrop-blur-sm overflow-hidden shadow-md flex flex-col group"
          >
            <div className="aspect-video relative overflow-hidden bg-black">
              <img
                src="/assets/images/jaipur_city_grid.jpg"
                alt="Planned Grid Architecture of Jaipur"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-3 flex-1">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8c6515] font-['Space_Grotesk'] block">
                Town Planning Heritage • 1727 Grid Architecture
              </span>
              <h3 className="text-xl font-bold text-[#081426] font-serif">
                Architected Stability, Not Accidental Sprawl
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                Designed by master architect Vidyadhar Bhattacharya in 1727 on a mathematical 9-grid mandala, Jaipur offers high living standards, minimal commute overhead, and pristine quality of life for senior engineering talent.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="rounded-2xl border border-black/10 bg-white/85 backdrop-blur-sm overflow-hidden shadow-md flex flex-col group"
          >
            <div className="aspect-video relative overflow-hidden bg-black">
              <img
                src="/assets/images/enterprise_capability_campus.jpg"
                alt="Next-Gen Tier-2 Capability Hub"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-3 flex-1">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8c6515] font-['Space_Grotesk'] block">
                Modern Infrastructure • Special Economic Zones
              </span>
              <h3 className="text-xl font-bold text-[#081426] font-serif">
                Grade-A SEZ Campuses & Redundant Gigabit Fiber
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                World-class enterprise facilities in Mahindra World City and IT SEZ corridors with multi-carrier gigabit fiber, dual grid power backup, and 24/7 sovereign SOC/NOC physical security protocols.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
