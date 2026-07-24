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
  const baseClasses =
    "rounded-full px-8 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-700 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105",

    secondary:
      "bg-white/70 backdrop-blur-xl border border-violet-200 text-violet-700 hover:bg-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}