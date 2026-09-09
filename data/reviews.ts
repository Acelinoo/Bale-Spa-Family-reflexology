export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  source: "Google";
  avatar?: string;
  isDemo: boolean;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Hendra Wijaya",
    role: "Local Guide · Pengunjung Keluarga",
    rating: 5,
    text: "Tempatnya sangat bersih dan nyaman untuk bawa keluarga. Terapisnya sopan, teknik pijat refleksinya pas di titik pegal, dan suasananya benar-benar menenangkan. Sangat recommended setelah lelah bekerja sepekan.",
    date: "1 minggu yang lalu",
    source: "Google",
    avatar: "/images/client-amanda.jpg",
    isDemo: true,
  },
  {
    id: "rev-2",
    name: "Siti Rahmawati",
    role: "Pengunjung",
    rating: 5,
    text: "Pijat refleksi kaki dan punggungnya terbaik di kelasnya. Ruangan wangi aromaterapi alami dan tidak bising. Badan jadi enteng banget dan tidurnya jadi jauh lebih nyenyak. Pasti bakal langganan.",
    date: "2 minggu yang lalu",
    source: "Google",
    avatar: "/images/client-jessica.jpg",
    isDemo: true,
  },
  {
    id: "rev-3",
    name: "Budi Santoso",
    role: "Local Guide",
    rating: 5,
    text: "Pelayanan sangat ramah sejak dari resepsionis. Terapis profesional dan mengerti tekanan pijat yang diminta. Tempat parkir aman dan protokol higienitasnya sangat terjaga. Cocok untuk relaksasi rutin.",
    date: "1 bulan yang lalu",
    source: "Google",
    avatar: "/images/client-sarah.jpg",
    isDemo: true,
  },
  {
    id: "rev-4",
    name: "Ratna Dewi",
    role: "Pengunjung Keluarga",
    rating: 5,
    text: "Paket family reflexology-nya mantap sekali. Kami sekeluarga bisa relaksasi bareng dalam suasana yang hangat dan privat. Harganya sangat sepadan dengan kualitas dan kebersihan tempatnya.",
    date: "1 bulan yang lalu",
    source: "Google",
    isDemo: true,
  },
  {
    id: "rev-5",
    name: "Agus Pratama",
    role: "Pengunjung",
    rating: 5,
    text: "Refleksi di Bale Spa selalu konsisten kualitasnya. Terapisnya mengerti titik saraf dengan presisi, ruangannya tenang dan adem. Paling pas untuk memulihkan kebugaran tubuh setelah aktivitas padat.",
    date: "1 bulan yang lalu",
    source: "Google",
    isDemo: true,
  },
  {
    id: "rev-6",
    name: "Maya Anggraeni",
    role: "Local Guide · Bandung",
    rating: 5,
    text: "Aromaterapi dan musik instrumennya bikin langsung rileks begitu masuk. Terapisnya ramah, ruangan bersih dan higienis. Salah satu tempat reflexology keluarga terbaik dan ternyaman di Bandung.",
    date: "2 bulan yang lalu",
    source: "Google",
    isDemo: true,
  },
];
