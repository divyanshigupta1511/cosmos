"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
transition={{
  delay,
}}
     whileHover={{
  y: -6,
  scale: 1.02,
}}
     className="
group
relative
flex
h-full
flex-col
overflow-hidden
rounded-[28px]
sm:rounded-3xl
border
border-white/60
bg-white/70
backdrop-blur-xl
p-6
sm:p-7
lg:p-8
shadow-[0_20px_60px_rgba(124,58,237,0.08)]
transition-all
duration-300
hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]
"
    >
      
      {/* Hover Glow */}
<motion.div
  initial={{ opacity: 0 }}
  whileHover={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="
    absolute
    -inset-10
    bg-gradient-to-r
    from-violet-500/20
    via-purple-500/20
    to-fuchsia-500/20
    blur-3xl
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
/>
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
{/* NEW Glass Reflection */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    bg-gradient-to-br
    from-white/40
    via-transparent
    to-transparent
    opacity-60
  "
/>

      <div className="relative z-10">
        <motion.div
          animate={{
  y: [0, -4, 0],
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
          mb-5
flex
h-12
w-12
sm:h-16
sm:w-16

          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-100
          to-purple-100
          text-violet-700
        "
        >
          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
        </motion.div>

        <h3
  className="
    text-lg
sm:text-2xl
    font-bold
    text-gray-900
    sm:text-2xl
  "
>
          {title}
        </h3>

        <p
  className="
    mt-3
    text-sm
    leading-7
    text-gray-600
    sm:mt-4
    sm:text-base
  "
>
          {description}
        </p>
      </div>
    </motion.div>
  );
}