"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-[9999]
        h-[3px]
        bg-gradient-to-r
        from-purple-500
        via-fuchsia-500
        to-white
        shadow-[0_0_18px_rgba(168,85,247,0.9)]
      "
    />
  );
}