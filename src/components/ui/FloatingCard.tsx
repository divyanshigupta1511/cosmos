"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-2xl
        border
        border-white/30
        bg-white/70
        backdrop-blur-xl
        p-4
        shadow-[0_20px_40px_rgba(124,58,237,0.12)]
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        {icon}

        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            {title}
          </h4>

          <p className="text-xs text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}