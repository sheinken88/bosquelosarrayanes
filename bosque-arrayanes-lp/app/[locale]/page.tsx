import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ForestSection from '@/components/ForestSection';
import CatamaranSection from '@/components/CatamaranSection';
import TourSection from '@/components/TourSection';
import PricingSection from '@/components/PricingSection';
import GallerySection from '@/components/GallerySection';
import VideoSection from '@/components/VideoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ForestSection />
        <CatamaranSection />
        <TourSection />
        <PricingSection />
        <GallerySection />
        <VideoSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
