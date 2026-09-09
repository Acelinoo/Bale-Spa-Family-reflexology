export interface BusinessConfig {
  name: string;
  tagline: string;
  subheadline: string;
  whatsapp: string;
  whatsappDisplay: string;
  googleReviewUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  address: string;
  city: string;
  postalCode?: string;
  email?: string;
  openingHours: {
    days: string;
    hours: string;
    note?: string;
  };
  scheduleList: {
    day: string;
    hours: string;
  }[];
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  trustPoints: string[];
}

export const businessConfig: BusinessConfig = {
  name: "Bale Spa Family Reflexology",
  tagline: "Relax. Restore. Reconnect.",
  subheadline:
    "Tempat nyaman untuk menikmati reflexology dan perawatan tubuh bersama keluarga.",
  // Ganti nomor WhatsApp bisnis di sini (format internasional tanpa tanda +, contoh: 628123456789)
  whatsapp: "628XXXXXXXXXX",
  whatsappDisplay: "+62 8XX-XXXX-XXXX",
  
  // Ganti dengan URL Google Business Profile Bale Spa asli
  googleReviewUrl: "PASTE_GOOGLE_REVIEW_URL_HERE",
  
  // Ganti dengan Link Google Maps lokasi Bale Spa
  googleMapsUrl: "PASTE_GOOGLE_MAPS_URL_HERE",
  googleMapsEmbedUrl: "",

  // Informasi Lokasi & Kontak
  address: "Jl. Terusan Soreang - Cipatik No. XX (Placeholder Alamat)",
  city: "Bandung, Jawa Barat",
  postalCode: "40911",
  email: "contact@balespafamily.com",

  // Jam Operasional
  openingHours: {
    days: "Setiap Hari (Senin - Minggu)",
    hours: "09:00 - 21:00 WIB",
    note: "Pemesanan terakhir (last order) pukul 20:00 WIB",
  },
  scheduleList: [
    { day: "Senin", hours: "09:00 - 21:00 WIB" },
    { day: "Selasa", hours: "09:00 - 21:00 WIB" },
    { day: "Rabu", hours: "09:00 - 21:00 WIB" },
    { day: "Kamis", hours: "09:00 - 21:00 WIB" },
    { day: "Jumat", hours: "09:00 - 21:00 WIB" },
    { day: "Sabtu", hours: "09:00 - 21:30 WIB" },
    { day: "Minggu", hours: "09:00 - 21:30 WIB" },
  ],

  // Statistik / Keunggulan
  stats: [
    {
      value: "500+",
      label: "Happy Clients",
      description: "Tamu & keluarga yang merasakan kenyamanan relaksasi kami",
    },
    {
      value: "5+",
      label: "Professional Therapists",
      description: "Terapis berpengalaman, ramah, dan bersertifikasi",
    },
    {
      value: "10+",
      label: "Treatment Options",
      description: "Pilihan variasi perawatan refleksi dan tubuh terlengkap",
    },
    {
      value: "100%",
      label: "Comfort & Care",
      description: "Komitmen higienitas, kebersihan, dan kenyamanan keluarga",
    },
  ],

  // Nilai Kepercayaan Utama di Bawah Hero
  trustPoints: [
    "Professional Therapist",
    "Comfortable & Clean",
    "Family Friendly",
  ],
};
