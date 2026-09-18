"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: scrolled ? "#FFFFFF" : "#000000" }}
    >
      {/* Uploaded Background */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: scrolled ? 0.2 : 0.6,
        }}
      />
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(184,154,122,0.12) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(184,154,122,0.07) 0%, transparent 60%)",
          opacity: scrolled ? 0.3 : 1,
        }}
      />



      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-8 lg:px-12 text-center flex flex-col items-center justify-center">
        {/* Eyebrow */}
        <p
          className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] font-bold mb-1 -mt-16 sm:-mt-16"
          style={{ opacity: 0, animation: "fadeIn 0.8s ease 0.2s forwards" }}
        >
          Luxury Hair &amp; Beauty Studio
        </p>

        {/* Main heading */}
        <h1
          ref={headingRef}
          className={`font-playfair font-black leading-tight mb-8 whitespace-nowrap text-center ${scrolled ? "text-[#000000]" : "text-[#FFFFFF]"
            }`}
          style={{
            fontSize: "clamp(2.85rem, 12vw, 7.5rem)",
            letterSpacing: "-0.02em",
            opacity: 0,
            animation: "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards",
            transition: "color 1.2s cubic-bezier(0.25, 1, 0.3, 1)",
          }}
        >
          SALON SONALI
        </h1>

        {/* Location */}
        <p
          className={`font-montserrat text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.45em] uppercase mb-0 -mt-6 font-medium translate-x-8 sm:translate-x-20 md:translate-x-36 lg:translate-x-48 ${scrolled ? "text-[#3D3A35]" : "text-[#E5E3DF]"
            }`}
          style={{
            opacity: 0,
            animation: "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards",
          }}
        >
          MINUWANGODA
        </p>

        {/* Bottom group — pushed down */}
        <div className="mt-28 sm:mt-32 flex flex-col items-center sm:items-start w-full">
          {/* Subheading */}
          <p
            ref={subRef}
            className={`font-montserrat text-base max-w-xl leading-relaxed mb-12 text-center sm:text-left ${scrolled ? "text-[#3D3A35]" : "text-[#FFFFFF]"
              }`}
            style={{
              opacity: 0,
              animation: "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards",
              transition: "color 1.2s cubic-bezier(0.25, 1, 0.3, 1)",
            }}
          >
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center ${scrolled ? "hero-scrolled" : ""}`}
            style={{
              opacity: 0,
              animation: "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards",
            }}
          >
            <Link href="/contact" className="btn-hero-solid">
              Book Appointment
            </Link>
            <Link href="/services" className="btn-hero-outline">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50%       { opacity: 0.4; transform: scaleY(0.6); }
        }
      `}</style>
    </section>
  );
}
