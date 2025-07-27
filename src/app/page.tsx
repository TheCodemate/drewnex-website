'use client';

import { CallToActionSection } from '../components/CallToActionSection';
import { Banner } from '../components/Banner';
import { LocationSection } from '../components/LocationSection';
import { ProductSection } from '@/components/ProductSection/ProductSection';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from '@/components/FeatureSection';
import { AboutUs } from '@/components/AboutUs';
import { GallerySection } from '@/components/GallerySection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <ProductSection />
      <Banner />
      <FeatureSection />
      <GallerySection />
      <LocationSection />
      <CallToActionSection />
    </main>
  );
}
