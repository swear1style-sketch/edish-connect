import { TiltedGridHero, type TiltedGridImage } from "@/components/ui/tilted-grid-hero";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";

/**
 * Curated Architectural & Engineering Gallery Images (Unsplash Stock)
 */
const GALLERY_IMAGES: TiltedGridImage[] = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern architectural glass skyscraper perspective",
  },
  {
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    alt: "Jaipur Amber Fort architectural geometry and royal courtyards",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    alt: "Precision engineering, industrial automation and robotics laboratory",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Contemporary luxury architecture and structural balance",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    alt: "Executive Global Capability Center campus boardroom",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    alt: "Mathematical sundial geometry and celestial precision",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    alt: "High-precision DIN standard machining and aerospace fabrication",
  },
  {
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop",
    alt: "Minimalist geometric architectural lighting and reflections",
  },
];

export default function GalleryShowcaseDemo() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#081426] text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Gallery Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Cylinder Gallery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-serif">
            Where Heritage Architecture Meets Precision Engineering
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-slate-300">
            A dynamic cylindrical perspective viewport streaming enterprise capability campuses,
            Jantar Mantar deterministic geometry, and sovereign development centers.
          </p>
        </div>

        {/* 3D Tilted Grid Cylinder Viewport */}
        <TiltedGridHero
          images={GALLERY_IMAGES}
          speed={4.5}
          tileHeight={30}
          aspectRatio={16 / 9}
          curve={75}
          fade={15}
          className="h-[520px] w-full rounded-2xl border border-white/10 bg-[#0b1c33]/70 backdrop-blur-md shadow-2xl"
        >
          {/* Centered Gallery Overlay */}
          <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 text-center pointer-events-none">
            <div className="px-6 space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
                Continuous Stream • 16 Slices / 3D Preserve Arc
              </span>
            </div>

            <div className="pointer-events-auto flex items-center gap-4">
              <a
                href="#gallery-details"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-transform active:scale-95 shadow-lg shadow-amber-500/20"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Explore Full Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </TiltedGridHero>
      </div>
    </section>
  );
}

export { GalleryShowcaseDemo };
