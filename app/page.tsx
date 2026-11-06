import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ClientStrip } from '@/components/client-strip';
import { GalleryShowcase } from '@/components/gallery-showcase';
import { OperatingModels } from '@/components/operating-models';
import { ModelEstimator } from '@/components/model-estimator';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081426] text-white">
      <Navbar />
      <Hero />
      <ClientStrip />
      <GalleryShowcase />
      <OperatingModels />
      <ModelEstimator />
      <ContactSection />
      <Footer />
    </main>
  );
}
