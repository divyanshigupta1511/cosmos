"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-32
          h-[550px]
          w-[550px]
          rounded-full
          bg-purple-400/20
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 70, -40, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-400/15
          blur-[150px]
        "
      />
    </>
  );
}