"use client";

import HeroSection from "@/common-components/sections/hero-section";
import AdvantagesSection from "@/common-components/sections/advantages-section";
import MainBanner from "@/common-components/sections/main-banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto max-w-7xl pt-16 px-6">
        <AdvantagesSection />
        <div className="wrapper mt-16 mb-16">
          <MainBanner />
        </div>
      </div>
    </>
  );
}
