"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/rizenbi";

const NAV = [
  { href: "/course", label: "Course" },
  { href: "/everest-program", label: "Everest" },
  { href: "/levels", label: "Levels" },
  { href: "/method", label: "Method" },
  { href: "/results", label: "Results" },
  { href: "/certification", label: "Certification" },
  { href: "/#book-demo", label: "Book Demo" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header
      className="
        sticky top-0 z-50 w-full border-b
        bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70
        pt-[env(safe-area-inset-top)]
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-extrabold tracking-tight text-lg sm:text-2xl">
          <span className="text-blue-700">Rizenbi</span>{" "}
          <span className="text-gray-800">Abacus</span>{" "}
          <span className="text-blue-700">&</span>{" "}
          <span className="text-gray-800">Vedic Math</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-700 ${pathname === item.href ? "text-blue-700 font-semibold" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions + Mobile toggle */}
        <div className="flex items-center gap-2">
          <a href={CONTACT.phone} className="hidden sm:block">
            <Button size="sm" className="rounded-2xl bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <Phone size={16} /> Call
            </Button>
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`py-2 ${pathname === item.href ? "text-blue-700 font-semibold" : "text-gray-800"}`}
              >
                {item.label}
              </Link>
            ))}
            <a href={CONTACT.phone} onClick={close} className="py-2 text-gray-800">
              Call
            </a>
            <a href="mailto:rizenbiusa@gmail.com" onClick={close} className="py-2 text-gray-800">
              Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
