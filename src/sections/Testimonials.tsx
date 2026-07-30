"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { fadeUp } from "@/lib/animations";

const testimonials = [
  {
    name: "Aarav Sharma",
    company: "Founder, Elevate Studio",
    review:
      "Cosmos BrandFlow completely transformed our brand identity. The website and marketing strategy exceeded our expectations.",
  },
  {
    name: "Priya Mehta",
    company: "Director, Nova Interiors",
    review:
      "Professional, creative, and highly strategic. The team understood our vision and delivered exceptional results.",
  },
  {
    name: "Rahul Verma",
    company: "CEO, Vision Tech",
    review:
      "From branding to automation, Cosmos helped us build a strong digital presence that generated real business growth.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
from-white
via-violet-50/40
to-white
        px-6
        py-20
sm:py-24
lg:py-28
      "
    >
      {/* Background Glow */}

      <motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.7, 0.4],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-1/2
    top-20
    h-[320px]
w-[320px]
sm:h-[420px]
sm:w-[420px]
lg:h-[520px]
lg:w-[520px]
    -translate-x-1/2
    rounded-full
    bg-violet-300/30
    blur-[180px]
  "
/>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
<motion.div
  {...fadeUp}
 className="
mb-12
sm:mb-16
lg:mb-20
"
>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our"
            highlight="Clients Say"
            description="Trusted by businesses that believe in building stronger digital identities."
          />
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              company={item.company}
              review={item.review}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}