"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar, MapPin, ChevronDown } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentBranch, openBranchModal } = useBranch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Layanan", href: "#services" },
    { label: "Cabang", href: "#branches" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Ulasan", href: "#reviews" },
    { label: "Kontak", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookingAction = () => {
    setIsMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EAE4DC] py-2.5 sm:py-3"
          : "bg-white border-b border-[#EAE4DC]/60 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo with Authentic Uploaded Logo */}
        <Link href="#home" className="group flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-xs border border-[#1D4533]/30 bg-[#1D4533] shrink-0 transition-transform duration-300 group-hover:scale-105 relative">
            <Image
              src="/images/bale-spa-logo.jpg"
              alt="Bale Spa Family Reflexology Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F150C] leading-none">
              Bale Spa
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#1D4533] uppercase mt-0.5">
              Family Reflexology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold tracking-wider text-[#1F150C]/80 uppercase hover:text-[#1D4533] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1D4533] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Branch Selector & Booking Button */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Branch Pill Selector Button */}
          <button
            onClick={openBranchModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F3E9DC] text-[#1D4533] border border-[#EAE4DC] hover:border-[#1D4533]/40 text-xs font-semibold transition-all cursor-pointer shadow-2xs active:scale-95"
            title="Klik untuk memilih atau mengganti cabang Bale Spa"
          >
            <MapPin className="w-3.5 h-3.5 text-[#1D4533]" />
            <span>Cabang {currentBranch?.shortName || "Pilih Cabang"}</span>
            <ChevronDown className="w-3 h-3 text-[#5A4A3E]" />
          </button>

          {/* Book Appointment CTA Button */}
          <button
            onClick={handleBookingAction}
            className="px-5 py-2.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-[0.14em] uppercase rounded-sm shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer hover:shadow-md active:translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C8A27A]" />
            <span>Reservasi Sekarang</span>
          </button>
        </div>

        {/* Mobile Right Controls: Branch Pill + Menu Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={openBranchModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#FAF7F2] text-[#1D4533] border border-[#EAE4DC] text-[11px] font-semibold"
          >
            <MapPin className="w-3 h-3 text-[#1D4533]" />
            <span>{currentBranch?.shortName || "Cabang"}</span>
            <ChevronDown className="w-2.5 h-2.5 text-[#5A4A3E]" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-[#1F150C] hover:bg-[#FAF7F2] transition-colors focus:outline-none"
            aria-label="Buka Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1D4533]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1D4533]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAE4DC] px-5 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-md">
          {/* Mobile Current Branch Indicator */}
          <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1D4533]" />
              <div className="text-left">
                <span className="text-[10px] text-[#7A6B5F] uppercase tracking-wider block font-bold">Cabang Aktif</span>
                <span className="text-xs font-bold text-[#1F150C]">{currentBranch.name}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBranchModal();
              }}
              className="px-2.5 py-1 text-[11px] font-bold text-[#1D4533] bg-white border border-[#1D4533]/40 rounded-sm hover:bg-[#1D4533] hover:text-white transition-colors"
            >
              Ganti
            </button>
          </div>

          <div className="flex flex-col space-y-2.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold tracking-wider text-[#1F150C] uppercase py-2 border-b border-[#EAE4DC]/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={handleBookingAction}
              className="w-full py-3 bg-[#1D4533] text-[#F3E9DC] text-xs font-bold tracking-wider uppercase rounded-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C8A27A]" />
              <span>Reservasi Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
