"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DashboardStatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function DashboardStatCard({
  icon,
  value,
  label,
}: DashboardStatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/30
        bg-white/70
        p-5
        backdrop-blur-xl
        shadow-[0_15px_40px_rgba(124,58,237,0.12)]
      "
    >
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-br
          from-white/50
          to-transparent
        "
      />

      <div className="relative mb-3 text-violet-600">
        {icon}
      </div>

      <h4 className="relative text-3xl font-bold text-gray-900">
        {value}
      </h4>

      <p className="relative mt-1 text-sm text-gray-500">
        {label}
      </p>
    </motion.div>
  );
}