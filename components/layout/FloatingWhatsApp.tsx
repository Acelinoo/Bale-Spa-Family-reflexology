"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, MapPin, ChevronRight } from "lucide-react";
import { useBranch } from "@/context/BranchContext";
import { Branch } from "@/config/branches";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { branches, currentBranch, selectBranch } = useBranch();
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleBranchClick = (branch: Branch) => {
    selectBranch(branch.id);
    const cleanPhone = branch.whatsapp.replace(/\D/g, "");
    const message = `Halo Admin ${branch.name}, saya ingin menanyakan informasi layanan dan reservasi di Bale Spa Family Reflexology.`;
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div ref={popoverRef} className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Small Branch Selector Popover */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#EAE4DC] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Popover Header */}
          <div className="bg-[#1D4533] text-[#F3E9DC] p-3.5 px-4 flex items-center justify-between border-b border-[#2A5F47]">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span className="font-serif text-sm font-bold tracking-wide">
                Chat Bale Spa
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-full bg-[#163728] hover:bg-[#11291E] text-[#F3E9DC] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Subtitle */}
          <div className="p-3 bg-[#FAF7F2] border-b border-[#EAE4DC] text-center">
            <p className="text-[11px] text-[#5A4A3E] font-medium">
              Pilih cabang tujuan untuk chat langsung via WhatsApp:
            </p>
          </div>

          {/* 3 Branches List */}
          <div className="p-2 space-y-1.5">
            {branches.map((b) => {
              const isCurrent = currentBranch.id === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => handleBranchClick(b)}
                  className={`w-full p-2.5 rounded-xl text-left transition-all duration-150 flex items-center justify-between cursor-pointer border ${
                    isCurrent
                      ? "bg-[#FAF7F2] border-[#1D4533] shadow-xs"
                      : "bg-white border-transparent hover:bg-[#FAF7F2] hover:border-[#EAE4DC]"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#1D4533]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-[#1F150C]">
                          Cabang {b.shortName}
                        </h4>
                        {isCurrent && (
                          <span className="text-[9px] font-bold text-[#1D4533] bg-[#1D4533]/10 px-1.5 py-0.2 rounded">
                            Aktif
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-[#7A6B5F] font-mono">
                        {b.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#7A6B5F]" />
                </button>
              );
            })}
          </div>

          {/* Popover Footer Note */}
          <div className="p-2.5 bg-[#FAF7F2] border-t border-[#EAE4DC] text-center text-[10px] text-[#7A6B5F]">
            Respon cepat saat jam operasional (09:00 - 21:00 WIB)
          </div>
        </div>
      )}

      {/* Floating Action Button with Tooltip */}
      <div className="flex items-center">
        {/* Tooltip on hover (only if popover closed) */}
        {!isOpen && (
          <div
            className={`hidden sm:flex items-center bg-[#1D4533] text-[#FAF7F2] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md mr-2.5 transition-all duration-300 pointer-events-none ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <span>Chat WhatsApp Cabang</span>
            <div className="w-2 h-2 bg-[#1D4533] rotate-45 -mr-1 ml-1.5"></div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
            isOpen ? "bg-[#1D4533]" : "bg-[#25D366] hover:bg-[#20bd5a]"
          }`}
          aria-label="Pilih cabang WhatsApp Bale Spa"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#F3E9DC]" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-white" />
          )}
        </button>
      </div>
    </div>
  );
}
