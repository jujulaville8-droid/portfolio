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
          <p className="text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Passionate about building{" "}
            <span className="gradient-text">what matters</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-cyan-500/20 to-purple-800/30 rounded-3xl" />
              <div className="absolute inset-[2px] bg-zinc-950 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mb-6">
                    <span className="text-5xl font-extrabold text-white">J</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-center gap-2">
                      {["React", "Next.js", "Node"].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-2">
                      {["TypeScript", "Tailwind"].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
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
            <p className="text-lg text-zinc-300 leading-relaxed">
              I&apos;m a developer who loves creating sleek, high-performance web
              applications. I blend design thinking with technical precision to
              build experiences that stand out.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              With a focus on modern frameworks and clean architecture, I turn
              complex ideas into simple, beautiful interfaces. Every project is
              an opportunity to push boundaries and create something meaningful.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Projects Built", value: "15+" },
                { label: "Technologies", value: "20+" },
                { label: "Years Coding", value: "3+" },
                { label: "Coffees Consumed", value: "∞" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
