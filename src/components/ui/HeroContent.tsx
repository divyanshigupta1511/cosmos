"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroBadge from "@/components/ui/HeroBadge";
import HeroStats from "@/components/ui/HeroStats";
import { fadeLeft } from "@/lib/animations";

export default function HeroContent() {
  const handleBookSession = () => {
  const phone = "918882475018";

  const message = `Hi Cosmos BrandFlow!

I visited your website and I'm interested in discussing my project.

I'd like to book a consultation.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <motion.div
  initial={fadeLeft.initial}
  whileInView={fadeLeft.whileInView}
  viewport={fadeLeft.viewport}
  transition={fadeLeft.transition}
>
      <HeroBadge />

<h1
  className="
    mt-8
    text-4xl
font-bold
leading-[1.08]
tracking-tight
text-center
text-gray-900
sm:text-5xl
md:text-6xl
lg:text-left
xl:text-7xl
  "
>
  We don't market brands.

 <h1
  className="
    mt-2
    text-5xl
    font-bold
    leading-tight
    tracking-tight
    text-gray-900
    sm:text-6xl
    lg:text-7xl
  "
>
  We build{" "}
  <span
    className="
      bg-gradient-to-r
      from-purple-700
      via-violet-500
      to-fuchsia-500
      bg-clip-text
      text-transparent
    "
  >
    brands
  </span>
  <br />
  people remember.
</h1>
  <p
  className="
    mt-6
    max-w-xl
    text-lg
    leading-8
    text-gray-600
  "
>
  We help ambitious businesses build premium brands, high-converting
  websites, and growth systems that create long-term impact.
</p>
</h1>
      <p
        className="
  mt-7
  mx-auto
  max-w-xl
  text-base
  leading-relaxed
  text-center
  text-gray-600
  sm:text-lg
  lg:mx-0
  lg:text-left
"
      >
        Cosmos Brandflow helps businesses create powerful digital identities
        through branding, content strategy, marketing and modern web
        experiences.
      </p>

      <div
  className="
    mt-10
    flex
    flex-col
    items-center
    gap-4
    sm:flex-row
    sm:justify-center
    lg:items-start
    lg:justify-start
  "
><Button onClick={handleBookSession}>
  Book a Session
</Button>

<a
  href="/Cosmos-BrandFlow-Portfolio.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-violet-200
    bg-white/70
    px-8
    py-4
    font-semibold
    text-gray-800
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-violet-300
    hover:bg-white
    hover:shadow-[0_12px_35px_rgba(124,58,237,0.18)]
  "
>
  View Portfolio

  <motion.span
    className="inline-block"
    animate={{ x: [0, 4, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    →
  </motion.span>
</a>
      </div>
      <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
  <span>✓ Strategy First</span>
  <span>✓ Premium Design</span>
  <span>✓ Growth Focused</span>
</div>

<HeroStats />

      <HeroStats />
    </motion.div>
  );
}
