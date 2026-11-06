'use client';

import React from 'react';
import { TiltedGridHero, type TiltedGridImage } from '@/components/ui/tilted-grid-hero';
import { Sparkles, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ARCHITECTURAL_IMAGES: TiltedGridImage[] = [
  {
    src: '/assets/images/enterprise_capability_campus.jpg',
    alt: 'Next-Gen Enterprise Capability Campus Jaipur',
  },
  {
    src: '/assets/images/jaipur_palace_geometry.jpg',
    alt: 'Amber Fort Architectural Geometry & Symmetry',
  },
  {
    src: '/assets/images/precision_robotics_automotive.jpg',
    alt: 'High-Precision Automotive & Robotics Lab',
  },
  {
    src: '/assets/images/jantar_mantar_precision.jpg',
    alt: 'Jantar Mantar Astronomical Sundial & Rigor',
  },
  {
    src: '/assets/images/executive_boardroom_gcc.jpg',
    alt: 'Executive Sovereign GCC Campus Boardroom',
  },
  {
    src: '/assets/images/munich_industrial_precision.jpg',
    alt: 'Munich DIN Standard Precision Machining',
  },
  {
    src: '/assets/images/modern_tech_center.jpg',
    alt: 'Cloud Platform & High-Throughput Engineering Pods',
  },
  {
    src: '/assets/images/jaipur_city_grid.jpg',
    alt: 'Jaipur 1727 Vidyadhar Mathematical City Grid',
  },
];

export function GalleryShowcase() {
  return (
    <section id="gallery" className="relative py-20 md:py-28 overflow-hidden bg-[#060e1b] border-y border-white/10 scroll-mt-28">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(18,45,80,0.4),rgba(6,14,27,0))] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-8 text-center">
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider font-['Space_Grotesk']">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D PERSPECTIVE STREAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
            Architectural Rigor & Engineering Prowess
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            A continuous cylindrical 3D arc streaming through dedicated enterprise centers, Munich precision laboratories, and Jaipur’s 1727 astronomical grid.
          </p>
        </motion.div>

        {/* 3D Cylindrical Hero Viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-[#09172a]/70 backdrop-blur-2xl shadow-2xl overflow-hidden p-1"
        >
          <TiltedGridHero
            images={ARCHITECTURAL_IMAGES}
            speed={4.5}
            tileHeight={30}
            aspectRatio={16 / 9}
            curve={75}
            fade={14}
            className="h-[440px] sm:h-[500px] md:h-[540px] w-full rounded-2xl md:rounded-3xl"
          >
            {/* Center Floating Glass Overlay */}
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-8 md:py-12 text-center pointer-events-none">
              <div className="px-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[0.68rem] tracking-widest font-mono uppercase shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  16-Facet Cylinder Arc • 3D Preserve Space
                </span>
              </div>

              <div className="pointer-events-auto flex items-center gap-3">
                <a
                  href="#operating-models"
                  className="btn-gold-solid inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-['Space_Grotesk'] shadow-xl group cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </TiltedGridHero>
        </motion.div>
      </div>
    </section>
  );
}
