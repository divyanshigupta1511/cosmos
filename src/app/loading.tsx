"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-violet-50
        to-white
      "
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-400/20
          blur-[120px]
        "
      />

      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-4xl
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          Cosmos{" "}
          <span className="bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
            BrandFlow
          </span>
        </motion.h1>

        {/* Loader */}
        <div className="mt-10 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="
                h-3
                w-3
                rounded-full
                bg-violet-600
              "
            />
          ))}
        </div>

        <p className="mt-6 text-sm tracking-[0.25em] text-gray-500 uppercase">
          Building Experiences...
        </p>
      </div>
    </main>
  );
}