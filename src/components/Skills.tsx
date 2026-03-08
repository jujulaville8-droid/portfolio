"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Legal Knowledge",
    skills: ["Constitutional Law", "Criminal Law", "Contract Law", "Human Rights", "Privacy Law", "Legal Ethics"],
  },
  {
    title: "Professional Skills",
    skills: ["Legal Research", "Case Analysis", "Legal Writing", "Negotiation", "Public Speaking", "Critical Thinking"],
  },
  {
    title: "Tools & Interests",
    skills: ["Westlaw", "LexisNexis", "CanLII", "Moot Court", "Mediation", "Policy Analysis"],
  },
];

const pillColors = [
  "from-amber-700/20 to-amber-700/5 border-amber-700/30 text-amber-300",
  "from-stone-600/20 to-stone-600/5 border-stone-600/30 text-stone-300",
  "from-amber-600/20 to-amber-600/5 border-amber-600/30 text-amber-200",
  "from-yellow-800/20 to-yellow-800/5 border-yellow-800/30 text-yellow-300",
  "from-stone-500/20 to-stone-500/5 border-stone-500/30 text-stone-300",
  "from-amber-800/20 to-amber-800/5 border-amber-800/30 text-amber-300",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Areas of Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">strengths</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glow-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.1 + skillIndex * 0.07,
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r border cursor-default ${
                      pillColors[(catIndex * 3 + skillIndex) % pillColors.length]
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
