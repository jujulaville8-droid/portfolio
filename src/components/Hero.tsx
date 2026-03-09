"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "King's Counsel",
  "Litigator",
  "Advocate",
  "Strategist",
  "Counsellor",
  "Negotiator",
  "Arbitrator",
  "Authority",
  "Trial Lawyer",
  "Mentor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      {/* Vintage corner ornaments */}
      <svg className="absolute top-8 left-8 w-20 h-20 text-amber-800/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute top-8 right-8 w-20 h-20 text-amber-800/20 -scale-x-100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-8 left-8 w-20 h-20 text-amber-800/20 -scale-y-100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-20 h-20 text-amber-800/20 scale-x-[-1] scale-y-[-1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 50 Q5 5 50 5" />
        <path d="M15 50 Q15 15 50 15" />
        <circle cx="5" cy="50" r="3" fill="currentColor" />
        <circle cx="50" cy="5" r="3" fill="currentColor" />
      </svg>

      {/* Subtle Antigua island outline */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] md:w-[600px] md:h-[480px] lg:w-[700px] lg:h-[560px] text-amber-800/[0.06] pointer-events-none"
        viewBox="0 0 500 381"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M365.3,180.4 L373.3,167.7 L387.5,165.4 L394.5,161.5 L399.6,163.2 L401.2,160.3 L403.5,160.3 L402.9,164.4 L396.1,166.7 L396.7,171.8 L393.8,173.0 L397.7,174.6 L410.4,165.0 L408.6,175.3 L410.9,175.3 L412.7,166.0 L420.1,169.5 L416.0,162.8 L425.2,163.8 L428.1,161.5 L421.7,162.1 L422.3,158.7 L416.6,158.7 L417.2,155.2 L420.1,156.4 L418.2,151.9 L424.6,157.0 L428.5,151.9 L432.0,154.8 L438.7,152.3 L440.0,157.0 L444.5,155.8 L443.9,162.8 L445.7,158.0 L455.3,162.8 L461.1,154.8 L473.6,155.8 L459.2,163.8 L458.8,166.7 L465.6,162.8 L469.1,165.0 L475.2,155.8 L479.7,155.8 L473.0,171.2 L462.7,173.4 L464.0,175.7 L470.1,174.6 L470.1,181.4 L465.6,186.5 L467.2,196.2 L458.2,193.3 L453.1,195.8 L454.7,190.6 L451.5,190.6 L449.0,182.0 L449.0,195.8 L443.9,194.5 L439.4,200.9 L424.6,200.9 L428.1,203.6 L424.6,204.8 L428.1,209.3 L415.0,220.2 L409.2,218.5 L408.0,223.0 L411.5,224.7 L430.3,211.1 L436.1,212.8 L434.8,218.9 L441.0,221.8 L441.0,225.9 L449.0,222.4 L450.2,229.2 L461.1,226.5 L461.7,223.7 L467.9,225.3 L477.1,217.3 L479.3,223.7 L476.5,226.9 L482.6,229.8 L475.9,232.1 L479.3,232.7 L481.6,238.4 L490.0,239.0 L478.7,243.5 L480.4,252.6 L487.7,255.4 L479.3,267.9 L484.5,270.4 L489.0,267.9 L489.0,270.4 L479.3,279.4 L477.5,274.3 L470.1,272.0 L467.9,283.3 L456.0,285.2 L456.0,291.3 L463.3,290.9 L465.6,295.4 L463.3,298.3 L450.8,296.4 L451.5,303.8 L435.5,299.9 L411.5,301.6 L397.3,296.4 L367.0,278.2 L356.3,275.9 L351.2,279.4 L348.3,275.3 L344.2,275.9 L343.2,283.9 L348.3,289.1 L346.5,295.4 L352.2,298.3 L353.9,310.8 L359.0,311.8 L360.2,315.9 L364.7,314.7 L364.7,318.8 L370.5,321.7 L372.7,327.2 L364.7,343.2 L360.8,337.4 L363.1,332.3 L356.7,332.3 L353.9,337.0 L364.7,348.9 L366.0,358.6 L358.6,362.7 L353.9,352.2 L345.4,353.4 L347.1,356.9 L353.4,355.7 L353.4,359.8 L339.1,370.1 L328.2,367.2 L322.7,371.1 L314.1,365.3 L309.6,367.2 L306.7,360.2 L311.8,359.8 L310.2,353.4 L304.4,352.8 L305.5,358.0 L297.1,357.5 L291.9,364.9 L281.1,362.1 L278.8,354.1 L271.4,353.4 L271.8,348.3 L283.9,340.9 L287.2,334.6 L290.7,335.8 L289.7,328.4 L294.2,324.9 L290.7,321.0 L279.8,321.7 L278.2,324.3 L276.6,321.0 L267.9,322.1 L269.2,324.9 L262.8,327.8 L259.9,337.4 L254.8,341.6 L259.9,352.8 L246.8,342.2 L230.8,340.9 L229.2,335.2 L217.9,338.1 L210.9,335.2 L205.8,348.3 L204.2,346.1 L197.8,346.1 L195.2,349.5 L187.2,348.3 L183.7,351.8 L164.8,354.1 L161.5,358.0 L158.7,354.7 L161.5,352.2 L162.6,342.2 L160.3,339.7 L163.8,335.2 L159.1,332.3 L155.8,332.9 L151.3,341.6 L147.2,336.4 L139.8,340.9 L136.3,339.7 L138.8,332.3 L135.3,330.1 L108.0,331.3 L108.0,322.7 L103.9,319.8 L96.5,323.9 L94.3,319.8 L73.8,318.8 L59.0,321.7 L53.9,314.7 L49.2,316.9 L48.1,311.8 L42.4,311.2 L43.0,302.2 L34.4,287.4 L34.4,277.8 L37.3,278.2 L37.9,283.9 L42.4,280.4 L42.4,269.2 L38.5,270.4 L38.5,275.3 L34.4,275.9 L30.5,270.8 L30.5,261.2 L27.0,262.8 L26.4,258.9 L31.5,258.3 L33.8,253.2 L40.1,253.2 L43.0,240.7 L47.5,236.2 L45.9,223.0 L39.5,218.5 L33.4,220.8 L32.1,216.3 L36.7,213.4 L52.0,221.8 L53.3,229.8 L56.5,230.4 L55.5,214.0 L54.9,219.6 L51.6,220.8 L46.9,216.7 L50.4,211.1 L43.6,216.3 L43.6,208.3 L38.9,202.5 L30.9,206.0 L27.0,200.9 L15.5,200.9 L13.9,204.8 L10.0,201.9 L16.2,190.0 L25.4,188.2 L28.7,192.3 L35.6,191.7 L38.9,184.3 L45.3,182.6 L61.3,186.5 L68.6,168.3 L73.2,167.3 L75.4,160.3 L74.8,152.9 L67.0,149.6 L43.0,154.8 L41.2,158.0 L30.9,155.2 L20.3,164.4 L11.6,159.3 L20.9,150.0 L15.1,147.2 L16.8,141.0 L28.2,131.4 L27.6,117.0 L37.3,116.4 L42.4,109.0 L53.3,108.6 L52.0,102.3 L42.4,103.5 L40.1,100.6 L58.4,97.8 L64.1,102.3 L65.8,99.4 L70.9,108.6 L82.8,105.8 L90.2,112.5 L90.2,118.3 L97.1,119.9 L101.7,117.0 L104.5,120.5 L113.5,115.4 L114.8,119.9 L123.8,124.4 L130.8,120.5 L136.3,124.4 L127.9,111.3 L109.0,108.0 L109.6,103.9 L119.9,105.8 L121.5,98.8 L102.3,94.9 L96.5,100.0 L95.9,94.9 L103.9,88.5 L107.4,70.9 L115.8,59.6 L117.0,53.3 L113.5,48.1 L117.6,47.1 L118.3,49.4 L130.8,39.5 L133.6,32.8 L131.2,24.1 L140.4,22.5 L141.4,18.0 L146.1,19.0 L161.5,10.0 L183.1,20.9 L225.9,16.4 L227.5,26.6 L234.9,35.6 L249.7,40.1 L248.1,50.0 L250.3,53.3 L255.4,52.6 L251.5,57.8 L253.2,62.5 L283.9,78.3 L278.2,89.8 L272.5,88.5 L274.3,85.7 L269.2,83.4 L265.7,89.1 L270.8,89.8 L266.9,92.6 L268.6,97.8 L251.9,105.8 L253.2,114.2 L257.7,110.3 L261.2,111.3 L256.0,118.9 L265.1,111.9 L275.3,110.3 L274.7,118.3 L278.8,121.1 L273.7,129.5 L276.6,136.9 L289.7,128.5 L297.1,130.2 L289.7,138.2 L308.9,135.3 L309.6,119.3 L307.3,115.4 L301.0,117.0 L300.3,113.8 L308.3,106.4 L316.9,103.5 L318.2,99.4 L322.1,100.0 L328.2,92.6 L327.8,85.7 L332.9,83.0 L335.8,84.0 L334.6,90.4 L339.7,98.8 L336.2,98.4 L322.7,111.9 L330.1,131.4 L336.8,129.1 L338.7,116.6 L341.3,118.9 L349.3,115.4 L357.3,116.6 L366.0,106.8 L370.5,109.6 L376.2,106.4 L377.8,95.9 L384.2,94.3 L384.6,97.1 L394.5,98.8 L396.1,103.9 L381.9,111.3 L373.9,119.9 L338.7,129.1 L345.4,140.4 L372.7,138.2 L371.7,143.9 L374.6,142.3 L380.1,145.5 L378.5,150.0 L369.2,153.5 L372.7,160.9 L366.0,163.8 L365.3,180.4 Z" />
      </svg>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Scales of Justice icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg className="w-16 h-16 mx-auto text-amber-800/40" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="32" y1="8" x2="32" y2="56" />
            <line x1="12" y1="16" x2="52" y2="16" />
            <path d="M12 16 L6 32 Q12 40 18 32 Z" />
            <path d="M52 16 L46 32 Q52 40 58 32 Z" />
            <circle cx="32" cy="8" r="3" />
            <line x1="24" y1="56" x2="40" y2="56" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base font-medium tracking-widest uppercase text-amber-800/50 mb-6"
          >
            Counsel of Distinction
          </motion.p>

          {/* Ornamental line above name */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-amber-800/30" />
            <svg className="w-4 h-4 text-amber-800/40" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
            </svg>
            <div className="w-16 h-px bg-amber-800/30" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="text-stone-800">Justin L</span>
            <br />
            <span className="gradient-text">Simon KC</span>
          </h1>

          {/* Ornamental line below name */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-24 h-px bg-amber-800/30" />
            <svg className="w-3 h-3 text-amber-800/40" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="3" />
            </svg>
            <div className="w-24 h-px bg-amber-800/30" />
          </div>

          <div className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-stone-500 h-10 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="font-semibold text-stone-700 absolute"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-stone-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic"
        >
          Over 50 years of distinguished practice in the highest courts.
          Relentless advocacy, unwavering integrity, and results that speak for themselves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="glow-button px-8 py-4 rounded-sm text-base font-bold tracking-wide uppercase text-sm"
          >
            Notable Cases
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-sm text-base font-semibold text-stone-500 border-2 border-stone-300 hover:border-amber-800/40 hover:text-stone-700 transition-all duration-300 tracking-wide uppercase text-sm"
          >
            About Counsel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
