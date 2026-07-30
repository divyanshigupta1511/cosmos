"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/ui/FaqItem";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    question: "What services does Cosmos BrandFlow provide?",
    answer:
      "We provide Branding, Website Development, Marketing, Business Automation, Performance Marketing, Social Media Management, and Business Consultancy.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, growing businesses, and established brands looking to build a stronger digital presence.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary depending on the scope, but most branding and website projects are completed within a few weeks.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We redesign existing websites with modern layouts, premium experiences, and conversion-focused strategies.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#080810]
        via-[#0F0B1E]
        to-[#080810]
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
        scroll-mt-32
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
          top-0
          h-[260px]
          w-[260px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/20
          blur-[120px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[180px]
          lg:h-[500px]
          lg:w-[500px]
        "
      />


      <div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
        "
      >

        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="
            mb-10
            text-center
            sm:mb-16
          "
        >

          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            titleColor="text-white"
            description="Everything you need to know before working with Cosmos BrandFlow."
          />

        </motion.div>


        {/* FAQ Items */}
        <div
          className="
            space-y-4
            sm:space-y-5
          "
        >

          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={active === index}
              onClick={() =>
                setActive(active === index ? null : index)
              }
              delay={index * 0.1}
            />
          ))}

        </div>

      </div>

    </section>
  );
}