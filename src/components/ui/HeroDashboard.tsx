"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  BarChart3,
  Users,
  TrendingUp,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import FloatingCard from "@/components/ui/FloatingCard";
import DashboardStatCard from "@/components/ui/DashboardStatCard";

export default function HeroDashboard() {
  const rotateX = useMotionValue(0);
const rotateY = useMotionValue(0);

const smoothRotateX = useSpring(rotateX, {
  stiffness: 120,
  damping: 20,
});

const smoothRotateY = useSpring(rotateY, {
  stiffness: 120,
  damping: 20,
});

const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>
) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  rotateY.set((x / rect.width - 0.5) * 12);

  rotateX.set(-(y / rect.height - 0.5) * 12);
};

const resetRotation = () => {
  rotateX.set(0);
  rotateY.set(0);
};
return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}


      onMouseMove={handleMouseMove}
onMouseLeave={resetRotation}

style={{
  rotateX: smoothRotateX,
  rotateY: smoothRotateY,
  transformPerspective: 1200,
}}

      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        type: "spring",
      }}
    className="
  relative
  mx-auto
  w-full
  max-w-[340px]
  sm:max-w-[420px]
  md:max-w-[500px]
  lg:max-w-[540px]
  lg:-translate-y-8
"
    >
      {/* Main Card */}

    <motion.div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-white/30
          bg-white/15
          p-5
sm:p-6
lg:p-7
          backdrop-blur-3xl
          shadow-[0_30px_80px_rgba(124,58,237,0.18)]
        "
      > 
       {/* NEW GLOW START */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      -top-28
      -left-28
      h-72
      w-72
      rounded-full
      bg-violet-500/20
      blur-3xl
      pointer-events-none
    "
  />

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      -bottom-28
      -right-28
      h-72
      w-72
      rounded-full
      bg-fuchsia-500/20
      blur-3xl
      pointer-events-none
    "
  />

  {/* NEW GLOW END */}  

      <motion.div
  animate={{
    x: ["-120%", "180%"],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
    repeatDelay: 2,
  }}
  className="
    pointer-events-none
    absolute
    inset-y-0
    left-0
    w-24
    -skew-x-12
    bg-gradient-to-r
    from-transparent
    via-white/30
    to-transparent
  "
/>
        {/* Glass Reflection */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/30
            via-transparent
            to-transparent
          "
        />
       
       {/* Floating Light Particles */}
       {[...Array(10)].map((_, i) => (
  <motion.div
    key={i}
    animate={{
      y: [0, -25, 0],
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: 2 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.3,
    }}
    className="absolute rounded-full bg-white/60"
    style={{
      width: 4 + Math.random() * 6,
      height: 4 + Math.random() * 6,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
    }}
  />
))}


        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Brand Performance
            </p>

            <h3 className="mt-1 text-xl sm:text-2xl font-bold text-gray-900">
              Analytics Dashboard
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Badge */}

            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className="h-2.5 w-2.5 rounded-full bg-emerald-500"
              />

              <span className="text-xs font-semibold text-emerald-700">
                LIVE
              </span>
            </div>

            <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
              <BarChart3 size={24} />
            </div>
          </div>
        </div>

        {/* Premium Stats */}

        
          {/* Card 1 */}
<div className="grid grid-cols-2 gap-4">
  <DashboardStatCard
    icon={<Users size={24} />}
    value="12K+"
    label="Audience Growth"
  />

  <DashboardStatCard
    icon={<TrendingUp size={24} />}
    value="245%"
    label="ROI Increase"
  />
</div>

        {/* Graph */}

        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              Monthly Growth
            </p>

            <span className="text-xs font-semibold text-violet-600">
              +18%
            </span>
          </div>

         <svg
  viewBox="-5 0 310 90"
  className="h-24 w-full overflow-visible"
>
            <motion.path
     
              d="M0 70 C40 55 60 40 95 48 C130 55 150 20 190 28 C220 35 240 10 300 18"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                  
                repeatType: "reverse",
              }}
            />
            {[
  [5, 70],
  [95, 48],
  [190, 28],
  [240, 10],
  [295, 18],
].map(([cx, cy], i) => (
  <motion.circle
    key={i}
    cx={cx}
    cy={cy}
    r="4"
    fill="#A855F7"
    animate={{
      scale: [1, 1.7, 1],
      opacity: [0.6, 1, 0.6],
    }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
      delay: i * 0.25,
    }}
  />
))}
            


            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
<div
  className="
    mt-8
    grid
    grid-cols-1
    gap-3
    sm:grid-cols-3
  "
>
<motion.div
  whileHover={{
    y: -6,
    scale: 1.04,
  }}
  transition={{
    duration: 0.25,
  }}
  className="
    rounded-2xl
    border
    border-white/40
    bg-white/60
    backdrop-blur-xl
    p-4
    transition-all
    duration-300
    hover:shadow-[0_12px_30px_rgba(124,58,237,0.18)]
  "
>
  <p className="text-xs text-gray-500">
    Conversion
  </p>

  <h5 className="mt-2 text-xl font-bold text-gray-900">
    8.4%
  </h5>
</motion.div>

  <motion.div
    className="
      rounded-2xl
      border
      border-white/40
      bg-white/60
      backdrop-blur-xl
      p-4
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_12px_30px_rgba(124,58,237,0.18)]
    "
  >
    <p className="text-xs text-gray-500">
      Engagement
    </p>

    <h5 className="mt-2 text-xl font-bold text-gray-900">
      94%
    </h5>
  </motion.div>

 <motion.div
  whileHover={{
    y: -6,
    scale: 1.04,
  }}
  transition={{
    duration: 0.25,
  }}
  className="
    rounded-2xl
    border
    border-white/40
    bg-white/60
    backdrop-blur-xl
    p-4
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(124,58,237,0.18)]
  "
>
  <p className="text-xs text-gray-500">
    Reach
  </p>

  <h5 className="mt-2 text-xl font-bold text-gray-900">
    2.3M
  </h5>
</motion.div> 
</div>
        {/* Progress */}

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-gray-500">
              Campaign Progress
            </span>

            <span className="font-semibold text-violet-700">
              92%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-violet-100">
         <motion.div
  initial={{ width: 0 }}
  animate={{ width: "92%" }}
  transition={{ duration: 1.5 }}
  className="
    relative
    h-full
    overflow-hidden
    rounded-full
    bg-gradient-to-r
    from-violet-600
    to-fuchsia-500
  "
> 
{/* Progress End Glow */}
<motion.div
  animate={{
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.5, 1],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    right-0
    top-1/2
    h-3
    w-3
    -translate-y-1/2
    rounded-full
    bg-white
    shadow-[0_0_18px_rgba(255,255,255,0.9)]
  "
/>

</motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Notification */}

  <FloatingCard
  icon={<Sparkles className="text-violet-600" size={20} />}
  title="+124 New Leads"
  subtitle="This Week"
 className="
hidden
lg:block
-right-12
top-32
"
/>


<FloatingCard
  icon={<TrendingUp className="text-violet-600" size={20} />}
  title="+32% Growth"
  subtitle="Monthly Performance"
  className="
hidden
lg:block
left-12
-bottom-10
"
/>
    </motion.div>
  );
}