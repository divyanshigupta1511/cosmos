"use client";

import { motion } from "framer-motion";

export default function GradientBlob() {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        left-1/2
        top-1/2
        h-[700px]
        w-[700px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-gradient-to-r
        from-purple-500/10
        via-violet-400/10
        to-fuchsia-500/10
        blur-[180px]
      "
    />
  );
}