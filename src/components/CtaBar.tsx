"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CTA, CONTACT } from "@/lib/rizenbi";
import { Phone } from "lucide-react";

export default function CtaBar({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const bookHref = onHome ? "#book-demo" : "/#book-demo";
  const contactHref = onHome ? "#contact" : "/#contact";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button asChild className="rounded-2xl">
        <Link href={contactHref}>{CTA.enroll}</Link>
      </Button>

      <Button asChild className="rounded-2xl">
        <Link href={bookHref}>{CTA.bookDemo}</Link>
      </Button>

      <Button asChild className="rounded-2xl bg-gray-900 hover:bg-black flex items-center gap-2">
        <a href={CONTACT.phone} aria-label="Call Rizenbi">
          <Phone size={16} /> Call
        </a>
      </Button>

      <Button asChild className="rounded-2xl bg-blue-700 hover:bg-blue-800">
        <a href={`mailto:${CONTACT.email}`}>Email Us</a>
      </Button>
    </div>
  );
}
