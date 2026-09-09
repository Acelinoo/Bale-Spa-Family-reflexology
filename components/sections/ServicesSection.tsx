"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.09,
            ease: "power2.out",
            clearProps: "all",
          }
        );

        // GSAP smooth zoom-out reveal for each service image inside the card
        const images = gridRef.current.querySelectorAll(".service-card-img");
        if (images.length > 0) {
          gsap.fromTo(
            images,
            { scale: 1.15, opacity: 0 },
            {
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 85%",
                once: true,
              },
              scale: 1,
              opacity: 1,
              duration: 0.9,
              stagger: 0.09,
              ease: "power2.out",
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderServiceIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "aromatherapy":
        return <OrganicLeafDropIcon className="w-3.5 h-3.5 text-[#1D4533]" />;
      case "hotstone":
        return <HotStoneIcon className="w-3.5 h-3.5 text-[#1D4533]" />;
      case "facial":
        return <FacialCareIcon className="w-3.5 h-3.5 text-[#1D4533]" />;
      case "reflexology":
        return <ReflexologyFeetIcon className="w-3.5 h-3.5 text-[#1D4533]" />;
      case "body":
        return <BodyMassageIcon className="w-3.5 h-3.5 text-[#1D4533]" />;
      case "package":
      default:
        return <SpaPackageMeditationIcon className="w-3.5 h-3.5 text-[#1D4533]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-[#FBF8F4] border-b border-[#EAE4DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1D4533] uppercase">
              LAYANAN KAMI
            </span>
            <span className="h-px w-8 bg-[#1D4533]/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] tracking-tight">
            Perawatan Holistik untuk Tubuh &amp; Pikiran
          </h2>
        </div>

        {/* 6 Cards Grid: 2 columns on mobile, 3 on tablet, 6 columns on desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-[#EAE4DC] shadow-[0_2px_10px_rgba(31,21,12,0.03)] hover:shadow-[0_12px_28px_rgba(29,69,51,0.1)] hover:border-[#1D4533]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer group overflow-hidden"
            >
              <div className="w-full space-y-2.5 flex flex-col items-center">
                {/* Contextual Service Image Container with GSAP animation */}
                <div className="relative w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-[#EFE9DF] border border-[#EAE4DC]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    quality={80}
                    loading="lazy"
                    decoding="async"
                    className="service-card-img object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  />
                  {/* Subtle dark bottom gradient on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Badge Label (e.g. Paling Populer, Favorit) */}
                  {service.badge && (
                    <span className="absolute top-1.5 left-1.5 bg-[#1D4533]/90 backdrop-blur-xs text-[#F3E9DC] text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}

                  {/* Mini floating spa icon indicator on image */}
                  <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs border border-[#EAE4DC]/80">
                    {renderServiceIcon(service.iconType)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#1F150C] leading-snug group-hover:text-[#1D4533] transition-colors line-clamp-2 min-h-[38px] sm:min-h-[44px] flex items-center justify-center px-1">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[11px] sm:text-xs text-[#5A4A3E] leading-relaxed line-clamp-2 px-1">
                  {service.shortDesc}
                </p>

                {/* Price starting estimate */}
                {service.durations?.[0] && (
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#1D4533] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#EAE4DC] inline-block">
                    Mulai {service.durations[0].priceFormatted}
                  </div>
                )}
              </div>

              {/* Bottom Learn More Link */}
              <div className="pt-3 mt-2 border-t border-[#F0EBE3] w-full">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#1D4533] group-hover:text-[#163728] transition-colors inline-flex items-center gap-1">
                  <span>LIHAT RINCIAN</span>
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
