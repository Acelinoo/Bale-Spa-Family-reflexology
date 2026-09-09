"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      title: "Professional Therapist",
      desc: "Terapis tersertifikasi yang terlatih dengan pemahaman anatomi titik refleksi dan etika pelayanan prima.",
      icon: ShieldCheck,
    },
    {
      title: "Comfortable Environment",
      desc: "Ruangan bersih, sejuk, wangi aromaterapi herbal lembut, serta musik instrumental yang menenangkan batin.",
      icon: Sparkles,
    },
    {
      title: "Family Friendly",
      desc: "Area relaksasi ramah keluarga dengan privasi yang terjaga, aman, dan nyaman untuk segala usia.",
      icon: Heart,
    },
  ];

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#why-us");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FAF7F2] border-y border-[#E5DFD3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image Treatment Room */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-[#EAE3D4] border border-[#E5DFD3]">
              <Image
                src="/images/about-room.jpg"
                alt="Suasana Ruang Perawatan Bale Spa Family Reflexology"
                width={720}
                height={520}
                className="w-full h-auto object-cover aspect-[4/3]"
              />

              {/* Natural light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12241A]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Experience Pill Overlay */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-[#1B3B2B] text-[#FAF7F2] rounded-lg p-4 shadow-xl border border-[#234332] max-w-xs">
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-[#C5A880] leading-none">
                100%
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D1DDD5] block mt-1">
                Dedikasi Higienitas &amp; Kenyamanan Keluarga
              </span>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#385A42]"></span>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#385A42] uppercase">
                ABOUT BALE SPA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A261D] leading-[1.15] tracking-tight">
              Relaxation That Feels <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#1B3B2B]">
                Like Home
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#556358] leading-relaxed">
              Di Bale Spa Family Reflexology, kami menghadirkan pengalaman reflexology dan relaksasi yang nyaman untuk Anda dan keluarga. Dengan suasana yang tenang, therapist profesional, serta pelayanan yang ramah, kami membantu Anda mendapatkan waktu istirahat yang berkualitas.
            </p>

            {/* 3 Features */}
            <div className="space-y-4 pt-2">
              {features.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#FFFFFF]/70 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#EAE3D4] text-[#1B3B2B] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-[#1B3B2B]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A261D]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#556358] leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#why-us"
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#385A42]/60 hover:border-[#1B3B2B] text-[#1B3B2B] text-xs font-bold tracking-wider uppercase rounded-lg transition-colors group"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
