"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  OrganicLeafDropIcon,
  HygienicShieldIcon,
  SpaCandleIcon,
} from "@/components/ui/SpaIcons";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -30 },
          {
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#why-us");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#EAE4DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Spa Room Image with Official Logo Badge */}
          <div ref={imageRef} className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-white border border-[#EAE4DC]">
              <Image
                src="/images/about-room.jpg"
                alt="Your Well-Being Is Our Priority - Bale Spa Family Reflexology Room"
                width={700}
                height={520}
                className="w-full h-auto object-cover aspect-[4/3]"
              />

              {/* Gentle warm tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C]/25 via-transparent to-transparent pointer-events-none" />

              {/* Official Bale Spa Logo Emblem Floating Badge */}
              <div className="absolute top-4 left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg border-2 border-white bg-[#1D4533]">
                <Image
                  src="/images/bale-spa-logo.jpg"
                  alt="Bale Spa Official Emblem"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div ref={textRef} className="lg:col-span-6 space-y-6">
            {/* Eyebrow with horizontal line */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1D4533] uppercase">
                ABOUT US
              </span>
              <span className="h-px w-8 bg-[#1D4533]/60"></span>
            </div>

            {/* Headline Serif Besar */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F150C] leading-[1.15] tracking-tight">
              Your Well-Being <br />
              <span className="font-serif italic text-[#1D4533]">
                Is Our Priority
              </span>
            </h2>

            {/* Copy Text */}
            <p className="text-sm sm:text-base text-[#4E3F33] leading-relaxed">
              Di Bale Spa Family Reflexology, kami percaya bahwa kesehatan sejati berawal dari keseimbangan tubuh dan ketenangan pikiran. Terapis kami yang terampil dan beretika santun memadukan produk minyak herbal alami dan teknik pijat teruji untuk menghadirkan kenyamanan istimewa bagi Anda dan keluarga tercinta.
            </p>

            {/* 3 Circular Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {/* Feature 1 */}
              <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                <div className="w-12 h-12 rounded-full border border-[#EAE4DC] bg-[#FAF7F2] text-[#1D4533] flex items-center justify-center shrink-0 shadow-2xs">
                  <OrganicLeafDropIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F150C]">
                    Natural &amp; Organic
                  </h4>
                  <p className="text-[11px] text-[#635345] leading-snug mt-0.5">
                    We use premium natural products for your care.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                <div className="w-12 h-12 rounded-full border border-[#EAE4DC] bg-[#FAF7F2] text-[#1D4533] flex items-center justify-center shrink-0 shadow-2xs">
                  <HygienicShieldIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F150C]">
                    Clean &amp; Hygienic
                  </h4>
                  <p className="text-[11px] text-[#635345] leading-snug mt-0.5">
                    Sanitized environment with private family rooms.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                <div className="w-12 h-12 rounded-full border border-[#EAE4DC] bg-[#FAF7F2] text-[#1D4533] flex items-center justify-center shrink-0 shadow-2xs">
                  <SpaCandleIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F150C]">
                    Calm Atmosphere
                  </h4>
                  <p className="text-[11px] text-[#635345] leading-snug mt-0.5">
                    A peaceful retreat away from the daily busy rush.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#why-us"
                onClick={handleLearnMore}
                className="inline-block px-7 py-3.5 bg-[#1D4533] hover:bg-[#163728] text-[#F3E9DC] text-xs font-bold tracking-[0.14em] uppercase rounded-sm shadow-xs transition-colors"
              >
                LEARN MORE ABOUT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
