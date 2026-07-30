"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
 const baseClasses = `
  inline-flex
  items-center
  justify-center
  relative
  overflow-hidden
  rounded-full
  px-8
  py-4
  font-semibold
  transition-all
  duration-300
  cursor-pointer
`;

  const variants = {
    
      primary:
  `
  bg-gradient-to-r
  from-violet-700
  to-purple-500
  text-white
  shadow-[0_10px_35px_rgba(124,58,237,0.28)]
  hover:shadow-[0_18px_50px_rgba(124,58,237,0.45)]
  `,

    secondary:
      "bg-white/70 backdrop-blur-xl border border-violet-200 text-violet-700 hover:bg-white",
  };

  return (
    <motion.button
      whileHover={{
  scale: 1.04,
  y: -3,
}}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <motion.span
  animate={{
    x: ["-120%", "220%"],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatDelay: 2,
    ease: "linear",
  }}
  className="
    pointer-events-none
    absolute
    inset-y-0
    left-0
    w-12
    -skew-x-12
    bg-gradient-to-r
    from-transparent
    via-white/40
    to-transparent
  "
/>
<span className="relative z-10">
  {children}
</span>
    </motion.button>
  );
}