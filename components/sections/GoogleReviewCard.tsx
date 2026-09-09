import React from "react";
import { Star } from "lucide-react";
import { ReviewItem } from "@/data/reviews";

interface GoogleReviewCardProps {
  review: ReviewItem;
}

export default function GoogleReviewCard({ review }: GoogleReviewCardProps) {
  // Ambil inisial huruf (contoh: Hendra Wijaya -> HW)
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#EAE4DC] shadow-[0_2px_12px_rgba(31,21,12,0.03)] hover:shadow-[0_8px_24px_rgba(29,69,51,0.08)] hover:border-[#1D4533]/40 transition-all duration-300 flex flex-col justify-between space-y-5 h-full select-none">
      <div className="space-y-3">
        {/* Large Elegant Green Quote Mark */}
        <span className="font-serif text-4xl sm:text-5xl text-[#1D4533] leading-none block font-bold">
          &ldquo;&ldquo;
        </span>

        {/* Highlight Quote */}
        <h4 className="font-serif text-base sm:text-lg font-bold text-[#1F150C] leading-snug">
          &quot;{review.text.slice(0, 48)}...&quot;
        </h4>

        {/* Full Text */}
        <p className="text-xs sm:text-sm text-[#5A4A3E] leading-relaxed line-clamp-4">
          {review.text}
        </p>
      </div>

      {/* Reviewer Profile & 5 Stars */}
      <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between gap-3">
        {/* Left: Elegant Letter Initial Avatar & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1D4533] text-[#F3E9DC] flex items-center justify-center font-serif font-bold text-xs sm:text-sm shrink-0 ring-2 ring-[#C8A27A]/40 shadow-xs">
            {getInitials(review.name)}
          </div>
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-[#1F150C]">
              {review.name}
            </h5>
            <span className="text-[10px] sm:text-[11px] text-[#7A6B5F] block">
              {review.role}
            </span>
          </div>
        </div>

        {/* Right: 5 Stars */}
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
