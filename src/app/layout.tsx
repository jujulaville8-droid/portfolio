import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin L Simon KC | King's Counsel & Advocate",
  description: "Justin L Simon KC — Seasoned King's Counsel with decades of distinguished legal practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
