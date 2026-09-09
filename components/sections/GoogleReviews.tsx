"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { REVIEWS, ReviewItem } from "@/data/reviews";
import GoogleReviewCard from "./GoogleReviewCard";
import ReviewCTA from "./ReviewCTA";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS);
  const [rating, setRating] = useState<number>(5.0);
  const [totalCount, setTotalCount] = useState<number>(48);

  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
          if (data.rating) setRating(data.rating);
          if (data.totalReviews) setTotalCount(data.totalReviews);
        }
      } catch {
        // Fallback to static REVIEWS data
      }
    }
    loadReviews();
  }, []);

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#E5DFD3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#385A42]"></span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#385A42] uppercase">
              WHAT OUR CLIENTS SAY
            </span>
            <span className="h-px w-6 bg-[#385A42]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A261D] tracking-tight">
            Real Experiences from Our Guests
          </h2>

          <p className="text-sm text-[#556358] leading-relaxed">
            Kenyamanan dan kepuasan Anda bersama keluarga adalah prioritas utama setiap sentuhan terapi kami.
          </p>

          {/* Rating Summary Pill */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1A261D]">
              {rating.toFixed(1)} / 5.0
            </span>
            <span className="text-xs text-[#6B7870]">
              • {totalCount}+ Ulasan Google
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((rev) => (
            <GoogleReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* Real Google Review Action CTA */}
        <ReviewCTA />
      </div>
    </section>
  );
}
