"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionGlow from "@/components/ui/SectionGlow";
import { fadeUp } from "@/lib/animations";
import { staggerContainer } from "@/lib/animations";

import {
  Palette,
  Share2,
  Video,
  Megaphone,
  Monitor,
  Users,
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
     className="
relative
overflow-hidden
bg-gradient-to-b
from-white
via-purple-50/30
to-white
px-5
sm:px-6
lg:px-8
py-20
sm:py-24
lg:py-28
"
    >
       <SectionGlow />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
  {...fadeUp}
  className="
mb-14
sm:mb-16
lg:mb-20
"
>
          <SectionHeading
            eyebrow="Our Expertise"
            title="Services That"
            highlight="Build Brands"
            description="Strategic solutions designed to build, position and scale modern businesses."
          />
        </motion.div>

        {/* Cards */}
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    grid
    gap-6
md:gap-7
lg:gap-8
    md:grid-cols-2
    lg:grid-cols-3
  "
> 

          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.08}
            />
          ))}
       
      </motion.div>
        </div>   
    </section>
  );
}