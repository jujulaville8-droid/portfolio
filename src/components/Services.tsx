"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Strategic Litigation Counsel",
    description: "Comprehensive case assessment, strategy development, and senior advocacy for complex disputes in commercial, public, and constitutional law.",
    icon: "⚖️",
  },
  {
    title: "Arbitration & Dispute Resolution",
    description: "Expert representation in domestic and international arbitration proceedings, mediation, and alternative dispute resolution at the highest level.",
    icon: "🏛️",
  },
  {
    title: "Advisory & Regulatory Opinion",
    description: "Authoritative legal opinions, regulatory compliance guidance, and strategic advisory for boards, executives, and government bodies.",
    icon: "📜",
  },
];

export default function Services() {
  const [hours, setHours] = useState(1);
  const [selectedService, setSelectedService] = useState(0);
  const rate = 750;

  const handleBook = () => {
    const service = services[selectedService];
    const total = hours * rate;
    const subject = encodeURIComponent(`Booking Request: ${service.title}`);
    const body = encodeURIComponent(
      `Dear Mr. Simon KC,\n\nI wish to retain your services for ${service.title}.\n\nDetails:\n- Service: ${service.title}\n- Hours: ${hours}\n- Estimated Total: $${total}\n\nPlease advise on your earliest availability.\n\nYours faithfully.`
    );
    window.location.href = `mailto:jujulaville8@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-800/60 mb-3">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
            Retain <span className="gradient-text">counsel</span>
          </h2>
          {/* Vintage divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-20 h-px bg-amber-800/25" />
            <svg className="w-5 h-5 text-amber-800/30" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" />
            </svg>
            <div className="w-20 h-px bg-amber-800/25" />
          </div>
          <p className="mt-6 text-stone-500 text-lg max-w-2xl mx-auto">
            Senior King&apos;s Counsel representation at{" "}
            <span className="font-bold text-stone-700">$750/hour</span>
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setSelectedService(i)}
            >
              <div
                className={`glow-card rounded-sm p-8 h-full flex flex-col transition-all duration-300 ${
                  selectedService === i
                    ? "!border-amber-800/40 !bg-amber-50/50 shadow-md"
                    : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full border-2 border-amber-800/15 flex items-center justify-center mb-5 bg-stone-50">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                {/* Selection indicator */}
                <div className="mt-5 flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedService === i
                        ? "border-amber-800"
                        : "border-stone-300"
                    }`}
                  >
                    {selectedService === i && (
                      <div className="w-2 h-2 rounded-full bg-amber-800" />
                    )}
                  </div>
                  <span className="text-xs text-stone-400 uppercase tracking-wide">
                    {selectedService === i ? "Selected" : "Select"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto"
        >
          <div className="glow-card rounded-sm p-8">
            <h3 className="text-lg font-bold text-stone-800 mb-1">
              Estimate &amp; Book
            </h3>
            <div className="w-10 h-px bg-amber-800/25 mb-6" />

            {/* Selected service */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wide text-stone-400 mb-1">
                Service
              </p>
              <p className="text-stone-700 font-semibold">
                {services[selectedService].title}
              </p>
            </div>

            {/* Hours selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wide text-stone-400 mb-2">
                Hours
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setHours(Math.max(1, hours - 1))}
                  className="w-10 h-10 rounded-sm border-2 border-stone-300 hover:border-amber-800/40 text-stone-600 hover:text-stone-800 flex items-center justify-center transition-colors text-lg font-bold"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-stone-800 w-12 text-center">
                  {hours}
                </span>
                <button
                  onClick={() => setHours(Math.min(20, hours + 1))}
                  className="w-10 h-10 rounded-sm border-2 border-stone-300 hover:border-amber-800/40 text-stone-600 hover:text-stone-800 flex items-center justify-center transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="border-t border-stone-200 pt-4 mb-6 space-y-2">
              <div className="flex justify-between text-sm text-stone-500">
                <span>Rate</span>
                <span>${rate}/hr</span>
              </div>
              <div className="flex justify-between text-sm text-stone-500">
                <span>Hours</span>
                <span>×{hours}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-stone-800 pt-2 border-t border-stone-200">
                <span>Estimated Total</span>
                <span>${hours * rate}</span>
              </div>
            </div>

            {/* Book button */}
            <button
              onClick={handleBook}
              className="glow-button w-full py-4 rounded-sm text-sm font-bold tracking-wide uppercase"
            >
              Instruct Now
            </button>
            <p className="text-xs text-stone-400 text-center mt-3">
              Opens your email client with booking details
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
