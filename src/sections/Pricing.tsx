"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";

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
        bg-white
        px-6
        py-28
        scroll-mt-32
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-200/40
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="Pricing"
            title="Plans Built For"
            highlight="Serious Brands"
            description="Flexible engagement models designed for startups, growing businesses and established brands."
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}