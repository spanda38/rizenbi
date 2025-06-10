/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  AlertTriangle,
  Cpu,
  Users,
  BarChart3,
  BrainCircuit,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Script from "next/script";

/* -------------------------------------------------------------------------- */
/*                               STATIC  DATA                                 */
/* -------------------------------------------------------------------------- */

const problems = [
  { icon: AlertTriangle, copy: "Downtime hides root-causes and drags OEE." },
  { icon: Cpu, copy: "Operators wade through thick manuals & tribal knowledge." },
  { icon: BarChart3, copy: "Legacy ERPs ignore real-time shop-floor conditions." },
  { icon: Users, copy: "New tools stall because they weren’t built for crews." },
];

const phase1 = [
  "Ingest ERP / PLC / IoT data",
  "Predict downtime & surface root-causes",
  "AI co-pilot guides operators through fixes",
  "Shift-aware plans that learn from yesterday",
];

const phase2 = [
  "Lightweight, modular AI-native ERP",
  "Learns from workflows & human feedback",
  "Grows smarter over time—no consultants needed",
];

const pilot = [
  "Free 1-hour call + optional on-site walk-through",
  "Factory-specific diagnostic on downtime & planning gaps",
  "Custom experiment to eliminate one bottleneck in <30 days",
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function Home() {
  // Calendly section ref for smooth scrolling
  const calendlyRef = useRef<HTMLElement | null>(null);

  // Optional popup (kept from original code in case you need it later)
  const [popupOpen, setPopupOpen] = useState(false);

  /**
   * Smooth-scroll helper that works across all modern browsers.
   */
  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="font-sans text-gray-900 bg-gray-50">
      {/* Calendly script (lazy loaded once) */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center h-[85vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white text-center px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_top_left,rgba(255,255,255,0.08)_0,transparent_70%)]" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight max-w-5xl"
        >
          Bring Us Your Toughest Factory-Floor Problem.
          <br className="hidden md:block" />
          We’ll Uncover the Quickest Win—Free.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg sm:text-2xl max-w-3xl"
        >
          We’re a small, battle-tested team of engineers offering a no-cost discovery sprint to diagnose your bottlenecks and surface low-risk improvements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg"
            onClick={scrollToCalendly}
          >
            🗓 Book a Free Discovery Call
          </Button>
        </motion.div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────── */}
      <section className="py-24 container mx-auto px-6" id="problem">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">Common Pain Points</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {problems.map(({ icon: Icon, copy }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4"
            >
              <Icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <p>{copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── VISION ──────────────────────────────────── */}
      <section className="bg-white py-24" id="vision">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Where We’re Headed</h2>
          <div className="grid gap-12 md:grid-cols-2">
            {[
              { title: "Phase 1: Smarter Layer", icon: BrainCircuit, bullets: phase1 },
              { title: "Phase 2: AI-Native ERP", icon: Factory, bullets: phase2 },
            ].map(({ title, icon: Icon, bullets }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-3xl shadow-inner p-10"
              >
                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                  <Icon className="w-7 h-7 text-blue-600" /> {title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFER ───────────────────────────────────── */}
      <section className="py-24 container mx-auto px-6" id="offer">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Pilot Factories Wanted</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          Join our <strong>free pilot program</strong> and turn one nagging issue into a measurable win.
        </p>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {pilot.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex items-start gap-4"
            >
              <ClipboardList className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <p>{p}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
            onClick={scrollToCalendly}
          >
            Book your discovery call →
          </Button>
        </div>
      </section>

      {/* ── ABOUT & CONSULT ─────────────────────────── */}
      <section
        ref={calendlyRef}
        id="calendly"
        className="bg-gray-100 py-24"
      >
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-start">
          {/* About block */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
            <p className="leading-relaxed mb-4">
              We’re a small team of Georgia Tech and University of Washington engineers—ex-NVIDIA, Amazon, and Honeywell automation specialists—who’ve spent our careers elbow-deep in production lines across automotive, textiles, semiconductor, and aerospace.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Listen first.</strong> We interview your operators and review live data to surface day-to-day pain points—downtime, quality drift, scheduling headaches, siloed sensors, you name it.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Spot quick wins.</strong> We outline low-risk experiments (software tweaks, dashboard mock-ups, simple ML pilots) that could lift throughput or cut scrap without new hardware.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Hand you the roadmap.</strong> You keep the findings—no strings attached. If you’d like deeper help, great; if not, you still have a clear next step.
            </p>
            <p className="leading-relaxed">
              Have a stubborn shop-floor problem? Book a 1-hour call.
            </p>
          </div>

          {/* Calendly inline widget */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Book Your Call</h3>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/project-forgemind/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center text-sm">
        <p>
          Contact: {' '}
          <a
            href="mailto:project.forgemind@gmail.com"
            className="hover:text-white underline"
          >
            project.forgemind@gmail.com
          </a>{' '}
          · {' '}
          <a
            href="https://www.linkedin.com/company/forgemindai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Forgemind Consulting. All rights reserved.</p>
      </footer>
    </main>
  );
}
