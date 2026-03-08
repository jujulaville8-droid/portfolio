"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Practice Areas",
    skills: ["Commercial Litigation", "Public & Administrative Law", "International Arbitration", "Constitutional Law", "Regulatory & Compliance", "White-Collar Defence"],
  },
  {
    title: "Advocacy & Strategy",
    skills: ["Trial Advocacy", "Appellate Argument", "Cross-Examination", "Expert Witness Management", "Settlement Negotiation", "Judicial Review"],
  },
  {
    title: "Leadership & Recognition",
    skills: ["King's Counsel (KC)", "Bar Association Fellow", "Published Authority", "Judicial Appointments Panel", "Senior Mentorship", "Legal Policy Advisory"],
  },
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
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-800/60 mb-3">
            Areas of Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
            Core <span className="gradient-text">expertise</span>
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
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glow-card rounded-sm p-6"
            >
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                {category.title}
              </h3>
              {/* Small ornamental line under title */}
              <div className="w-10 h-px bg-amber-800/25 mb-5" />
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
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-4 py-2 text-sm font-medium rounded-sm bg-stone-50 text-stone-600 border border-stone-200 cursor-default hover:border-amber-800/25 hover:text-stone-800 transition-colors"
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
