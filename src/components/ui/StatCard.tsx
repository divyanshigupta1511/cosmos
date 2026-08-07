"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({
  number,
  label,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/60
        bg-white/70
        p-6
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(124,58,237,0.12)]
      "
    >
      {/* Number */}
      <h3
        className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-500
          bg-clip-text
          text-transparent
        "
      >
        {number}
      </h3>

      {/* Label */}
      <p
        className="
          mt-3
          text-sm
          font-medium
          text-gray-600
        "
      >
        {label}
      </p>
    </motion.div>
  );
}