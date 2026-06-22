"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const galleryCategories = [
  {
    id: 1,
    label: "Hair Colouring",
    images: [
      "/hair-colour.jpg",
      "/hair-colouring/49eda34d-c8be-4bf5-97bd-e6bd6474ab6b.jpg",
      "/hair-colouring/53a13a46-4df1-4ae4-96ac-818797a0e3a2.jpg",
      "/hair-colouring/5dab9db0-15b8-48bb-8701-ca3d23bed373.jpg",
      "/hair-colouring/7700bf53-2276-416d-b5f6-60b9971a1279.jpg",
      "/hair-colouring/7d12699c-38e0-4b78-8917-c5759c090682.jpg",
      "/hair-colouring/8bcfaf01-912b-4a40-b0f9-436d765f2b4d.jpg",
      "/hair-colouring/d4f2fce8-c07e-4445-b80c-f210d5809e3e.jpg",
      "/hair-colouring/eae3f095-76b3-46d1-926a-139828e43235.jpg",
      "/hair-colouring/f06a1b3a-021e-415d-b596-67f65551f6c8.jpg",
      "/hair-colouring/fefc98df-be10-478a-91b9-833ec6414070.jpg",
    ],
  },
  {
    id: 2,
    label: "Hair Cutting",
    images: [
      "/hair-cutting/33a4ca6a-bde6-4aa7-a184-0ef23bd05d5c.jpg",
      "/hair-cutting/577b0f81-bd47-4df6-9d39-2c42ea24805a.jpg",
      "/hair-cutting/688f4958-31d6-4ef4-826a-fe059bcba7a4.jpg",
      "/hair-cutting/90639d09-e512-4cb6-9efa-beb7fe365f15.jpg",
      "/hair-cutting/9c6561c7-d594-40da-be3b-7995fe7a1615.jpg",
      "/hair-cutting/c1c78ce3-3ba2-40e3-ac0a-584faf1bad26.jpg",
    ],
  },
  {
    id: 3,
    label: "Kids Hair Cutting",
    images: [
      "/kids-hair-cutting/254eac87-cca6-4fb9-b827-72d9dedaeb6f.jpg",
      "/kids-hair-cutting/a6269c77-97c8-4248-90c0-7c44aec5c83c.jpg",
      "/kids-hair-cutting/d487e19f-b8d1-4a59-bad0-a2b8cf9a3526.jpg",
    ],
  },
  {
    id: 4,
    label: "Treatments",
    images: [
      "/treatments.jpg",
      "/treatments/4ecf2a7c-c4d7-49ef-be4f-2a6254c710f5.jpg",
      "/treatments/5a563f88-e53c-42ea-95fd-17bff1a022dc.jpg",
      "/treatments/6b1fd28b-e832-48c2-bbc0-33330bae2d48.jpg",
      "/treatments/b45c10cb-add9-47bd-8b02-6c6a59c67d76.jpg",
    ],
  },
  {
    id: 5,
    label: "Dressing",
    images: [
      "/dressing/1429132a-3230-456f-a43f-eee1edfe3301.jpg",
      "/dressing/2ff6af4d-62ea-4eec-8bad-30dc924cdafa.jpg",
      "/dressing/a1916995-b3e6-4f91-9c39-c3e154ee28a2.jpg",
      "/dressing/f90f487d-b95e-4943-a071-9a7389a7d1bf.jpg",
    ],
  },
  {
    id: 6,
    label: "Bridle Dressing",
    images: [
      "/bridle-dressing/05402c34-ce06-4184-b0d1-4ce40e05ec5a.jpg",
      "/bridle-dressing/0b300dbb-7344-45a2-9388-fe2daae81b4e.jpg",
      "/bridle-dressing/709931cc-0f01-4b6b-823a-a4a6356a314c.jpg",
      "/bridle-dressing/cbeafd7d-67d8-4482-b8d4-c697958b916f.jpg",
    ],
  },
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
    <section className="bg-[#000000] py-24 lg:py-32 overflow-hidden">
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
        {galleryCategories.slice(0, 4).map((cat, index) => (
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
