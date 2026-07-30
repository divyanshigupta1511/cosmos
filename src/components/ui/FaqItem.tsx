"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay?: number;
}

export default function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
  delay = 0,
}: FaqItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/20
        bg-white/10
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(124,58,237,0.15)]
      "
    >
      {/* Glass Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />

      <button
        onClick={onClick}
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-between
          p-5
sm:p-6
lg:p-7
          text-left
        "
      >
       <span
  className="
    pr-4
    text-base
    font-semibold
    leading-7
    text-white
    sm:text-lg
  "
>
          {question}
        </span>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            flex
            h-9
w-9
sm:h-10
sm:w-10
            items-center
            justify-center
            rounded-full
            bg-violet-500/20
          "
        >
          <ChevronDown
            size={20}
            className="text-violet-300"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <p
             className="
relative
z-10
px-5
pb-5
text-sm
leading-7
text-gray-300
sm:px-6
sm:pb-6
sm:text-base
lg:px-7
lg:pb-7
"
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}