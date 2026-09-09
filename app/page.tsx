"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GoogleReviews from "@/components/sections/GoogleReviews";
import BookingSection from "@/components/sections/BookingSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function HomePage() {
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(
    undefined
  );

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreSelectedServiceId(serviceId);
    }
    const bookingElement = document.querySelector("#booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F4EC]">
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Hero Section */}
      <HeroSection onOpenBooking={() => scrollToBooking()} />

      {/* Services Section with Modal Detail */}
      <ServicesSection
        onSelectServiceToBook={(serviceId) => scrollToBooking(serviceId)}
      />

      {/* About Bale Spa Section */}
      <AboutSection />

      {/* Dark Forest Green Why Choose Us Section */}
      <WhyChooseUs />

      {/* Authentic Google Reviews Gateway Section */}
      <GoogleReviews />

      {/* Interactive Reservation Form with WhatsApp Redirect */}
      <BookingSection selectedServiceId={preSelectedServiceId} />

      {/* Pre-footer Call to Action */}
      <CTASection onOpenBooking={() => scrollToBooking()} />

      {/* Location & Contact Details */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
