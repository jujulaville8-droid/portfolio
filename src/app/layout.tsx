import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darren Laville | Future Lawyer & Advocate",
  description: "Personal portfolio of Darren Laville — York University law student",
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
