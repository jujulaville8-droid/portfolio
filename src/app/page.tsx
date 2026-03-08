"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GavelCursor from "@/components/GavelCursor";

export default function Home() {
  return (
    <main className="relative overflow-hidden cursor-none">
      <GavelCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
