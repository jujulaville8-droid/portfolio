"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Senior Counsel",
  "Litigator",
  "Advocate",
  "Strategist",
  "Counsellor",
  "Negotiator",
  "Arbitrator",
  "Authority",
  "Trial Lawyer",
  "Mentor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      {/* Vintage corner ornaments */}
      <svg className="absolute top-8 left-8 w-20 h-20 text-amber-800/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute top-8 right-8 w-20 h-20 text-amber-800/20 -scale-x-100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-8 left-8 w-20 h-20 text-amber-800/20 -scale-y-100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-20 h-20 text-amber-800/20 scale-x-[-1] scale-y-[-1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Scales of Justice icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg className="w-16 h-16 mx-auto text-amber-800/40" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="32" y1="8" x2="32" y2="56" />
            <line x1="12" y1="16" x2="52" y2="16" />
            <path d="M12 16 L6 32 Q12 40 18 32 Z" />
            <path d="M52 16 L46 32 Q52 40 58 32 Z" />
            <circle cx="32" cy="8" r="3" />
            <line x1="24" y1="56" x2="40" y2="56" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base font-medium tracking-widest uppercase text-amber-800/50 mb-6"
          >
            Counsel of Distinction
          </motion.p>

          {/* Ornamental line above name */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-amber-800/30" />
            <svg className="w-4 h-4 text-amber-800/40" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
            </svg>
            <div className="w-16 h-px bg-amber-800/30" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="text-stone-800">Justin L</span>
            <br />
            <span className="gradient-text">Simon</span>
          </h1>

          {/* Ornamental line below name */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-24 h-px bg-amber-800/30" />
            <svg className="w-3 h-3 text-amber-800/40" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="3" />
            </svg>
            <div className="w-24 h-px bg-amber-800/30" />
          </div>

          <div className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-stone-500 h-10 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="font-semibold text-stone-700 absolute"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-stone-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic"
        >
          Over 25 years of distinguished practice in the highest courts.
          Relentless advocacy, unwavering integrity, and results that speak for themselves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="glow-button px-8 py-4 rounded-sm text-base font-bold tracking-wide uppercase text-sm"
          >
            Notable Cases
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-sm text-base font-semibold text-stone-500 border-2 border-stone-300 hover:border-amber-800/40 hover:text-stone-700 transition-all duration-300 tracking-wide uppercase text-sm"
          >
            About Counsel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
