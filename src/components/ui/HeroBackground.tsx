"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Main Aurora Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/20
            blur-[180px]
          "
        />
      </div>

      {/* Floating Orb 1 */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-20
          top-24
          h-40
          w-40
          rounded-full
          bg-violet-300/30
          blur-3xl
        "
      />

      {/* Floating Orb 2 */}
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-24
          h-52
          w-52
          rounded-full
          bg-fuchsia-300/20
          blur-3xl
        "
      />

      {/* Small Floating Orb */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-1/3
          top-1/3
          h-24
          w-24
          rounded-full
          bg-purple-400/20
          blur-2xl
        "
      />
    </>
  );
}