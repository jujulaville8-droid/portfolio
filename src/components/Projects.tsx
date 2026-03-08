"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Mock Trial Competition",
    description:
      "Led a team through a multi-round mock trial competition, developing case strategy, witness examinations, and closing arguments.",
    tags: ["Litigation", "Public Speaking", "Teamwork"],
    gradient: "from-amber-800 to-amber-600",
    icon: "⚖️",
  },
  {
    title: "Legal Research Paper",
    description:
      "Authored an in-depth research paper analyzing the intersection of technology and privacy law in the Canadian legal landscape.",
    tags: ["Research", "Privacy Law", "Analysis"],
    gradient: "from-stone-700 to-stone-500",
    icon: "📜",
  },
  {
    title: "Community Legal Aid",
    description:
      "Volunteered with a community legal clinic providing pro bono assistance to underserved populations navigating the justice system.",
    tags: ["Pro Bono", "Advocacy", "Community"],
    gradient: "from-amber-700 to-stone-600",
    icon: "🤝",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work I&apos;m{" "}
            <span className="gradient-text">proud of</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="glow-card rounded-2xl p-6 h-full flex flex-col">
                {/* Card header gradient */}
                <div
                  className={`w-full h-40 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  <span className="text-5xl relative z-10">{project.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-stone-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
