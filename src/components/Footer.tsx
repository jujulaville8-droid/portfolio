"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <p className="text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Julian Laville. Built with{" "}
        <span className="gradient-text font-semibold">passion</span>.
      </p>
    </footer>
  );
}
