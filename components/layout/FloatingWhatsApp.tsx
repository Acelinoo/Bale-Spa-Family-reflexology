"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const { currentBranch } = useBranch();

  const defaultMessage = `Halo Admin ${currentBranch.name}, saya ingin menanyakan informasi layanan dan reservasi di Bale Spa Family Reflexology.`;
  const cleanPhone = currentBranch.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center bg-[#1B3B2B] text-[#FAF7F2] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md mr-2.5 transition-all duration-300 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span>Konsultasi WhatsApp</span>
        <div className="w-2 h-2 bg-[#1B3B2B] rotate-45 -mr-1 ml-1.5"></div>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat WhatsApp Bale Spa"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
