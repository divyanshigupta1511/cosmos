"use client";

import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const handleStartProject = () => {
  const phone = "918882475018";

  const message = `Hi Cosmos BrandFlow!

I visited your website and I'd like to start a project with your team.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-white
        px-4
sm:px-6
        pt-16
pb-8
sm:pt-20
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[220px]
w-[220px]
sm:h-[300px]
sm:w-[300px]
lg:h-[350px]
lg:w-[350px]
          rounded-full
          bg-purple-200/40
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid
gap-10
md:grid-cols-4
lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#home"
              className="
                select-none
               text-2xl
sm:text-3xl
                font-black
                tracking-tight
              "
            >
              <span className="text-gray-900">
                Cosmos{" "}
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-violet-700
                  via-purple-600
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent
                "
              >
                BrandFlow
              </span>
            </a>

            <p
              className="
                mt-5
                max-w-md
                text-sm
leading-7
sm:text-base
                text-gray-600
              "
            >
              Strategic branding, modern websites, marketing systems and
              automation solutions that help businesses grow.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/cosmosbrandflow.co"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-11
w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-700
                  transition
                  hover:scale-110
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-700
                  transition-all
duration-300
hover:-translate-y-1
hover:scale-110
hover:bg-violet-600
hover:text-white
hover:shadow-[0_12px_30px_rgba(124,58,237,0.3)]
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:cosmosbrandflow.in@gmail.com"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-700
                  transition-all
duration-300
hover:-translate-y-1
hover:scale-110
hover:bg-violet-600
hover:text-white
hover:shadow-[0_12px_30px_rgba(124,58,237,0.3)]
                "
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-gray-600">
              <a href="#about" className="block transition-colors duration-300 hover:text-violet-700">
                About
              </a>

              <a href="#work-process" className="block transition-colors duration-300 hover:text-violet-700">
                Work Process
              </a>

              <a href="#pricing" className="block transition-colors duration-300 hover:text-violet-700">
                Pricing
              </a>

              
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-gray-600">
  <p className="transition-colors duration-300 hover:text-violet-700">
    Brand Strategy
  </p>

  <p className="transition-colors duration-300 hover:text-violet-700">
    Website Design
  </p>

  <p className="transition-colors duration-300 hover:text-violet-700">
    Content Creation
  </p>

  <p className="transition-colors duration-300 hover:text-violet-700">
    Performance Marketing
  </p>
</div>
          </div>
        </div>

        {/* CTA Strip */}
        <div
          className="
            mt-14
sm:mt-16
            rounded-3xl
            bg-purple-50
           p-5
sm:p-6
md:p-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <h3 className="text-lg
sm:text-xl
 font-bold text-gray-900">
                Ready to build your brand?
              </h3>

              <p className="mt-1 text-gray-600">
                Let's build a brand that people remember.
              </p>
            </div>

            <button
  onClick={handleStartProject}
  className="
    rounded-full
    bg-gradient-to-r
    from-purple-600
    to-purple-400
    w-full
    min-h-[52px]
    text-center
    px-6
    py-3.5
    sm:w-auto
    sm:px-7
    font-semibold
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_15px_35px_rgba(124,58,237,0.35)]
  "
>
  Start Project
</button>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="
            mt-10
            border-t
            border-gray-200
            pt-6
            text-center
            text-xs
sm:text-sm
            text-gray-500
          "
        >
          © {new Date().getFullYear()} Cosmos BrandFlow. All Rights Reserved.
          <p className="mt-2 text-xs text-gray-400">
            Crafted with ❤️ by Cosmos BrandFlow
          </p>
        </div>
      </div>
    </footer>
  );
}