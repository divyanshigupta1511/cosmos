"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  button: string;
  features: string[];
  featured?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  description,
  button,
  features,
  featured = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{ y: -12 }}
      className={`
        relative
        rounded-3xl
        border
        bg-white
        p-8
        shadow-sm
        transition
        ${
          featured
            ? "border-purple-500 shadow-[0_20px_60px_rgba(168,85,247,0.25)] lg:-translate-y-5"
            : "border-purple-100 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
        }
      `}
    >
      {featured && (
        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-500
            px-5
            py-2
            text-sm
            font-semibold
            text-white
          "
        >
          Most Popular
        </div>
      )}

      <h3 className="mt-4 text-3xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <div className="my-8 h-px bg-gray-200" />

      <ul className="space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
              <Check
                size={15}
                className="text-purple-700"
              />
            </div>

            <span className="text-gray-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`
          mt-10
          w-full
          rounded-full
          py-4
          font-semibold
          transition
          ${
            featured
              ? "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white hover:scale-105"
              : "border border-purple-200 text-gray-900 hover:bg-purple-50"
          }
        `}
      >
        {button}
      </button>
    </motion.div>
  );
}