"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessCard from "@/components/ui/ProcessCard";

import {
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your brand, audience, goals and challenges to create a strong foundation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We build a clear roadmap with positioning, creative direction and growth strategies.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Create",
    description:
      "We transform ideas into powerful designs, content, websites and digital experiences.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We optimize performance, improve visibility and help your brand scale consistently.",
    icon: TrendingUp,
  },
];

export default function WorkProcess() {
  return (
    <section
      id="work-process"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-28
        scroll-mt-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-200/40
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <SectionHeading
            eyebrow="Our Process"
            title="How We Build"
            highlight="Powerful Brands"
            description="A structured process that turns ideas into impactful brand experiences."
          />
        </motion.div>

        {/* Process Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}