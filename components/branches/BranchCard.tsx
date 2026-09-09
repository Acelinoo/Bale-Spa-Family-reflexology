"use client";

import React from "react";
import { MapPin, Phone, Star, Calendar, Navigation, MessageCircle, Check } from "lucide-react";
import { Branch, isPlaceholderReviewUrl } from "@/config/branches";
import { useBranch } from "@/context/BranchContext";

interface BranchCardProps {
  branch: Branch;
  onOpenBookingForBranch?: (branchId: string) => void;
}

export default function BranchCard({ branch, onOpenBookingForBranch }: BranchCardProps) {
  const { currentBranch, selectBranch, openReviewModal } = useBranch();
  const isSelected = currentBranch.id === branch.id;

  const handleReviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    selectBranch(branch.id);
    if (!isPlaceholderReviewUrl(branch.reviewUrl)) {
      window.open(branch.reviewUrl, "_blank", "noopener,noreferrer");
    } else {
      openReviewModal();
    }
  };

  const handleBookingClick = () => {
    selectBranch(branch.id);
    if (onOpenBookingForBranch) {
      onOpenBookingForBranch(branch.id);
    }
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group ${
        isSelected
          ? "bg-white border-[#1D4533] ring-2 ring-[#1D4533]/20 shadow-[0_12px_30px_rgba(29,69,51,0.1)]"
          : "bg-white border-[#EAE4DC] hover:border-[#1D4533]/40 hover:shadow-[0_8px_24px_rgba(31,21,12,0.06)]"
      }`}
    >
      {/* Top Header Card */}
      <div className="p-5 sm:p-6 pb-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#1D4533] uppercase bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#EAE4DC]">
            CABANG {branch.shortName.toUpperCase()}
          </span>

          {isSelected && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1D4533] bg-[#1D4533]/10 px-2.5 py-0.5 rounded-full">
              <Check className="w-3 h-3 text-[#1D4533]" />
              <span>Cabang Aktif</span>
            </span>
          )}
        </div>

        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F150C] leading-snug group-hover:text-[#1D4533] transition-colors">
            {branch.name}
          </h3>
          <p className="text-[11px] font-semibold text-[#7A6B5F] mt-0.5">
            {branch.city}
          </p>
        </div>

        {/* Alamat */}
        <div className="flex items-start gap-2.5 text-xs text-[#5A4A3E] leading-relaxed pt-1">
          <MapPin className="w-4 h-4 text-[#1D4533] shrink-0 mt-0.5" />
          <span className="line-clamp-2">{branch.address}</span>
        </div>

        {/* WhatsApp & Hours */}
        <div className="flex items-center justify-between text-xs pt-1 border-t border-[#F0EBE3]">
          <span className="text-[#1D4533] font-bold flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>{branch.whatsappDisplay}</span>
          </span>
          <span className="text-[11px] text-[#7A6B5F] font-medium">
            {branch.openingHours.hours}
          </span>
        </div>
      </div>

      {/* 4 Action Buttons Grid (Lihat Lokasi, Chat WA, Berikan Ulasan, Reservasi) */}
      <div className="p-4 sm:p-5 pt-3 bg-[#FAF7F2]/70 border-t border-[#EAE4DC] grid grid-cols-2 gap-2">
        {/* 1. Lihat Lokasi (Google Maps) */}
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2.5 rounded-lg bg-white hover:bg-[#FAF7F2] text-[#1F150C] hover:text-[#1D4533] border border-[#EAE4DC] hover:border-[#1D4533]/40 text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-2xs text-center"
          title={`Buka Google Maps Cabang ${branch.shortName}`}
        >
          <Navigation className="w-3.5 h-3.5 text-[#1D4533]" />
          <span>Lihat Lokasi</span>
        </a>

        {/* 2. Chat WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?phone=${branch.whatsapp}&text=${encodeURIComponent(
            `Halo Admin ${branch.name}, saya ingin bertanya mengenai layanan dan reservasi di Bale Spa Family Reflexology.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2.5 rounded-lg bg-white hover:bg-[#FAF7F2] text-[#1F150C] hover:text-[#25D366] border border-[#EAE4DC] hover:border-[#25D366]/40 text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-2xs text-center"
          title={`Chat WhatsApp Cabang ${branch.shortName}`}
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Chat WA</span>
        </a>

        {/* 3. Berikan Ulasan (Google Review) */}
        <button
          type="button"
          onClick={handleReviewClick}
          className="px-3 py-2.5 rounded-lg bg-white hover:bg-[#FAF7F2] text-[#1F150C] hover:text-[#F5A623] border border-[#EAE4DC] hover:border-[#F5A623]/40 text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer text-center"
          title={`Berikan Ulasan Google untuk Cabang ${branch.shortName}`}
        >
          <Star className="w-3.5 h-3.5 text-[#F5A623]" />
          <span>Ulasan</span>
        </button>

        {/* 4. Reservasi */}
        <button
          type="button"
          onClick={handleBookingClick}
          className="px-3 py-2.5 rounded-lg bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-xs hover:shadow-md cursor-pointer text-center"
          title={`Reservasi di Cabang ${branch.shortName}`}
        >
          <Calendar className="w-3.5 h-3.5 text-[#C8A27A]" />
          <span>Reservasi</span>
        </button>
      </div>
    </div>
  );
}
