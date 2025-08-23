"use client";

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
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Levels & Milestones</h1>
        <p className="mt-3 text-lg text-gray-700">
          {PROGRAM.durationMonths} months · 6 levels + Foundation · Assessment + Certificate + Medal at each level’s end.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {LEVELS.map((lvl) => (
            <Card key={lvl.title}><CardContent className="p-6">
              <div className="text-xs text-gray-500">Phase</div>
              <div className="text-xl font-semibold">{lvl.title}</div>
              <div className="text-sm text-gray-600">{lvl.months} months</div>
              <p className="mt-2 text-sm text-gray-700">{lvl.summary}</p>
              <div className="mt-3 text-xs text-gray-500">
                • Level assessment · Certificate · Medal
              </div>
            </CardContent></Card>
          ))}
        </div>
      </section>
    </main>
  );
}
