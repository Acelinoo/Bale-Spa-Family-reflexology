"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpaLotusIcon } from "@/components/ui/SpaIcons";

interface CTASectionProps {
  onOpenBooking: () => void;
}

export default function CTASection({ onOpenBooking }: CTASectionProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }

      // Elegant slow continuous rotate for the stamp badge
      if (stampRef.current) {
        gsap.to(stampRef.current, {
          rotation: 360,
          duration: 30,
          repeat: -1,
          ease: "none",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-[#FBF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Banner Horizontal Container (Persis Gambar 1) */}
        <div
          ref={bannerRef}
          className="bg-[#F5EFE6] rounded-2xl border border-[#EAE1D3] p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden relative"
        >
          {/* Left Column: Spa Stone & Candle Image (Desktop 4 cols) */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-[#E8E0D2] aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src="/images/promo-banner.jpg"
                alt="Take time for yourself - Bale Spa Relaxation Stones"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142A1D]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Middle Column: Text & Booking Button (Desktop 5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#34523B] uppercase">
                READY TO RELAX?
              </span>
              <span className="h-px w-8 bg-[#34523B]/60"></span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1B3324] tracking-tight">
              Book Your Appointment Today
            </h3>

            <p className="text-xs sm:text-sm text-[#5A685D] leading-relaxed max-w-md mx-auto lg:mx-0">
              Take time for yourself and your family. Your mind and body will thank you.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#2E4A35] hover:bg-[#223827] text-[#FAF7F2] text-xs font-bold tracking-[0.14em] uppercase rounded-sm shadow-xs hover:shadow-md transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer active:translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#D8C6A5]" />
                <span>BOOK APPOINTMENT NOW</span>
              </button>
            </div>
          </div>

          {/* Right Column: Self Care Circular Stamp Badge (Persis Gambar 1) (Desktop 3 cols) */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-[#D5CABB] bg-[#FAF7F2] flex items-center justify-center p-3 shadow-xs">
              {/* Rotating SVG Curved Text */}
              <div ref={stampRef} className="absolute inset-0 w-full h-full">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                    fill="none"
                  />
                  <text className="text-[10.5px] tracking-[0.28em] font-bold fill-[#34523B] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      SELF CARE · IS HEALTH CARE ·
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Lotus Icon */}
              <div className="w-14 h-14 rounded-full bg-[#EFE9DC] text-[#2E4A35] flex items-center justify-center shadow-xs">
                <SpaLotusIcon className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
