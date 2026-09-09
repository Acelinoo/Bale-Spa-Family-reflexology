export interface Branch {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  whatsapp: string;
  whatsappDisplay: string;
  googleMapsUrl: string;
  googleReviewUrl: string;
  openingHours: {
    days: string;
    hours: string;
    note: string;
  };
  scheduleList: {
    day: string;
    hours: string;
  }[];
}

export const BRANCHES: Branch[] = [
  {
    id: "baleendah",
    name: "Bale Spa - Baleendah Bandung",
    shortName: "Baleendah",
    slug: "baleendah",
    address: "Jl. Jaksa Naranata No.7A, Baleendah, Kec. Baleendah, Kabupaten Bandung, Jawa Barat 40375",
    district: "Baleendah",
    city: "Kabupaten Bandung",
    postalCode: "40375",
    whatsapp: "6289524632932",
    whatsappDisplay: "+62 895-2463-2932",
    googleMapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology,+Jl.+Jaksa+Naranata+No.7A,+Baleendah,+Kec.+Baleendah,+Kabupaten+Bandung,+Jawa+Barat+40375/data=!4m2!3m1!1s0x4d61414feedd6f4f:0xa7361e461a4f2d31",
    googleReviewUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology,+Jl.+Jaksa+Naranata+No.7A,+Baleendah,+Kec.+Baleendah,+Kabupaten+Bandung,+Jawa+Barat+40375/data=!4m2!3m1!1s0x4d61414feedd6f4f:0xa7361e461a4f2d31",
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
      { day: "Sabtu", hours: "09:00 - 21:00 WIB" },
      { day: "Minggu", hours: "09:00 - 21:00 WIB" },
    ],
  },
  {
    id: "soreang",
    name: "Bale Spa - Soreang",
    shortName: "Soreang",
    slug: "soreang",
    address: "Jl. Raya Gading Tutuka No.5, Cingcin, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40921",
    district: "Soreang",
    city: "Kabupaten Bandung",
    postalCode: "40921",
    whatsapp: "6285182225677",
    whatsappDisplay: "+62 851-8222-5677",
    googleMapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+reflexology+Soreang,+1+No,+Jl.+Raya+Gading+Tutuka+No.5,+Cingcin,+Kec.+Soreang,+Kabupaten+Bandung,+Jawa+Barat+40921/data=!4m2!3m1!1s0x2e68ed001517bf5b:0x1a0d801903b15b0b",
    googleReviewUrl: "https://www.google.com/maps/place/Bale+Spa+Family+reflexology+Soreang,+1+No,+Jl.+Raya+Gading+Tutuka+No.5,+Cingcin,+Kec.+Soreang,+Kabupaten+Bandung,+Jawa+Barat+40921/data=!4m2!3m1!1s0x2e68ed001517bf5b:0x1a0d801903b15b0b",
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
      { day: "Sabtu", hours: "09:00 - 21:00 WIB" },
      { day: "Minggu", hours: "09:00 - 21:00 WIB" },
    ],
  },
  {
    id: "ciwastra",
    name: "Bale Spa - Ciwastra",
    shortName: "Ciwastra",
    slug: "ciwastra",
    address: "Jl. Ciwastra No.285B, Margasari, Kec. Buahbatu, Kota Bandung, Jawa Barat 40292",
    district: "Buahbatu",
    city: "Kota Bandung",
    postalCode: "40292",
    whatsapp: "6285151220667",
    whatsappDisplay: "+62 851-5122-0667",
    googleMapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology+Ciwastra,+Jl.+Ciwastra+No.285B,+Margasari,+Kec.+Buahbatu,+Kota+Bandung,+Jawa+Barat+40292/data=!4m2!3m1!1s0x2e68e9406e92ff03:0xa1f73cc2dd290577",
    googleReviewUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology+Ciwastra,+Jl.+Ciwastra+No.285B,+Margasari,+Kec.+Buahbatu,+Kota+Bandung,+Jawa+Barat+40292/data=!4m2!3m1!1s0x2e68e9406e92ff03:0xa1f73cc2dd290577",
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
      { day: "Sabtu", hours: "09:00 - 21:00 WIB" },
      { day: "Minggu", hours: "09:00 - 21:00 WIB" },
    ],
  },
];

export const DEFAULT_BRANCH = BRANCHES[0];
