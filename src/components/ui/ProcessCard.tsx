"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ProcessCard({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
    whileHover={{
  y: -10,
  scale: 1.02,
}}
      className="
        group
relative
flex
h-full
flex-col
overflow-hidden
        rounded-3xl
        border
       border-white/60
bg-white/70
backdrop-blur-xl
p-6
sm:p-7
lg:p-8
shadow-[0_20px_60px_rgba(124,58,237,0.08)]
        transition
        hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-purple-100/0
          to-purple-100/50
          opacity-0
          transition
          group-hover:opacity-100
        "
      />
{/* Glass Reflection */}
<div
  className="
    pointer-events-none
    absolute
    inset-x-10
    top-0
    h-px
    bg-white
    opacity-70
  "
/>
      <div className="relative z-10">
        <span
  className="
    text-5xl
sm:text-6xl
    font-bold
    text-transparent
    bg-gradient-to-r
    from-violet-200
    to-purple-100
    bg-clip-text
  "
>
          {number}
        </span>

       <motion.div
  animate={{
    y: [0, -5, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    rotate: 10,
    scale: 1.15,
  }}
          className="
            mt-6
            flex
           h-12
w-12
sm:h-14
sm:w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
from-violet-100
to-purple-200
text-violet-700
          "
        >
          <Icon size={24} className="sm:h-7 sm:w-7" />
        </motion.div>

        <h3 className="mt-6 text-lg
sm:text-2xl font-bold text-gray-900">
          {title}
        </h3>

       <p
  className="
mt-4
flex-1
text-sm
leading-7
text-gray-600
sm:text-base
"
>
          {description}
        </p>
      </div>
    </motion.div>
  );
}