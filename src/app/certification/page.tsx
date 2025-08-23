"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";

export default function CertificationPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Assessments, Certificates & Medals
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Every level concludes with a formal assessment. Students receive a
            certificate and a medal to celebrate the milestone.
          </p>
        </div>

        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/certifications/la-rel-easter-KuCGlBXjH_o-unsplash.jpg"
            alt="Gold medal symbolizing achievement"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Assessment + Recognition */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-xl font-semibold">Assessment</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                <li>Speed (timed rows and operations)</li>
                <li>Accuracy (error-free completion)</li>
                <li>Retention (multi-step stability, carry/borrow)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-xl font-semibold">Recognition</div>
              <p className="mt-2 text-sm text-gray-700">
                A custom certificate and level medal reinforce progress and pride.
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Money-Back Guarantee remains applicable after the first month if
                expectations aren’t met.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Celebrating Every Milestone
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "/images/certifications/la-rel-easter-KuCGlBXjH_o-unsplash.jpg",
              "/images/certifications/pexels-pixabay-247819.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-64 w-full rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
              >
                <Image
                  src={src}
                  alt="Certification and medal"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <CtaBar />
      </section>
    </main>
  );
}
