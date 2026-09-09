"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Users, Footprints, Sparkles, Smile, Activity, Package } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";
import ServiceDetailModal from "./ServiceDetailModal";

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export default function ServicesSection({
  onSelectServiceToBook,
}: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-4 h-4 text-[#385A42]" />;
      case "Footprints":
        return <Footprints className="w-4 h-4 text-[#385A42]" />;
      case "Smile":
        return <Smile className="w-4 h-4 text-[#385A42]" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-[#385A42]" />;
      case "Package":
        return <Package className="w-4 h-4 text-[#385A42]" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-4 h-4 text-[#385A42]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#385A42]"></span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#385A42] uppercase">
              OUR SERVICES
            </span>
            <span className="h-px w-6 bg-[#385A42]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A261D] tracking-tight">
            Relaxation Treatments for Everyone
          </h2>

          <p className="text-sm text-[#556358] leading-relaxed">
            Pilihan perawatan refleksi dan pijat keluarga yang dirancang untuk mengembalikan kebugaran, menyegarkan pikiran, dan melepas rasa penat.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#E5DFD3] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-[#EAE3D4]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12241A]/50 via-transparent to-transparent pointer-events-none" />

                  {service.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1B3B2B]/90 text-[#FAF7F2] backdrop-blur-xs">
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF7F2]/90 backdrop-blur-xs text-[#1B3B2B]">
                    {getServiceIcon(service.iconName)}
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-medium text-[#1A261D] group-hover:text-[#1B3B2B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#556358] leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-[#E5DFD3]/60 flex items-center justify-between text-xs">
                    <span className="text-[#6B7870]">Mulai dari</span>
                    <span className="font-bold text-[#1B3B2B]">
                      {service.durations[0]?.priceFormatted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="px-6 pb-6 pt-1">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#FAF7F2] hover:bg-[#1B3B2B] text-[#1B3B2B] hover:text-[#FAF7F2] border border-[#E5DFD3] hover:border-[#1B3B2B] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
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
