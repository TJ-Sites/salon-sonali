"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";

const categories = ["All", "Hair Services", "Hair Treatments", "Skin Treatments", "Dressings"];

const services = [
  // HAIR SERVICES
  { category: "Hair Services", name: "Hair Cutting", duration: "45 min", price: "Rs. 3,000+", description: "Precision hair cutting and shaping tailored to your features, completed with a signature style." },
  { category: "Hair Services", name: "Hair Colouring", duration: "120 min", price: "Rs. 8,500+", description: "Custom hair coloring using high-grade, low-ammonia products for rich, long-lasting tones and dimension." },
  { category: "Hair Services", name: "Keratin Treatments", duration: "180 min", price: "Rs. 18,000+", description: "Premium smoothing treatment to eliminate frizz, restore keratin protein, and add glossy shine." },
  { category: "Hair Services", name: "Hair Extensions", duration: "120 min+", price: "Price on Request", description: "Premium quality natural hair extensions custom-matched and applied for volume and length." },
  { category: "Hair Services", name: "Hair Straightening", duration: "180 min", price: "Rs. 15,000+", description: "Permanent chemical straightening for sleek, straight, and manageable hair with a gloss finish." },
  { category: "Hair Services", name: "Hair Relaxing", duration: "120 min", price: "Rs. 10,000+", description: "Texturizing and relaxing treatment to soften tight curls and waves safely." },
  { category: "Hair Services", name: "Baby Hair Cuts", duration: "30 min", price: "Rs. 1,500", description: "Gentle and friendly hair cutting service designed specifically for toddlers and young children." },

  // HAIR TREATMENTS
  { category: "Hair Treatments", name: "Hair Growth Treatments", duration: "60 min", price: "Rs. 5,000+", description: "Nourishing scalp and follicle stimulation therapy to encourage healthy, thick hair growth and reduce hair loss." },
  { category: "Hair Treatments", name: "Anti-Dandruff Treatments", duration: "45 min", price: "Rs. 3,500+", description: "Specialized clarifying treatment to soothe dry, flaky scalp and eliminate dandruff-causing agents." },
  { category: "Hair Treatments", name: "Scalp Analysis", duration: "20 min", price: "Rs. 1,500", description: "Professional digital microscopic analysis of your scalp and hair health to tailor the perfect care routine." },
  { category: "Hair Treatments", name: "Bond Fusion Treatments", duration: "60 min", price: "Rs. 7,000+", description: "Advanced bond-rebuilding treatment to restore damaged hair fibers from the inside out." },
  { category: "Hair Treatments", name: "Conditioner Treatments", duration: "45 min", price: "Rs. 3,000+", description: "Deep conditioning mask to replenish essential moisture, locking in softness and shine." },
  { category: "Hair Treatments", name: "Oil Treatments", duration: "40 min", price: "Rs. 2,500", description: "Traditional hot oil massage to stimulate blood circulation and deeply nourish hair roots." },

  // SKIN TREATMENTS
  { category: "Skin Treatments", name: "Pimple/Acne Treatments", duration: "60 min", price: "Rs. 4,500+", description: "Targeted treatment using specialized formulations to soothe inflammation, clear pores, and promote healthy skin regeneration." },
  { category: "Skin Treatments", name: "Anti-Pigmentation Treatments", duration: "75 min", price: "Rs. 6,000+", description: "Advanced therapy focused on reducing hyperpigmentation, dark spots, and evening out skin tone." },
  { category: "Skin Treatments", name: "Skin Lightening Treatments", duration: "90 min", price: "Rs. 7,500+", description: "Radiance-boosting facial treatment using safe, premium herbal and active ingredients to enhance natural glow." },
  { category: "Skin Treatments", name: "Anti-Aging Treatments", duration: "90 min", price: "Rs. 8,000+", description: "Deep rejuvenating therapy designed to boost collagen production, improve skin elasticity, and smooth fine lines." },

  // DRESSINGS
  { category: "Dressings", name: "Bridal Dressings", duration: "240 min", price: "Price on Request", description: "Full, bespoke bridal styling package including hair, makeup, draping, and styling for your special day." },
  { category: "Dressings", name: "Makeup", duration: "90 min", price: "Rs. 7,500+", description: "Professional makeup application for social events, high-fashion shoots, or special occasions." },
  { category: "Dressings", name: "Hair Styles", duration: "60 min", price: "Rs. 4,500+", description: "Elegant blow-drys, curls, waves, or creative up-dos tailored for any event theme." },
  { category: "Dressings", name: "Hair Settings", duration: "45 min", price: "Rs. 3,000+", description: "Long-lasting hair setting and volume blow-outs for everyday elegance or business meetings." },
  { category: "Dressings", name: "Saree Draping", duration: "30 min", price: "Rs. 2,000+", description: "Perfect and secure traditional or modern saree draping services for any occasion." },
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
