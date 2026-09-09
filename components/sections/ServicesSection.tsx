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
        return <OrganicLeafDropIcon className="w-6 h-6 text-[#1D4533]" />;
      case "hotstone":
        return <HotStoneIcon className="w-6 h-6 text-[#1D4533]" />;
      case "facial":
        return <FacialCareIcon className="w-6 h-6 text-[#1D4533]" />;
      case "reflexology":
        return <ReflexologyFeetIcon className="w-6 h-6 text-[#1D4533]" />;
      case "body":
        return <BodyMassageIcon className="w-6 h-6 text-[#1D4533]" />;
      case "package":
      default:
        return <SpaPackageMeditationIcon className="w-6 h-6 text-[#1D4533]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-[#F3E9DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D4533] uppercase">
              OUR SERVICES
            </span>
            <span className="h-px w-8 bg-[#1D4533]/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] tracking-tight">
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
              className="bg-[#FAF6F0] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#E2D5C3] shadow-[0_2px_12px_rgba(31,21,12,0.03)] hover:shadow-[0_8px_24px_rgba(29,69,51,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer group"
            >
              <div className="space-y-3 sm:space-y-3.5 flex flex-col items-center">
                {/* Circular Icon Container */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#EFE5D7] border border-[#DFD1C1] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs">
                  {renderServiceIcon(service.iconType)}
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#1F150C] leading-snug group-hover:text-[#1D4533] transition-colors line-clamp-2 min-h-[38px] sm:min-h-[44px] flex items-center justify-center">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[11px] sm:text-xs text-[#5A4A3E] leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Learn More Link */}
              <div className="pt-4 mt-2 border-t border-[#E8DDCE] w-full">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#1D4533] group-hover:text-[#163728] transition-colors inline-flex items-center gap-1">
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
