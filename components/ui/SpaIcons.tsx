import React from "react";

interface IconProps {
  className?: string;
}

// 1. Tetesan Alami Organik (Sesuai Gambar 3 - PRODUK ALAMI ORGANIK)
export function OrganicLeafDropIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5C12 2.5 5 10 5 15.5C5 19.1 7.9 22 11.5 22C15.1 22 18 19.1 18 15.5C18 10 12 2.5 12 2.5Z" />
      <path d="M12 7.5C10.5 10.5 8.5 13.5 11 17" />
    </svg>
  );
}

// 2. Terapis Berpengalaman (Sesuai Gambar 3 - TERAPIS BERPENGALAMAN)
export function TherapistUserIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21C5.5 17.5 8.4 14.5 12 14.5C15.6 14.5 18.5 17.5 18.5 21" />
    </svg>
  );
}

// 3. Kebugaran Holistik / Tetes Kembar (Sesuai Gambar 3 - KEBUGARAN HOLISTIK)
export function HolisticWellnessIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3C12 3 7.5 8.5 7.5 13C7.5 15.5 9.5 17.5 12 17.5C14.5 17.5 16.5 15.5 16.5 13C16.5 8.5 12 3 12 3Z" />
      <path d="M6 14.5C4 16 3 17.8 3 19.5C3 21 4.5 22 6.5 22C9 22 10.5 20.2 10 18" />
      <path d="M18 14.5C20 16 21 17.8 21 19.5C21 21 19.5 22 17.5 22C15 22 13.5 20.2 14 18" />
    </svg>
  );
}

// 4. Suasana Tenang & Nyaman / Lilin Aroma (Sesuai Gambar 3 - SUASANA TENANG & NYAMAN)
export function SpaCandleIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="10" width="10" height="12" rx="1.5" />
      <path d="M12 10V7" />
      <path d="M12 3C11 4.5 11 5.5 12 6.5C13 5.5 13 4.5 12 3Z" />
    </svg>
  );
}

// 5. Higienis & Keamanan (Sesuai Gambar 3 - HIGIENIS & KEAMANAN)
export function HygienicShieldIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5L19 6V11.5C19 16.2 16 20.4 12 21.5C8 20.4 5 16.2 5 11.5V6L12 2.5Z" />
      <path d="M9.5 12L11 13.5L15 9.5" />
    </svg>
  );
}

// 6. Lotus Lingkaran (Sesuai Gambar 1 - Peaceful Environment & Logo Emblem)
export function SpaLotusIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4C10.5 7 8 10 8 14C8 16.5 9.8 18 12 18C14.2 18 16 16.5 16 14C16 10 13.5 7 12 4Z" />
      <path d="M8 14C5 13 3 14 3 16C3 18 6 19 9 19" />
      <path d="M16 14C19 13 21 14 21 16C21 18 18 19 15 19" />
    </svg>
  );
}

// 7. Hot Stone Massage (Sesuai Gambar 1 - Hot Stone Massage)
export function HotStoneIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="18" rx="8" ry="3.5" />
      <ellipse cx="12" cy="12" rx="6" ry="2.8" />
      <ellipse cx="12" cy="7" rx="4" ry="2" />
    </svg>
  );
}

// 8. Facial Treatments (Sesuai Gambar 1 - Facial Treatments)
export function FacialCareIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3C8 3 5 6.5 5 11C5 15.5 8 20.5 12 21.5C16 20.5 19 15.5 19 11C19 6.5 16 3 12 3Z" />
      <path d="M9 10C9 10 10 10.8 12 10.8C14 10.8 15 10 15 10" />
      <path d="M9 14.5C10 15.5 11 16 12 16C13 16 14 15.5 15 14.5" />
      <path d="M6 7.5C7.5 5.5 9.5 4.5 12 4.5C14.5 4.5 16.5 5.5 18 7.5" />
    </svg>
  );
}

// 9. Reflexology Feet (Sesuai Gambar 1 - Reflexology)
export function ReflexologyFeetIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 11.5C8.5 11.5 9.5 10.5 9.5 8.5C9.5 6.5 8 3 6.5 3C5 3 4 5 4 7.5C4 9.5 5 11.5 7 11.5Z" />
      <path d="M7 11.5V16C7 18.5 8.5 20.5 10.5 20.5" />
      <path d="M17 11.5C15.5 11.5 14.5 10.5 14.5 8.5C14.5 6.5 16 3 17.5 3C19 3 20 5 20 7.5C20 9.5 19 11.5 17 11.5Z" />
      <path d="M17 11.5V16C17 18.5 15.5 20.5 13.5 20.5" />
    </svg>
  );
}

// 10. Body Massage / Wraps (Sesuai Gambar 1 - Body Wraps)
export function BodyMassageIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="2.5" />
      <path d="M6.5 11C8.5 9.5 11 9 12 9C13 9 15.5 9.5 17.5 11" />
      <path d="M9 12V21" />
      <path d="M15 12V21" />
      <path d="M7.5 16H16.5" />
    </svg>
  );
}

// 11. Spa Packages Meditation (Sesuai Gambar 1 - Spa Packages)
export function SpaPackageMeditationIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="6" r="2.5" />
      <path d="M8 13C6.5 14.5 5 17 5 19.5H19C19 17 17.5 14.5 16 13L12 11L8 13Z" />
      <path d="M12 11V18" />
    </svg>
  );
}

// 12. Personalized Care Heart (Sesuai Gambar 1 - Personalized Care / Satisfaction)
export function HeartCareIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.5S4 14.5 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14.5 12 20.5 12 20.5Z" />
    </svg>
  );
}
