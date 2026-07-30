"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-white
          "
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              h-72
              w-72
              rounded-full
              bg-violet-400/30
              blur-[120px]
            "
          />

          <div className="relative z-10 text-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-5xl
                font-bold
                tracking-tight
                text-gray-900
              "
            >
              Cosmos
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
              className="
                mt-2
                bg-gradient-to-r
                from-violet-700
                to-fuchsia-500
                bg-clip-text
                text-2xl
                font-semibold
                text-transparent
              "
            >
              BrandFlow
            </motion.p>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 90,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-6
                h-[3px]
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-500
              "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}