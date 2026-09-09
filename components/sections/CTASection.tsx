"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";
import { businessConfig } from "@/config/business";

interface CTASectionProps {
  onOpenBooking: () => void;
}

export default function CTASection({ onOpenBooking }: CTASectionProps) {
  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
    `Halo ${businessConfig.name}, saya ingin berkonsultasi mengenai paket relaksasi keluarga.`
  )}`;

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-[#1B3B2B] text-[#FAF7F2]">
      {/* Background Image with Dark Spa Green Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/promo-banner.jpg"
          alt="Bale Spa Family Reflexology Relaxation Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12241A]/95 via-[#1B3B2B]/90 to-[#12241A]/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <div className="inline-flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-[#C5A880]"></span>
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase">
            MOMEN KESEGARAN KELUARGA
          </span>
          <span className="h-px w-6 bg-[#C5A880]"></span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
          Ready to Relax?
        </h2>

        <p className="text-sm sm:text-base text-[#D1DDD5] max-w-xl mx-auto leading-relaxed">
          Give yourself and your family a moment to rest, refresh, and reconnect. Dapatkan waktu istirahat yang berkualitas dengan pelayanan ramah dan suasana yang damai.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#FAF7F2] hover:bg-white text-[#1B3B2B] text-xs font-bold tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 cursor-pointer active:translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#385A42]" />
            <span>BOOK YOUR APPOINTMENT</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 cursor-pointer active:translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
