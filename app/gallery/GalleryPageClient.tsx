"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const filters = ["All", "Hair", "Skin", "Nails", "Bridal"];

const galleryItems = [
  { id: 1, category: "Hair", label: "Sun-Kissed Balayage", gradient: "linear-gradient(135deg, #1a0f08 0%, #B89A7A 100%)", span: "row-span-2" },
  { id: 2, category: "Skin", label: "Radiance Facial", gradient: "linear-gradient(135deg, #0E0E10 0%, #6B665F 100%)", span: "" },
  { id: 3, category: "Nails", label: "Geometric Nail Art", gradient: "linear-gradient(45deg, #2a1f14 0%, #B89A7A 60%, #F7F6F2 100%)", span: "" },
  { id: 4, category: "Bridal", label: "Bridal Up-Do", gradient: "linear-gradient(135deg, #1a1408 0%, #E7E2D8 100%)", span: "row-span-2" },
  { id: 5, category: "Hair", label: "Rich Brunette Gloss", gradient: "linear-gradient(135deg, #0E0E10 0%, #3d2c1e 100%)", span: "" },
  { id: 6, category: "Nails", label: "Soft Nude Gel", gradient: "linear-gradient(135deg, #E7E2D8 0%, #B89A7A 100%)", span: "" },
  { id: 7, category: "Hair", label: "Precision Bob Cut", gradient: "linear-gradient(160deg, #0E0E10 30%, #B89A7A 100%)", span: "" },
  { id: 8, category: "Skin", label: "LED Glow Treatment", gradient: "linear-gradient(135deg, #1a0f08 0%, #6B665F 60%, #B89A7A 100%)", span: "row-span-2" },
  { id: 9, category: "Bridal", label: "Bridal Makeup & Styling", gradient: "linear-gradient(135deg, #2a1f14 0%, #F7F6F2 100%)", span: "" },
  { id: 10, category: "Hair", label: "Platinum Blonde", gradient: "linear-gradient(135deg, #6B665F 0%, #E7E2D8 100%)", span: "" },
  { id: 11, category: "Nails", label: "French Ombré", gradient: "linear-gradient(135deg, #F7F6F2 0%, #B89A7A 100%)", span: "" },
  { id: 12, category: "Bridal", label: "Loose Waves Bridal", gradient: "linear-gradient(135deg, #1a1408 0%, #B89A7A 50%, #E7E2D8 100%)", span: "" },
];

export default function GalleryPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0E0E10] pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(184,154,122,0.1) 0%, transparent 60%)" }} />
        <SectionReveal className="relative z-10 max-w-2xl mx-auto">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-5">Our Portfolio</p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl text-[#F7F6F2] mb-6" style={{ lineHeight: 1.1 }}>
            Beauty in Every Frame
          </h1>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto mb-8" />
          <p className="font-montserrat text-[#6B665F] text-base leading-relaxed">
            A curated collection of transformations — from everyday elegance to unforgettable bridal moments.
          </p>
        </SectionReveal>
      </section>

      {/* Filter Bar */}
      <section className="bg-[#F7F6F2] sticky top-20 z-30 border-b border-[#E7E2D8] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative font-montserrat text-xs tracking-widest uppercase px-6 py-5 whitespace-nowrap transition-colors duration-300 ${
                activeFilter === f ? "text-[#0E0E10]" : "text-[#6B665F] hover:text-[#0E0E10]"
              }`}
            >
              {f}
              {activeFilter === f && (
                <motion.div
                  layoutId="gallery-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B89A7A]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry/Grid */}
      <section className="bg-[#F7F6F2] section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="break-inside-avoid group cursor-pointer relative overflow-hidden"
                  style={{ height: item.span === "row-span-2" ? "420px" : "280px" }}
                  onClick={() => setLightboxItem(item)}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ background: item.gradient }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E10]/0 group-hover:bg-[#0E0E10]/50 transition-all duration-500" />
                  {/* Label */}
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-montserrat text-[10px] tracking-widest uppercase text-[#B89A7A] mb-1">{item.category}</p>
                    <p className="font-playfair text-lg text-[#F7F6F2]">{item.label}</p>
                  </div>
                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-[#B89A7A]/0 group-hover:border-[#B89A7A]/60 flex items-center justify-center text-[#F7F6F2]/0 group-hover:text-[#F7F6F2] transition-all duration-500 text-xs">
                    ⤢
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
          >
            <div className="absolute inset-0 bg-[#0E0E10]/90 backdrop-blur-md" />
            <motion.div
              className="relative max-w-2xl w-full aspect-[4/5] overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0" style={{ background: lightboxItem.gradient }} />
              {/* Close */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-[#0E0E10]/60 text-[#F7F6F2] flex items-center justify-center text-xl hover:bg-[#B89A7A] transition-colors z-10"
                onClick={() => setLightboxItem(null)}
              >
                ×
              </button>
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0E0E10]/80 to-transparent p-8">
                <p className="font-montserrat text-[10px] tracking-widest uppercase text-[#B89A7A] mb-2">{lightboxItem.category}</p>
                <p className="font-playfair text-2xl text-[#F7F6F2]">{lightboxItem.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
