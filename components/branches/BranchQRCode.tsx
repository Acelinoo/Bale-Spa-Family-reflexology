"use client";

import React from "react";
import { Globe, Star, QrCode, ExternalLink } from "lucide-react";
import { getBranchById, isPlaceholderReviewUrl } from "@/config/branches";

export interface BranchQRCodeProps {
  branchId: string;
  type: "website" | "review";
  url?: string;
  className?: string;
}

export default function BranchQRCode({
  branchId,
  type,
  url,
  className = "",
}: BranchQRCodeProps) {
  const branch = getBranchById(branchId);
  const targetUrl =
    url ||
    (type === "website"
      ? branch.websiteUrl
      : branch.reviewUrl);

  const isReviewPlaceholder =
    type === "review" && isPlaceholderReviewUrl(targetUrl);

  // Gunakan QR Server API yang ringan dan akurat jika URL valid
  const qrImageSrc = !isReviewPlaceholder
    ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
        targetUrl
      )}&margin=8&format=svg`
    : null;

  return (
    <div
      className={`rounded-xl border border-[#EAE4DC] bg-white p-5 text-center shadow-xs flex flex-col items-center justify-between space-y-3 ${className}`}
    >
      {/* Header Tag */}
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D4533]">
        {type === "website" ? (
          <>
            <Globe className="w-3.5 h-3.5" />
            <span>QR Website ({branch.shortName})</span>
          </>
        ) : (
          <>
            <Star className="w-3.5 h-3.5 text-[#F5A623] fill-[#F5A623]" />
            <span>QR Google Review ({branch.shortName})</span>
          </>
        )}
      </div>

      {/* QR Code Container */}
      <div className="w-48 h-48 rounded-lg bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center relative overflow-hidden p-2">
        {isReviewPlaceholder ? (
          <div className="text-center p-3 space-y-2">
            <QrCode className="w-10 h-10 text-[#7A6B5F]/40 mx-auto" />
            <span className="text-[11px] font-bold text-[#1F150C] block">
              Menunggu Review URL
            </span>
            <p className="text-[10px] text-[#7A6B5F] leading-tight">
              QR Code ulasan akan aktif otomatis setelah <code className="bg-amber-100 px-1 py-0.5 rounded text-[9px] font-mono">{branch.reviewUrl}</code> diisi URL asli.
            </p>
          </div>
        ) : qrImageSrc ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrImageSrc}
              alt={`QR Code ${type} ${branch.name}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ) : null}
      </div>

      {/* Description & Link Target */}
      <div className="space-y-1 w-full text-center">
        <p className="text-[11px] font-semibold text-[#1F150C] truncate">
          Cabang {branch.name}
        </p>
        <p className="text-[10px] text-[#7A6B5F] font-mono truncate px-2">
          {targetUrl}
        </p>

        {!isReviewPlaceholder && (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-[#1D4533] hover:underline font-bold inline-flex items-center gap-1 pt-1"
          >
            <span>Buka Tautan Langsung</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        )}
      </div>
    </div>
  );
}
