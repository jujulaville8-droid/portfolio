"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Mock Trial Competition",
    description:
      "Led a team through a multi-round mock trial competition, developing case strategy, witness examinations, and closing arguments.",
    tags: ["Litigation", "Public Speaking", "Teamwork"],
    icon: "⚖️",
  },
  {
    title: "Legal Research Paper",
    description:
      "Authored an in-depth research paper analyzing the intersection of technology and privacy law in the Canadian legal landscape.",
    tags: ["Research", "Privacy Law", "Analysis"],
    icon: "📜",
  },
  {
    title: "Community Legal Aid",
    description:
      "Volunteered with a community legal clinic providing pro bono assistance to underserved populations navigating the justice system.",
    tags: ["Pro Bono", "Advocacy", "Community"],
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
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-800/60 mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
            Work I&apos;m{" "}
            <span className="gradient-text">proud of</span>
          </h2>
          {/* Vintage divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-20 h-px bg-amber-800/25" />
            <svg className="w-5 h-5 text-amber-800/30" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" />
            </svg>
            <div className="w-20 h-px bg-amber-800/25" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="glow-card rounded-sm p-8 h-full flex flex-col">
                {/* Icon with vintage border */}
                <div className="w-16 h-16 rounded-full border-2 border-amber-800/15 flex items-center justify-center mb-6 bg-stone-50">
                  <span className="text-2xl">{project.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-stone-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Thin ornamental line */}
                <div className="w-full h-px bg-amber-800/10 mb-4" />

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-sm bg-stone-100 text-stone-500 border border-stone-200"
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
