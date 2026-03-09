"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "King's Counsel",
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

      {/* Subtle Antigua island outline */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] md:w-[600px] md:h-[480px] lg:w-[700px] lg:h-[560px] text-amber-800/[0.06] pointer-events-none"
        viewBox="0 0 400 321"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M27.7,210.9 L35.0,191.7 L29.0,175.3 L29.7,160.9 L56.9,147.4 L44.9,142.9 L10.0,124.5 L28.5,107.7 L58.2,95.4 L96.9,84.4 L83.3,62.2 L86.1,42.3 L101.4,24.9 L125.5,10.0 L179.0,16.4 L200.3,46.2 L213.2,80.8 L241.0,101.6 L242.7,86.7 L247.2,76.9 L263.0,55.7 L272.5,70.1 L285.6,78.4 L302.0,81.1 L321.2,78.7 L313.0,87.5 L308.3,93.8 L301.2,98.3 L285.9,101.6 L293.6,125.6 L310.8,136.9 L332.9,136.3 L355.6,124.5 L368.1,124.5 L376.7,132.7 L382.4,141.0 L390.0,159.9 L378.6,159.1 L355.5,160.7 L344.1,159.9 L359.7,178.6 L374.1,187.5 L382.3,196.5 L378.5,216.1 L359.6,245.2 L340.7,246.4 L319.0,235.8 L291.7,228.5 L278.6,234.6 L278.0,249.8 L285.9,291.1 L273.4,311.1 L245.9,298.4 L218.6,274.7 L206.8,262.0 L195.4,264.7 L161.1,280.8 L138.0,284.8 L103.0,285.0 L81.2,280.3 L27.6,249.0 L16.3,233.7 L27.7,210.9 Z" />
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
            <span className="gradient-text">Simon KC</span>
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
          Over 50 years of distinguished practice in the highest courts.
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
