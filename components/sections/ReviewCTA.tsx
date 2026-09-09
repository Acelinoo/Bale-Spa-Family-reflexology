"use client";

import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export default function ReviewCTA() {
  const { currentBranch } = useBranch();

  return (
    <div className="mt-14 bg-white rounded-xl border border-[#EAE4DC] p-8 sm:p-10 text-center shadow-xs max-w-3xl mx-auto space-y-4">
      <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EAE4DC] mx-auto flex items-center justify-center text-[#F5A623]">
        <Star className="w-6 h-6 fill-[#F5A623]" />
      </div>

      <div>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1F150C]">
          Puas dengan Pelayanan di Bale Spa {currentBranch.shortName}?
        </h3>
        <p className="text-xs sm:text-sm text-[#5A4A3E] max-w-md mx-auto mt-1.5">
          Bagikan pengalaman relaksasi Anda di Google Review. Penilaian Anda sangat berharga dalam mendukung dedikasi para terapis kami di Cabang {currentBranch.shortName}.
        </p>
      </div>

      <div className="pt-2">
        <a
          href={currentBranch.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-[0.14em] uppercase rounded-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5"
        >
          <span>TULIS ULASAN UNTUK CABANG {currentBranch.shortName.toUpperCase()}</span>
          <ExternalLink className="w-4 h-4 text-[#C8A27A]" />
        </a>
      </div>

      <p className="text-[10px] text-[#7A6B5F] italic">
        *Membuka halaman ulasan resmi Google Maps cabang {currentBranch.shortName} pada tab baru.
      </p>
    </div>
  );
}
