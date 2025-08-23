"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PROGRAM } from "@/lib/rizenbi";

const LEVELS = [
  { title: "Foundation", months: 4, summary: "Soroban basics, posture, bead fluency, place-value." },
  { title: "Level 1", months: 3, summary: "Single-digit ops, rhythm, vocalization, speed writing warmups." },
  { title: "Level 2", months: 3, summary: "Double-digit ops, carry/borrow mastery, tempo control." },
  { title: "Level 3", months: 3, summary: "Triple-digit ops, early visualization, timed sprints." },
  { title: "Level 4", months: 3, summary: "4-digit ops, stability under time pressure." },
  { title: "Level 5", months: 3, summary: "10-row consistency, transitions to full mental." },
  { title: "Level 6", months: 2, summary: "Large mental multiplications, exam-style sims." },
];

export default function LevelsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Levels & Milestones</h1>
          <p className="mt-3 text-lg text-gray-700">
            {PROGRAM.durationMonths} months · 6 levels + Foundation · Assessment + Certificate + Medal at each level’s end.
          </p>
        </div>
        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/levels/santi-vedri-O5EMzfdxedg-unsplash.jpg"
            alt="Building blocks representing levels"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Level cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-4">
          {LEVELS.map((lvl) => (
            <Card key={lvl.title}>
              <CardContent className="p-6">
                <div className="text-xs text-gray-500">Phase</div>
                <div className="text-xl font-semibold">{lvl.title}</div>
                <div className="text-sm text-gray-600">{lvl.months} months</div>
                <p className="mt-2 text-sm text-gray-700">{lvl.summary}</p>
                <div className="mt-3 text-xs text-gray-500">
                  • Level assessment · Certificate · Medal
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Students at Every Stage</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/levels/pexels-august-de-richelieu-4260325.jpg",
              "/images/levels/pexels-olly-3755707.jpg",
              "/images/levels/gautam-arora-OVDtgUhUPBY-unsplash.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-64 w-full rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
              >
                <Image src={src} alt="Student learning milestones" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
