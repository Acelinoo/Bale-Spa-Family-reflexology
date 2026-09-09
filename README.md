# Bale Spa Family Reflexology

Website resmi dan modern untuk **Bale Spa Family Reflexology** — tempat relaksasi, refleksi, dan perawatan tubuh keluarga yang hangat, elegan, dan terpercaya.

---

## 🌿 Filosofi Desain & Identitas Brand

- **Tagline**: *"Relax. Restore. Reconnect."*
- **Subheadline**: *"Tempat nyaman untuk menikmati reflexology dan perawatan tubuh bersama keluarga."*
- **Karakter Visual**:
  - **Dominan**: Warm Ivory (`#F7F4EC`)
  - **Aksen Utama**: Deep Forest Green (`#1B3B2B`), Muted Olive Green (`#385A42`), Warm Brown (`#6B4E2B`), dan Soft Gold (`#C5A880`)
  - **Tipografi**: Heading *Cormorant Garamond* (Serif Elegan) & Body *Plus Jakarta Sans* (Sans-serif Modern)
  - **Atmosfer**: *Calm, peaceful, spacious whitespace, trustworthy, non-generic*.

---

## 🚀 Fitur Unggulan

1. **Konfigurasi Terpusat (`config/business.ts`)**:
   - Seluruh data bisnis (Nomor WhatsApp, URL Google Review, URL Google Maps, Alamat, Jam Buka, Statistik) terkumpul di satu file agar mudah diperbarui sewaktu-waktu.
2. **Hero Section dengan Trust Points**:
   - Large headline, dual CTA (*Book Appointment* & *Explore Services*), dan 3 trust badges (*Professional Therapist, Comfortable & Clean, Family Friendly*).
3. **6 Layanan Refleksi & Spa Keluarga**:
   - Family Reflexology, Foot Reflexology, Full Body Massage, Head & Shoulder Massage, Back Massage, dan Spa / Treatment Package.
4. **Modal Detail Layanan Interaktif**:
   - Menampilkan deskripsi lengkap, pilihan durasi dan tarif, daftar manfaat terapi, serta tombol pesan langsung.
5. **About Bale Spa**:
   - Cerita brand, suasana ruangan, dan 3 pilar layanan utama.
6. **Dark Green "Why Choose Us"**:
   - Tampilan kontras mewah dengan 4 metrik/benefit utama.
7. **Gateway Google Reviews Otentik**:
   - Menampilkan ulasan bintang 5 dengan penanda demo yang jelas.
   - Tombol **"WRITE A REVIEW ON GOOGLE"** langsung membuka link Google Business Profile resmi (bukan formulir palsu).
8. **Sistem Reservasi & Auto WhatsApp Generator**:
   - Validasi nama, WhatsApp, layanan, durasi, jumlah orang, tanggal, dan jam.
   - Mengenerate pesan WhatsApp rapi dan otomatis mengarahkan ke nomor bisnis Bale Spa.
9. **Floating WhatsApp Button**:
   - Tombol mengambang di kanan bawah dengan tooltip hover *"Chat with us"*.
10. **Kontak & Navigasi Peta**:
    - Kartu alamat, jam buka, dan tombol *Get Directions* langsung ke Google Maps.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: Dynamic Metadata, OpenGraph, dan LocalBusiness JSON-LD Schema.

---

## 💻 Cara Menjalankan Lokal

```bash
# Clone repository
git clone https://github.com/Acelinoo/Bale-Spa-Family-reflexology.git

# Masuk ke direktori
cd "Bale Spa Family reflexology"

# Install dependensi
npm install

# Jalankan server development
npm run dev

# Akses di browser: http://localhost:3000
```

---

## ⚙️ Cara Mengubah Data Bisnis

Buka file [config/business.ts](config/business.ts) dan ubah data yang diinginkan:

```typescript
export const businessConfig = {
  name: "Bale Spa Family Reflexology",
  whatsapp: "628XXXXXXXXXX", // Masukkan nomor WhatsApp bisnis (format internasional 628...)
  googleReviewUrl: "PASTE_GOOGLE_REVIEW_URL_HERE", // URL review profil Google bisnis Anda
  googleMapsUrl: "PASTE_GOOGLE_MAPS_URL_HERE", // URL lokasi Google Maps
  address: "Alamat Lengkap Bale Spa",
  // ...
};
```

---

## 📄 Lisensi & Hak Cipta

© 2026 Bale Spa Family Reflexology. All rights reserved.
Crafted with passion by Acelino.
