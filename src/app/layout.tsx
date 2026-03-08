import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Laville | Future Lawyer & Advocate",
  description: "Personal portfolio of Julian Laville — York University law student",
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
