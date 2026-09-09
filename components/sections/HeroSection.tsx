"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { OrganicLeafDropIcon, TherapistUserIcon, SpaLotusIcon } from "@/components/ui/SpaIcons";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const trustRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (textColRef.current) {
        tl.fromTo(
          textColRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            clearProps: "all",
          }
        );
      }

      if (imageColRef.current) {
        tl.fromTo(
          imageColRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );

        // GSAP image scale-reveal for luxury photo experience
        const heroImg = imageColRef.current.querySelector(".hero-main-img");
        if (heroImg) {
          tl.fromTo(
            heroImg,
            { scale: 1.12, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.1, ease: "power2.out" },
            "-=0.7"
          );
        }
      }

      if (trustRowRef.current) {
        tl.fromTo(
          trustRowRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            clearProps: "all",
          },
          "-=0.3"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative bg-gradient-to-b from-white via-white to-[#FBF8F4] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#EAE4DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Desktop 6 Cols) */}
          <div ref={textColRef} className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1D4533] uppercase">
              RELAKSASI · PEMULIHAN · KESEGARAN
            </span>

            {/* Headline Serif Besar */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-[#1F150C] leading-[1.12] tracking-tight">
              Kebugaran &amp; Relaksasi <br />
              <span className="font-serif italic font-medium text-[#1D4533]">
                Istimewa untuk Anda
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#4E3F33] leading-relaxed max-w-lg">
              Masuki suasana peristirahatan yang damai di mana sentuhan terapis profesional dan terapi alami membantu Anda memulihkan kebugaran tubuh dan ketenangan pikiran sekeluarga.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-[0.14em] uppercase rounded-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5"
              >
                RESERVASI SEKARANG
              </button>

              <a
                href="#services"
                onClick={scrollToServices}
                className="px-7 py-3.5 bg-transparent border border-[#1D4533]/50 hover:border-[#1D4533] text-[#1D4533] text-xs font-bold tracking-[0.14em] uppercase rounded-sm transition-all duration-200 hover:bg-[#1D4533]/5"
              >
                LIHAT LAYANAN KAMI
              </a>
            </div>

            {/* 3 Trust Badges Horizontal */}
            <div
              ref={trustRowRef}
              className="pt-6 border-t border-[#EAE4DC] grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAE4DC] text-[#1D4533] flex items-center justify-center shrink-0 shadow-2xs">
                  <OrganicLeafDropIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F150C] leading-tight">
                    Terapi Alami
                  </h4>
                  <p className="text-[11px] text-[#635345] leading-tight mt-0.5">
                    100% Aman &amp; Alami
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAE4DC] text-[#1D4533] flex items-center justify-center shrink-0 shadow-2xs">
                  <TherapistUserIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F150C] leading-tight">
                    Terapis Profesional
                  </h4>
                  <p className="text-[11px] text-[#635345] leading-tight mt-0.5">
                    Tersertifikasi &amp; Terlatih
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAE4DC] text-[#1D4533] flex items-center justify-center shrink-0 shadow-2xs">
                  <SpaLotusIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F150C] leading-tight">
                    Suasana Menenangkan
                  </h4>
                  <p className="text-[11px] text-[#635345] leading-tight mt-0.5">
                    Bersih, Nyaman &amp; Higienis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div ref={imageColRef} className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-white border border-[#EAE4DC]">
              <Image
                src="/images/hero-exact.jpg"
                alt="Wellness & Relaxation Tailored For You - Bale Spa Family Reflexology"
                width={800}
                height={550}
                className="hero-main-img w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                priority
              />

              {/* Gentle luxury emerald vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
