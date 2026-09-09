"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVIEWS, ReviewItem } from "@/data/reviews";
import GoogleReviewCard from "./GoogleReviewCard";
import ReviewCTA from "./ReviewCTA";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch {
        // Fallback to static reviews
      }
    }
    loadReviews();
  }, []);

  // Split reviews into pairs of 2 cards per slide (1 baris 2 card)
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 bg-[#FBF8F4] border-t border-[#EAE4DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Navigation Arrows */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto"
        >
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D4533] uppercase">
                ULASAN PENGUNJUNG
              </span>
              <span className="h-px w-8 bg-[#1D4533]/60"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] tracking-tight">
              Apa Kata Pengunjung Setia Kami
            </h2>
          </div>

          {/* Slider Controls: Arrow Buttons (Prev / Next) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#EAE4DC] bg-white hover:bg-[#FAF7F2] text-[#1D4533] hover:border-[#1D4533]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Lihat ulasan sebelumnya"
              title="Ulasan sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#5A4A3E] px-2 min-w-[50px] text-center">
              {currentIndex + 1} / {totalSlides}
            </span>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#EAE4DC] bg-white hover:bg-[#FAF7F2] text-[#1D4533] hover:border-[#1D4533]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Lihat ulasan berikutnya"
              title="Ulasan berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
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

        {/* Real Google Review CTA Button */}
        <ReviewCTA />
      </div>
    </section>
  );
}
