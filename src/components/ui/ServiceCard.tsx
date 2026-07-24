"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -12,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-purple-100
      bg-white
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-violet-100/0
        via-purple-100/20
        to-fuchsia-100/50
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          className="
          mb-7
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-100
          to-purple-100
          text-violet-700
        "
        >
          <Icon size={30} />
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}