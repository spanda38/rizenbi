// src/components/CalendlyButton.tsx
"use client";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export default function CalendlyButton({
  url = "https://calendly.com/rizenbiusa/30min",
  children = "Book a Free Demo",
}: { url?: string; children?: React.ReactNode }) {
  const open = () => window.Calendly?.initPopupWidget?.({ url });
  return <Button onClick={open} className="rounded-2xl">{children}</Button>;
}
