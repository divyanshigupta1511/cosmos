"use client";

import Container from "@/components/ui/Container";
import HeroBackground from "@/components/ui/HeroBackground";
import HeroContent from "@/components/ui/HeroContent";
import HeroDashboard from "@/components/ui/HeroDashboard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      <HeroBackground />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-12
            pt-36
            pb-20
            md:pt-40
            md:pb-24
            lg:grid-cols-2
            lg:gap-16
            lg:pt-44
            lg:pb-32
          "
        >
          <HeroContent />

          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}