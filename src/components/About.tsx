"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-800/60 mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Decades devoted to{" "}
            <span className="gradient-text">justice</span>
          </h2>
          {/* Vintage divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-20 h-px bg-amber-800/25" />
            <svg className="w-5 h-5 text-amber-800/30" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" />
            </svg>
            <div className="w-20 h-px bg-amber-800/25" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Visual — vintage frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer vintage frame */}
              <div className="absolute inset-0 border-2 border-amber-800/20 rounded-sm" />
              <div className="absolute inset-2 border border-amber-800/10 rounded-sm" />
              {/* Photo */}
              <img
                src="/justin-simon.jpg"
                alt="Justin L Simon KC"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-sm"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-stone-700 leading-relaxed">
              Justin L Simon KC is a distinguished King&apos;s Counsel with over
              50 years of practice in commercial litigation, public law, and
              complex cross-border disputes. Appointed KC in recognition of
              exceptional skill and standing at the Bar.
            </p>
            <p className="text-lg text-stone-500 leading-relaxed">
              Known for incisive courtroom advocacy and meticulous case
              preparation, Justin has represented multinational corporations,
              government bodies, and high-net-worth individuals in precedent-setting
              matters. His command of the law is matched only by his commitment
              to his clients&apos; interests.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Years of Practice", value: "50+" },
                { label: "Cases Won", value: "500+" },
                { label: "Landmark Rulings", value: "30+" },
                { label: "Jurisdictions", value: "12" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
