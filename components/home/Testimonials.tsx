"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Priya M.",
    service: "Hair Colour & Cut",
    rating: 5,
    quote:
      "Salon Sonali completely transformed my look. The attention to detail and the care they took to understand exactly what I wanted was exceptional. I've never felt more confident!",
    initials: "PM",
    color: "#B89A7A",
  },
  {
    name: "Aisha K.",
    service: "Bridal Package",
    rating: 5,
    quote:
      "I trusted Salon Sonali with my bridal look and they exceeded every expectation. The whole team was professional, warm, and made my wedding day absolutely perfect.",
    initials: "AK",
    color: "#6B665F",
  },
  {
    name: "Sofia R.",
    service: "Skin Treatment",
    rating: 5,
    quote:
      "The facial I received here was unlike anything I've experienced before. My skin has never looked better. I'm now a regular and I wouldn't go anywhere else.",
    initials: "SR",
    color: "#0E0E10",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="bg-[#E7E2D8] section-padding">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">
          Client Love
        </p>
        <h2 className="font-playfair text-4xl lg:text-5xl text-[#0E0E10] mb-16">
          What Our Clients Say
        </h2>

        {/* Testimonial card */}
        <div
          key={current}
          style={{ animation: "fadeIn 0.6s ease forwards" }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-[#B89A7A] text-xl">★</span>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-playfair text-xl lg:text-2xl text-[#0E0E10] leading-relaxed italic mb-10 max-w-3xl mx-auto">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Client info */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-playfair text-[#F7F6F2] text-sm font-bold"
              style={{ backgroundColor: t.color }}
            >
              {t.initials}
            </div>
            <div className="text-left">
              <p className="font-montserrat font-semibold text-sm text-[#0E0E10]">
                {t.name}
              </p>
              <p className="font-montserrat text-xs text-[#6B665F]">{t.service}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#B89A7A]/40 text-[#6B665F] hover:border-[#B89A7A] hover:text-[#B89A7A] transition-all duration-300 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#B89A7A] w-6" : "bg-[#B89A7A]/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-[#B89A7A]/40 text-[#6B665F] hover:border-[#B89A7A] hover:text-[#B89A7A] transition-all duration-300 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}
