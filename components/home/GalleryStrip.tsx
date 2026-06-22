"use client";

import { useRef } from "react";
import Link from "next/link";

// Gallery items using CSS gradients and images
const galleryItems = [
  { id: 1, image: "/hair-colour.jpg", label: "Hair Colour" },
  { id: 2, image: "/hair-colouring/8bcfaf01-912b-4a40-b0f9-436d765f2b4d.jpg", label: "Hair Colouring" },
  { id: 3, image: "/hair-colouring/eae3f095-76b3-46d1-926a-139828e43235.jpg", label: "Hair Colouring" },
  { id: 4, bg: "linear-gradient(135deg, #0E0E10 0%, #6B665F 100%)", label: "Skin Care" },
  { id: 5, bg: "linear-gradient(45deg, #2a1f14 0%, #B89A7A 60%, #F7F6F2 100%)", label: "Grooming" },
  { id: 6, bg: "linear-gradient(135deg, #0E0E10 30%, #B89A7A 100%)", label: "Styling" },
  { id: 7, image: "/treatments.jpg", label: "Treatments" },
  { id: 8, bg: "linear-gradient(135deg, #1a1408 0%, #6B665F 50%, #B89A7A 100%)", label: "Bridal" },
];

export default function GalleryStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#0E0E10] section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">
              Our Work
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#F7F6F2]">
              Beauty in Every Detail
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden md:flex font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] hover:text-[#F7F6F2] transition-colors duration-300 items-center gap-2"
          >
            View Gallery <span className="text-lg">→</span>
          </Link>
        </div>
        <div className="w-16 h-px bg-[#B89A7A] mt-6" />
      </div>

      {/* Horizontal scrolling strip */}
      <div
        ref={stripRef}
        className="flex gap-4 px-6 lg:px-12 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {galleryItems.map((item) => (
          <Link
            key={item.id}
            href="/gallery"
            className="group relative flex-none w-64 h-80 overflow-hidden cursor-pointer"
          >
            {/* Image or Gradient placeholder */}
            {item.image ? (
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover object-center scale-110 transition-transform duration-700 group-hover:scale-125"
              />
            ) : (
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: item.bg }}
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0E0E10]/20 group-hover:bg-[#0E0E10]/40 transition-all duration-400" />
            {/* Gradient shadow for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0E10]/80 to-transparent pointer-events-none" />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-400">
              <p className="font-montserrat text-xs tracking-widest uppercase text-[#F7F6F2] group-hover:text-[#B89A7A] transition-colors duration-300">
                {item.label}
              </p>
            </div>
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#B89A7A]/60 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-400" />
          </Link>
        ))}
      </div>

      {/* Mobile view all */}
      <div className="md:hidden text-center mt-8 px-6">
        <Link href="/gallery" className="btn-outline">
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
