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

        // GSAP smooth zoom-out reveal on promo banner image
        const promoImg = bannerRef.current.querySelector(".cta-promo-img");
        if (promoImg) {
          gsap.fromTo(
            promoImg,
            { scale: 1.15, opacity: 0 },
            {
              scrollTrigger: {
                trigger: bannerRef.current,
                start: "top 85%",
                once: true,
              },
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }
          );
        }
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
    <section className="py-12 sm:py-16 bg-white border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Banner Horizontal Container */}
        <div
          ref={bannerRef}
          className="bg-[#FAF7F2] rounded-2xl border border-[#EAE4DC] p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden relative"
        >
          {/* Left Column: Spa Stone & Candle Image (Desktop 4 cols) */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-[#E8DDD0] aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src="/images/promo-banner.jpg"
                alt="Take time for yourself - Bale Spa Relaxation Stones"
                fill
                className="cta-promo-img object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Middle Column: Text & Booking Button (Desktop 5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D4533] uppercase">
                SIAP UNTUK RELAKSASI?
              </span>
              <span className="h-px w-8 bg-[#1D4533]/60"></span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F150C] tracking-tight">
              Jadwalkan Waktu Relaksasi Anda
            </h3>

            <p className="text-xs sm:text-sm text-[#5A4A3E] leading-relaxed max-w-md mx-auto lg:mx-0">
              Luangkan waktu berharga bagi kesehatan Anda dan keharmonisan keluarga. Tubuh kembali bugar, pikiran tenang dan segar.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-[0.14em] uppercase rounded-sm shadow-xs hover:shadow-md transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer active:translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#C8A27A]" />
                <span>RESERVASI SEKARANG</span>
              </button>
            </div>
          </div>

          {/* Right Column: Self Care Circular Stamp Badge (Desktop 3 cols) */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-[#EAE4DC] bg-white flex items-center justify-center p-3 shadow-xs">
              {/* Rotating SVG Curved Text */}
              <div ref={stampRef} className="absolute inset-0 w-full h-full">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                    fill="none"
                  />
                  <text className="text-[10.5px] tracking-[0.28em] font-bold fill-[#1D4533] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      PERAWATAN DIRI · KESEHATAN KELUARGA ·
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Lotus Icon */}
              <div className="w-14 h-14 rounded-full bg-[#EFE5D7] text-[#1D4533] flex items-center justify-center shadow-xs border border-[#DFD1C1]">
                <SpaLotusIcon className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
