"use client";

import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export default function ContactSection() {
  const { currentBranch, branches, selectBranch } = useBranch();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Branch Switcher Tabs */}
        <div className="mb-10 text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1D4533] uppercase">
              3 CABANG BALE SPA BANDUNG
            </span>
            <span className="h-px w-8 bg-[#1D4533]/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F150C]">
            Lokasi &amp; Kontak Cabang
          </h2>

          <p className="text-xs sm:text-sm text-[#5A4A3E] max-w-lg mx-auto">
            Klik tab di bawah untuk melihat rincian alamat dan kontak masing-masing cabang:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {branches.map((b) => {
              const isSelected = currentBranch.id === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => selectBranch(b.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#1D4533] text-[#F3E9DC] shadow-sm scale-105"
                      : "bg-[#FAF7F2] text-[#1F150C] border border-[#EAE4DC] hover:border-[#1D4533]/40 hover:bg-[#F3E9DC]"
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-[#C8A27A]" : "text-[#1D4533]"}`} />
                  <span>Cabang {b.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Contact Details (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#1D4533] uppercase">
                Cabang Terpilih
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F150C] mt-1">
                {currentBranch.name}
              </h3>
            </div>

            <p className="text-sm text-[#4E3F33] leading-relaxed">
              Kami siap menyambut kedatangan Anda dan keluarga untuk menikmati pengalaman relaksasi yang tenang, bersih, dan memulihkan energi tubuh di cabang {currentBranch.shortName}.
            </p>

            {/* Info Cards */}
            <div className="space-y-3.5 pt-1">
              {/* Alamat */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#EAE4DC] flex items-center justify-center text-[#1D4533] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F150C]">
                    Alamat Lengkap
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E3F33] mt-0.5 leading-relaxed">
                    {currentBranch.address}
                  </p>
                  <p className="text-xs text-[#7A6B5F] font-semibold mt-0.5">
                    {currentBranch.city} ({currentBranch.postalCode})
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#EAE4DC] flex items-center justify-center text-[#1D4533] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F150C]">
                    WhatsApp Reservasi Cabang {currentBranch.shortName}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-[#1D4533] mt-0.5">
                    {currentBranch.whatsappDisplay}
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${currentBranch.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent(
                      `Halo Admin ${currentBranch.name}, saya ingin menanyakan informasi layanan dan reservasi di Bale Spa Family Reflexology.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1D4533] hover:underline inline-flex items-center gap-1 mt-1 font-semibold"
                  >
                    <span>Kirim pesan langsung ke WhatsApp cabang ini</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#EAE4DC] flex items-center justify-center text-[#1D4533] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F150C]">
                    Jam Operasional
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F150C] font-semibold mt-0.5">
                    {currentBranch.openingHours.days}: {currentBranch.openingHours.hours}
                  </p>
                  <p className="text-[11px] text-[#7A6B5F] mt-0.5">
                    {currentBranch.openingHours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Get Directions */}
            <div className="pt-1">
              <a
                href={currentBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-wider uppercase rounded-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5"
              >
                <Navigation className="w-4 h-4 text-[#C8A27A]" />
                <span>PETUNJUK ARAH KE CABANG {currentBranch.shortName.toUpperCase()}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Card (Right 6 Cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl border border-[#EAE4DC] overflow-hidden shadow-sm flex flex-col">
              {/* Map Graphic Area */}
              <div className="relative h-64 sm:h-72 w-full bg-[#FAF7F2] flex items-center justify-center p-6 text-center border-b border-[#EAE4DC]">
                <div className="space-y-3.5 max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-[#1D4533] text-[#F3E9DC] flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-7 h-7 text-[#C8A27A]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#1F150C]">
                      {currentBranch.name}
                    </h4>
                    <p className="text-xs text-[#5A4A3E] mt-1 leading-relaxed">
                      {currentBranch.address}
                    </p>
                  </div>
                  <a
                    href={currentBranch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#FAF7F2] text-[#1D4533] text-xs font-bold tracking-wider uppercase rounded-sm border border-[#EAE4DC] shadow-2xs transition-colors"
                  >
                    <span>Buka Google Maps Cabang Ini</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#1D4533]" />
                  </a>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="p-5 sm:p-6 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4533] mb-3">
                  Jadwal Buka Cabang {currentBranch.shortName}
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#4E3F33]">
                  {currentBranch.scheduleList.map((item) => (
                    <div key={item.day} className="flex justify-between border-b border-[#EAE4DC]/60 pb-1">
                      <span className="font-medium">{item.day}</span>
                      <span className="text-[#1F150C] font-bold">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
