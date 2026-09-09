import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#EFE4D6] border-t border-[#E2D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Contact Details (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1D4533] uppercase">
                INFORMASI LOKASI &amp; KONTAK
              </span>
              <span className="h-px w-8 bg-[#1D4533]/60"></span>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] tracking-tight">
                Kunjungi Bale Spa
              </h2>
              <p className="text-xs font-bold tracking-[0.2em] text-[#1D4533] uppercase mt-1">
                Family Reflexology
              </p>
            </div>

            <p className="text-sm text-[#4E3F33] leading-relaxed">
              Kami siap menyambut kedatangan Anda dan keluarga untuk menikmati pengalaman relaksasi yang tenang, bersih, dan memulihkan energi tubuh.
            </p>

            {/* Info Cards */}
            <div className="space-y-3.5 pt-1">
              {/* Alamat */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#EFE5D7] border border-[#DDCFBD] flex items-center justify-center text-[#1D4533] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F150C]">
                    Alamat Bale Spa
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E3F33] mt-0.5">
                    {businessConfig.address}
                  </p>
                  <p className="text-xs text-[#7A6B5F]">
                    {businessConfig.city}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#EFE5D7] border border-[#DDCFBD] flex items-center justify-center text-[#1D4533] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F150C]">
                    WhatsApp Reservasi
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-[#1D4533] mt-0.5">
                    {businessConfig.whatsappDisplay}
                  </p>
                  <a
                    href={`https://wa.me/${businessConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1D4533] hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>Kirim pesan langsung</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#EFE5D7] border border-[#DDCFBD] flex items-center justify-center text-[#1D4533] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F150C]">
                    Jam Operasional
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F150C] font-semibold mt-0.5">
                    {businessConfig.openingHours.days}: {businessConfig.openingHours.hours}
                  </p>
                  <p className="text-[11px] text-[#7A6B5F] mt-0.5">
                    {businessConfig.openingHours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Get Directions */}
            <div className="pt-1">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-wider uppercase rounded-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5"
              >
                <Navigation className="w-4 h-4 text-[#C8A27A]" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Card (Right 6 Cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF6F0] rounded-xl border border-[#E2D5C3] overflow-hidden shadow-sm flex flex-col">
              {/* Map Graphic Area */}
              <div className="relative h-64 sm:h-72 w-full bg-[#E8DDD0] flex items-center justify-center p-6 text-center">
                <div className="space-y-3.5 max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-[#1D4533] text-[#F3E9DC] flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-7 h-7 text-[#C8A27A]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#1F150C]">
                      Bale Spa Family Reflexology
                    </h4>
                    <p className="text-xs text-[#5A4A3E] mt-1">
                      {businessConfig.address}
                    </p>
                  </div>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF6F0] hover:bg-white text-[#1D4533] text-xs font-bold tracking-wider uppercase rounded-sm border border-[#E2D5C3] shadow-2xs transition-colors"
                  >
                    <span>Buka Peta Navigasi</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#1D4533]" />
                  </a>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="p-5 sm:p-6 bg-[#FAF6F0] border-t border-[#E2D5C3]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4533] mb-3">
                  Jadwal Buka Lengkap
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#4E3F33]">
                  {businessConfig.scheduleList.map((item) => (
                    <div key={item.day} className="flex justify-between border-b border-[#E2D5C3]/60 pb-1">
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
