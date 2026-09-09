export interface ServiceDuration {
  duration: number; // in minutes
  label: string;
  price: number;
  priceFormatted: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: "massage" | "reflexology" | "treatment" | "package";
  badge?: string;
  shortDesc: string;
  description: string;
  image: string;
  iconType: "aromatherapy" | "hotstone" | "facial" | "reflexology" | "body" | "package";
  durations: ServiceDuration[];
  benefits: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "aromatherapy-massage",
    title: "Aromatherapy Massage",
    subtitle: "Pijat Relaksasi Minyak Esensial",
    category: "massage",
    badge: "Paling Populer",
    shortDesc: "Pijat relaksasi menggunakan minyak esensial alami untuk meredakan ketegangan dan stres.",
    description:
      "Perawatan relaksasi mendalam menggunakan paduan minyak aromaterapi murni beraroma lavender dan sereh herbal nusantara untuk melepas stres dan menenangkan sistem syaraf.",
    image: "/images/aromatherapy.jpg",
    iconType: "aromatherapy",
    durations: [
      { duration: 60, label: "60 Menit", price: 85000, priceFormatted: "Rp 85.000" },
      { duration: 90, label: "90 Menit", price: 120000, priceFormatted: "Rp 120.000" },
      { duration: 120, label: "120 Menit", price: 155000, priceFormatted: "Rp 155.000" },
    ],
    benefits: [
      "Meredakan kelelahan & ketegangan otot tubuh",
      "Aroma minyak esensial alami menenangkan pikiran",
      "Melembapkan dan menutrisi kulit tubuh",
      "Membantu tidur lebih pulas dan berkualitas",
    ],
  },
  {
    id: "hot-stone-massage",
    title: "Hot Stone Massage",
    subtitle: "Terapi Kehangatan Batu Vulkanik",
    category: "treatment",
    badge: "Kehangatan Alami",
    shortDesc: "Terapi kehangatan batu vulkanik untuk melancarkan sirkulasi dan meredakan otot kaku.",
    description:
      "Teknik terapi eksklusif dengan kehangatan batu basal alami pada titik-titik meridian tubuh untuk melunakkan otot yang kaku dan memperlancar sirkulasi energi.",
    image: "/images/hot-stone.jpg",
    iconType: "hotstone",
    durations: [
      { duration: 90, label: "90 Menit", price: 135000, priceFormatted: "Rp 135.000" },
      { duration: 120, label: "120 Menit", price: 175000, priceFormatted: "Rp 175.000" },
    ],
    benefits: [
      "Mencairkan ketegangan otot punggung yang kronis",
      "Memperlancar peredaran darah dan detoksifikasi",
      "Sensasi hangat merasuk ke dalam serat otot",
      "Mengembalikan fleksibilitas dan kenyamanan gerak",
    ],
  },
  {
    id: "facial-treatments",
    title: "Facial Treatments",
    subtitle: "Peremajaan Kulit Alami",
    category: "treatment",
    badge: "Kesegaran Wajah",
    shortDesc: "Peremajaan kulit wajah dengan nutrisi herbal dan pijat relaksasi mendalam.",
    description:
      "Pijat relaksasi wajah dipadu pembersihan menyeluruh dan masker herbal alami untuk mengangkat sel kulit mati, meredakan ketegangan otot rahang, dan mengembalikan kesegaran wajah.",
    image: "/images/hydra-facial.jpg",
    iconType: "facial",
    durations: [
      { duration: 45, label: "45 Menit", price: 70000, priceFormatted: "Rp 70.000" },
      { duration: 60, label: "60 Menit", price: 95000, priceFormatted: "Rp 95.000" },
    ],
    benefits: [
      "Meningkatkan sirkulasi darah di area wajah",
      "Menjadikan kulit wajah tampak cerah & kencang",
      "Meredakan mata lelah dan sakit kepala ringan",
      "Memberikan sensasi segar dan rileks alami",
    ],
  },
  {
    id: "reflexology",
    title: "Reflexology",
    subtitle: "Refleksi Kaki & Titik Syaraf",
    category: "reflexology",
    badge: "Favorit Keluarga",
    shortDesc: "Stimulasi titik akupresur kaki untuk memulihkan kebugaran dan keseimbangan tubuh.",
    description:
      "Stimulasi titik-titik akupresur pada telapak dan betis kaki yang terhubung langsung dengan organ vital tubuh. Diawali dengan rendaman air hangat garam aromatik beraroma rempah.",
    image: "/images/foot-reflexology.jpg",
    iconType: "reflexology",
    durations: [
      { duration: 60, label: "60 Menit", price: 75000, priceFormatted: "Rp 75.000" },
      { duration: 90, label: "90 Menit", price: 105000, priceFormatted: "Rp 105.000" },
    ],
    benefits: [
      "Mengurangi rasa pegal akibat berdiri lama dan mobilitas tinggi",
      "Menstimulasi metabolisme alami tubuh",
      "Memberikan rasa enteng pada seluruh langkah kaki",
      "Sangat cocok untuk dinikmati bersama keluarga",
    ],
  },
  {
    id: "body-wraps",
    title: "Body Wraps & Massage",
    subtitle: "Pijat Tradisional & Perawatan Tubuh",
    category: "massage",
    badge: "Penyegaran Menyeluruh",
    shortDesc: "Kombinasi pijat tradisional dan kompres herbal untuk memulihkan kebugaran tubuh.",
    description:
      "Perpaduan pijatan urut tradisional seluruh tubuh yang merata dengan kompres herbal untuk membuang racun sisa metabolisme dan menutrisi kulit secara menyeluruh.",
    image: "/images/body-massage.jpg",
    iconType: "body",
    durations: [
      { duration: 60, label: "60 Menit", price: 90000, priceFormatted: "Rp 90.000" },
      { duration: 90, label: "90 Menit", price: 130000, priceFormatted: "Rp 130.000" },
      { duration: 120, label: "120 Menit", price: 165000, priceFormatted: "Rp 165.000" },
    ],
    benefits: [
      "Melepaskan kram & kekakuan otot seluruh tubuh",
      "Mengembalikan vitalitas dan stamina harian",
      "Teknik urut berirama yang aman dan menenangkan",
      "Membuat tubuh terasa lebih bugar dan berenergi",
    ],
  },
  {
    id: "spa-packages",
    title: "Spa Packages",
    subtitle: "Paket Komplit Relaksasi Keluarga",
    category: "package",
    badge: "Paket Terbaik",
    shortDesc: "Paket perawatan lengkap terpadu untuk relaksasi maksimal seluruh anggota keluarga.",
    description:
      "Paket komplit peremajaan istimewa yang memadukan refleksi kaki, pijat tubuh beraroma, lulur scrub herbal, dan terapi kompres hangat untuk kepuasan relaksasi tanpa kompromi.",
    image: "/images/spa-package.jpg",
    iconType: "package",
    durations: [
      { duration: 90, label: "90 Menit", price: 145000, priceFormatted: "Rp 145.000" },
      { duration: 120, label: "120 Menit", price: 190000, priceFormatted: "Rp 190.000" },
      { duration: 150, label: "150 Menit", price: 230000, priceFormatted: "Rp 230.000" },
    ],
    benefits: [
      "Pengalaman relaksasi holistik lengkap dalam satu sesi",
      "Perawatan terbaik untuk tubuh, pikiran, dan jiwa",
      "Paling diminati untuk waktu luang bersama keluarga",
      "Hemat dengan kombinasi layanan terfavorit",
    ],
  },
];
