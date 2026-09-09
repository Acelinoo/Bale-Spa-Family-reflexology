"use client";

import React, { useState, useEffect } from "react";
import { Star, X, ExternalLink, MapPin, AlertCircle } from "lucide-react";
import { useBranch } from "@/context/BranchContext";
import { isPlaceholderReviewUrl } from "@/config/branches";

export default function ReviewBranchModal() {
  const { currentBranch, branches, selectBranch, isReviewModalOpen, closeReviewModal } = useBranch();
  const [userSelectedBranchId, setUserSelectedBranchId] = useState<string | null>(null);

  const selectedBranchId = userSelectedBranchId || currentBranch.id;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isReviewModalOpen) {
        closeReviewModal();
      }
    };
    if (isReviewModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isReviewModalOpen, closeReviewModal]);

  if (!isReviewModalOpen) return null;

  const targetBranch = branches.find((b) => b.id === selectedBranchId) || currentBranch;
  const isPlaceholder = isPlaceholderReviewUrl(targetBranch.reviewUrl);

  const handleOpenReview = () => {
    if (!isPlaceholder) {
      window.open(targetBranch.reviewUrl, "_blank", "noopener,noreferrer");
      closeReviewModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F150C]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeReviewModal}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#EAE4DC] overflow-hidden my-auto p-6 sm:p-8 animate-in zoom-in-95 duration-200 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeReviewModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#F3E9DC] text-[#1F150C] flex items-center justify-center transition-colors cursor-pointer border border-[#EAE4DC]"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#EAE4DC] mx-auto flex items-center justify-center text-[#F5A623] shadow-2xs">
            <Star className="w-7 h-7 fill-[#F5A623]" />
          </div>

          <span className="text-[10px] font-bold tracking-[0.25em] text-[#1D4533] uppercase block">
            GOOGLE REVIEW RESMI
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F150C]">
            Bagikan Pengalaman Anda
          </h3>
          <p className="text-xs text-[#5A4A3E] max-w-sm mx-auto leading-relaxed">
            Bale Spa Family Reflexology menghargai setiap ulasan Anda untuk terus meningkatkan kenyamanan seluruh keluarga.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1F150C] text-center">
            Pilih Cabang yang Dikunjungi:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {branches.map((b) => {
              const isSelected = b.id === selectedBranchId;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => {
                    setUserSelectedBranchId(b.id);
                    selectBranch(b.id);
                  }}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex flex-col items-center gap-1 border ${
                    isSelected
                      ? "bg-[#1D4533] text-[#F3E9DC] border-[#1D4533] shadow-xs"
                      : "bg-[#FAF7F2] text-[#1F150C] border-[#EAE4DC] hover:border-[#1D4533]/40 hover:bg-[#F3E9DC]"
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-[#C8A27A]" : "text-[#1D4533]"}`} />
                  <span className="truncate w-full text-center">{b.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Branch Detail Box */}
        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] space-y-1.5 text-center">
          <h4 className="font-serif text-base font-bold text-[#1F150C]">
            {targetBranch.name}
          </h4>
          <p className="text-[11px] text-[#5A4A3E] leading-relaxed">
            {targetBranch.address}
          </p>

          {/* 5 Stars Visual */}
          <div className="flex items-center justify-center gap-1 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
            ))}
          </div>
        </div>

        {/* Placeholder Warning Notice if reviewUrl not yet set by user */}
        {isPlaceholder && (
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
            <div>
              <span className="font-bold block">Tautan Google Review Sedang Disiapkan</span>
              <span>
                Placeholder aktif: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[10px]">{targetBranch.reviewUrl}</code>. Anda dapat memperbarui URL review resmi cabang ini di file konfigurasi.
              </span>
            </div>
          </div>
        )}

        {/* CTA Button to Google Review */}
        <div>
          {isPlaceholder ? (
            <button
              type="button"
              disabled
              className="w-full py-3.5 bg-gray-300 text-gray-600 text-xs font-bold tracking-wider uppercase rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span>Tautan Review Cabang {targetBranch.shortName} Segera Hadir</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleOpenReview}
              className="w-full py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 border border-[#C5A880]/30"
            >
              <span>BERIKAN ULASAN DI GOOGLE ({targetBranch.shortName.toUpperCase()})</span>
              <ExternalLink className="w-4 h-4 text-[#C8A27A]" />
            </button>
          )}
        </div>

        <p className="text-[10px] text-[#7A6B5F] text-center italic">
          *Membuka halaman Google Maps review resmi cabang {targetBranch.shortName} pada tab baru.
        </p>
      </div>
    </div>
  );
}
