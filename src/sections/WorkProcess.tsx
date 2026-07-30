"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessCard from "@/components/ui/ProcessCard";
import { fadeUp } from "@/lib/animations";

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
  bg-gradient-to-b
  from-white
  via-violet-50/40
  to-white
  px-5
sm:px-6
lg:px-8
  py-20
sm:py-24
lg:py-28
  scroll-mt-32
"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
         h-[300px]
w-[300px]
sm:h-[380px]
sm:w-[380px]
lg:h-[450px]
lg:w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
         bg-violet-400/20
blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
      <motion.div
  {...fadeUp}
  className="mb-14 sm:mb-16 lg:mb-20"
>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Build"
            highlight="Powerful Brands"
            description="A structured process that turns ideas into impactful brand experiences."
          />
        </motion.div>

        {/* Process Cards */}

        {/* Connecting Line */}
<motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  viewport={{ once: true }}
  transition={{
    duration: 1.5,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-28
    left-0
    hidden
    h-px
    bg-gradient-to-r
    from-violet-300
    via-purple-400
    to-fuchsia-300
    lg:block
  "
/>
<div
  className="
  relative
    grid
    gap-6
sm:gap-8
lg:gap-10
    md:grid-cols-2
    lg:grid-cols-4
  "
>
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