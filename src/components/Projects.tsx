"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Humanizer AI",
    description:
      "An intelligent text transformation tool that rewrites AI-generated content to sound more natural and human-like.",
    tags: ["Next.js", "AI/ML", "Tailwind CSS"],
    gradient: "from-purple-600 to-indigo-600",
    icon: "🧠",
  },
  {
    title: "DevFlow",
    description:
      "A real-time collaborative dashboard for development teams to track progress, manage sprints, and visualize workflows.",
    tags: ["React", "Node.js", "WebSocket"],
    gradient: "from-cyan-500 to-blue-600",
    icon: "⚡",
  },
  {
    title: "PixelForge",
    description:
      "A generative art platform that creates unique, algorithm-driven visual artwork from user-defined parameters.",
    tags: ["TypeScript", "Canvas API", "Framer Motion"],
    gradient: "from-purple-500 to-cyan-500",
    icon: "🎨",
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
          <p className="text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects I&apos;ve{" "}
            <span className="gradient-text">crafted</span>
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
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-zinc-400 border border-white/10"
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
