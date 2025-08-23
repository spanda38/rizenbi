"use client";

import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";

export default function CertificationPage() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Assessments, Certificates & Medals</h1>
        <p className="mt-3 text-lg text-gray-700">
          Every level concludes with a formal assessment. Students receive a certificate and a medal to celebrate the milestone.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <Card><CardContent className="p-6">
            <div className="text-xl font-semibold">Assessment</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>Speed (timed rows and operations)</li>
              <li>Accuracy (error-free completion)</li>
              <li>Retention (multi-step stability, carry/borrow)</li>
            </ul>
          </CardContent></Card>

          <Card><CardContent className="p-6">
            <div className="text-xl font-semibold">Recognition</div>
            <p className="mt-2 text-sm text-gray-700">
              A custom certificate and level medal reinforce progress and pride.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Money-Back Guarantee remains applicable after the first month if expectations aren’t met.
            </p>
          </CardContent></Card>
        </div>

        <CtaBar className="mt-10" />
      </section>
    </main>
  );
}
