import React from "react";
import { businessConfig } from "@/config/business";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-24 bg-[#1B3B2B] text-[#FAF7F2] relative overflow-hidden"
    >
      {/* Subtle organic floral/leaf background element */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#244835] rounded-full filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#142C20] rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#C5A880]"></span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              WHY CHOOSE US
            </span>
            <span className="h-px w-6 bg-[#C5A880]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
            Why Choose Bale Spa?
          </h2>

          <p className="text-sm text-[#D1DDD5] leading-relaxed">
            Comfort, care, and relaxation for you and your family.
          </p>
        </div>

        {/* 4 Statistics / Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#142C20]/70 border border-[#2B4E3A] rounded-xl p-6 text-center hover:border-[#C5A880]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#C5A880] mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-[#A8BEB1] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
