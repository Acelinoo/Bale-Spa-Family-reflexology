import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { ReviewItem } from "@/data/reviews";

interface GoogleReviewCardProps {
  review: ReviewItem;
}

export default function GoogleReviewCard({ review }: GoogleReviewCardProps) {
  return (
    <div className="bg-[#FAF6F0] rounded-xl p-6 sm:p-7 border border-[#E2D5C3] shadow-[0_2px_12px_rgba(31,21,12,0.03)] hover:shadow-[0_6px_20px_rgba(29,69,51,0.08)] transition-all duration-300 flex flex-col justify-between space-y-5">
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
        <p className="text-xs sm:text-sm text-[#5A4A3E] leading-relaxed">
          {review.text}
        </p>
      </div>

      {/* Reviewer Profile & 5 Stars */}
      <div className="pt-4 border-t border-[#E8DDCE] flex items-center justify-between gap-3">
        {/* Left: Avatar & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative bg-[#EFE5D7] shrink-0 border border-[#DDCFBD]">
            {review.avatar ? (
              <Image
                src={review.avatar}
                alt={review.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-xs text-[#1D4533]">
                {review.name.charAt(0)}
              </div>
            )}
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
