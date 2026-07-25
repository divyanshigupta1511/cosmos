"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ProcessCard({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{ y: -12 }}
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
        transition
        hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-purple-100/0
          to-purple-100/50
          opacity-0
          transition
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        <span className="text-6xl font-bold text-purple-100">
          {number}
        </span>

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
          className="
            mt-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-purple-100
            text-purple-700
          "
        >
          <Icon size={28} />
        </motion.div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}