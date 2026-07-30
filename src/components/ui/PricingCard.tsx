"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { staggerItem } from "@/lib/animations";

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
  const handlePlanClick = () => {
const phone = "918882475018";

  const message = `Hi Cosmos Brandflow! I'm interested in the ${title} Plan. I'd like to know more about your services.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <motion.div
      variants={staggerItem}
transition={{
  delay,
}}
    whileHover={{
  y: -10,
  scale: 1.015,
}}
      
      className={`
       relative
flex
h-full
flex-col
rounded-3xl
        border
        bg-white/10
backdrop-blur-2xl
p-6
sm:p-7
lg:p-8
shadow-[0_25px_70px_rgba(124,58,237,0.18)]
        transition
        ${
          featured
            ? "border-violet-400/70 shadow-[0_20px_60px_rgba(168,85,247,0.25)] xl:-translate-y-5"
            : "border-white/20 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
        }
      `}
    >
      {featured && (
        <div
          className="
absolute
left-1/2
top-0
-z-0
-translate-x-1/2
-translate-y-1/2
rounded-full
border
border-white/20
bg-gradient-to-r
from-violet-600
to-fuchsia-500
px-4
sm:px-5
py-2
text-xs
sm:text-sm
font-semibold
text-white
shadow-[0_12px_30px_rgba(168,85,247,0.35)]
"
        >
    
          Most Popular
        </div>
      )}

     {/* Glass Reflection */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    rounded-3xl
    bg-gradient-to-br
    from-white/10
    via-transparent
    to-transparent
  "
/>

<div className="relative z-10 flex h-full flex-col">



      <h3
  className="
    mt-4
    text-2xl
    font-bold
    text-white
    sm:text-3xl
  "
>
        {title}
      </h3>

      <p
  className="
    mt-4
    text-sm
    leading-7
    text-gray-300
    sm:text-base
  "
>
        {description}
      </p>

      <div className="my-8 h-px bg-white/15" />

     <ul className="flex-1 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20">
              <Check
                size={15}
                className="text-violet-300"
              />
            </div>

            <span className="text-sm text-gray-200 sm:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>

    <button
  onClick={handlePlanClick}
  className={`
    mt-10
    w-full
    rounded-full
    py-3.5
    sm:py-4
    font-semibold
    transition-all
    duration-300
    ${
      featured
        ? "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(168,85,247,0.35)]"
        : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:-translate-y-1"
    }
  `}
>
  <div className="flex items-center justify-center gap-2">
    <MessageCircle size={18} />
    <span>{button}</span>
  </div>
</button>
      </div> 
    </motion.div>
  );
}