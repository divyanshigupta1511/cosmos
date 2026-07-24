"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

import {
  Palette,
  Share2,
  Video,
  Megaphone,
  Monitor,
  Users,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description:
      "Building powerful brand foundations with positioning, identity and strategic direction.",
    icon: Palette,
  },
  {
    title: "Social Media Management",
    description:
      "Creating consistent digital presence through content planning, design and community growth.",
    icon: Share2,
  },
  {
    title: "Content Creation",
    description:
      "Premium content systems designed to communicate your brand story effectively.",
    icon: Video,
  },
  {
    title: "Reels Production",
    description:
      "High-impact short-form videos designed for attention and engagement.",
    icon: TrendingUp,
  },
  {
    title: "Performance Marketing",
    description:
      "Data-driven campaigns focused on visibility, leads and business growth.",
    icon: Megaphone,
  },
  {
    title: "Website Design",
    description:
      "Modern conversion-focused websites with premium user experiences.",
    icon: Monitor,
  },
  {
    title: "Lead Generation",
    description:
      "Strategic systems to attract qualified customers and scale your business.",
    icon: Users,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-200/40 blur-[150px]" />

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
            eyebrow="Our Expertise"
            title="Services That"
            highlight="Build Brands"
            description="Strategic solutions designed to build, position and scale modern businesses."
          />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}