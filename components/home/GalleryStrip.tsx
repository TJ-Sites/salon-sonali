"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const galleryCategories = [
  {
    id: 1,
    label: "Hair Colouring",
    images: [
      "/covers/hair_colouring.png"
    ],
  },
  {
    id: 2,
    label: "Hair Cutting",
    images: [
      "/covers/hair_cutting.png"
    ],
  },
  {
    id: 3,
    label: "Skin Care",
    images: [
      "/treatments/cleo_natures_collection.png"
    ],
  },
  {
    id: 4,
    label: "Kids Hair Cutting",
    images: [
      "/covers/kids_hair_cutting.png"
    ],
  },
  {
    id: 5,
    label: "Treatments",
    images: [
      "/covers/treatments.png"
    ],
  },
  {
    id: 6,
    label: "Dressing",
    images: [
      "/covers/dressing.png"
    ],
  },
  {
    id: 7,
    label: "Bridle Dressing",
    images: [
      "/covers/bridal_dressing.png"
    ],
  },
  {
    id: 8,
    label: "Eyebrows Shaping",
    images: [
      "/covers/eyebrow_shaping.png"
    ],
  },
  {
    id: 9,
    label: "Hair Removing",
    images: [
      "/covers/hair_removing.png"
    ],
  }
];

function GalleryCard({ item, index }: { item: typeof galleryCategories[0]; index: number }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [nextImgIndex, setNextImgIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Stagger transition starts based on card index so they don't change at the same time
    const initialDelay = index * 1500 + 3000;
    
    let interval: NodeJS.Timeout;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setIsTransitioning(true);
        // Wait for cross-fade duration before shifting active indices
        setTimeout(() => {
          setCurrentImgIndex((prev) => (prev + 1) % item.images.length);
          setNextImgIndex((prev) => (prev + 1) % item.images.length);
          setIsTransitioning(false);
        }, 1500);
      }, 5000); // Transitions every 5s
    }, initialDelay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [item.images.length, index]);

  const currentImg = item.images[currentImgIndex];
  const nextImg = item.images[nextImgIndex];

  return (
    <Link
      href="/gallery"
      className="group relative flex-none w-[calc(100%-24px)] sm:w-[calc(50%-20px)] md:w-[calc(33.333%-18.67px)] lg:w-[calc(25%-24px)] h-[420px] overflow-hidden cursor-pointer border border-[#000000]"
    >
      {/* Background images for cross-fade */}
      <div className="absolute inset-0 w-full h-full">
        {/* Next Image (below) */}
        <img
          src={nextImg}
          alt={item.label}
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
        />
        {/* Current Image (above) */}
        <img
          src={currentImg}
          alt={item.label}
          className={`absolute inset-0 w-full h-full object-cover object-center scale-110 transition-all duration-[1500ms] ease-in-out group-hover:scale-125 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000]/20 group-hover:bg-[#000000]/40 transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.3, 1)" />
      {/* Gradient shadow for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#000000]/80 to-transparent pointer-events-none" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-[1200ms] cubic-bezier(0.25, 1, 0.3, 1) group-hover:-translate-y-1">
        <p className="font-montserrat text-xs tracking-widest uppercase text-[#FFFFFF] group-hover:text-[#B89A7A] transition-colors duration-[1000ms] cubic-bezier(0.25, 1, 0.3, 1)">
          {item.label}
        </p>
      </div>
      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#B89A7A]/60 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.3, 1)" />
    </Link>
  );
}

export default function GalleryStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-[#000000] py-24 lg:py-32 overflow-hidden">
      {/* Lace Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/lace-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
          mixBlendMode: "screen" as const,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">
              Our Work
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#FFFFFF]">
              Beauty in Every Detail
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden md:flex font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] hover:text-[#FFFFFF] transition-colors duration-300 items-center gap-2"
          >
            View Gallery <span className="text-lg">→</span>
          </Link>
        </div>
        <div className="w-16 h-px bg-[#B89A7A] mt-6" />
      </div>

      {/* Horizontal scrolling strip of dynamically cycling cards */}
      <div
        ref={stripRef}
        className="flex gap-4 pl-6 lg:pl-12 pr-0 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {galleryCategories.map((cat, index) => (
          <GalleryCard key={cat.id} item={cat} index={index} />
        ))}
        {/* Spacer to act as padding-right at the end of scroll */}
        <div className="flex-none w-6 lg:w-12 h-1" />
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
