"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { SpaLotusIcon } from "@/components/ui/SpaIcons";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
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
    } else {
      const bookingSec = document.querySelector("#booking");
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBF9F4]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D4] py-3.5"
          : "bg-[#FBF9F4] border-b border-[#EAE3D4]/40 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo (Persis Gambar 1) */}
        <Link href="#home" className="group flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2E4A35] text-[#FAF7F2] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
            <SpaLotusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1B3324] leading-none">
              BALE SPA
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-[#425F49] uppercase mt-0.5">
              Family Reflexology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Persis Gambar 1) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold tracking-wider text-[#4A594E] uppercase hover:text-[#1B3324] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2E4A35] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA (Persis Gambar 1) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleBookingAction}
            className="px-5 py-2.5 bg-[#2E4A35] hover:bg-[#223827] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-sm shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer active:translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D8C6A5]" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-[#1B3324] hover:bg-[#EFE9DC] transition-colors focus:outline-none"
            aria-label="Buka Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F4] border-b border-[#EAE3D4] px-5 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold tracking-wider text-[#1B3324] uppercase py-2 border-b border-[#EAE3D4]/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={handleBookingAction}
              className="w-full py-3 bg-[#2E4A35] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase rounded-sm shadow-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D8C6A5]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
