"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  review: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  company,
  review,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -14,
        scale: 1.03,
         rotateX: 2,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/60
        bg-white/70
        p-6
sm:p-7
lg:p-8
        backdrop-blur-2xl
        shadow-[0_25px_70px_rgba(124,58,237,0.12)]
        transition-all
        duration-300
        hover:shadow-[0_25px_80px_rgba(124,58,237,0.22)]
      "
    >
      {/* Glass Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/20
          via-transparent
          to-transparent
        "
      />

      <div className="relative z-10">
        {/* Stars */}
        <motion.div
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mb-7 flex gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-violet-500 text-violet-500"
            />
          ))}
        </motion.div>

        {/* Review */}
       <p
  className="
    max-w-sm
    text-sm
    leading-7
    text-gray-700
    italic
    sm:text-base
    sm:leading-8
  "
>
          "{review}"
        </p>

        {/* Author */}
       <div className="mt-8 border-t border-white/40 pt-6">
  <div className="flex items-center gap-4">
    <div
      className="
        flex
        h-11
w-11
sm:h-12
sm:w-12
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-violet-500
        to-purple-700
        font-bold
        text-white
      "
    >
      {name.charAt(0)}
    </div>

    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-600 sm:text-base">
        {company}
      </p>
    </div>
  </div>
</div>
      </div>
    </motion.div>
  );
}