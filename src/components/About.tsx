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
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Passionate about pursuing{" "}
            <span className="gradient-text">justice</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 via-amber-600/15 to-amber-900/30 rounded-3xl" />
              <div className="absolute inset-[2px] bg-stone-950 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-700 to-amber-500 flex items-center justify-center mb-6">
                    <span className="text-5xl font-extrabold text-white">J</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-center gap-2">
                      {["Law", "Advocacy", "Justice"].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-amber-700/10 text-amber-300 border border-amber-700/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-2">
                      {["Research", "Leadership"].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-stone-600/10 text-stone-300 border border-stone-600/20"
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
            <p className="text-lg text-stone-300 leading-relaxed">
              I&apos;m a law student at York University with a passion for justice
              and advocacy. I bring critical thinking and determination to every
              challenge, striving to make a real difference.
            </p>
            <p className="text-lg text-stone-400 leading-relaxed">
              Balancing academics and ambition, I focus on understanding complex
              legal frameworks and championing the rights of others. Every case
              is an opportunity to push boundaries and grow as a future lawyer.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Mock Trials", value: "10+" },
                { label: "Areas of Interest", value: "5+" },
                { label: "Years at York", value: "3+" },
                { label: "Coffees Consumed", value: "∞" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
