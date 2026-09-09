"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const { currentBranch, openBranchModal } = useBranch();
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Booking", href: "#booking", isBooking: true },
  ];

  const serviceLinks = [
    { label: "Aromatherapy Massage", href: "#services" },
    { label: "Hot Stone Massage", href: "#services" },
    { label: "Facial Treatments", href: "#services" },
    { label: "Reflexology", href: "#services" },
    { label: "Body Wraps & Massage", href: "#services" },
    { label: "Spa Packages", href: "#services" },
  ];

  return (
    <footer className="bg-[#1F150C] text-[#F3E9DC] pt-12 pb-8 sm:pt-16 sm:pb-10 border-t border-[#352516]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-[#352516]">
          {/* Col 1: Brand Info (Desktop 4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#C5A880]/50 shadow-md shrink-0">
                <Image
                  src="/images/bale-spa-logo.jpg"
                  alt="Bale Spa Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F3E9DC] block leading-none">
                  BALE SPA
                </span>
                <span className="text-[9px] font-semibold tracking-[0.22em] text-[#C5A880] uppercase block mt-1">
                  Family Reflexology
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D1C2B2] leading-relaxed max-w-sm">
              A peaceful sanctuary dedicated to your well-being. Relax, renew, and reconnect with our expert care in total serenity.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1D4533] hover:bg-[#2A5F47] text-[#F3E9DC] flex items-center justify-center transition-all duration-200 text-xs border border-[#C5A880]/30 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1D4533] hover:bg-[#2A5F47] text-[#F3E9DC] flex items-center justify-center transition-all duration-200 text-xs border border-[#C5A880]/30 shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-[2]"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sesuai instruksi: RAPI DI MOBILE (Grid 2 Kolom untuk Links & Services agar tidak panjang ke bawah) */}
          <div className="grid grid-cols-2 lg:col-span-5 gap-6">
            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold tracking-widest text-[#C5A880] uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#B7CABF]">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    {item.isBooking && onOpenBooking ? (
                      <button
                        onClick={onOpenBooking}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold tracking-widest text-[#C5A880] uppercase">
                Our Services
              </h4>
              <ul className="space-y-2 text-xs text-[#B7CABF]">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors line-clamp-1"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Contact Us (Desktop 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-bold tracking-widest text-[#C5A880] uppercase">
                Cabang {currentBranch.shortName}
              </h4>
              <button
                onClick={openBranchModal}
                className="text-[10px] text-[#C5A880] hover:text-white underline cursor-pointer"
              >
                Ganti Cabang
              </button>
            </div>
            <ul className="space-y-2.5 text-xs text-[#B7CABF]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a
                  href={`https://wa.me/${currentBranch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {currentBranch.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>contact@balespafamily.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="line-clamp-2">
                  {currentBranch.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#789080]">
          <p>© 2026 Bale Spa Family Reflexology. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Baleendah · Soreang · Ciwastra</span>
            <span>·</span>
            <button onClick={openBranchModal} className="hover:text-white underline cursor-pointer">
              Pilih Cabang
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
