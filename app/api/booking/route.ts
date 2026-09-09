import { NextResponse } from "next/server";
import { businessConfig } from "@/config/business";
import { SERVICES } from "@/data/services";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      customerName,
      customerPhone,
      serviceId,
      durationIndex,
      peopleCount,
      bookingDate,
      bookingTime,
      notes,
    } = body;

    // Server-side validation
    if (!customerName || !customerName.trim()) {
      return NextResponse.json(
        { success: false, message: "Nama lengkap tidak boleh kosong." },
        { status: 400 }
      );
    }

    if (!customerPhone || !customerPhone.trim()) {
      return NextResponse.json(
        { success: false, message: "Nomor WhatsApp tidak boleh kosong." },
        { status: 400 }
      );
    }

    if (!serviceId) {
      return NextResponse.json(
        { success: false, message: "Silakan pilih jenis layanan." },
        { status: 400 }
      );
    }

    if (!bookingDate) {
      return NextResponse.json(
        { success: false, message: "Silakan pilih tanggal reservasi." },
        { status: 400 }
      );
    }

    if (!bookingTime) {
      return NextResponse.json(
        { success: false, message: "Silakan pilih jam reservasi." },
        { status: 400 }
      );
    }

    const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
    const duration = service.durations[durationIndex || 0] || service.durations[0];
    const count = Number(peopleCount) || 1;

    // Format WhatsApp message terstruktur rapi
    const cleanPhone = businessConfig.whatsapp.replace(/\D/g, "");
    const waLines = [
      "*FORMULIR RESERVASI - BALE SPA*",
      "──────────────────────",
      `Halo Admin *${businessConfig.name}*,`,
      "Saya ingin melakukan reservasi layanan di Bale Spa Family Reflexology dengan rincian sebagai berikut:",
      "",
      `📍 *Cabang:* ${businessConfig.name} (${businessConfig.city})`,
      `👤 *Nama Pemesan:* ${customerName.trim()}`,
      `📱 *Nomor WhatsApp:* ${customerPhone.trim()}`,
      `💆 *Pilihan Layanan:* ${service.title}`,
      `⏳ *Durasi & Tarif:* ${duration.label} (${duration.priceFormatted})`,
      `👥 *Jumlah Pengunjung:* ${count} Orang`,
      `📅 *Tanggal Kedatangan:* ${bookingDate}`,
      `⏰ *Waktu Kedatangan:* ${bookingTime} WIB`,
      `📝 *Catatan Khusus:* ${notes && notes.trim() ? notes.trim() : "-"}`,
      "──────────────────────",
      "Mohon konfirmasi ketersediaan jadwal terapis pada waktu tersebut.",
      "",
      "Terima kasih banyak.",
    ];

    const waText = waLines.join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
      waText
    )}`;

    return NextResponse.json({
      success: true,
      message: "Reservasi berhasil diproses.",
      data: {
        whatsappUrl,
        bookingDetails: {
          customerName,
          customerPhone,
          service: service.title,
          duration: duration.label,
          peopleCount: count,
          bookingDate,
          bookingTime,
          notes,
        },
      },
    });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan saat memproses reservasi." },
      { status: 500 }
    );
  }
}
