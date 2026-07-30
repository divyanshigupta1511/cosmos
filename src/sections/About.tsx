"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import AboutFeature from "@/components/ui/AboutFeature";
import AboutStats from "@/components/ui/AboutStats";
import { fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-violet-50/40
        to-white
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
        scroll-mt-32
      "
    >

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-120px]
          top-[-100px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-300/30
          blur-[120px]
          sm:h-[420px]
          sm:w-[420px]
          lg:h-[520px]
          lg:w-[520px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          lg:grid-cols-2
          lg:gap-16
        "
      >

        {/* LEFT CONTENT */}
        <motion.div {...fadeUp}>

          <SectionHeading
            center={false}
            eyebrow="About Cosmos"
            title="Building Brands"
            highlight="That People Remember"
          />

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-gray-600
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            Cosmos Brandflow is a premium branding and business consultancy
            helping startups and growing businesses build memorable brands,
            modern websites, marketing systems and scalable digital experiences.
          </p>


          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-gray-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            We combine strategy, creativity, technology and automation to
            create brands that don't just look premium — they perform.
          </p>

        </motion.div>


        {/* RIGHT CARD */}

        <motion.div
          {...fadeUp}
          className="relative"
        >

          <motion.div
            animate={{
              y:[0,-8,0],
            }}
            transition={{
              duration:6,
              repeat:Infinity,
              ease:"easeInOut",
            }}
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/60
                bg-white/70
                p-6
                backdrop-blur-2xl
                shadow-[0_25px_70px_rgba(124,58,237,0.15)]
                sm:p-8
                lg:p-10
              "
            >

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

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-purple-600
                    sm:text-sm
                  "
                >
                  Our Philosophy
                </p>


                <h3
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    leading-tight
                    text-gray-900
                    sm:text-4xl
                  "
                >
                  Strategy.
                  <span className="text-violet-600">
                    {" "}Creativity.
                  </span>

                  <br />

                  Growth.
                </h3>


                <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">

                  <AboutFeature
                    number="01"
                    title="Strategy"
                    description="Understanding businesses and building strong foundations."
                  />


                  <AboutFeature
                    number="02"
                    title="Creativity"
                    description="Creating identities and experiences people remember."
                  />


                  <AboutFeature
                    number="03"
                    title="Growth"
                    description="Building systems that help brands scale."
                  />

                </div>

              </div>

            </div>


            <AboutStats />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}