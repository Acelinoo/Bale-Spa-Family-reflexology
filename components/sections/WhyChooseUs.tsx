"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SpaLotusIcon,
  HeartCareIcon,
} from "@/components/ui/SpaIcons";

// Bintang Line Art Minimalis
function StarExperienceIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Group Users Line Art Minimalis
function GroupUsersIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2.5 19C2.5 15.7 5.4 13 9 13C12.6 13 15.5 15.7 15.5 19" />
      <path d="M16 4C17.5 4.7 18.5 6.2 18.5 8C18.5 9.8 17.5 11.3 16 12" />
      <path d="M19 19C20.4 18.5 21.5 17.2 21.5 15.5C21.5 14.2 20.7 13.1 19.5 12.5" />
    </svg>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          }
        );
      }

      if (statsGridRef.current) {
        gsap.fromTo(
          statsGridRef.current.children,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: statsGridRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: GroupUsersIcon,
      value: "5,000+",
      label: "Pengunjung Puas",
    },
    {
      icon: StarExperienceIcon,
      value: "15+",
      label: "Tahun Pengalaman",
    },
    {
      icon: SpaLotusIcon,
      value: "25+",
      label: "Terapis Tersertifikasi",
    },
    {
      icon: HeartCareIcon,
      value: "98%",
      label: "Kepuasan Pelanggan",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-16 sm:py-20 lg:py-24 bg-[#1D4533] text-[#F3E9DC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Subtitle (Desktop 5 cols) */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#C8A27A] uppercase">
                MENGAPA MEMILIH BALE SPA
              </span>
              <span className="h-px w-8 bg-[#C8A27A]/60"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Rasakan Keistimewaan <br />
              <span className="font-serif italic text-[#F3E9DC]">
                Pelayanan Bale Spa
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#C4D9CF] leading-relaxed max-w-md">
              Kami berdedikasi menghadirkan pengalaman relaksasi terbaik untuk memulihkan kebugaran tubuh, ketenangan pikiran, dan keharmonisan bersama keluarga tercinta.
            </p>
          </div>

          {/* Right Column: 4 Stats Grid (Desktop 7 cols) */}
          {/* Sesuai instruksi: Mobile 2 kolom (grid-cols-2), Desktop 4 kolom (lg:grid-cols-4) */}
          <div
            ref={statsGridRef}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 text-center"
          >
            {stats.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex flex-col items-center justify-center sm:border-l sm:border-[#2C5C46] first:border-l-0 bg-[#163728]/50 sm:bg-transparent rounded-lg sm:rounded-none"
                >
                  {/* Line Art Icon */}
                  <div className="text-[#C8A27A] mb-3 flex items-center justify-center">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Value */}
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block leading-tight">
                    {item.value}
                  </span>

                  {/* Label */}
                  <span className="text-[11px] sm:text-xs font-medium text-[#C4D9CF] block mt-1.5 leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
