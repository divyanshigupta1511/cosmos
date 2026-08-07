import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";

const Services = dynamic(() => import("@/sections/Services"));
const WorkProcess = dynamic(() => import("@/sections/WorkProcess"));
const Pricing = dynamic(() => import("@/sections/Pricing"));
const About = dynamic(() => import("@/sections/About"));
const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const FAQ = dynamic(() => import("@/sections/FAQ"));
const Contact = dynamic(() => import("@/sections/Contact"));
const Footer = dynamic(() => import("@/sections/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <WorkProcess />

      <Pricing />

      <About />

<Testimonials />

<FAQ />

      <Contact />

      <Footer />
    </>
  );
}