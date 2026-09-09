"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVIEWS, ReviewItem } from "@/data/reviews";
import GoogleReviewCard from "./GoogleReviewCard";
import ReviewCTA from "./ReviewCTA";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
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

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 bg-[#F3E9DC] border-t border-[#E2D5C3]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D4533] uppercase">
              TESTIMONIALS
            </span>
            <span className="h-px w-8 bg-[#1D4533]/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {reviews.slice(0, 3).map((rev) => (
            <GoogleReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* 3 Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-[#1D4533]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D5C6B3]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D5C6B3]"></span>
        </div>

        {/* Real Google Review CTA Button */}
        <ReviewCTA />
      </div>
    </section>
  );
}
