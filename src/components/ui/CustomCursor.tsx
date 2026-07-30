"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    // Disable on touch devices
    if (
      window.matchMedia("(pointer: fine)").matches
    ) {
      setEnabled(true);
    }

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        h-5
        w-5
        rounded-full
        bg-purple-500/70
        blur-[1px]
        shadow-[0_0_35px_rgba(168,85,247,0.9)]
      "
    />
  );
}