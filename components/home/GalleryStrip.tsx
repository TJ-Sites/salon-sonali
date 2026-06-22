"use client";

import { useRef } from "react";
import Link from "next/link";

// Placeholder gallery items using CSS gradients
const galleryItems = [
  { id: 1, bg: "linear-gradient(135deg, #1a1408 0%, #B89A7A 100%)", label: "Hair Colour" },
  { id: 2, bg: "linear-gradient(135deg, #0E0E10 0%, #6B665F 100%)", label: "Skin Care" },
  { id: 3, bg: "linear-gradient(45deg, #2a1f14 0%, #B89A7A 60%, #F7F6F2 100%)", label: "Grooming" },
  { id: 4, bg: "linear-gradient(135deg, #0E0E10 30%, #B89A7A 100%)", label: "Styling" },
  { id: 5, bg: "linear-gradient(135deg, #3d2c1e 0%, #E7E2D8 100%)", label: "Treatments" },
  { id: 6, bg: "linear-gradient(135deg, #1a1408 0%, #6B665F 50%, #B89A7A 100%)", label: "Bridal" },
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
            {/* Gradient placeholder — replace with next/image in production */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ background: item.bg }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0E0E10]/0 group-hover:bg-[#0E0E10]/40 transition-all duration-400" />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <p className="font-montserrat text-xs tracking-widest uppercase text-[#F7F6F2]">
                {item.label}
              </p>
            </div>
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#B89A7A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
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
