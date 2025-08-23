"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import CtaBar from "@/components/CtaBar";
import { CLASS_ANATOMY, PROGRAM, LOCATIONS } from "@/lib/rizenbi";
import { ShieldCheck, Zap, Users } from "lucide-react";

export default function MethodPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Our Method</h1>
          <p className="mt-3 text-lg text-gray-700">
            60-minute sessions, twice a week, no homework — an intense workout for the brain with instant results.
          </p>
          <p className="mt-1 text-sm text-gray-600">{LOCATIONS.tagline}</p>
        </div>

        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/method/pexels-cottonbro-3662635.jpg"
            alt="Child engaged in abacus learning"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Class Anatomy */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Class Anatomy</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {CLASS_ANATOMY.map((line) => (
            <Card key={line}>
              <CardContent className="p-5 text-sm text-gray-700">{line}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-2xl shadow-inner">
        <div className="grid sm:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 font-semibold">
                <Zap size={18}/> Instant Results
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Most children show noticeable improvement within the first few weeks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck size={18}/> Money-Back Guarantee
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Full refund if you’re not satisfied after the first month.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 font-semibold">
                <Users size={18}/> Trust & Reliability
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Experienced coaches, consistent outcomes, and parent-friendly scheduling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Method in Action</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              "/images/method/pexels-august-de-richelieu-4260325.jpg",
              "/images/method/pexels-julia-m-cameron-4143794.jpg",
              "/images/method/pexels-panditwiguna-3401403.jpg",
              "/images/method/pexels-cottonbro-3662635.jpg", // reuse hero for consistency
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-64 w-full rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
              >
                <Image src={src} alt="Students learning" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing note + CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-600">
          We’re actively improving how we teach <strong>abacus visualization</strong> — expect fresh drills and tools across the {PROGRAM.name}.
        </p>
        <CtaBar className="mt-10" />
      </section>
    </main>
  );
}
