"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, Check, X, ChevronRight } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export default function BranchSelectorModal() {
  const { currentBranch, branches, selectBranch, isBranchModalOpen, closeBranchModal } = useBranch();

  // Handle ESC key to close modal (only if currentBranch already set)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentBranch) {
        closeBranchModal();
      }
    };
    if (isBranchModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBranchModalOpen, currentBranch, closeBranchModal]);

  if (!isBranchModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F150C]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={() => {
        if (currentBranch) closeBranchModal();
      }}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#EAE4DC] overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="bg-[#1D4533] text-[#F3E9DC] p-5 sm:p-6 border-b border-[#2A5F47] shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#C8A27A]/60 shadow-md shrink-0 bg-[#1D4533]">
              <Image
                src="/images/bale-spa-logo.jpg"
                alt="Bale Spa Family Reflexology Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#C8A27A] uppercase block">
                Selamat Datang di Bale Spa
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3E9DC]">
                Pilih Cabang Bale Spa
              </h3>
            </div>
          </div>

          {/* Close button only available if branch already selected */}
          {currentBranch && (
            <button
              onClick={closeBranchModal}
              className="w-9 h-9 rounded-full bg-[#163728] hover:bg-[#11291E] text-[#F3E9DC] flex items-center justify-center transition-colors cursor-pointer border border-[#C8A27A]/20"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Description */}
        <div className="px-5 pt-4 pb-2 sm:px-7 sm:pt-5 shrink-0 bg-[#FAF7F2] border-b border-[#EAE4DC]">
          <p className="text-xs sm:text-sm text-[#4E3F33] leading-relaxed">
            Bale Spa memiliki 3 cabang di Bandung. Silakan tentukan cabang terdekat Anda untuk reservasi, lokasi navigasi, dan informasi kontak langsung.
          </p>
        </div>

        {/* Scrollable Branches List / Grid */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-3.5 flex-grow bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {branches.map((branch) => {
              const isSelected = currentBranch?.id === branch.id;
              return (
                <div
                  key={branch.id}
                  onClick={() => selectBranch(branch.id)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between text-left group ${
                    isSelected
                      ? "bg-[#FAF7F2] border-[#1D4533] ring-2 ring-[#1D4533]/20 shadow-md"
                      : "bg-white border-[#EAE4DC] hover:border-[#1D4533]/50 hover:bg-[#FAF7F2]/60 hover:shadow-sm"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-bold tracking-widest text-[#1D4533] uppercase block">
                        CABANG {branch.shortName}
                      </span>
                      {isSelected ? (
                        <span className="w-6 h-6 rounded-full bg-[#1D4533] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="w-6 h-6 rounded-full border border-[#EAE4DC] group-hover:border-[#1D4533] flex items-center justify-center shrink-0 transition-colors">
                          <ChevronRight className="w-3 h-3 text-[#5A4A3E] group-hover:text-[#1D4533]" />
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1F150C] leading-snug">
                      {branch.name}
                    </h4>

                    {/* Alamat */}
                    <div className="flex items-start gap-2 text-xs text-[#5A4A3E] leading-relaxed pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1D4533] shrink-0 mt-0.5" />
                      <span className="line-clamp-3">{branch.address}</span>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-2 text-xs text-[#1D4533] font-semibold">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>{branch.whatsappDisplay}</span>
                    </div>

                    {/* Jam Buka */}
                    <div className="flex items-center gap-2 text-[11px] text-[#7A6B5F]">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{branch.openingHours.hours}</span>
                    </div>
                  </div>

                  {/* Tombol Pilih */}
                  <div className="pt-4 mt-3 border-t border-[#EAE4DC]/80">
                    <button
                      type="button"
                      className={`w-full py-2.5 px-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? "bg-[#1D4533] text-[#F3E9DC] shadow-xs"
                          : "bg-white border border-[#1D4533] text-[#1D4533] group-hover:bg-[#1D4533] group-hover:text-[#F3E9DC]"
                      }`}
                    >
                      <span>{isSelected ? "Cabang Aktif" : "Pilih Cabang Ini"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE4DC] flex items-center justify-between text-xs text-[#635345] shrink-0">
          <span>Anda dapat mengganti cabang kapan saja melalui menu di navigasi atas.</span>
        </div>
      </div>
    </div>
  );
}
