import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { ReviewItem } from "@/data/reviews";

interface GoogleReviewCardProps {
  review: ReviewItem;
}

export default function GoogleReviewCard({ review }: GoogleReviewCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E5DFD3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        {/* Rating Stars & Source */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#F5A623] text-[#F5A623]"
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F7F4EC] border border-[#E5DFD3]/80">
            {/* Google G icon svg */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-[10px] font-bold text-[#4E5952]">
              {review.source}
            </span>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed italic">
          &quot;{review.text}&quot;
        </p>
      </div>

      {/* Reviewer Profile */}
      <div className="pt-3 border-t border-[#E5DFD3]/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#EAE3D4] overflow-hidden relative shrink-0">
            {review.avatar ? (
              <Image
                src={review.avatar}
                alt={review.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-xs text-[#1B3B2B]">
                {review.name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1A261D]">
              {review.name}
            </h4>
            <span className="text-[10px] text-[#6B7870] block">
              {review.role}
            </span>
          </div>
        </div>

        <span className="text-[10px] text-[#8C9890]">{review.date}</span>
      </div>
    </div>
  );
}
