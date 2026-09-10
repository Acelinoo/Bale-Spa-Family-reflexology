"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRANCHES } from "@/config/branches";
import BranchCard from "./BranchCard";
// import { QrCode } from "lucide-react";
// import { useBranch } from "@/context/BranchContext";

interface BranchSelectorSectionProps {
  onOpenBookingForBranch?: (branchId: string) => void;
}

export default function BranchSelectorSection({
  onOpenBookingForBranch,
}: BranchSelectorSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  // const { openQrModal } = useBranch();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="branches"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE4DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D4533] uppercase">
              LOKASI OUTLET
            </span>
            <span className="h-px w-8 bg-[#1D4533]/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] tracking-tight">
            Temukan Cabang Bale Spa
          </h2>

          <p className="text-xs sm:text-sm text-[#5A4A3E] leading-relaxed max-w-lg mx-auto">
            Hadir di 3 lokasi strategis di Bandung: Baleendah, Soreang, dan Ciwastra. Pilih cabang terdekat untuk reservasi atau petunjuk arah langsung.
          </p>
        </div>

        {/* 3 Branch Cards Grid (Desktop 3 Cols, Tablet 3 Cols, Mobile Vertical) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {BRANCHES.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              onOpenBookingForBranch={onOpenBookingForBranch}
            />
          ))}
        </div>

        {/* Bottom Helper Bar: QR Code Access (Hidden) */}
        {/* 
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-white border border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center text-[#1D4533] shrink-0">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1F150C]">
                QR Code Akses Website &amp; Ulasan Tiap Cabang
              </h4>
              <p className="text-[11px] text-[#635345]">
                Pindai QR Code untuk membuka cabang otomatis atau memberikan ulasan langsung di meja kasir.
              </p>
            </div>
          </div>

          <button
            onClick={openQrModal}
            className="px-4 py-2 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-wider uppercase rounded-lg shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Lihat QR Code Cabang
          </button>
        </div>
        */}
      </div>
    </section>
  );
}
