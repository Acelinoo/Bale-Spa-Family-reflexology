import React from "react";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { label: "Family Reflexology", href: "#services" },
    { label: "Foot Reflexology", href: "#services" },
    { label: "Full Body Massage", href: "#services" },
    { label: "Head & Shoulder Massage", href: "#services" },
    { label: "Back Massage", href: "#services" },
    { label: "Spa Package", href: "#services" },
  ];

  return (
    <footer className="bg-[#12241A] text-[#FAF7F2] pt-16 pb-12 border-t border-[#233A2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#233A2D]/80">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] text-[#1B3B2B] flex items-center justify-center font-serif font-bold text-xl">
                B
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2] block leading-tight">
                  BALE SPA
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#C5A880] uppercase block">
                  Family Reflexology
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D1DDD5] leading-relaxed max-w-sm pt-2">
              &quot;Your place to relax, restore, and reconnect.&quot;
            </p>
            <p className="text-xs text-[#9BB1A4] leading-relaxed max-w-sm">
              Menghadirkan kenyamanan pijat refleksi dan terapi tubuh keluarga dengan suasana hangat, higienis, dan terapis profesional terpercaya.
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D1DDD5]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#FAF7F2] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#385A42]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D1DDD5]">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#FAF7F2] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#385A42]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              Contact &amp; Hours
            </h3>
            <ul className="space-y-3 text-xs text-[#D1DDD5]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  {businessConfig.address}, {businessConfig.city}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${businessConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors underline-offset-2 hover:underline"
                >
                  WhatsApp: {businessConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-[#FAF7F2]">
                    {businessConfig.openingHours.days}
                  </span>
                  <span className="block text-[#9BB1A4]">
                    {businessConfig.openingHours.hours}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9384]">
          <p>© 2026 Bale Spa Family Reflexology. All rights reserved.</p>
          <p className="text-[11px] text-[#556F60]">
            Crafted for pure family wellness and authentic relaxation.
          </p>
        </div>
      </div>
    </footer>
  );
}
