/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Calculator,
  Users,
  Clock,
  Star,
  Sparkles,
  ShieldCheck,
  Zap,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Script from "next/script";

/* -------------------------------------------------------------------------- */
/*                          RIZENBI — SITE CONSTANTS                           */
/* -------------------------------------------------------------------------- */

const BRAND = "Rizenbi Abacus & Vedic Math";
const TAGLINE =
  "Build lightning-fast mental math, laser focus, and confidence — for kids 5–14 (Abacus) and grades 6–12 (Vedic Math).";

const PHONE_LINK = "tel:+19843636626";
const EMAIL = "rizenbiusa@gmail.com";

/* Simple in-page form handler (no backend). */
function useLeadForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const msg = [
        `New Lead for ${BRAND}`,
        `Parent: ${payload.parentName}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Child Age: ${payload.childAge}`,
        `Program: ${payload.program}`,
        `Mode: ${payload.mode}`,
        `Message: ${payload.message}`,
      ].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=New Rizenbi Lead&body=${encodeURIComponent(
        msg
      )}`;
      setStatus("ok");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  return { status, onSubmit };
}

export default function RizenbiLanding() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const { status, onSubmit } = useLeadForm();

  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="font-sans text-gray-900 bg-gray-50">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]">
          <div className="absolute -top-32 -right-16 w-72 h-72 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-indigo-100 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            {BRAND}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-gray-700"
          >
            {TAGLINE}
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={scrollToCalendly} className="rounded-2xl">
              Book a Free Demo
            </Button>
            <a href="#contact">
              <Button className="rounded-2xl bg-gray-900 hover:bg-black">Enroll Now</Button>
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            In-person: Raleigh–Durham, North Carolina · Online
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────── */}
      <section id="programs" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Programs</h2>
          <p className="mt-2 text-gray-600">Pick the path that fits your child’s age and goals.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Brain />
                  <h3 className="text-xl font-semibold">Abacus (Ages 5–14)</h3>
                </div>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Levels 1–8 with progressive skill-building</li>
                  <li>Visualization & concentration through the soroban</li>
                  <li>Addition, subtraction, multiplication, division — mentally</li>
                </ul>
                <div className="mt-4 text-xs text-gray-500">Weekly classes · Assessments · Certificates</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Calculator />
                  <h3 className="text-xl font-semibold">Vedic Math (Grades 6–12)</h3>
                </div>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>4-digit, 20-row addition & subtraction — all mental</li>
                  <li>Rapid multiplication, division, squaring & more</li>
                  <li>Confidence for school & competitions</li>
                </ul>
                <div className="mt-4 text-xs text-gray-500">Short intensive modules · Speed benchmarks</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Users />
                  <h3 className="text-xl font-semibold">Delivery</h3>
                </div>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>In-person: Serving the Research Triangle, Raleigh, Durham </li>
                  <li>Online</li>
                  <li>Flexible class preferences</li>
                </ul>
                <div className="mt-4 text-xs text-gray-500">Small groups · Individual attention</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Why Parents Choose Rizenbi</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Sparkles />, title: "Lightning-fast Math", text: "Calculate in seconds, often faster than a calculator." },
              { icon: <Zap />, title: "Instant Results", text: "Noticeable improvement within the first few weeks." },
              { icon: <ShieldCheck />, title: "Money-Back Guarantee", text: "Full refund if you’re not satisfied after the first month." },
              { icon: <Brain />, title: "Focus & Memory", text: "Boost concentration, listening skills, and retention." },
              { icon: <Users />, title: "Trust & Reliability", text: "Experienced and Extremely qualified coaches, consistent outcomes" },
              { icon: <Clock />, title: "Exam Speed", text: "Timed drills improve speed without sacrificing accuracy." },
              { icon: <Star />, title: "Creativity", text: "Abacus visualization enhances both hemispheres of the brain." },
            ].map((b, i) => (
              <Card key={i} className="hover:shadow-md transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    {b.icon}
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{b.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE (NO FIXED TIMES) ────────────────── */}
      <section id="schedule" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Schedule</h2>
          <p className="mt-2 text-gray-600">We offer flexible class preferences to fit your family’s schedule.</p>
          <Card className="mt-8">
            <CardContent className="p-6 text-sm text-gray-700">
              Instead of rigid timings, we coordinate convenient sessions with parents.
              Available in-person in Raleigh–Durham and online across the USA.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── BOOK DEMO (CALENDLY) ─────────────────────── */}
      <section id="book-demo" ref={calendlyRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Book a Free Demo Class</h2>
          <p className="mt-2 text-gray-600">Choose a convenient time for your child’s first session.</p>
          <div className="mt-8 mx-auto max-w-3xl">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/rizenbiusa/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────── */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold">Book Your Free Demo</h2>
              <p className="mt-2 text-gray-600">Share a few details and we’ll reach out within 24 hours.</p>
              <Card className="mt-6">
                <CardContent className="p-6">
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm">Parent Name</label>
                      <Input name="parentName" placeholder="Your name" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm">Phone</label>
                        <Input name="phone" placeholder="+1 (___) ___-____" required />
                      </div>
                      <div>
                        <label className="text-sm">Email</label>
                        <Input name="email" type="email" placeholder="name@email.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm">Child Age</label>
                        <Input name="childAge" type="number" min={4} max={16} placeholder="9" />
                      </div>
                      <div>
                        <label className="text-sm">Program</label>
                        <select name="program" className="border rounded px-3 py-2 w-full">
                          <option value="Abacus">Abacus</option>
                          <option value="Vedic Math">Vedic Math</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm">Mode</label>
                        <select name="mode" className="border rounded px-3 py-2 w-full">
                          <option value="In-person">In-person</option>
                          <option value="Online">Online</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm">Message</label>
                      <Textarea name="message" placeholder="Share goals or preferred timings…" rows={4} />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button type="submit" className="rounded-2xl">Submit</Button>
                      <a href={PHONE_LINK}>
                        <Button type="button" className="rounded-2xl bg-gray-900 hover:bg-black flex items-center gap-2">
                          <Phone size={16}/> Call
                        </Button>
                      </a>
                      <a href={`mailto:${EMAIL}`}>
                        <Button type="button" className="rounded-2xl bg-blue-700 hover:bg-blue-800">
                          Email Us
                        </Button>
                      </a>
                    </div>
                    {status === "ok" && (
                      <p className="text-green-700 text-sm">Thanks! An email draft has been opened. We’ll confirm shortly.</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-600 text-sm">Something went wrong. Please call or email us.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Prefer to pick a slot?</h3>
              <p className="text-gray-600 mt-1">Use the Book Demo section above to choose a time instantly.</p>
              <div className="mt-6 text-sm text-gray-600">
                Or email us at{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div>
              <div className="font-extrabold text-white text-xl">{BRAND}</div>
              <p className="mt-2 text-sm text-gray-400">
                After-school math that kids love. Strong foundations, real speed, measurable progress.
              </p>
              <p className="mt-3 text-sm">
                <a className="underline" href={PHONE_LINK}>Call</a> ·{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>Email</a>
              </p>
            </div>
            <div className="text-sm">
              <div className="text-gray-400 font-semibold">Quick Links</div>
              <ul className="mt-2 space-y-1">
                <li><a className="hover:underline" href="#programs">Programs</a></li>
                <li><a className="hover:underline" href="#benefits">Benefits</a></li>
                <li><a className="hover:underline" href="#schedule">Schedule</a></li>
                <li><a className="hover:underline" href="#book-demo">Book Demo</a></li>
                <li><a className="hover:underline" href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} Rizenbi Learning. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
