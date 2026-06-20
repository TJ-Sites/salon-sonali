"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;

    if (!heading) return;

    // Wrap each word in a span for stagger animation
    const text = heading.textContent || "";
    const words = text.split(" ");
    heading.innerHTML = words
      .map(
        (word, i) =>
          `<span class="word-wrap" style="overflow:hidden;display:inline-block;margin-right:0.3em"><span class="word" style="display:inline-block;opacity:0;transform:translateY(100%);transition:opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms">${word}</span></span>`
      )
      .join("");

    // Trigger animation after small delay
    const timer = setTimeout(() => {
      heading.querySelectorAll<HTMLElement>(".word").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
      if (sub) {
        sub.style.opacity = "1";
        sub.style.transform = "translateY(0)";
      }
      if (cta) {
        cta.style.opacity = "1";
        cta.style.transform = "translateY(0)";
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0E0E10" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(184,154,122,0.12) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(184,154,122,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(247,246,242,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,242,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <p
          className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-8"
          style={{ opacity: 0, animation: "fadeIn 0.8s ease 0.2s forwards" }}
        >
          ✦ Luxury Hair &amp; Beauty Studio ✦
        </p>

        {/* Main heading */}
        <h1
          ref={headingRef}
          className="font-playfair font-bold leading-tight mb-8"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "#F7F6F2",
            letterSpacing: "-0.02em",
          }}
        >
          Where Beauty Meets Artistry
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="font-montserrat text-lg text-[#6B665F] max-w-xl mx-auto leading-relaxed mb-12"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease 1.1s, transform 0.8s ease 1.1s",
          }}
        >
          Experience transformative hair, skin, nail, and wellness treatments
          crafted for the modern woman.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease 1.4s, transform 0.8s ease 1.4s",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Book Appointment
          </Link>
          <Link href="/services" className="btn-outline">
            Our Services
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: "fadeIn 1s ease 2s forwards" }}
        >
          <span className="font-montserrat text-xs tracking-widest uppercase text-[#6B665F]">
            Scroll
          </span>
          <div
            className="w-px h-12 bg-[#B89A7A]"
            style={{ animation: "pulse 2s ease infinite" }}
          />
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
