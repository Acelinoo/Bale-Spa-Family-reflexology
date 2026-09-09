import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function ReviewCTA() {
  return (
    <div className="mt-14 bg-[#FFFFFF] rounded-xl border border-[#E5DFD3] p-8 sm:p-10 text-center shadow-xs max-w-3xl mx-auto space-y-4">
      <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E5DFD3] mx-auto flex items-center justify-center text-[#F5A623]">
        <Star className="w-6 h-6 fill-[#F5A623]" />
      </div>

      <div>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A261D]">
          Had a great experience?
        </h3>
        <p className="text-xs sm:text-sm text-[#556358] max-w-md mx-auto mt-1.5">
          Share your experience with us on Google. Ulasan Anda sangat berharga bagi kami dan membantu keluarga lain menemukan relaksasi terbaik.
        </p>
      </div>

      <div className="pt-2">
        <a
          href={businessConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1B3B2B] hover:bg-[#142C20] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5"
        >
          <span>WRITE A REVIEW ON GOOGLE</span>
          <ExternalLink className="w-4 h-4 text-[#C5A880]" />
        </a>
      </div>

      <p className="text-[10px] text-[#8C9890] italic">
        *Membuka halaman ulasan resmi Google Business Profile kami di tab baru.
      </p>
    </div>
  );
}
