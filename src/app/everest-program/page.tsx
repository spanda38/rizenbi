"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";
import { PROGRAM } from "@/lib/rizenbi";

export default function EverestProgramPage() {
  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">{PROGRAM.name}</h1>
          <p className="mt-3 text-lg text-gray-700">
            From first beads to elite mental arithmetic — a color-coded path with clear milestones.
          </p>

          <CtaBar className="mt-8" />
        </div>

        {/* Hero image */}
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/everest-program/la-rel-easter-KuCGlBXjH_o-unsplash.jpg"
            alt="Everest program milestone"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Program Buckets */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-5">
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
          {PROGRAM.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Everest in Action</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              "/images/everest-program/pexels-julia-m-cameron-4143794.jpg",
              "/images/everest-program/pexels-olly-3755707.jpg",
              "/images/everest-program/pexels-pixabay-247819.jpg",
              "/images/everest-program/la-rel-easter-KuCGlBXjH_o-unsplash.jpg", // reuse for consistency
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-64 w-full rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
              >
                <Image src={src} alt="Everest learning stage" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
