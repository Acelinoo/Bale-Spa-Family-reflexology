"use client";

import React, { useState, useEffect } from "react";
import { X, QrCode, MapPin } from "lucide-react";
import { useBranch } from "@/context/BranchContext";
import BranchQRCode from "./BranchQRCode";

export default function BranchQRModal() {
  const { currentBranch, branches, isQrModalOpen, closeQrModal } = useBranch();
  const [activeTabBranchId, setActiveTabBranchId] = useState<string | null>(null);

  const selectedBranchId = activeTabBranchId || currentBranch.id;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isQrModalOpen) {
        closeQrModal();
      }
    };
    if (isQrModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isQrModalOpen, closeQrModal]);

  if (!isQrModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F150C]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeQrModal}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#EAE4DC] overflow-hidden my-auto p-6 sm:p-8 animate-in zoom-in-95 duration-200 space-y-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQrModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#F3E9DC] text-[#1F150C] flex items-center justify-center transition-colors cursor-pointer border border-[#EAE4DC]"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EAE4DC] mx-auto flex items-center justify-center text-[#1D4533] shadow-2xs">
            <QrCode className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#1D4533] uppercase block">
            QR CODE CABANG BALE SPA
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#1F150C]">
            Pindai QR Code Cabang
          </h3>
          <p className="text-xs text-[#5A4A3E]">
            Mendukung 2 QR Code per cabang: Website dengan auto-select cabang dan Google Review resmi.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex items-center justify-center gap-2 shrink-0">
          {branches.map((b) => {
            const isSelected = b.id === selectedBranchId;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setActiveTabBranchId(b.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? "bg-[#1D4533] text-[#F3E9DC] border-[#1D4533] shadow-xs"
                    : "bg-[#FAF7F2] text-[#1F150C] border-[#EAE4DC] hover:border-[#1D4533]/40"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-[#C8A27A]" : "text-[#1D4533]"}`} />
                <span>{b.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* 2 QR Cards Side-by-Side (Website QR & Google Review QR) */}
        <div className="overflow-y-auto flex-grow pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BranchQRCode branchId={selectedBranchId} type="website" />
            <BranchQRCode branchId={selectedBranchId} type="review" />
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-2 text-center text-[10px] text-[#7A6B5F] shrink-0 border-t border-[#EAE4DC]">
          QR Code Website otomatis mengaktifkan cabang yang dipilih ketika dipindai oleh pelanggan.
        </div>
      </div>
    </div>
  );
}
