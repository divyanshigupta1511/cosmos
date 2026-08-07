"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-violet-200
        bg-white/70
        px-5
        py-2
        text-sm
        font-medium
        text-violet-700
        shadow-lg
        backdrop-blur-xl
      "
    >
      <Sparkles size={16} />

      <span>
        Brand Strategy • Websites • Marketing • Automation
      </span>
    </motion.div>
  );
}