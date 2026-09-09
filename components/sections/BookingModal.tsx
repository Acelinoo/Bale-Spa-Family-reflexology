"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar, Clock, User, Phone, Users, FileText, Send, AlertCircle, CheckCircle } from "lucide-react";
import { businessConfig } from "@/config/business";
import { SERVICES, ServiceItem } from "@/data/services";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedServiceId,
}: BookingModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [serviceId, setServiceId] = useState(selectedServiceId || SERVICES[0].id);
  const [durationIndex, setDurationIndex] = useState(0);
  const [peopleCount, setPeopleCount] = useState(1);
  const [todayDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });
  const [bookingDate, setBookingDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });
  const [bookingTime, setBookingTime] = useState("10:00");
  const [notes, setNotes] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync state cleanly when prop changes per React guidelines
  const [prevSelectedId, setPrevSelectedId] = useState(selectedServiceId);
  if (selectedServiceId !== prevSelectedId) {
    setPrevSelectedId(selectedServiceId);
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
      setDurationIndex(0);
    }
  }

  // Keyboard escape listener and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService: ServiceItem =
    SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceId(e.target.value);
    setDurationIndex(0);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validations
    if (!customerName.trim()) {
      setErrorMessage("Silakan masukkan nama lengkap Anda.");
      return;
    }
    if (!customerPhone.trim()) {
      setErrorMessage("Silakan masukkan nomor WhatsApp aktif Anda.");
      return;
    }
    if (!serviceId) {
      setErrorMessage("Silakan pilih layanan refleksi yang diinginkan.");
      return;
    }
    if (!bookingDate) {
      setErrorMessage("Silakan tentukan tanggal reservasi.");
      return;
    }
    if (!bookingTime) {
      setErrorMessage("Silakan tentukan jam kedatangan.");
      return;
    }
    if (peopleCount < 1) {
      setErrorMessage("Jumlah orang minimal 1.");
      return;
    }

    const selectedDuration =
      currentService.durations[durationIndex] || currentService.durations[0];

    // Format WhatsApp message sesuai instruksi spesifikasi Bale Spa
    const waText = `Halo ${businessConfig.name},

Saya ingin melakukan reservasi.

Nama:
${customerName.trim()}

No. WhatsApp:
${customerPhone.trim()}

Layanan:
${currentService.title} (${selectedDuration.label} - ${selectedDuration.priceFormatted})

Jumlah Orang:
${peopleCount} orang

Tanggal:
${bookingDate}

Jam:
${bookingTime} WIB

Catatan:
${notes.trim() ? notes.trim() : "-"}

Terima kasih.`;

    const redirectUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
      waText
    )}`;

    setIsSuccess(true);

    // Open WhatsApp
    setTimeout(() => {
      window.open(redirectUrl, "_blank");
      setIsSuccess(false);
      onClose();
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F150C]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF6F0] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8DFD3] overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1D4533] text-[#F3E9DC] p-5 sm:p-6 flex items-center justify-between border-b border-[#2A5F47] shrink-0">
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
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase block">
                Reservasi Bale Spa
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3E9DC]">
                Book Your Appointment
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#163728] hover:bg-[#11291E] text-[#F3E9DC] flex items-center justify-center transition-colors cursor-pointer border border-[#C5A880]/20"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Form Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 flex-grow">
          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {isSuccess && (
            <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              <span>Membuka WhatsApp untuk mengonfirmasi reservasi Anda...</span>
            </div>
          )}

          <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-5">
            {/* Personal Details (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Nama Lengkap *</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Bapak Hendra"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] placeholder-[#9BA59F] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
                />
              </div>

              {/* No WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Nomor WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] placeholder-[#9BA59F] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
                />
              </div>
            </div>

            {/* Service & Duration Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pilihan Layanan */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5">
                  Pilihan Layanan *
                </label>
                <select
                  value={serviceId}
                  onChange={handleServiceChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pilihan Durasi & Harga */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5">
                  Durasi &amp; Tarif *
                </label>
                <select
                  value={durationIndex}
                  onChange={(e) => setDurationIndex(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
                >
                  {currentService.durations.map((d, index) => (
                    <option key={index} value={index}>
                      {d.label} - {d.priceFormatted}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* People, Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Jumlah Orang */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Jumlah Orang *</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(Math.max(1, parseInt(e.target.value) || 1))}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
                />
              </div>

              {/* Tanggal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Tanggal *</span>
                </label>
                <input
                  type="date"
                  min={todayDate}
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
                />
              </div>

              {/* Jam */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Jam Kedatangan *</span>
                </label>
                <select
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
                >
                  <option value="09:00">09:00 WIB</option>
                  <option value="10:00">10:00 WIB</option>
                  <option value="11:00">11:00 WIB</option>
                  <option value="12:00">12:00 WIB</option>
                  <option value="13:00">13:00 WIB</option>
                  <option value="14:00">14:00 WIB</option>
                  <option value="15:00">15:00 WIB</option>
                  <option value="16:00">16:00 WIB</option>
                  <option value="17:00">17:00 WIB</option>
                  <option value="18:00">18:00 WIB</option>
                  <option value="19:00">19:00 WIB</option>
                  <option value="20:00">20:00 WIB (Last Order)</option>
                </select>
              </div>
            </div>

            {/* Catatan Tambahan */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#385A42]" />
                <span>Catatan Tambahan (Opsional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Contoh: Fokuskan pijatan di area pundak, atau preferensi terapis..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#1A261D] placeholder-[#9BA59F] focus:outline-none focus:ring-2 focus:ring-[#1E3827]/30 focus:border-[#1E3827] transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 border border-[#C5A880]/30"
              >
                <Send className="w-4 h-4 text-[#C5A880]" />
                <span>KONFIRMASI RESERVASI (VIA WHATSAPP)</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
