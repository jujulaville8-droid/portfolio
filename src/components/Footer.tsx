"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      {/* Ornamental flourish */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-px bg-amber-800/15" />
        <svg className="w-3 h-3 text-amber-800/20" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="3" />
        </svg>
        <div className="w-12 h-px bg-amber-800/15" />
      </div>
      <p className="text-sm text-stone-400 italic">
        &copy; {new Date().getFullYear()} Justin L Simon KC. Crafted with{" "}
        <span className="gradient-text font-semibold not-italic">distinction</span>.
      </p>
    </footer>
  );
}
