"use client";

import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { useBranch } from "@/context/BranchContext";
import { getBranchReviewUrl, openGoogleReview } from "@/config/branches";

export default function ReviewCTA() {
  const { currentBranch } = useBranch();

  return (
    <div className="mt-14 bg-white rounded-2xl border border-[#EAE4DC] p-8 sm:p-10 text-center shadow-xs max-w-3xl mx-auto space-y-4">
      <div className="w-13 h-13 rounded-full bg-[#FAF7F2] border border-[#EAE4DC] mx-auto flex items-center justify-center text-[#F5A623] shadow-2xs">
        <Star className="w-6 h-6 fill-[#F5A623]" />
      </div>

      <div className="space-y-1.5">
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#1D4533] uppercase block">
          CABANG {currentBranch.shortName.toUpperCase()}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F150C]">
          Your Experience Matters
        </h3>
        <p className="text-xs sm:text-sm text-[#5A4A3E] max-w-md mx-auto leading-relaxed">
          Setelah menikmati treatment di Bale Spa, bantu kami dengan membagikan pengalaman Anda di Google. Ulasan Anda sangat berharga bagi terapis kami di Cabang {currentBranch.shortName}.
        </p>
      </div>

      {currentBranch.reviewUrl ? (
        <div className="pt-2">
          <a
            href={getBranchReviewUrl(currentBranch)}
            onClick={(e) => {
              e.preventDefault();
              openGoogleReview(currentBranch);
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-[0.14em] uppercase rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5 border border-[#C5A880]/30"
            title={`Berikan Ulasan di Google untuk Cabang ${currentBranch.shortName}`}
          >
            <span className="text-[#F5A623] text-sm leading-none">★</span>
            <span>BERIKAN ULASAN DI GOOGLE ({currentBranch.shortName.toUpperCase()})</span>
            <ExternalLink className="w-4 h-4 text-[#C8A27A]" />
          </a>
        </div>
      ) : null}

      {currentBranch.reviewUrl ? (
        <p className="text-[10px] text-[#7A6B5F] italic">
          *Membuka profil ulasan resmi Google Cabang {currentBranch.shortName} pada tab baru.
        </p>
      ) : null}
    </div>
  );
}
