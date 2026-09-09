"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BranchSelectorSection from "@/components/branches/BranchSelectorSection";
import GoogleReviews from "@/components/sections/GoogleReviews";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import BookingModal from "@/components/sections/BookingModal";
import BranchSelectorModal from "@/components/sections/BranchSelectorModal";
import ReviewBranchModal from "@/components/branches/ReviewBranchModal";
import BranchQRModal from "@/components/branches/BranchQRModal";
import { BranchProvider, useBranch } from "@/context/BranchContext";

function MainContent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(
    undefined
  );
  const { selectBranch } = useBranch();

  const openBookingModal = (serviceId?: string, branchId?: string) => {
    if (branchId) {
      selectBranch(branchId);
    }
    if (serviceId) {
      setPreSelectedServiceId(serviceId);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
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

      {/* Temukan Cabang Bale Spa Section (3 Branch Cards) */}
      <BranchSelectorSection
        onOpenBookingForBranch={(branchId) => openBookingModal(undefined, branchId)}
      />

      {/* Authentic Google Reviews Gateway Section */}
      <GoogleReviews />

      {/* Pre-footer Call to Action */}
      <CTASection onOpenBooking={() => openBookingModal()} />

      {/* Location & Contact Details */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenBooking={() => openBookingModal()} />

      {/* Floating WhatsApp with Small Branch Selector */}
      <FloatingWhatsApp />

      {/* Booking Appointment Popup Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedServiceId={preSelectedServiceId}
      />

      {/* Branch Selection Welcome & Switcher Modal */}
      <BranchSelectorModal />

      {/* Google Review Branch Selector Modal */}
      <ReviewBranchModal />

      {/* QR Codes Modal for 3 Branches (Website & Review QR) */}
      <BranchQRModal />
    </main>
  );
}

export default function HomePage() {
  return (
    <BranchProvider>
      <MainContent />
    </BranchProvider>
  );
}
