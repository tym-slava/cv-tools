"use client";

import HeroSection from "@/common-components/sections/hero-section";
import AdvantagesSection from "@/common-components/sections/advantages-section";
import WhyUs from "@/common-components/sections/why-us";
import Feedbacks from "@/common-components/sections/feedbacks";
import CtaSection from "@/common-components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto max-w-7xl pt-16 px-6">
        <AdvantagesSection />
        <WhyUs />
        <Feedbacks />
        <CtaSection />
      </div>
    </>
  );
}
