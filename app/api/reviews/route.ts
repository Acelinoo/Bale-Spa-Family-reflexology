import { NextResponse } from "next/server";
import { REVIEWS } from "@/data/reviews";
import { businessConfig } from "@/config/business";

export async function GET() {
  // Arsitektur siap dihubungkan dengan Google Places API di masa depan
  // const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  // const placeId = process.env.GOOGLE_PLACE_ID;
  
  return NextResponse.json({
    success: true,
    rating: 5.0,
    totalReviews: 48,
    writeReviewUrl: businessConfig.googleReviewUrl,
    mapsUrl: businessConfig.googleMapsUrl,
    reviews: REVIEWS,
    isMock: true,
    notice: "Review saat ini adalah contoh (demo). Untuk review riil klik tombol 'Write a Review on Google'.",
  });
}
