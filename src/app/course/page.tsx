"use client";

import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";
import { PROGRAM, CLASS_ANATOMY, LOCATIONS } from "@/lib/rizenbi";

export default function CoursePage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Course</h1>
        <p className="mt-3 text-lg text-gray-700">{PROGRAM.description}</p>
        <p className="mt-2 text-sm text-gray-600">{LOCATIONS.tagline}</p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <Card><CardContent className="p-5">
            <div className="text-sm text-gray-500">Total Duration</div>
            <div className="text-2xl font-bold">{PROGRAM.durationMonths} months</div>
          </CardContent></Card>
          <Card><CardContent className="p-5">
            <div className="text-sm text-gray-500">Cadence</div>
            <div className="text-lg font-semibold">
              {PROGRAM.cadence.classesPerWeek}×/week · {PROGRAM.cadence.minutesPerClass} min · {PROGRAM.cadence.homework}
            </div>
            {PROGRAM.cadence.oneToOne && (
              <div className="text-xs text-gray-500 mt-1">1-1 classes available</div>
            )}
          </CardContent></Card>
          <Card><CardContent className="p-5">
            <div className="text-sm text-gray-500">Finish Line</div>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {PROGRAM.outcomes.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </CardContent></Card>
        </div>

        <h2 className="mt-10 text-2xl font-bold">Class Anatomy</h2>
        <ul className="mt-3 grid sm:grid-cols-2 gap-3">
          {CLASS_ANATOMY.map((a) => (
            <Card key={a}><CardContent className="p-5 text-sm text-gray-700">{a}</CardContent></Card>
          ))}
        </ul>

        <CtaBar className="mt-10" />

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {PROGRAM.structure.map((g) => (
            <Card key={g.phase}>
              <CardContent className="p-5">
                <div className="text-xs text-gray-500">Phase</div>
                <div className="text-xl font-semibold">{g.phase}</div>
                <div className="mt-1 text-sm text-gray-600">{g.months} months</div>
                <div className="mt-1 text-sm text-gray-600">
                  Levels: {Array.isArray(g.levels) ? g.levels.join(", ") : g.levels}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-500 space-y-1">
          {PROGRAM.notes.map((n) => <div key={n}>• {n}</div>)}
        </div>
      </section>
    </main>
  );
}
