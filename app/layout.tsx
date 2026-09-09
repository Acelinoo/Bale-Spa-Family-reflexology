import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BRANCHES } from "@/config/branches";
import SmoothScroll from "@/components/layout/SmoothScroll";

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
  title: "Bale Spa Family Reflexology | Kebugaran & Relaksasi Keluarga",
  description:
    "Bale Spa Family Reflexology memiliki 3 cabang resmi di Bandung (Baleendah, Soreang, Ciwastra). Menghadirkan layanan reflexology dan relaksasi yang nyaman dengan suasana tenang, terapis profesional, dan higienis.",
  keywords: [
    "Bale Spa",
    "Bale Spa Family Reflexology",
    "Bale Spa Baleendah",
    "Bale Spa Soreang",
    "Bale Spa Ciwastra",
    "Reflexology Keluarga Bandung",
    "Pijat Refleksi Keluarga",
    "Foot Reflexology Bandung",
    "Full Body Massage Bandung",
    "Spa Keluarga Bandung",
  ],
  authors: [{ name: "Bale Spa Family Reflexology" }],
  openGraph: {
    title: "Bale Spa Family Reflexology | Kebugaran & Relaksasi Keluarga",
    description:
      "Pusat relaksasi dan kebugaran keluarga di Bandung dengan 3 cabang: Baleendah, Soreang, dan Ciwastra. Nikmati terapi alami berkualitas bersama keluarga tercinta.",
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
    icon: "/images/bale-spa-logo.jpg",
    apple: "/images/bale-spa-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Bale Spa Family Reflexology",
        url: "https://balespafamily.com",
        logo: "https://balespafamily.com/images/bale-spa-logo.jpg",
        description:
          "Pusat reflexology dan relaksasi keluarga terkemuka di Bandung dengan 3 cabang resmi.",
      },
      ...BRANCHES.map((b) => ({
        "@type": "DaySpa",
        name: b.name,
        description: `Layanan reflexology dan spa keluarga cabang ${b.shortName}`,
        telephone: b.whatsapp,
        address: {
          "@type": "PostalAddress",
          streetAddress: b.address,
          addressLocality: b.city,
          addressRegion: "Jawa Barat",
          postalCode: b.postalCode,
          addressCountry: "ID",
        },
        hasMap: b.mapsUrl,
        priceRange: "$$",
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
      })),
    ],
  };

  return (
    <html lang="id" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#1F150C] antialiased selection:bg-[#1D4533] selection:text-[#F3E9DC]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
