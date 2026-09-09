"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Phone, Users, FileText, Send, AlertCircle, CheckCircle } from "lucide-react";
import { businessConfig } from "@/config/business";
import { SERVICES, ServiceItem } from "@/data/services";

interface BookingSectionProps {
  selectedServiceId?: string;
}

export default function BookingSection({
  selectedServiceId,
}: BookingSectionProps) {
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
    }, 400);
  };

  return (
    <section id="booking" className="py-20 lg:py-24 bg-[#F7F4EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#385A42]"></span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#385A42] uppercase">
              RESERVASI MUDAH &amp; CEPAT
            </span>
            <span className="h-px w-6 bg-[#385A42]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A261D] tracking-tight">
            Book Your Appointment
          </h2>

          <p className="text-sm text-[#556358] leading-relaxed">
            Pilih waktu dan layanan terbaik untuk Anda dan keluarga. Konfirmasi akan terhubung langsung ke WhatsApp kami.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-[#FFFFFF] rounded-xl border border-[#E5DFD3] shadow-md p-6 sm:p-10">
          {errorMessage && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {isSuccess && (
            <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              <span>
                Membuka WhatsApp untuk mengonfirmasi reservasi Anda...
              </span>
            </div>
          )}

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            {/* Personal Details (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Nama Lengkap *</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Bapak Hendra"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] placeholder-[#9BA59F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
                />
              </div>

              {/* No WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Nomor WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] placeholder-[#9BA59F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
                />
              </div>
            </div>

            {/* Service & Duration Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Pilihan Layanan */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2">
                  Pilihan Layanan *
                </label>
                <select
                  value={serviceId}
                  onChange={handleServiceChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2">
                  Durasi &amp; Tarif *
                </label>
                <select
                  value={durationIndex}
                  onChange={(e) => setDurationIndex(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Jumlah Orang */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2 flex items-center gap-1.5">
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
                  className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
                />
              </div>

              {/* Tanggal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Tanggal *</span>
                </label>
                <input
                  type="date"
                  min={todayDate}
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
                />
              </div>

              {/* Jam */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#385A42]" />
                  <span>Jam Kedatangan *</span>
                </label>
                <select
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A261D] mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#385A42]" />
                <span>Catatan Tambahan (Opsional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Contoh: Fokuskan pijatan di area pundak, atau preferensi terapis wanita/pria..."
                className="w-full px-4 py-3 rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] text-sm text-[#1A261D] placeholder-[#9BA59F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30 focus:border-[#1B3B2B] transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#1B3B2B] hover:bg-[#142C20] text-[#FAF7F2] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
              >
                <Send className="w-4 h-4 text-[#C5A880]" />
                <span>CONFIRM BOOKING (VIA WHATSAPP)</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-[#7E8C83]">
              *Data reservasi akan langsung diproses oleh tim resepsionis kami melalui WhatsApp resmi Bale Spa.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
