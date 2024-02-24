"use client";

import { CallToActionSection } from "../components/CallToActionSection";
import { Banner } from "../components/Banner";
import { LocationSection } from "../components/LoctationSection";
import { ProductSection } from "@/components/ProductSection";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProductSection />
      <Banner />
      <FeatureSection />
      <LocationSection />
      <CallToActionSection />
    </main>
  );
}
