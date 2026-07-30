"use client";

import { motion } from "framer-motion";

interface StatsProps {
  number: string;
  label: string;
}

export default function Stats({
  number,
  label,
}: StatsProps) {
  return (
    <motion.div
  
 
     whileHover={{
  y: -10,
  scale: 1.03,
}}
transition={{
  duration: 0.25,
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
  backdrop-blur-xl
  shadow-[0_20px_60px_rgba(124,58,237,0.12)]
"
    >
      {/* Glass Reflection */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    bg-gradient-to-br
    from-white/20
    via-transparent
    to-transparent
  "
/>

<div className="relative z-10">
      <h3
  className="
    text-3xl
    sm:text-4xl
    font-extrabold
    leading-tight
    whitespace-nowrap
    text-transparent
    bg-clip-text
    bg-gradient-to-r
    from-violet-700
    via-purple-600
    to-fuchsia-500
    inline-block
    pb-1
  "
>
  {number}
</h3>

      <p
       className="
  mt-3
  text-sm
  font-medium
  text-gray-600
"
      >
        {label}
      </p>
    </div>
    </motion.div>
  );
}