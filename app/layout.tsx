import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/config/business";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balespafamily.com"),
  title: "Bale Spa Family Reflexology | Relax, Restore & Reconnect",
  description:
    "Bale Spa Family Reflexology menghadirkan layanan reflexology dan relaksasi yang nyaman untuk Anda dan keluarga dengan suasana tenang, terapis profesional, dan higienis.",
  keywords: [
    "Bale Spa",
    "Bale Spa Family Reflexology",
    "Reflexology Keluarga",
    "Pijat Refleksi Keluarga",
    "Family Reflexology",
    "Foot Reflexology",
    "Full Body Massage",
    "Spa Keluarga",
    "Refleksi Bandung",
    "Pijat Sehat Keluarga",
  ],
  authors: [{ name: "Bale Spa Family Reflexology" }],
  openGraph: {
    title: "Bale Spa Family Reflexology | Relax, Restore & Reconnect",
    description:
      "Tempat nyaman untuk menikmati reflexology dan perawatan tubuh bersama keluarga. Relaksasi berkualitas dengan sentuhan terapis berpengalaman.",
    url: "https://balespafamily.com",
    siteName: "Bale Spa Family Reflexology",
    images: [
      {
        url: "/images/hero-exact.jpg",
        width: 1200,
        height: 630,
        alt: "Bale Spa Family Reflexology",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/images/logo-emblem.png",
    apple: "/images/logo-emblem.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: businessConfig.name,
    description: businessConfig.subheadline,
    image: "https://balespafamily.com/images/hero-exact.jpg",
    telephone: businessConfig.whatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address,
      addressLocality: businessConfig.city,
      addressRegion: "Jawa Barat",
      postalCode: businessConfig.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.026",
      longitude: "107.543",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="id" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F7F4EC] text-[#1A261D] antialiased selection:bg-[#1B3B2B] selection:text-[#FAF7F2]">
        {children}
      </body>
    </html>
  );
}
