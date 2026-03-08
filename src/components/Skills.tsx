"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "REST APIs", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "Figma", "VS Code", "Vercel", "Docker", "Linux"],
  },
];

const pillColors = [
  "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-300",
  "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-300",
  "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-300",
  "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30 text-indigo-300",
  "from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-300",
  "from-teal-500/20 to-teal-500/5 border-teal-500/30 text-teal-300",
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
          <p className="text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">toolkit</span>
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
