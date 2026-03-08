"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function GavelCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[10000] pointer-events-none"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        rotate: clicking ? -30 : 0,
        scale: clicking ? 0.9 : 1,
      }}
      transition={{ rotate: { type: "spring", stiffness: 400, damping: 15 }, scale: { duration: 0.1 } }}
    >
      {/* Gavel SVG offset so the strike point is at the cursor tip */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-translate-x-[4px] -translate-y-[4px]"
      >
        {/* Gavel head */}
        <rect x="6" y="8" width="28" height="12" rx="3" fill="#5c3d2e" stroke="#3e2518" strokeWidth="1.5" transform="rotate(-45 20 14)" />
        {/* Handle */}
        <line x1="26" y1="26" x2="52" y2="52" stroke="#5c3d2e" strokeWidth="4" strokeLinecap="round" />
        {/* Head detail / band */}
        <rect x="10" y="10" width="24" height="4" rx="1" fill="#8b6f47" transform="rotate(-45 22 12)" />
        {/* Strike point dot */}
        <circle cx="4" cy="4" r="2" fill="#8b6f47" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
