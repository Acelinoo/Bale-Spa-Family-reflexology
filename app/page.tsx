"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GoogleReviews from "@/components/sections/GoogleReviews";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import BookingModal from "@/components/sections/BookingModal";
import BranchSelectorModal from "@/components/sections/BranchSelectorModal";
import { BranchProvider } from "@/context/BranchContext";

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(
    undefined
  );

  const openBookingModal = (serviceId?: string) => {
    if (serviceId) {
      setPreSelectedServiceId(serviceId);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <BranchProvider>
      <main className="min-h-screen flex flex-col bg-[#F7F4EC]">
        {/* Sticky Header Navigation */}
        <Navbar onOpenBooking={() => openBookingModal()} />

        {/* Hero Section */}
        <HeroSection onOpenBooking={() => openBookingModal()} />

        {/* Services Section with Modal Detail */}
        <ServicesSection
          onSelectServiceToBook={(serviceId) => openBookingModal(serviceId)}
        />

        {/* About Bale Spa Section */}
        <AboutSection />

        {/* Dark Forest Green Why Choose Us Section */}
        <WhyChooseUs />

        {/* Authentic Google Reviews Gateway Section */}
        <GoogleReviews />

        {/* Pre-footer Call to Action */}
        <CTASection onOpenBooking={() => openBookingModal()} />

        {/* Location & Contact Details */}
        <ContactSection />

        {/* Footer */}
        <Footer onOpenBooking={() => openBookingModal()} />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Booking Appointment Popup Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          selectedServiceId={preSelectedServiceId}
        />

        {/* Branch Selection Welcome & Switcher Modal */}
        <BranchSelectorModal />
      </main>
    </BranchProvider>
  );
}
