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

    const heading = headingRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;

    if (!heading) return () => window.removeEventListener("scroll", onScroll);

    // Wrap each word in a span for stagger animation
    const text = heading.textContent || "";
    const words = text.trim().split(/\s+/);
    heading.innerHTML = words
      .map(
        (word, i) =>
          `<span class="word-wrap" style="overflow:hidden;display:inline-block;"><span class="word" style="display:inline-block;opacity:0;transform:translateY(100%);transition:opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms">${word}</span></span>`
      )
      .join(" ");

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

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: scrolled ? "#F7F6F2" : "#0E0E10" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(184,154,122,0.12) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(184,154,122,0.07) 0%, transparent 60%)",
          opacity: scrolled ? 0.3 : 1,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5 transition-opacity duration-700"
        style={{
          backgroundImage: `linear-gradient(rgba(247,246,242,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,242,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: scrolled ? 0.02 : 0.05,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <p
          className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-8"
          style={{ opacity: 0, animation: "fadeIn 0.8s ease 0.2s forwards" }}
        >
          Luxury Hair &amp; Beauty Studio
        </p>

        {/* Main heading */}
        <h1
          ref={headingRef}
          className={`font-playfair font-bold leading-tight mb-8 transition-colors duration-500 ${
            scrolled ? "text-[#0E0E10]" : "text-[#F7F6F2]"
          }`}
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Where Beauty Meets Artistry
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className={`font-montserrat text-lg max-w-xl mx-auto leading-relaxed mb-12 transition-colors duration-500 ${
            scrolled ? "text-[#3D3A35]" : "text-[#A39F99]"
          }`}
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease 1.1s, transform 0.8s ease 1.1s",
          }}
        >
          Experience transformative hair, skin, dressings, and beauty treatments
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
          <Link href="/contact" className={scrolled ? "btn-outline-dark" : "btn-primary"}>
            Book Appointment
          </Link>
          <Link href="/services" className={scrolled ? "btn-outline-dark" : "btn-outline"}>
            Our Services
          </Link>
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
