"use client";

import React from "react";
import Image from "next/image";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { businessConfig } from "@/config/business";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#F7F4EC] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E5DFD3]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#385A42]"></span>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#385A42] uppercase">
                {businessConfig.tagline}
              </span>
            </div>

            {/* Headline Besar */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A261D] leading-[1.12] tracking-tight">
              Your Place to <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#1B3B2B] font-medium">
                Relax &amp; Reconnect
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-[#556358] leading-relaxed max-w-lg">
              {businessConfig.subheadline}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#1B3B2B] hover:bg-[#142C20] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2.5 cursor-pointer active:translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href="#services"
                onClick={scrollToServices}
                className="px-7 py-3.5 bg-transparent border border-[#385A42]/50 hover:border-[#1B3B2B] text-[#1B3B2B] text-xs font-bold tracking-wider uppercase rounded-lg transition-all duration-200 flex items-center gap-2 group"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#385A42] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Points Under Hero */}
            <div className="pt-6 border-t border-[#E5DFD3]/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {businessConfig.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#385A42] shrink-0" />
                    <span className="text-xs font-semibold text-[#1A261D]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-[#EAE3D4] border border-[#E5DFD3]">
              <Image
                src="/images/hero-exact.jpg"
                alt="Bale Spa Family Reflexology - Suasana Nyaman dan Menenangkan"
                width={800}
                height={560}
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                priority
              />

              {/* Gentle ambient gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12241A]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FAF7F2]/95 backdrop-blur-xs border border-[#E5DFD3] rounded-lg p-3.5 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#1B3B2B] text-[#C5A880] flex items-center justify-center font-serif font-bold text-base shrink-0">
                  🌿
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#385A42] block">
                    Bale Spa Standard
                  </span>
                  <span className="text-xs font-semibold text-[#1A261D] block">
                    Minyak Alami &amp; Perlengkapan Steril
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
