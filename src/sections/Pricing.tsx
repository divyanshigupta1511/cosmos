"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { fadeUp } from "@/lib/animations";
import { staggerContainer } from "@/lib/animations";

const plans = [
  {
    title: "Starter",
    description:
      "Perfect for businesses building their brand presence.",
    button: "Book Consultation",
    features: [
      "Brand Consultation",
      "Social Media Strategy",
      "Landing Page",
      "Email Support",
    ],
    featured: false,
  },
  {
    title: "Growth",
    description:
      "Ideal for brands ready to scale and dominate.",
    button: "Let's Talk",
    features: [
      "Everything in Starter",
      "Website Design",
      "Content Strategy",
      "Lead Generation",
      "Performance Marketing",
      "Priority Support",
    ],
    featured: true,
  },
  {
    title: "Enterprise",
    description:
      "Complete business growth and automation solution.",
    button: "Contact Us",
    features: [
      "Everything in Growth",
      "Business Automation",
      "ERP Consultation",
      "Custom Software",
      "Dedicated Support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
from-[#080810]
via-[#0F0B1E]
to-[#080810]
        px-5
sm:px-6
lg:px-8
        py-20
sm:py-24
lg:py-28
        scroll-mt-32
      "
    >
     <motion.div
  animate={{
    scale: [1, 1.15, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-1/2
    top-0
   h-[320px]
w-[320px]
sm:h-[420px]
sm:w-[420px]
lg:h-[500px]
lg:w-[500px]
    -translate-x-1/2
    rounded-full
    bg-violet-500/20
    blur-[220px]
  "
/>

      <div className="relative z-10 mx-auto max-w-7xl">
    <motion.div
  {...fadeUp}
  className="mb-14 sm:mb-16 lg:mb-20"
>
  <SectionHeading
    eyebrow="Pricing"
    title="Plans Built For"
    highlight="Serious Brands"
    titleColor="text-white"
    description="Flexible engagement models designed for startups, growing businesses and established brands."
  />
</motion.div>

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
 className="
grid
gap-6
sm:gap-8
md:grid-cols-2
lg:grid-cols-3
items-stretch
"
>
  {plans.map((plan, index) => (
    <PricingCard
      key={plan.title}
      title={plan.title}
      description={plan.description}
      button={plan.button}
      features={plan.features}
      featured={plan.featured}
      delay={index * 0.15}
    />
  ))}
</motion.div>

</div>
</section>
  );
}