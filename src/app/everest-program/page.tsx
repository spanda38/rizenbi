"use client";

import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";
import { PROGRAM } from "@/lib/rizenbi";

export default function EverestProgramPage() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">{PROGRAM.name}</h1>
        <p className="mt-3 text-lg text-gray-700">
          From first beads to elite mental arithmetic — a color-coded path with clear milestones.
        </p>

        <div className="mt-8 grid gap-5">
          {PROGRAM.buckets.map((b) => (
            <div key={b.label} className={`rounded-2xl p-1 bg-gradient-to-r ${b.color}`}>
              <Card className="rounded-2xl border-none shadow">
                <CardContent className="p-6">
                  <div className="text-xs text-gray-500">Stage</div>
                  <div className="text-2xl font-bold">{b.label}</div>
                  <div className="mt-1 text-sm text-gray-600">
                    Levels {b.levels.join(" & ")}
                  </div>
                  <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                    <li>Progressive skill-building with timed sprints</li>
                    <li>Focus on mental addition/subtraction and large multiplications</li>
                    <li>Confidence, speed, and accuracy</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold">Finish Line</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
          {PROGRAM.outcomes.map((o) => <li key={o}>{o}</li>)}
        </ul>

        <CtaBar className="mt-8" />
      </section>
    </main>
  );
}
