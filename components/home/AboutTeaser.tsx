"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutTeaser() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (leftRef.current) {
            leftRef.current.style.opacity = "1";
            leftRef.current.style.transform = "translateX(0)";
          }
          if (rightRef.current) {
            rightRef.current.style.opacity = "1";
            rightRef.current.style.transform = "translateX(0)";
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Image side */}
        <div
          ref={leftRef}
          className="relative overflow-hidden min-h-[400px] lg:min-h-0"
          style={{
            opacity: 0,
            transform: "translateX(-60px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Placeholder image using CSS gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #000000 0%, #2a2420 40%, #B89A7A 100%)",
            }}
          />
          {/* Decorative text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-playfair text-6xl italic text-[#FFFFFF]/20">
              Sonali
            </p>
          </div>
          {/* Gold frame accent */}
          <div className="absolute bottom-8 left-8 w-24 h-px bg-[#B89A7A]" />
          <div className="absolute bottom-8 left-8 h-24 w-px bg-[#B89A7A]" />
        </div>

        {/* Text side */}
        <div
          ref={rightRef}
          className="flex flex-col justify-center px-10 lg:px-16 py-16"
          style={{
            opacity: 0,
            transform: "translateX(60px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-6">
            Our Story
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#000000] leading-tight mb-8">
            Crafted with Passion,{" "}
            <em className="italic">Delivered with Care</em>
          </h2>
          <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed mb-6">
            Salon Sonali was born from a simple belief: every person deserves to
            feel extraordinary. With over 12 years of experience, our team of
            dedicated artists brings world-class techniques to your personal
            beauty journey.
          </p>
          <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed mb-10">
            We combine premium products, personalised consultation, and a warm,
            welcoming atmosphere to create an experience as beautiful as the
            results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="btn-outline-dark">
              Our Story
            </Link>
            <Link href="/team" className="btn-primary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
