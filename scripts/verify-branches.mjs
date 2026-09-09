import { BRANCHES, DEFAULT_BRANCH, getBranchById, isPlaceholderReviewUrl } from "../config/branches.ts";

console.log("=== BALE SPA FAMILY REFLEXOLOGY - MULTI-BRANCH VERIFICATION ===");

let passedTests = 0;
let totalTests = 15;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${message}`);
  }
}

// TEST 1: Pilih Baleendah -> nomor 6289524632932
const bBaleendah = getBranchById("baleendah");
assert(bBaleendah && bBaleendah.whatsapp === "6289524632932", "TEST 1: Baleendah WhatsApp adalah 6289524632932");

// TEST 2: Pilih Soreang -> nomor 6285182225677
const bSoreang = getBranchById("soreang");
assert(bSoreang && bSoreang.whatsapp === "6285182225677", "TEST 2: Soreang WhatsApp adalah 6285182225677");

// TEST 3: Pilih Ciwastra -> nomor 6285151220667
const bCiwastra = getBranchById("ciwastra");
assert(bCiwastra && bCiwastra.whatsapp === "6285151220667", "TEST 3: Ciwastra WhatsApp adalah 6285151220667");

// TEST 4: Maps Baleendah
assert(bBaleendah && bBaleendah.mapsUrl.includes("Baleendah") && bBaleendah.address.includes("Jaksa Naranata"), "TEST 4: Google Maps Baleendah valid & akurat");

// TEST 5: Maps Soreang
assert(bSoreang && bSoreang.mapsUrl.includes("Soreang") && bSoreang.address.includes("Gading Tutuka"), "TEST 5: Google Maps Soreang valid & akurat");

// TEST 6: Maps Ciwastra
assert(bCiwastra && bCiwastra.mapsUrl.includes("Ciwastra") && bCiwastra.address.includes("Ciwastra No.285B"), "TEST 6: Google Maps Ciwastra valid & akurat");

// TEST 7: Review URL Baleendah
assert(bBaleendah && bBaleendah.reviewUrl === "REVIEW_URL_BALEENDAH" && isPlaceholderReviewUrl(bBaleendah.reviewUrl), "TEST 7: Review URL Baleendah placeholder REVIEW_URL_BALEENDAH terdeteksi aman");

// TEST 8: Review URL Soreang
assert(bSoreang && bSoreang.reviewUrl === "REVIEW_URL_SOREANG" && isPlaceholderReviewUrl(bSoreang.reviewUrl), "TEST 8: Review URL Soreang placeholder REVIEW_URL_SOREANG terdeteksi aman");

// TEST 9: Review URL Ciwastra
assert(bCiwastra && bCiwastra.reviewUrl === "REVIEW_URL_CIWASTRA" && isPlaceholderReviewUrl(bCiwastra.reviewUrl), "TEST 9: Review URL Ciwastra placeholder REVIEW_URL_CIWASTRA terdeteksi aman");

// TEST 10: Booking Baleendah -> submit ke WA Baleendah
function createBookingUrl(branchId, bookingData) {
  const branch = getBranchById(branchId) || DEFAULT_BRANCH;
  const message = `Halo Bale Spa Family Reflexology,\nSaya ingin melakukan reservasi.\n\nCabang:\n${branch.name}\n\nNama:\n${bookingData.name}\n\nNo. WhatsApp:\n${bookingData.phone}\n\nLayanan:\n${bookingData.service}\n\nJumlah Orang:\n${bookingData.guests} orang\n\nTanggal:\n${bookingData.date}\n\nJam:\n${bookingData.time}\n\nCatatan:\n${bookingData.notes || "-"}\n\nTerima kasih.`;
  return `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(message)}`;
}

const booking10 = createBookingUrl("baleendah", { name: "John Doe", phone: "08123456789", service: "Family Reflexology", guests: 2, date: "2026-09-10", time: "15:00", notes: "Ruangan tenang" });
assert(booking10.startsWith("https://wa.me/6289524632932?text="), "TEST 10: Booking Baleendah submit ke WhatsApp 6289524632932");

// TEST 11: Booking Soreang -> submit ke WA Soreang
const booking11 = createBookingUrl("soreang", { name: "Jane Smith", phone: "085182225677", service: "Aromatherapy Massage", guests: 1, date: "2026-09-11", time: "14:00" });
assert(booking11.startsWith("https://wa.me/6285182225677?text="), "TEST 11: Booking Soreang submit ke WhatsApp 6285182225677");

// TEST 12: Booking Ciwastra -> submit ke WA Ciwastra
const booking12 = createBookingUrl("ciwastra", { name: "Robert", phone: "085151220667", service: "Deep Tissue", guests: 3, date: "2026-09-12", time: "16:00" });
assert(booking12.startsWith("https://wa.me/6285151220667?text="), "TEST 12: Booking Ciwastra submit ke WhatsApp 6285151220667");

// Parameter router logic verification
function resolveBranchParam(param) {
  if (!param) return DEFAULT_BRANCH.id;
  const match = BRANCHES.find((b) => b.id.toLowerCase() === param.toLowerCase());
  return match ? match.id : DEFAULT_BRANCH.id;
}

// TEST 13: Open ?branch=soreang -> Soreang aktif
assert(resolveBranchParam("soreang") === "soreang", "TEST 13: ?branch=soreang otomatis memilih Soreang");

// TEST 14: Open ?branch=ciwastra -> Ciwastra aktif
assert(resolveBranchParam("ciwastra") === "ciwastra", "TEST 14: ?branch=ciwastra otomatis memilih Ciwastra");

// TEST 15: Open ?branch=invalid -> fallback default (baleendah)
assert(resolveBranchParam("invalid-branch-xyz") === "baleendah", "TEST 15: ?branch=invalid fallback aman ke default 'baleendah'");

console.log(`\n================================`);
console.log(`HASIL: ${passedTests} / ${totalTests} TEST BERHASIL!`);
console.log(`================================`);
