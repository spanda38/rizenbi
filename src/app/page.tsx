/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  AlertTriangle,
  MoonStar,
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
  { icon: AlertTriangle, copy: "Downtime is unpredictable ... Root cause analysis takes time and labor" },
  { icon: Cpu, copy: "Operators wade through thick manuals & tribal knowledge." },
  { icon: BarChart3, copy: "Legacy ERPs ignore real-time shop-floor conditions." },
  { icon: Users, copy: "New tools stall because they weren’t built for operators on the factory floor." },
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

const phase3 = [
  "Autonomous machine-to-machine coordination",
  "Zero-light, zero-operator production shifts",
  "Self-healing maintenance windows scheduled by AI",
  "No more human intervention only monitoring needed!"
]

const pilot = [
  "Free 1-hour call + optional on-site walk-through",
  "Factory-specific diagnostic on downtime & planning gaps",
  "Custom experiment to eliminate one bottleneck in < 30 days",
];

const team = [
  {
    name: "Raghav Gupta",
    title: "CEO and Co-Founder",
    image: "/images/raghav.jpg",
    bio: [
      "BS CS @ Georgia Tech",
      "Ex-Amazon SDE",
      "Worked on ML for Firestick's Content Delivery Network"
    ]
  },
  {
    name: "Siddhanta Panda",
    title: "CTO and Co-Founder",
    image: "/images/siddhanta.jpg",
    bio: [
      "BS/MS ECE @ GTech",
      "Nvidia Chip Design, Honeywell Flight Control Systems",
      "Commercial Pilot and Certified Flight Instructor"
    ]
  },
  {
    name: "Veerkaran Gill",
    title: "CFO and Co-Founder",
    image: "/images/veerkaran.jpg",
    bio: [
      "BS Finance & Management, UW Seattle",
      "Ex Private Equity - Gaudium Capital"
    ]
  }
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function Home() {
  // Calendly section ref for smooth scrolling
  const calendlyRef = useRef<HTMLElement | null>(null);
  const forgebridgeRef  = useRef<HTMLElement | null>(null); 

  // Optional popup (kept from original code in case you need it later)
  const [popupOpen, setPopupOpen] = useState(false);

  /**
   * Smooth-scroll helper that works across all modern browsers.
   */
  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const scrollToForgebridge = () => {
    forgebridgeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="font-sans text-gray-900 bg-gray-50">
      {/* Calendly script (lazy loaded once) */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* ── WELCOME BANNER ───────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center h-[55vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white text-center px-6 overflow-hidden">
        {/* soft radial glow in top-left */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_top_left,rgba(255,255,255,0.10)_0,transparent_70%)]" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight"
        >
          Welcome&nbsp;to&nbsp;Forgemind
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold max-w-4xl"
        >
          The AI&nbsp;Companion Layer&nbsp;That&nbsp;Learns&nbsp;From&nbsp;Your&nbsp;Factory
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed"
        >
          We start as an AI layer on top of your existing&nbsp;ERP, IoT, and PLC data.
          <br className="hidden sm:inline" />
          Soon we become <strong>the brain of the factory.</strong>
        </motion.p>
        {/* CTA button (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg"
            onClick={scrollToCalendly}
          >
            🗓 Book&nbsp;a&nbsp;Free&nbsp;Discovery&nbsp;Call
          </Button>
        </motion.div>
      </section>


      {/* ── CTA HERO ─────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center h-[70vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white text-center px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_bottom_right,rgba(255,255,255,0.06)_0,transparent_70%)]" />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance max-w-4xl"
        >
          <span className="text-amber-400">Bring&nbsp;us&nbsp;your&nbsp;toughest</span><br />
          factory-floor problem
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-balance max-w-3xl"
        >
          We’ll uncover a&nbsp;
          <span className="underline decoration-amber-400 decoration-4 underline-offset-4">
            quick&nbsp;win — free
          </span>.
        </motion.h2>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-2xl max-w-2xl leading-relaxed"
        >
          A battle-tested crew of engineers will run a no-cost discovery sprint to
          surface bottlenecks and low-risk improvements.
        </motion.p>

        {/* CTA button (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg"
            onClick={scrollToForgebridge}
          >
            Learn about Forgebridge!
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
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Phase 1: Smarter Layer", icon: BrainCircuit, bullets: phase1 },
              { title: "Phase 2: AI-Native ERP", icon: Factory, bullets: phase2 },
              { title: "Phase 3: Dark Manufacturing", icon: MoonStar, bullets: phase3 },
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

      {/* ── FORGEBRIDGE ────────────────────────── */}
      <section id="forgebridge" ref={forgebridgeRef} className="bg-slate-900 text-white py-24 px-6">
        <h2 className="text-center text-5xl sm:text-6xl font-extrabold mb-10">
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            ForgeBridge
          </span>{" "}
          — Your Machine’s AI Co-Pilot
        </h2>

        <p className="mx-auto max-w-4xl text-lg text-center mb-16 leading-relaxed">
          ForgeBridge is our signature tool that <strong>plugs into any PLC
          or IoT stack already on your factory floor</strong>. Our agentic brain ingests live telemetry,
          historical logs, and OEM manuals to run <em>intelligent diagnostic loops</em>,
          solve issues autonomously, and chat with operators in plain English—no rip-and-replace,
          no custom middleware, no six-month onboarding.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            [
              "Plug-and-Play Protocol Tap",
              "OPC-UA, Modbus, CAN, MTConnect, REST—if your asset speaks it, ForgeBridge understands it."
            ],
            [
              "AI Diagnostic Loops",
              "Learns from manuals + past failures, isolates root-cause in real time, and self-executes fixes when safe."
            ],
            [
              "Operator Chat & Alerts",
              "Instant WhatsApp-style guidance, task confirmations, and KPI push-notes at the line or in the break room."
            ],
            [
              "Minutes, Not Months",
              "New hires become effective operators on day one—training shrinks from weeks to minutes."
            ],
            [
              "Asset-Agnostic Workforce",
              "Any operator can run any machine, regardless of brand or generation—true cross-skilling."
            ],
            [
              "Shop-Floor ERP Feeds",
              "Pushes part counts, downtime, and completed work orders straight into your ERP/ ... ERPs aren’t just for managers now."
            ],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-xl border border-slate-700/60 p-6 backdrop-blur-lg hover:border-amber-400 transition"
            >
              <h3 className="mb-2 text-xl font-semibold text-amber-400">{title}</h3>
              <p className="text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── FORGEBRIDGE IN ACTION ───────────────────────── */}
      <section id="forgebridge-demo" className="mt-24 space-y-14 px-6 text-neutral-200">
        {/* Title — keep site-wide colour scheme */}
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-amber-400">
          Watch ForgeBridge&nbsp;in&nbsp;Action
        </h2>

        {/* Video frame (unchanged) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/fS2PZE7l258?rel=0&modestbranding=1"
              title="ForgeBridge Live Demo – Delhi → Mumbai A320 Engine-Failure Scenario"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Narrative — darker text for readability */}
        <div className="space-y-8 text-neutral-800 sm:text-neutral-700 lg:text-neutral-600">
          <p className="mx-auto max-w-4xl text-lg leading-relaxed">
            In this 13-minute capture, <strong>ForgeBridge taps directly into an Airbus A320-neo’s
            SimConnect bus</strong> during a Delhi → Mumbai sector. Mid-cruise, Engine 1’s&nbsp;N1
            drops below idle. ForgeBridge’s on-edge agent detects the anomaly, executes the QRH
            “ENG 1 RELIGHT” sequence autonomously, and then launches a full diagnostic loop.
          </p>

          <ul className="mx-auto max-w-3xl list-disc list-inside space-y-2">
            <li><strong>Root-cause in &lt; 8 s</strong> – correlates N1, EGT &amp; fuel-flow to confirm relight.</li>
            <li><strong>MCC hand-off</strong> – pushes log + graph + recommended parts to the maintenance control centre.</li>
            <li><strong>Boroscope assist</strong> – guides the on-call engineer through an N1 turbine inspection.</li>
          </ul>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed">
            The same loop can wrap itself around <em>any</em> industrial asset—CNC, SMT line, extrusion press—
            because ForgeBridge speaks OPC-UA, Modbus, CAN, MTConnect and legacy serial. By turning each PLC
            into an <strong>agentic co-pilot</strong>, we slash operator onboarding, let machines negotiate
            tasks with one another, and march toward truly lights-out manufacturing.
          </p>
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

      {/* WHO ARE WE Section */}
      <section className="py-24 container mx-auto px-6" id="team">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Who Are We?</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover shadow-md" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.title}</p>
              <ul className="text-left list-disc list-inside space-y-1 text-sm text-gray-700">
                {member.bio.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
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
          </a>{' '}
          · {' '}
        <a href="/privacy-policy" className="hover:text-white underline">
            Privacy Policy
        </a>
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Forgemind Consulting. All rights reserved.</p>
      </footer>
    </main>
  );
}
