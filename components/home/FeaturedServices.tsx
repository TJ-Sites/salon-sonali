"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: "✂️",
    title: "Hair Services",
    description:
      "From precision cuts to full-colour transformations, our stylists craft looks that express your unique personality.",
    href: "/services#hair",
  },
  {
    icon: "✨",
    title: "Skin Treatments",
    description:
      "Revitalising facials, microdermabrasion, and advanced skin therapies tailored to your skin type.",
    href: "/services#skin",
  },
  {
    icon: "💅",
    title: "Nail Artistry",
    description:
      "Luxury manicures, pedicures, and nail art created with premium products for lasting elegance.",
    href: "/services#nails",
  },
];

export default function FeaturedServices() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".service-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            el.style.transitionDelay = `${delay}ms`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#E7E2D8] section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">
            What We Offer
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#0E0E10]">
            Our Signature Services
          </h2>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card group bg-[#F7F6F2] p-10 flex flex-col gap-6 cursor-pointer"
              data-delay={i * 150}
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease",
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 20px 60px rgba(184,154,122,0.15)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 20px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span className="text-4xl">{service.icon}</span>
              <div>
                <h3 className="font-playfair text-2xl text-[#0E0E10] mb-3">
                  {service.title}
                </h3>
                <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.href}
                className="font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] hover:text-[#0E0E10] transition-colors duration-300 flex items-center gap-2 mt-auto"
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-14">
          <Link href="/services" className="btn-outline-dark">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
