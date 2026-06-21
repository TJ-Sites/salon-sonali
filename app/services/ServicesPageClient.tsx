"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";

const categories = ["All", "Hair", "Skin", "Nails", "Wellness"];

const services = [
  // HAIR
  { category: "Hair", name: "Signature Cut & Blowout", duration: "60 min", price: "$85", description: "A precision cut tailored to your face shape and lifestyle, finished with a luxurious blowout." },
  { category: "Hair", name: "Full Colour", duration: "120 min", price: "$160+", description: "Root-to-tip colour transformation using ammonia-free, premium pigments for vibrant, lasting results." },
  { category: "Hair", name: "Balayage / Highlights", duration: "150 min", price: "$200+", description: "Hand-painted freehand colour for a natural, sun-kissed gradient with effortless grow-out." },
  { category: "Hair", name: "Keratin Treatment", duration: "180 min", price: "$250", description: "Smooth, frizz-free hair for up to 5 months. Safe, formaldehyde-free formula." },
  { category: "Hair", name: "Deep Conditioning Ritual", duration: "45 min", price: "$60", description: "Intensive moisture and protein treatment to restore shine, strength, and softness." },
  // SKIN
  { category: "Skin", name: "Signature Facial", duration: "60 min", price: "$95", description: "Personalised deep-cleanse, exfoliation, mask, and massage for radiant, balanced skin." },
  { category: "Skin", name: "Microdermabrasion", duration: "45 min", price: "$120", description: "Crystal-free exfoliation that resurfaces the skin, reducing fine lines and uneven tone." },
  { category: "Skin", name: "LED Light Therapy", duration: "30 min", price: "$75", description: "Targeted red and blue light wavelengths to stimulate collagen production and combat acne." },
  { category: "Skin", name: "Chemical Peel", duration: "45 min", price: "$110", description: "Lactic or glycolic peel to accelerate cell turnover and reveal visibly smoother skin." },
  // NAILS
  { category: "Nails", name: "Classic Manicure", duration: "45 min", price: "$40", description: "Shape, cuticle care, hand massage, and flawless polish application." },
  { category: "Nails", name: "Gel Manicure", duration: "60 min", price: "$60", description: "Long-lasting, chip-resistant gel colour cured to a high-gloss finish." },
  { category: "Nails", name: "Luxury Pedicure", duration: "75 min", price: "$70", description: "Soak, exfoliation, callus removal, massage, and polish — total foot revival." },
  { category: "Nails", name: "Nail Art", duration: "30 min+", price: "$20+", description: "Custom designs from minimalist linework to intricate hand-painted art." },
  // WELLNESS
  { category: "Wellness", name: "Scalp Massage & Treatment", duration: "30 min", price: "$50", description: "Tension-releasing scalp massage combined with a nourishing oil or serum treatment." },
  { category: "Wellness", name: "Eyebrow Sculpting", duration: "30 min", price: "$45", description: "Precision threading or waxing shaped to your unique brow bone and aesthetic." },
  { category: "Wellness", name: "Lash Lift & Tint", duration: "60 min", price: "$90", description: "Semi-permanent curl and colour that makes your natural lashes look longer and defined — no mascara needed." },
];

export default function ServicesPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0E0E10] pt-36 pb-24 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(184,154,122,0.1) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionReveal>
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-5">Our Services</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl text-[#F7F6F2] mb-6" style={{ lineHeight: 1.1 }}>
              Treatments for Every You
            </h1>
            <div className="w-16 h-px bg-[#B89A7A] mx-auto mb-8" />
            <p className="font-montserrat text-[#6B665F] text-base lg:text-lg leading-relaxed">
              From transformative hair colour to rejuvenating skin rituals — every service is crafted with intention, skill, and premium products.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-[#F7F6F2] sticky top-20 z-30 border-b border-[#E7E2D8] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative font-montserrat text-xs tracking-widest uppercase px-6 py-5 whitespace-nowrap transition-colors duration-300 ${
                activeCategory === cat ? "text-[#0E0E10]" : "text-[#6B665F] hover:text-[#0E0E10]"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B89A7A]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F7F6F2] section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {filtered.map((service, i) => {
                const isOpen = openAccordion === service.name;
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="bg-white border border-[#E7E2D8] overflow-hidden group"
                  >
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : service.name)}
                      className="w-full flex items-center justify-between p-7 text-left hover:bg-[#F7F6F2] transition-colors duration-300"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-montserrat text-[10px] tracking-widest uppercase text-[#B89A7A]">
                            {service.category}
                          </span>
                        </div>
                        <h3 className="font-playfair text-xl text-[#0E0E10]">{service.name}</h3>
                      </div>
                      <div className="flex items-center gap-6 flex-shrink-0">
                        <div className="text-right hidden sm:block">
                          <p className="font-montserrat text-xs text-[#6B665F]">{service.duration}</p>
                          <p className="font-playfair text-lg text-[#B89A7A]">{service.price}</p>
                        </div>
                        <span className={`text-[#B89A7A] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-7 pb-7 pt-0 border-t border-[#E7E2D8]">
                            <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed pt-5 mb-5">
                              {service.description}
                            </p>
                            <div className="flex items-center justify-between sm:hidden mb-4">
                              <span className="font-montserrat text-xs text-[#6B665F]">{service.duration}</span>
                              <span className="font-playfair text-lg text-[#B89A7A]">{service.price}</span>
                            </div>
                            <Link href="/contact" className="btn-primary text-xs inline-flex">
                              Book This Service
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#E7E2D8] py-20 px-6 text-center">
        <SectionReveal>
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">Ready?</p>
          <h2 className="font-playfair text-4xl text-[#0E0E10] mb-8">Book Your Treatment</h2>
          <Link href="/contact" className="btn-outline-dark">Get in Touch</Link>
        </SectionReveal>
      </section>
    </>
  );
}
