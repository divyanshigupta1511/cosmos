"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-0
        left-1/3
        h-[550px]
        w-[550px]
        rounded-full
        bg-purple-300/40
        blur-[160px]
        pointer-events-none
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-0
        bottom-0
        h-[420px]
        w-[420px]
        rounded-full
        bg-purple-200/50
        blur-[140px]
        pointer-events-none
        "
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-1/2
        left-20
        h-32
        w-32
        rounded-full
        bg-purple-400/30
        blur-[80px]
        pointer-events-none
        "
      />
    </>
  );
}