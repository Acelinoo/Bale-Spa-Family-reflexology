export interface Branch {
  id: "baleendah" | "soreang" | "ciwastra" | string;
  name: string;
  shortName: string;
  slug: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  mapsUrl: string;
  googleMapsUrl: string; // Alias
  reviewUrl: string;
  googleReviewUrl: string; // Alias
  websiteUrl: string;
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
    name: "Bale Spa Family Reflexology Baleendah",
    shortName: "Baleendah",
    slug: "baleendah",
    address: "Jl. Jaksa Naranata No.7A, Baleendah, Kec. Baleendah, Kabupaten Bandung, Jawa Barat 40375",
    district: "Baleendah",
    city: "Kabupaten Bandung",
    postalCode: "40375",
    whatsapp: "6289524632932",
    whatsappDisplay: "+62 895-2463-2932",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=6289524632932&text&type=phone_number&app_absent=0",
    mapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology,+Jl.+Jaksa+Naranata+No.7A,+Baleendah,+Kec.+Baleendah,+Kabupaten+Bandung,+Jawa+Barat+40375/data=!4m2!3m1!1s0x4d61414feedd6f4f:0xa7361e461a4f2d31?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjI0LjEYACDXggMqhwEsOTQyNjc3MjYsOTQyNzU0MDcsOTQyNzUzMTAsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAklE&skid=1c57aa4d-be69-4e70-8efb-0003030f517f",
    googleMapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology,+Jl.+Jaksa+Naranata+No.7A,+Baleendah,+Kec.+Baleendah,+Kabupaten+Bandung,+Jawa+Barat+40375/data=!4m2!3m1!1s0x4d61414feedd6f4f:0xa7361e461a4f2d31?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjI0LjEYACDXggMqhwEsOTQyNjc3MjYsOTQyNzU0MDcsOTQyNzUzMTAsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAklE&skid=1c57aa4d-be69-4e70-8efb-0003030f517f",
    reviewUrl: "REVIEW_URL_BALEENDAH",
    googleReviewUrl: "REVIEW_URL_BALEENDAH",
    websiteUrl: "https://balespafamily.com/?branch=baleendah",
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
    name: "Bale Spa Family Reflexology Soreang",
    shortName: "Soreang",
    slug: "soreang",
    address: "Jl. Raya Gading Tutuka No.5, Cingcin, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40921",
    district: "Soreang",
    city: "Kabupaten Bandung",
    postalCode: "40921",
    whatsapp: "6285182225677",
    whatsappDisplay: "+62 851-8222-5677",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=6285182225677&text&type=phone_number&app_absent=0",
    mapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+reflexology+Soreang,+1+No,+Jl.+Raya+Gading+Tutuka+No.5,+Cingcin,+Kec.+Soreang,+Kabupaten+Bandung,+Jawa+Barat+40921/data=!4m2!3m1!1s0x2e68ed001517bf5b:0x1a0d801903b15b0b?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjI0LjEYACCenQoqhwEsOTQyNjc3MjYsOTQyNzU0MDcsOTQyNzUzMTAsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAklE&skid=ff1c2ce9-74ff-4083-aa50-3f78c57d9c18",
    googleMapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+reflexology+Soreang,+1+No,+Jl.+Raya+Gading+Tutuka+No.5,+Cingcin,+Kec.+Soreang,+Kabupaten+Bandung,+Jawa+Barat+40921/data=!4m2!3m1!1s0x2e68ed001517bf5b:0x1a0d801903b15b0b?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjI0LjEYACCenQoqhwEsOTQyNjc3MjYsOTQyNzU0MDcsOTQyNzUzMTAsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAklE&skid=ff1c2ce9-74ff-4083-aa50-3f78c57d9c18",
    reviewUrl: "REVIEW_URL_SOREANG",
    googleReviewUrl: "REVIEW_URL_SOREANG",
    websiteUrl: "https://balespafamily.com/?branch=soreang",
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
    name: "Bale Spa Family Reflexology Ciwastra",
    shortName: "Ciwastra",
    slug: "ciwastra",
    address: "Jl. Ciwastra No.285B, Margasari, Kec. Buahbatu, Kota Bandung, Jawa Barat 40292",
    district: "Buahbatu",
    city: "Kota Bandung",
    postalCode: "40292",
    whatsapp: "6285151220667",
    whatsappDisplay: "+62 851-5122-0667",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=6285151220667&text&type=phone_number&app_absent=0",
    mapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology+Ciwastra,+Jl.+Ciwastra+No.285B,+Margasari,+Kec.+Buahbatu,+Kota+Bandung,+Jawa+Barat+40292/data=!4m2!3m1!1s0x2e68e9406e92ff03:0xa1f73cc2dd290577!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjM1LjMYACDXggMqqQEsMTAwODM0MjMyLDEyMTgxNjQ2MSw5NDI2NzcyNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk3NzYxLDEwMDc5NjUzNSw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MjAyMzcsMTAwODIyNDk0QgJJRA%3D%3D&skid=043bc4f9-5714-49b9-890a-73d474f7fb0f&g_st=ac",
    googleMapsUrl: "https://www.google.com/maps/place/Bale+Spa+Family+Reflexology+Ciwastra,+Jl.+Ciwastra+No.285B,+Margasari,+Kec.+Buahbatu,+Kota+Bandung,+Jawa+Barat+40292/data=!4m2!3m1!1s0x2e68e9406e92ff03:0xa1f73cc2dd290577!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjM1LjMYACDXggMqqQEsMTAwODM0MjMyLDEyMTgxNjQ2MSw5NDI2NzcyNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk3NzYxLDEwMDc5NjUzNSw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MjAyMzcsMTAwODIyNDk0QgJJRA%3D%3D&skid=043bc4f9-5714-49b9-890a-73d474f7fb0f&g_st=ac",
    reviewUrl: "REVIEW_URL_CIWASTRA",
    googleReviewUrl: "REVIEW_URL_CIWASTRA",
    websiteUrl: "https://balespafamily.com/?branch=ciwastra",
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

// Helper functions
export function getBranchById(branchId?: string): Branch {
  if (!branchId) return DEFAULT_BRANCH;
  const normalized = branchId.toLowerCase().trim();
  const found = BRANCHES.find(
    (b) => b.id.toLowerCase() === normalized || b.slug.toLowerCase() === normalized
  );
  return found || DEFAULT_BRANCH;
}

export function isPlaceholderReviewUrl(url?: string): boolean {
  if (!url) return true;
  return url.startsWith("REVIEW_URL_") || url === "#";
}

export function getCleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, "");
}
