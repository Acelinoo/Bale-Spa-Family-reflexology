"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES, ServiceItem } from "@/data/services";
import ServiceDetailModal from "./ServiceDetailModal";
import {
  OrganicLeafDropIcon,
  HotStoneIcon,
  FacialCareIcon,
  ReflexologyFeetIcon,
  BodyMassageIcon,
  SpaPackageMeditationIcon,
} from "@/components/ui/SpaIcons";

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export default function ServicesSection({
  onSelectServiceToBook,
}: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 88%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderServiceIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "aromatherapy":
        return <OrganicLeafDropIcon className="w-6 h-6 text-[#4A6451]" />;
      case "hotstone":
        return <HotStoneIcon className="w-6 h-6 text-[#4A6451]" />;
      case "facial":
        return <FacialCareIcon className="w-6 h-6 text-[#4A6451]" />;
      case "reflexology":
        return <ReflexologyFeetIcon className="w-6 h-6 text-[#4A6451]" />;
      case "body":
        return <BodyMassageIcon className="w-6 h-6 text-[#4A6451]" />;
      case "package":
      default:
        return <SpaPackageMeditationIcon className="w-6 h-6 text-[#4A6451]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header (Persis Gambar 1: OUR SERVICES —— ) */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#34523B] uppercase">
              OUR SERVICES
            </span>
            <span className="h-px w-8 bg-[#34523B]/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B3324] tracking-tight">
            Holistic Treatments for Mind &amp; Body
          </h2>
        </div>

        {/* 6 Cards Grid: 2 columns on mobile, 3 on tablet, 6 columns on desktop! */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-[#FFFFFF] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#EAE3D4] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(40,68,48,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer group"
            >
              <div className="space-y-3 sm:space-y-3.5 flex flex-col items-center">
                {/* Circular Icon Container (Persis Gambar 1) */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#F4EFE6] border border-[#E8E0D2] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {renderServiceIcon(service.iconType)}
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#1B3324] leading-snug group-hover:text-[#34523B] transition-colors line-clamp-2 min-h-[38px] sm:min-h-[44px] flex items-center justify-center">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[11px] sm:text-xs text-[#66756B] leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Learn More Link (Persis Gambar 1) */}
              <div className="pt-4 mt-2 border-t border-[#F4EFE6] w-full">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#44634C] group-hover:text-[#1B3324] transition-colors inline-flex items-center gap-1">
                  <span>LEARN MORE</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => {
          setSelectedService(null);
          onSelectServiceToBook(serviceId);
        }}
      />
    </section>
  );
}
