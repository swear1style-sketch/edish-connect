import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ClientStrip } from '@/components/client-strip';
import { CulturalFit } from '@/components/cultural-fit';
import { StaircaseJourney } from '@/components/staircase-journey';
import { OperatingModels } from '@/components/operating-models';
import { GalleryShowcase } from '@/components/gallery-showcase';
import { Why9Hz } from '@/components/why-9hz';
import { JaipurAdvantage } from '@/components/jaipur-advantage';
import { CaseStudies } from '@/components/case-studies';
import { ModelEstimator } from '@/components/model-estimator';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081426] text-white selection:bg-[#0f223d] selection:text-[#f2cc83]">
      <Navbar />
      <Hero />
      <ClientStrip />
      <CulturalFit />
      <StaircaseJourney />
      <OperatingModels />
      <GalleryShowcase />
      <Why9Hz />
      <JaipurAdvantage />
      <CaseStudies />
      <ModelEstimator />
      <ContactSection />
      <Footer />
    </main>
  );
}
