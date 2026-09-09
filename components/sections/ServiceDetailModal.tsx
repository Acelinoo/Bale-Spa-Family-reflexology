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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12241A]/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] w-full max-w-2xl rounded-xl shadow-2xl border border-[#E5DFD3] overflow-hidden my-auto max-h-[90vh] flex flex-col"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#12241A]/90 via-[#12241A]/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#12241A]/70 hover:bg-[#12241A] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            {service.badge && (
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#385A42] text-[#FAF7F2] mb-1.5">
                {service.badge}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              {service.title}
            </h3>
            <p className="text-xs text-[#E2ECE5] italic mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-grow">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#385A42] mb-1.5">
              Deskripsi Perawatan
            </h4>
            <p className="text-sm text-[#4A554D] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Benefits */}
          <div className="pt-2 border-t border-[#E5DFD3]/60">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#385A42] mb-2.5">
              Manfaat Utama
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#2A362E]">
                  <Check className="w-4 h-4 text-[#385A42] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration & Pricing Options */}
          <div className="pt-2 border-t border-[#E5DFD3]/60">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#385A42] mb-2.5">
              Pilihan Durasi &amp; Tarif
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {service.durations.map((d, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5DFD3] text-center"
                >
                  <span className="text-xs text-[#6B7870] flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-[#385A42]" />
                    {d.label}
                  </span>
                  <span className="text-sm font-bold text-[#1B3B2B] block mt-1">
                    {d.priceFormatted}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div className="p-4 bg-[#FFFFFF] border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#556358]">
            <ShieldCheck className="w-4 h-4 text-[#385A42]" />
            <span>Terapis tersertifikasi &amp; higienis</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#1B3B2B] hover:bg-[#142C20] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>BOOK THIS SERVICE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
