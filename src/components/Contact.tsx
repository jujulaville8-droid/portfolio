"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-800/60 mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Instruct{" "}
            <span className="gradient-text">counsel</span>
          </h2>
          <p className="text-stone-500 text-lg mb-10 leading-relaxed">
            For matters requiring the highest calibre of legal representation,
            contact my chambers directly. All enquiries are treated with the
            utmost confidence and discretion.
          </p>

          <a
            href="#services"
            className="glow-button px-8 py-4 rounded-sm text-sm font-bold tracking-wide uppercase inline-flex items-center gap-3"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Chambers
          </a>
        </motion.div>

        {/* Vintage ornamental divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 flex items-center justify-center gap-4"
        >
          <div className="flex-1 max-w-[120px] h-px bg-amber-800/15" />
          <svg className="w-4 h-4 text-amber-800/25" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
          </svg>
          <div className="flex-1 max-w-[120px] h-px bg-amber-800/15" />
        </motion.div>
      </div>
    </section>
  );
}
