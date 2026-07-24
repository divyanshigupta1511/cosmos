import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WorkProcess from "@/sections/WorkProcess";
import Pricing from "@/sections/Pricing";
import About from "@/sections/About";
import FAQ from "@/sections/FAQ";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <WorkProcess />

      <Pricing />

      <About />

      <FAQ />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}