"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVIEWS } from "@/data/reviews";
import GoogleReviewCard from "./GoogleReviewCard";
import { useBranch } from "@/context/BranchContext";
import { openGoogleReview } from "@/config/branches";

export default function GoogleReviews() {
  const { currentBranch } = useBranch();
  const [slideIndex, setSlideIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Susun ulasan agar cabang aktif muncul paling depan (pure derived state)
  const reviews = React.useMemo(() => {
    return [...REVIEWS].sort((a, b) => {
      if (a.branchId === currentBranch.id && b.branchId !== currentBranch.id) return -1;
      if (a.branchId !== currentBranch.id && b.branchId === currentBranch.id) return 1;
      return 0;
    });
  }, [currentBranch.id]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split reviews into pairs of 2 cards per slide (1 baris 2 card)
  const itemsPerSlide = 2;
  const totalSlides = Math.max(1, Math.ceil(reviews.length / itemsPerSlide));
  const currentIndex = slideIndex % totalSlides;

  const handlePrev = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 bg-[#FBF8F4] border-t border-[#EAE4DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D4533] uppercase">
              [ INTEGRASI ULASAN GOOGLE MAPS ]
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] tracking-tight">
            Kepuasan Pelanggan Nyata
          </h2>

          <p className="text-xs sm:text-sm text-[#5A4A3E] leading-relaxed max-w-xl mx-auto">
            Ulasan asli dari para pengunjung dan penikmat relaksasi Bale Spa Family Reflexology di Google Maps Cabang {currentBranch.shortName}, Bandung.
          </p>
        </div>

        {/* Google Reviews Summary Card (Persis Seperti di Gambar 1) */}
        <div className="max-w-4xl mx-auto mb-10 bg-white rounded-2xl border border-[#EAE4DC] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: 4.9 Rating & Star Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-4xl sm:text-5xl font-bold font-serif text-[#1F150C] tracking-tight">
              4.9
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#F5A623] fill-[#F5A623]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-[#6B5A4E] font-medium">
                Berdasarkan 80+ ulasan Google &middot; <span className="font-bold text-[#1D4533]">Cabang {currentBranch.shortName}</span>
              </p>
            </div>
          </div>

          {/* Right: 2 Action Buttons (Lihat di Google Maps & Tulis Ulasan di Google) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* Button 1: Lihat di Google Maps (Fix Gambar 1: Menggunakan panah unicode asli ↗) */}
            <a
              href={currentBranch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#1F150C] hover:text-[#1D4533] border border-[#D5C7B7] text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer active:scale-98 text-center"
              title={`Buka Google Maps Cabang ${currentBranch.shortName}`}
            >
              <span>Lihat di Google Maps</span>
              <span className="text-base leading-none" aria-hidden="true">↗</span>
            </a>

            {/* Button 2: Tulis Ulasan di Google (Membuka sheet ulasan Google di HP & modal popup ulasan di Desktop) */}
            <a
              href={currentBranch.reviewUrl}
              onClick={(e) => {
                e.preventDefault();
                openGoogleReview(currentBranch);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-98 border border-[#C5A880]/30 text-center"
              title={`Tulis Ulasan di Google untuk Cabang ${currentBranch.shortName}`}
            >
              <span className="text-base leading-none font-normal">+</span>
              <span>Tulis Ulasan di Google</span>
            </a>
          </div>
        </div>

        {/* Slider Controls Header */}
        <div className="flex items-center justify-between gap-4 mb-6 max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7A6B5F]">
            Ulasan Terverifikasi Cabang {currentBranch.shortName}
          </span>

          {/* Slider Controls: Arrow Buttons (Prev / Next) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-[#EAE4DC] bg-white hover:bg-[#FAF7F2] text-[#1D4533] hover:border-[#1D4533]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Lihat ulasan sebelumnya"
              title="Ulasan sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold text-[#5A4A3E] px-2 min-w-[50px] text-center">
              {currentIndex + 1} / {totalSlides}
            </span>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-[#EAE4DC] bg-white hover:bg-[#FAF7F2] text-[#1D4533] hover:border-[#1D4533]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Lihat ulasan berikutnya"
              title="Ulasan berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1 Row 2 Cards Slider Container */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => {
              const slideReviews = reviews.slice(
                slideIdx * itemsPerSlide,
                slideIdx * itemsPerSlide + itemsPerSlide
              );
              return (
                <div
                  key={slideIdx}
                  className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 px-1"
                >
                  {slideReviews.map((rev) => (
                    <div key={rev.id} className="h-full">
                      <GoogleReviewCard review={rev} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
