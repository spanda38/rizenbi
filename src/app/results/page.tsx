"use client";

import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";
import { ShieldCheck, Zap, Brain, Clock } from "lucide-react";

export default function ResultsPage() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Results</h1>
        <p className="mt-3 text-lg text-gray-700">
          Parents report immediate improvements in math fluency, school performance, and memory — often within weeks.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card><CardContent className="p-6">
            <div className="font-semibold flex items-center gap-2"><Zap size={18}/> Instant Results</div>
            <p className="mt-2 text-sm text-gray-700">Early wins build momentum and confidence.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <div className="font-semibold flex items-center gap-2"><Brain size={18}/> Focus & Memory</div>
            <p className="mt-2 text-sm text-gray-700">Better listening, recall, and concentration in class.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <div className="font-semibold flex items-center gap-2"><Clock size={18}/> Exam Speed</div>
            <p className="mt-2 text-sm text-gray-700">Timed drills translate into faster, accurate tests.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <div className="font-semibold flex items-center gap-2"><ShieldCheck size={18}/> Money-Back Guarantee</div>
            <p className="mt-2 text-sm text-gray-700">Full refund after the first month if you’re not satisfied.</p>
          </CardContent></Card>
        </div>

        <CtaBar className="mt-10" />
      </section>
    </main>
  );
}
