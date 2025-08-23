"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";
import { ShieldCheck, Zap, Brain, Clock } from "lucide-react";

export default function ResultsPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Results</h1>
          <p className="mt-3 text-lg text-gray-700">
            Parents report immediate improvements in math fluency, school performance, and memory — often within weeks.
          </p>
          <CtaBar className="mt-8" />
        </div>

        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/results/pexels-olly-3755707.jpg"
            alt="Focused student showing exam readiness"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Outcomes */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="font-semibold flex items-center gap-2">
                <Zap size={18}/> Instant Results
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Early wins build momentum and confidence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="font-semibold flex items-center gap-2">
                <Brain size={18}/> Focus & Memory
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Better listening, recall, and concentration in class.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="font-semibold flex items-center gap-2">
                <Clock size={18}/> Exam Speed
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Timed drills translate into faster, accurate tests.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="font-semibold flex items-center gap-2">
                <ShieldCheck size={18}/> Money-Back Guarantee
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Full refund after the first month if you’re not satisfied.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Proof in Practice</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/results/gautam-arora-OVDtgUhUPBY-unsplash.jpg",
              "/images/results/pexels-pragyanbezbo-1720188.jpg",
              "/images/results/pexels-olly-3755707.jpg", // reused hero for consistency
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-64 w-full rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
              >
                <Image src={src} alt="Student results and success" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
