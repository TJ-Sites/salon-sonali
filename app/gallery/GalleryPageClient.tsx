"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const filters = ["All", "Hair Colouring", "Hair Cutting", "Kids Hair Cutting", "Treatments", "Dressing", "Bridle Dressing"];

const galleryItems = [
  // ── Hair Colouring (11 photos)
  { id: 1,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/49eda34d-c8be-4bf5-97bd-e6bd6474ab6b.jpg", span: "row-span-2" },
  { id: 2,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/53a13a46-4df1-4ae4-96ac-818797a0e3a2.jpg", span: "" },
  { id: 3,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/5dab9db0-15b8-48bb-8701-ca3d23bed373.jpg", span: "" },
  { id: 4,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/7700bf53-2276-416d-b5f6-60b9971a1279.jpg", span: "row-span-2" },
  { id: 5,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/7d12699c-38e0-4b78-8917-c5759c090682.jpg", span: "" },
  { id: 6,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/8bcfaf01-912b-4a40-b0f9-436d765f2b4d.jpg", span: "" },
  { id: 7,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/d4f2fce8-c07e-4445-b80c-f210d5809e3e.jpg", span: "" },
  { id: 8,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/e0d85b23-7f5f-4aba-b9f0-88b8350c1d1a.jpg", span: "" },
  { id: 9,  category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/eae3f095-76b3-46d1-926a-139828e43235.jpg", span: "" },
  { id: 10, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/f06a1b3a-021e-415d-b596-67f65551f6c8.jpg", span: "" },
  { id: 11, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/fefc98df-be10-478a-91b9-833ec6414070.jpg", span: "" },
  // ── Hair Cutting (6 photos)
  { id: 12, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/33a4ca6a-bde6-4aa7-a184-0ef23bd05d5c.jpg", span: "row-span-2" },
  { id: 13, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/577b0f81-bd47-4df6-9d39-2c42ea24805a.jpg", span: "" },
  { id: 14, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/688f4958-31d6-4ef4-826a-fe059bcba7a4.jpg", span: "" },
  { id: 15, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/90639d09-e512-4cb6-9efa-beb7fe365f15.jpg", span: "row-span-2" },
  { id: 16, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/9c6561c7-d594-40da-be3b-7995fe7a1615.jpg", span: "" },
  { id: 17, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/c1c78ce3-3ba2-40e3-ac0a-584faf1bad26.jpg", span: "" },
  // ── Kids Hair Cutting (3 photos)
  { id: 18, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/254eac87-cca6-4fb9-b827-72d9dedaeb6f.jpg", span: "row-span-2" },
  { id: 19, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/a6269c77-97c8-4248-90c0-7c44aec5c83c.jpg", span: "" },
  { id: 20, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/d487e19f-b8d1-4a59-bad0-a2b8cf9a3526.jpg", span: "" },
  // ── Treatments (4 photos)
  { id: 21, category: "Treatments", label: "Treatments", image: "/treatments/4ecf2a7c-c4d7-49ef-be4f-2a6254c710f5.jpg", span: "row-span-2" },
  { id: 22, category: "Treatments", label: "Treatments", image: "/treatments/5a563f88-e53c-42ea-95fd-17bff1a022dc.jpg", span: "" },
  { id: 23, category: "Treatments", label: "Treatments", image: "/treatments/6b1fd28b-e832-48c2-bbc0-33330bae2d48.jpg", span: "" },
  { id: 24, category: "Treatments", label: "Treatments", image: "/treatments/b45c10cb-add9-47bd-8b02-6c6a59c67d76.jpg", span: "" },
  // ── Dressing (4 photos)
  { id: 25, category: "Dressing", label: "Dressing", image: "/dressing/1429132a-3230-456f-a43f-eee1edfe3301.jpg", span: "row-span-2" },
  { id: 26, category: "Dressing", label: "Dressing", image: "/dressing/2ff6af4d-62ea-4eec-8bad-30dc924cdafa.jpg", span: "" },
  { id: 27, category: "Dressing", label: "Dressing", image: "/dressing/a1916995-b3e6-4f91-9c39-c3e154ee28a2.jpg", span: "" },
  { id: 28, category: "Dressing", label: "Dressing", image: "/dressing/f90f487d-b95e-4943-a071-9a7389a7d1bf.jpg", span: "" },
  // ── Bridle Dressing (4 photos)
  { id: 29, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/05402c34-ce06-4184-b0d1-4ce40e05ec5a.jpg", span: "row-span-2" },
  { id: 30, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/0b300dbb-7344-45a2-9388-fe2daae81b4e.jpg", span: "" },
  { id: 31, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/709931cc-0f01-4b6b-823a-a4a6356a314c.jpg", span: "" },
  { id: 32, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/cbeafd7d-67d8-4482-b8d4-c697958b916f.jpg", span: "" },
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
      <section className="bg-[#F7F6F2] py-12 lg:py-16">
        <div className="w-full px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2"
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
                      style={{ background: item.gradient }}
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E10]/10 group-hover:bg-[#0E0E10]/50 transition-all duration-500" />
                  {/* Bottom shadow overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0E10]/80 to-transparent pointer-events-none" />
                  {/* Label */}
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500">
                    <p className="font-montserrat text-[10px] tracking-widest uppercase text-[#B89A7A] mb-1">{item.category}</p>
                    <p className="font-playfair text-lg text-[#F7F6F2] group-hover:text-[#B89A7A] transition-colors duration-300">{item.label}</p>
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
              {lightboxItem.image ? (
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.label}
                  className="absolute inset-0 w-full h-full object-cover object-center scale-110"
                />
              ) : (
                <div className="absolute inset-0" style={{ background: lightboxItem.gradient }} />
              )}
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
