"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        totalHeight > 0
          ? (window.scrollY / totalHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full pointer-events-none">
      <motion.div
        animate={{
          width: `${scrollProgress}%`,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
        className="
          h-full
          bg-gradient-to-r
          from-purple-500
          via-fuchsia-500
          to-white
          shadow-[0_0_18px_rgba(168,85,247,0.9)]
        "
      />
    </div>
  );
}