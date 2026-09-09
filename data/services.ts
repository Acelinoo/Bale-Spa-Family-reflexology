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
  category: "reflexology" | "massage" | "package";
  badge?: string;
  shortDesc: string;
  description: string;
  image: string;
  iconName: "Users" | "Footprints" | "Sparkles" | "Smile" | "Activity" | "Package";
  durations: ServiceDuration[];
  benefits: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "family-reflexology",
    title: "Family Reflexology",
    subtitle: "Pijat Refleksi Bersama Keluarga",
    category: "reflexology",
    badge: "Pilihan Keluarga",
    shortDesc: "Relaxing reflexology treatment suitable for family members.",
    description:
      "Perawatan refleksi yang dirancang khusus untuk kenyamanan seluruh anggota keluarga. Kombinasi stimulasi titik syaraf kaki dan relaksasi tubuh ringan dalam ruangan yang ramah, bersih, dan menenangkan.",
    image: "/images/hero-exact.jpg",
    iconName: "Users",
    durations: [
      { duration: 60, label: "60 Menit", price: 85000, priceFormatted: "Rp 85.000" },
      { duration: 90, label: "90 Menit", price: 120000, priceFormatted: "Rp 120.000" },
      { duration: 120, label: "120 Menit", price: 155000, priceFormatted: "Rp 155.000" },
    ],
    benefits: [
      "Suasana ruangan santai & ramah anak serta orang tua",
      "Melancarkan sirkulasi peredaran darah seluruh tubuh",
      "Meringankan ketegangan otot setelah beraktivitas",
      "Menciptakan momen relaksasi hangat bersama keluarga",
    ],
  },
  {
    id: "foot-reflexology",
    title: "Foot Reflexology",
    subtitle: "Refleksi Kaki & Titik Syaraf",
    category: "reflexology",
    badge: "Signature",
    shortDesc: "Refresh tired feet and restore your body's balance.",
    description:
      "Dimulai dengan rendaman kaki air hangat garam aromatik herbal, dilanjutkan stimulasi zona refleks telapak kaki secara presisi untuk memulihkan kebugaran dan menyelaraskan fungsi organ vital.",
    image: "/images/foot-reflexology.jpg",
    iconName: "Footprints",
    durations: [
      { duration: 60, label: "60 Menit", price: 75000, priceFormatted: "Rp 75.000" },
      { duration: 90, label: "90 Menit", price: 105000, priceFormatted: "Rp 105.000" },
    ],
    benefits: [
      "Meredakan rasa pegal akibat berdiri & berjalan lama",
      "Meningkatkan kualitas tidur menjadi lebih lelap",
      "Merangsang metabolisme & detoksifikasi alami tubuh",
      "Memberikan sensasi ringan pada telapak & betis",
    ],
  },
  {
    id: "full-body-massage",
    title: "Full Body Massage",
    subtitle: "Pijat Tradisional Seluruh Tubuh",
    category: "massage",
    badge: "Paling Favorit",
    shortDesc: "Release tension and enjoy deep relaxation.",
    description:
      "Pijatan seluruh tubuh dengan perpaduan teknik urut tradisional nusantara dan penekanan lembut berirama menggunakan minyak zaitun alami dan aromaterapi herbal yang menenangkan.",
    image: "/images/body-massage.jpg",
    iconName: "Sparkles",
    durations: [
      { duration: 60, label: "60 Menit", price: 95000, priceFormatted: "Rp 95.000" },
      { duration: 90, label: "90 Menit", price: 135000, priceFormatted: "Rp 135.000" },
      { duration: 120, label: "120 Menit", price: 170000, priceFormatted: "Rp 170.000" },
    ],
    benefits: [
      "Melepaskan kram & ketegangan otot kronis",
      "Menghilangkan rasa letih berkepanjangan",
      "Menghangatkan tubuh dan menutrisi kulit secara alami",
      "Meredakan stres dan menyegarkan pikiran",
    ],
  },
  {
    id: "head-shoulder-massage",
    title: "Head & Shoulder Massage",
    subtitle: "Pijat Kepala, Leher & Pundak",
    category: "massage",
    shortDesc: "Relieve tension around your head, neck and shoulders.",
    description:
      "Perawatan fokus pada area kepala, tengkuk leher, dan bahu. Sangat direkomendasikan bagi Anda yang sering bekerja di depan komputer, menyetir jarak jauh, atau mengalami leher kaku.",
    image: "/images/head-massage.jpg",
    iconName: "Smile",
    durations: [
      { duration: 45, label: "45 Menit", price: 65000, priceFormatted: "Rp 65.000" },
      { duration: 60, label: "60 Menit", price: 80000, priceFormatted: "Rp 80.000" },
    ],
    benefits: [
      "Mengurangi migrain, pusing, & sakit kepala tegang",
      "Melemaskan otot trapezius dan leher kaku",
      "Meningkatkan pasokan oksigen ke area kepala",
      "Memberikan relaksasi cepat di sela rutinitas padat",
    ],
  },
  {
    id: "back-massage",
    title: "Back Massage",
    subtitle: "Pijat Fokus Punggung & Pinggang",
    category: "massage",
    shortDesc: "Focused treatment to release muscle tension.",
    description:
      "Teknik pijatan terfokus pada titik-titik meridian tulang belakang, punggung atas, dan pinggang bawah untuk mengendurkan serabut otot yang kaku akibat posisi duduk yang salah.",
    image: "/images/hot-stone.jpg",
    iconName: "Activity",
    durations: [
      { duration: 45, label: "45 Menit", price: 70000, priceFormatted: "Rp 70.000" },
      { duration: 60, label: "60 Menit", price: 85000, priceFormatted: "Rp 85.000" },
    ],
    benefits: [
      "Mengatasi sakit pinggang & pegal linu di punggung",
      "Memperbaiki postur tubuh dan fleksibilitas gerak",
      "Meredakan simpul otot yang mengeras (myofascial trigger points)",
      "Meningkatkan peredaran darah di sekitar tulang belakang",
    ],
  },
  {
    id: "spa-treatment-package",
    title: "Spa / Treatment Package",
    subtitle: "Paket Perawatan Relaksasi Komplit",
    category: "package",
    badge: "Komplit & Hemat",
    shortDesc: "Special packages for a complete relaxation experience.",
    description:
      "Paket kombinasi istimewa meliputi pijat tubuh menyeluruh, scrub lulur herbal alami, terapi kompres hangat, dan refleksi kaki untuk pemulihan stamina dan peremajaan tubuh secara menyeluruh.",
    image: "/images/aromatherapy.jpg",
    iconName: "Package",
    durations: [
      { duration: 90, label: "90 Menit", price: 145000, priceFormatted: "Rp 145.000" },
      { duration: 120, label: "120 Menit", price: 190000, priceFormatted: "Rp 190.000" },
      { duration: 150, label: "150 Menit", price: 230000, priceFormatted: "Rp 230.000" },
    ],
    benefits: [
      "Kombinasi komplit: Massage + Scrub Lulur + Refleksi",
      "Mengangkat sel kulit mati sehingga kulit halus & bercahaya",
      "Efek relaksasi ganda dari aroma minyak esensial alami",
      "Pengalaman spa eksklusif dengan harga terjangkau",
    ],
  },
];
