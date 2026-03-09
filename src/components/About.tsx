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
              {/* Inner content */}
              <div className="absolute inset-4 bg-stone-100 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  {/* Monogram */}
                  <div className="w-28 h-28 mx-auto rounded-full border-2 border-amber-800/30 flex items-center justify-center mb-6 bg-stone-50">
                    <span className="text-5xl font-bold text-amber-800/70" style={{ fontFamily: "Georgia, serif" }}>JS</span>
                  </div>
                  {/* Ornamental line */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-8 h-px bg-amber-800/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-800/30" />
                    <div className="w-8 h-px bg-amber-800/20" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-center gap-2">
                      {["King's Counsel", "Litigation", "Advocacy"].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-sm bg-amber-800/5 text-amber-900/60 border border-amber-800/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-2">
                      {["Commercial Law", "Public Law"].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-sm bg-stone-200/50 text-stone-600 border border-stone-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
              25 years of practice in commercial litigation, public law, and
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
                { label: "Years of Practice", value: "25+" },
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
