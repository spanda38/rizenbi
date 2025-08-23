"use client";

import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";
import { CLASS_ANATOMY, PROGRAM, LOCATIONS } from "@/lib/rizenbi";
import { ShieldCheck, Zap, Users } from "lucide-react";

export default function MethodPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Method</h1>
        <p className="mt-3 text-lg text-gray-700">
          60-minute sessions, twice a week, no homework — an intense workout for the brain with instant results.
        </p>
        <p className="mt-1 text-sm text-gray-600">{LOCATIONS.tagline}</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {CLASS_ANATOMY.map((line) => (
            <Card key={line}><CardContent className="p-5 text-sm text-gray-700">{line}</CardContent></Card>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <Card><CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold"><Zap size={18}/> Instant Results</div>
            <p className="mt-2 text-sm text-gray-700">Most children show noticeable improvement within the first few weeks.</p>
          </CardContent></Card>
          <Card><CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold"><ShieldCheck size={18}/> Money-Back Guarantee</div>
            <p className="mt-2 text-sm text-gray-700">Full refund if you’re not satisfied after the first month.</p>
          </CardContent></Card>
          <Card><CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold"><Users size={18}/> Trust & Reliability</div>
            <p className="mt-2 text-sm text-gray-700">Experienced coaches, consistent outcomes, and parent-friendly scheduling.</p>
          </CardContent></Card>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          We’re actively improving how we teach <strong>abacus visualization</strong> — expect fresh drills and tools across the {PROGRAM.name}.
        </div>

        <CtaBar className="mt-10" />
      </section>
    </main>
  );
}
