import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgemind Consulting",
  description:
    "Revolutionizing mid-sized factories with hands-on AI, automation, and lean systems. Precision engineering meets floor-level execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">{children}</body>
    </html>
  );
}
