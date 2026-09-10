"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, MessageCircle } from "lucide-react";

export interface PrototypePreviewModalProps {
  clientName?: string;
  brandName?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  storageKey?: string;
  forceOpen?: boolean;
  onClose?: () => void;
}

export default function PrototypePreviewModal({
  clientName = "Bale Spa Family Reflexology",
  brandName = "GerobakLink",
  whatsappNumber = "6289655223792",
  whatsappMessage,
  storageKey = "balespa_prototype_preview_dismissed",
  forceOpen = false,
  onClose,
}: PrototypePreviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const defaultMessage = `Halo ${brandName}, saya tertarik untuk membuat website resmi untuk bisnis saya seperti contoh website ${clientName}. Boleh minta informasi paket dan detailnya?`;
  const finalMessage = whatsappMessage || defaultMessage;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

  // Cek sessionStorage saat komponen mount di browser
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);

      if (forceOpen) {
        setIsOpen(true);
        requestAnimationFrame(() => setIsAnimating(true));
        return;
      }

      try {
        const isDismissed = sessionStorage.getItem(storageKey);
        if (!isDismissed) {
          setIsOpen(true);
          requestAnimationFrame(() => setIsAnimating(true));
        }
      } catch {
        setIsOpen(true);
        requestAnimationFrame(() => setIsAnimating(true));
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [forceOpen, storageKey]);

  // Listener untuk event khusus membuka kembali modal prototype
  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      requestAnimationFrame(() => setIsAnimating(true));
    };
    window.addEventListener("open-prototype-preview", handleOpenEvent);
    return () => window.removeEventListener("open-prototype-preview", handleOpenEvent);
  }, []);

  // Handler menutup modal
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    // Simpan ke sessionStorage agar tidak terus menerus mengganggu selama sesi aktif
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch {
      // Abaikan error storage
    }

    setTimeout(() => {
      setIsOpen(false);
      if (onClose) onClose();
    }, 200);
  }, [storageKey, onClose]);

  // Keyboard navigation: Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Kunci scroll body saat modal aktif
  useEffect(() => {
    if (isOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      aria-describedby="preview-modal-desc-1"
      className={`fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-200 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Overlay dengan nuansa Bale Spa Espresso dan backdrop blur halus */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#1F150C]/65 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container dengan estetika hangat Bale Spa */}
      <div
        className={`relative w-full max-w-lg bg-[#FAF6F0] border border-[#E2D5C3] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#1F150C] transform transition-all duration-200 ease-out ${
          isAnimating ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-2 opacity-0"
        }`}
      >
        {/* Tombol Tutup (X) */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-lg text-[#5A4A3E] hover:text-[#1F150C] hover:bg-[#EFE4D6]/60 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1D4533]"
          aria-label="Tutup preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-4">
          {/* Badge / Label kecil subtle dengan tema warna Bale Spa */}
          <div>
            <span className="inline-flex items-center text-[11px] font-semibold tracking-wider uppercase text-[#1D4533] bg-[#EFE4D6] border border-[#E2D5C3] px-2.5 py-1 rounded-md">
              Prototype Preview
            </span>
          </div>

          {/* Judul Modal - Font Serif Cormorant Garamond */}
          <div>
            <h2
              id="preview-modal-title"
              className="font-serif text-2xl sm:text-3xl font-normal text-[#1F150C] tracking-tight"
            >
              Website Demo
            </h2>
          </div>

          {/* Paragraf Deskripsi */}
          <div className="space-y-2.5 text-sm sm:text-[15px] leading-relaxed text-[#5A4A3E]">
            <p id="preview-modal-desc-1">
              Website ini merupakan contoh/prototype yang dibuat khusus untuk{" "}
              <strong className="font-semibold text-[#1F150C]">{clientName}</strong> dan belum
              menjadi website resmi.
            </p>
            <p>
              Versi resmi nantinya dapat disesuaikan dengan menu terbaru, harga, informasi bisnis,
              foto produk, kontak, serta kebutuhan {clientName}.
            </p>
          </div>

          {/* CTA Box Information */}
          <div className="bg-[#EFE4D6]/70 rounded-xl p-4 border border-[#E2D5C3] mt-1">
            <p className="font-semibold text-sm sm:text-base text-[#1F150C]">
              Tertarik menggunakan website ini untuk bisnis Kakak?
            </p>
            <p className="text-xs sm:text-sm text-[#5A4A3E] mt-0.5">
              Hubungi {brandName} untuk mendapatkan versi resminya.
            </p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-col-reverse sm:flex-row items-center gap-3 pt-2">
            {/* Secondary CTA: Lihat Website */}
            <button
              type="button"
              onClick={handleClose}
              className="w-full sm:w-auto sm:flex-1 py-3 px-5 text-sm font-medium text-[#5A4A3E] hover:text-[#1F150C] bg-transparent hover:bg-[#EFE4D6]/60 border border-[#D5C6B3] rounded-xl transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1D4533]"
            >
              Lihat Website
            </button>

            {/* Primary CTA: Hubungi GerobakLink via WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:flex-1 py-3 px-5 text-sm font-medium text-[#F3E9DC] bg-[#1D4533] hover:bg-[#163728] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C8A27A]"
            >
              <MessageCircle className="w-4 h-4 text-[#C8A27A] group-hover:text-white transition-colors" />
              <span>Hubungi {brandName}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
