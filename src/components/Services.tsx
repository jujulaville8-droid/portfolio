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

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Services() {
  const [hours, setHours] = useState(1);
  const [selectedService, setSelectedService] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const service = services[selectedService];

    try {
      const payload = {
        _subject: `Booking Request: ${service.title}`,
        _cc: "john9605@hotmail.com",
        name,
        email,
        service: service.title,
        "Estimated Hours": hours,
        message: message || "No additional message provided.",
      };

      const res = await fetch("https://formsubmit.co/ajax/jujulaville8@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        setHours(1);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
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
            Senior King&apos;s Counsel representation —{" "}
            <span className="font-bold text-stone-700">fees upon consultation</span>
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

        {/* Booking form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto"
        >
          <div className="glow-card rounded-sm p-8">
            <h3 className="text-lg font-bold text-stone-800 mb-1">
              Request a Consultation
            </h3>
            <div className="w-10 h-px bg-amber-800/25 mb-6" />

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Selected service display */}
              <div>
                <p className="text-xs uppercase tracking-wide text-stone-400 mb-1">
                  Service
                </p>
                <p className="text-stone-700 font-semibold">
                  {services[selectedService].title}
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="text-xs uppercase tracking-wide text-stone-400 block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-sm bg-stone-50 border border-stone-200 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-800/40 transition-colors text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs uppercase tracking-wide text-stone-400 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-sm bg-stone-50 border border-stone-200 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-800/40 transition-colors text-sm"
                />
              </div>

              {/* Hours selector */}
              <div>
                <p className="text-xs uppercase tracking-wide text-stone-400 mb-2">
                  Estimated Hours
                </p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setHours(Math.max(1, hours - 1))}
                    className="w-10 h-10 rounded-sm border-2 border-stone-300 hover:border-amber-800/40 text-stone-600 hover:text-stone-800 flex items-center justify-center transition-colors text-lg font-bold"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-stone-800 w-12 text-center">
                    {hours}
                  </span>
                  <button
                    type="button"
                    onClick={() => setHours(Math.min(20, hours + 1))}
                    className="w-10 h-10 rounded-sm border-2 border-stone-300 hover:border-amber-800/40 text-stone-600 hover:text-stone-800 flex items-center justify-center transition-colors text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs uppercase tracking-wide text-stone-400 block mb-1.5">
                  Brief Description <span className="normal-case text-stone-300">(optional)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your legal matter..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm bg-stone-50 border border-stone-200 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-800/40 transition-colors text-sm resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`glow-button w-full py-4 rounded-sm text-sm font-bold tracking-wide uppercase transition-all ${
                  status === "sent"
                    ? "!bg-green-800 !border-green-800"
                    : status === "error"
                    ? "!bg-red-800 !border-red-800"
                    : ""
                } ${status === "sending" ? "opacity-70" : ""}`}
              >
                {status === "idle" && "Submit Request"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Request Sent Successfully"}
                {status === "error" && "Something went wrong — try again"}
              </button>

              <p className="text-xs text-stone-400 text-center">
                All enquiries are treated with the utmost confidence
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
