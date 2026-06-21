"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Visuri Perera",
    service: "Balayage, Blow dry, Hairstyling",
    rating: 5,
    quote:
      "My sister and I came to this salon to get our damaged hair fixed. My sister had gone to a salon previously to get her long curly hair cut into layers and it turned out to be a disaster, thankfully the staff not only fixed her hair but also made it look gorgeous! They also completely transformed my hair with an outstanding haircut and colour treatment...",
    initials: "VP",
    color: "#B89A7A",
  },
  {
    name: "Niranjala Nishadini",
    service: "Herbal Cosmetics",
    rating: 5,
    quote:
      "Yes it's good place to be pretty .... Highly professional team and lovely service.",
    initials: "NN",
    color: "#6B665F",
  },
  {
    name: "Shehara Malshani",
    service: "Regular Customer",
    rating: 5,
    quote:
      "I am a regular customer at Salon Sonali. They are professionals and know the art. Highly recommended!",
    initials: "SM",
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

        {/* Testimonial card link to Google Reviews */}
        <a
          href="https://www.google.com/search?q=salon+sonali+minuwangoda+reviews&sca_esv=9bf49f2108269850&biw=1536&bih=791&sxsrf=APpeQnviL3GM81qEFF16UCXffbKK0XZCQA%3A1781938773923&ei=VTo2asPSN5q1wcsP09ybsQY&oq=salon+sonali+minuwangoda+&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXNhbG9uIHNvbmFsaSBtaW51d2FuZ29kYSAqAggAMgQQIxgnMgYQABgWGB4yBhAAGBYYHjICECYyCBAAGIkFGKIEMgUQABjvBUjeElAAWABwAHgAkAEAmAGOEKABxBiqAQc3LTEuMC4xuAEByAEA-AEBmAICoALXGJgDAJIHBTYtMS4xoAfsB7IHBTYtMS4xuAfXGMIHAzItMsgHDIAIAQ&sclient=gws-wiz-serp"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div
            key={current}
            style={{ animation: "fadeIn 0.6s ease forwards" }}
            className="hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-[#B89A7A] text-xl">★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-playfair text-base sm:text-lg md:text-xl lg:text-2xl text-[#0E0E10] leading-relaxed italic mb-10 max-w-3xl mx-auto group-hover:text-[#B89A7A] transition-colors duration-300">
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

            {/* View on Google Badge */}
            <div className="inline-flex items-center gap-2 mt-8 text-xs font-montserrat tracking-widest text-[#B89A7A] uppercase group-hover:underline">
              <span>View on Google Reviews</span>
              <svg
                className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </a>

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
