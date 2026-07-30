"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work Process", href: "#work-process" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleBookSession = () => {
  const phone = "918882475018";

  const message = `Hi Cosmos BrandFlow!

I visited your website and I'm interested in discussing my project.

I'd like to book a consultation.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  setOpen(false);
};

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => {
      sections.forEach((section) => observer.unobserve(section!));
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed left-0 top-0 z-[70] w-full"
    >
      <Container className="mt-4">
        <div
          className={`
  flex
  items-center
  justify-between
  rounded-full
  border
  px-8
  py-3
  lg:py-3
  backdrop-blur-2xl
  transition-all
  duration-500
            ${
              scrolled
                ? "border-purple-200 bg-white/95 shadow-[0_20px_70px_rgba(124,58,237,0.25)]"
                : "border-purple-100 bg-white/70 shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
            }
          `}
        >
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative
                  font-medium
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:bg-purple-600
                  after:transition-all
                  ${
                    activeSection === link.href.replace("#", "")
                      ? "text-purple-700 after:w-full drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]"
                      : "text-gray-600 after:w-0 hover:text-purple-700 hover:after:w-full"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button onClick={handleBookSession}>
  Book a Session
</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-100 bg-white/70 backdrop-blur-xl md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="mx-6 mt-3 rounded-3xl border border-purple-100 bg-white/80 p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(124,58,237,0.15)] md:hidden"
            >
              <div className="flex flex-col gap-5">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition ${
                      activeSection === link.href.replace("#", "")
                        ? "text-purple-700"
                        : "text-gray-700 hover:text-purple-700"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
<Button onClick={handleBookSession}>
  Book a Session
</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
}