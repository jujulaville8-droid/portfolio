"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Future Lawyer", "Advocate", "Law Student", "Leader", "Thinker"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base font-medium tracking-widest uppercase text-zinc-500 mb-6"
          >
            Welcome to my world
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Julian Laville</span>
          </h1>

          <div className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-zinc-400 h-10">
            A {" "}
            <span className="font-semibold text-white">{text}</span>
            <span className="typewriter-cursor" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-zinc-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          York University law student dedicated to justice, advocacy, and making
          a meaningful impact. Building a future in law, one case at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="glow-button px-8 py-4 rounded-full text-base font-bold text-white"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full text-base font-semibold text-zinc-400 border border-zinc-800 hover:border-purple-500/40 hover:text-white transition-all duration-300"
          >
            About Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
