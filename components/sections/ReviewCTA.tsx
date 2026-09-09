import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function ReviewCTA() {
  return (
    <div className="mt-14 bg-[#FAF6F0] rounded-xl border border-[#E2D5C3] p-8 sm:p-10 text-center shadow-xs max-w-3xl mx-auto space-y-4">
      <div className="w-12 h-12 rounded-full bg-[#EFE5D7] border border-[#DFD1C1] mx-auto flex items-center justify-center text-[#F5A623]">
        <Star className="w-6 h-6 fill-[#F5A623]" />
      </div>

      <div>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1F150C]">
          Had a great experience?
        </h3>
        <p className="text-xs sm:text-sm text-[#5A4A3E] max-w-md mx-auto mt-1.5">
          Share your experience with us on Google. Ulasan Anda sangat berharga bagi kami dan membantu keluarga lain menemukan relaksasi terbaik.
        </p>
      </div>

      <div className="pt-2">
        <a
          href={businessConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-[0.14em] uppercase rounded-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5"
        >
          <span>WRITE A REVIEW ON GOOGLE</span>
          <ExternalLink className="w-4 h-4 text-[#C8A27A]" />
        </a>
      </div>

      <p className="text-[10px] text-[#7A6B5F] italic">
        *Membuka halaman ulasan resmi Google Business Profile kami di tab baru.
      </p>
    </div>
  );
}
