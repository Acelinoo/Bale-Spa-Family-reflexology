import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#E5DFD3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contact Details (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#385A42]"></span>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#385A42] uppercase">
                INFORMASI LOKASI &amp; KONTAK
              </span>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A261D] tracking-tight">
                Kunjungi Bale Spa
              </h2>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#385A42] uppercase mt-1">
                Family Reflexology
              </p>
            </div>

            <p className="text-sm text-[#556358] leading-relaxed">
              Kami siap menyambut kedatangan Anda dan keluarga untuk menikmati pengalaman relaksasi yang tenang, bersih, dan memulihkan energi tubuh.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 pt-2">
              {/* Alamat */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#1B3B2B] shrink-0">
                  <MapPin className="w-5 h-5 text-[#385A42]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A261D]">
                    Alamat Bale Spa
                  </h4>
                  <p className="text-xs sm:text-sm text-[#556358] mt-0.5">
                    {businessConfig.address}
                  </p>
                  <p className="text-xs text-[#7E8C83]">
                    {businessConfig.city}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#1B3B2B] shrink-0">
                  <Phone className="w-5 h-5 text-[#385A42]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A261D]">
                    WhatsApp Reservasi
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#1B3B2B] mt-0.5">
                    {businessConfig.whatsappDisplay}
                  </p>
                  <a
                    href={`https://wa.me/${businessConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#385A42] hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>Kirim pesan langsung</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#1B3B2B] shrink-0">
                  <Clock className="w-5 h-5 text-[#385A42]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A261D]">
                    Jam Operasional
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1A261D] font-medium mt-0.5">
                    {businessConfig.openingHours.days}: {businessConfig.openingHours.hours}
                  </p>
                  <p className="text-[11px] text-[#7E8C83] mt-0.5">
                    {businessConfig.openingHours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Get Directions */}
            <div className="pt-2">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1B3B2B] hover:bg-[#142C20] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:translate-y-0.5"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Card (Right 6 Cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] rounded-xl border border-[#E5DFD3] overflow-hidden shadow-sm flex flex-col">
              {/* Map Graphic Area */}
              <div className="relative h-72 sm:h-80 w-full bg-[#EAE3D4] flex items-center justify-center p-6 text-center">
                {/* Visual Map Pin & Pattern */}
                <div className="space-y-4 max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-[#1B3B2B] text-[#FAF7F2] flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <MapPin className="w-7 h-7 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#1A261D]">
                      Bale Spa Family Reflexology
                    </h4>
                    <p className="text-xs text-[#556358] mt-1">
                      {businessConfig.address}
                    </p>
                  </div>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFFFFF] hover:bg-[#FAF7F2] text-[#1B3B2B] text-xs font-bold tracking-wider uppercase rounded-lg border border-[#E5DFD3] shadow-xs transition-colors"
                  >
                    <span>Buka Peta Navigasi</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#385A42]" />
                  </a>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="p-6 bg-[#FAF7F2] border-t border-[#E5DFD3]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#385A42] mb-3">
                  Jadwal Buka Lengkap
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#4E5952]">
                  {businessConfig.scheduleList.map((item) => (
                    <div key={item.day} className="flex justify-between border-b border-[#E5DFD3]/40 pb-1">
                      <span className="font-medium">{item.day}</span>
                      <span className="text-[#1A261D] font-semibold">{item.hours}</span>
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
