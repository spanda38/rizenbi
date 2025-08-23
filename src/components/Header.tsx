"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/rizenbi";

const NAV = [
  { href: "/course", label: "Course" },
  { href: "/everest-program", label: "Everest" },
  { href: "/levels", label: "Levels" },
  { href: "/method", label: "Method" },
  { href: "/results", label: "Results" },
  { href: "/certifications", label: "Certifications" },
  { href: "/#book-demo", label: "Book Demo" }, // anchors live on the home page
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl sm:text-2xl">
          <span className="text-blue-700">Rizenbi</span>{" "}
          <span className="text-gray-800">Abacus</span>{" "}
          <span className="text-blue-700">&</span>{" "}
          <span className="text-gray-800">Vedic Math</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2">
          <a href={CONTACT.phone}>
            <Button size="sm" className="rounded-2xl bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <Phone size={16} /> Call
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
