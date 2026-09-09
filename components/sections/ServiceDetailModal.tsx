"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Check, Clock, Calendar, ShieldCheck } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onBookService,
}: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F150C]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#EAE4DC] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-52 sm:h-60 w-full bg-[#EAE3D4] shrink-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C]/90 via-[#1F150C]/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1F150C]/70 hover:bg-[#1F150C] text-[#F3E9DC] flex items-center justify-center transition-colors cursor-pointer border border-[#C5A880]/30"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            {service.badge && (
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1D4533] text-[#F3E9DC] border border-[#C5A880]/40 mb-1.5 shadow-sm">
                {service.badge}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3E9DC]">
              {service.title}
            </h3>
            <p className="text-xs text-[#E5DCD1] italic mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-grow">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1D4533] mb-1.5">
              Deskripsi Perawatan
            </h4>
            <p className="text-sm text-[#3E342B] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Benefits */}
          <div className="pt-2 border-t border-[#E8DFD3]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1D4533] mb-2.5">
              Manfaat Utama
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#1F150C]">
                  <Check className="w-4 h-4 text-[#1D4533] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration & Pricing Options */}
          <div className="pt-2 border-t border-[#E8DFD3]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1D4533] mb-2.5">
              Pilihan Durasi &amp; Tarif
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {service.durations.map((d, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs"
                >
                  <span className="text-xs text-[#726253] flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-[#1D4533]" />
                    {d.label}
                  </span>
                  <span className="text-sm font-bold text-[#1D4533] block mt-1">
                    {d.priceFormatted}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div className="p-4 bg-white border-t border-[#E8DFD3] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#615446]">
            <ShieldCheck className="w-4 h-4 text-[#1D4533]" />
            <span>Terapis tersertifikasi &amp; higienis</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-wider uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A880]/30"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>BOOK THIS SERVICE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
