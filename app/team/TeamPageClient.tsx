"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";

const team = [
  {
    name: "Sonali Mehta",
    title: "Founder & Master Stylist",
    speciality: "Hair Dressing & Colouring",
    bio: "With over 12 years in the industry, Sonali founded the salon with a vision to redefine luxury beauty in the city. Trained in London and Mumbai, she specialises in colour transformations and precision cuts that honour each client's individuality.",
    initials: "SM",
    price: "Price: Rs. 3,000+",
  },
  {
    name: "Rahul Verma",
    title: "Senior Hair Stylist",
    speciality: "Precision Cuts & Styling",
    bio: "Rahul brings a sharp eye for structure and texture to every cut. Whether it's a classic men's trim or a bold textured style, his technical skill and relaxed approach make clients feel instantly at ease.",
    initials: "RV",
    price: "Price: Rs. 2,500+",
  },
];

export default function TeamPageClient() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0E0E10] pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(184,154,122,0.08) 0%, transparent 70%)" }} />
        <SectionReveal className="relative z-10 max-w-2xl mx-auto">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-5">Meet the Experts</p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl text-[#F7F6F2] mb-6" style={{ lineHeight: 1.1 }}>
            The Hands Behind Your Look
          </h1>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto mb-8" />
          <p className="font-montserrat text-[#6B665F] text-base leading-relaxed">
            Our team of specialists brings years of expertise, continuous education, and genuine passion to every appointment.
          </p>
        </SectionReveal>
      </section>

      {/* Team Alternating Section */}
      <section className="bg-[#F7F6F2] py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col gap-24 relative z-10">
          
          {/* Member 1: Sonali Mehta (Image Left, Content Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            {/* Diamond Image Container (Left) */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] flex-shrink-0 mx-auto md:mx-0">
              {/* Gold brush stroke SVG at top-left */}
              <svg 
                viewBox="0 0 100 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute -top-6 -left-10 w-28 sm:w-36 text-[#B89A7A]/75 pointer-events-none transform -rotate-12 z-10"
              >
                <path 
                  d="M5,30 C20,20 40,12 70,10 C90,8 100,5 105,3 C92,7 75,14 55,18 C35,22 18,27 5,30 Z" 
                  fill="currentColor" 
                  opacity="0.8" 
                />
                <path 
                  d="M12,25 C30,17 50,14 72,12 C85,10 93,8 97,6 C84,9 66,14 48,18 C30,21 17,24 12,25 Z" 
                  fill="currentColor" 
                  opacity="0.9" 
                />
                <path 
                  d="M2,33 C15,26 35,17 60,14 C78,11 95,9 101,7" 
                  stroke="currentColor" 
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  opacity="0.5" 
                />
              </svg>

              {/* The Gold Diamond Frame (slightly larger) */}
              <div 
                className="absolute inset-2 bg-[#B89A7A]/20 transition-transform duration-500 hover:scale-105"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                }}
              />
              
              {/* The Empty Diamond Box (Inner) */}
              <div 
                className="absolute inset-4 bg-gradient-to-br from-[#E7E2D8] to-[#B89A7A]/40 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-102"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                }}
              >
                {/* Initials very faint and elegant inside the box */}
                <span className="font-playfair text-6xl text-[#6B665F]/20 italic select-none">SM</span>
              </div>
            </div>

            {/* Content Container (Right) */}
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="font-playfair text-3xl sm:text-4xl text-[#B89A7A] mb-4">
                {team[0].speciality}
              </h2>
              <p className="font-montserrat text-[#6B665F] text-sm sm:text-base leading-relaxed mb-6 max-w-xl text-center md:text-left font-light">
                {team[0].bio}
              </p>
              
              {/* Price Pill */}
              <div className="bg-[#E7E2D8]/80 text-[#0E0E10] font-montserrat text-xs tracking-wider font-semibold px-6 py-2.5 rounded-sm mb-6 shadow-sm">
                {team[0].price}
              </div>

              {/* Signature area */}
              <div className="flex flex-col items-center md:items-start mt-2">
                <span className="font-alexbrush text-4xl text-[#6B665F]/90 select-none tracking-wide">
                  {team[0].name}
                </span>
                
                {/* Wavy Underline */}
                <svg 
                  width="110" 
                  height="8" 
                  viewBox="0 0 110 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mt-1 text-[#B89A7A]"
                >
                  <path 
                    d="M0,4 Q13.75,0 27.5,4 T55,4 T82.5,4 T110,4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    fill="none" 
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Member 2: Rahul Verma (Content Left, Image Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16"
          >
            {/* Content Container (Left) */}
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="font-playfair text-3xl sm:text-4xl text-[#B89A7A] mb-4">
                {team[1].speciality}
              </h2>
              <p className="font-montserrat text-[#6B665F] text-sm sm:text-base leading-relaxed mb-6 max-w-xl text-center md:text-left font-light">
                {team[1].bio}
              </p>
              
              {/* Price Pill */}
              <div className="bg-[#E7E2D8]/80 text-[#0E0E10] font-montserrat text-xs tracking-wider font-semibold px-6 py-2.5 rounded-sm mb-6 shadow-sm">
                {team[1].price}
              </div>

              {/* Signature area */}
              <div className="flex flex-col items-center md:items-start mt-2">
                <span className="font-alexbrush text-4xl text-[#6B665F]/90 select-none tracking-wide">
                  {team[1].name}
                </span>
                
                {/* Wavy Underline */}
                <svg 
                  width="110" 
                  height="8" 
                  viewBox="0 0 110 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mt-1 text-[#B89A7A]"
                >
                  <path 
                    d="M0,4 Q13.75,0 27.5,4 T55,4 T82.5,4 T110,4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    fill="none" 
                  />
                </svg>
              </div>
            </div>

            {/* Diamond Image Container (Right) */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] flex-shrink-0 mx-auto md:mx-0">
              {/* Silver/gold scissors SVG on the right */}
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.2"
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-28 sm:w-36 text-[#B89A7A]/35 pointer-events-none transform -rotate-12 z-10"
              >
                {/* Left Blade */}
                <path d="M50,50 L85,25 C87,23 88,25 87,27 L55,52" strokeLinecap="round" strokeLinejoin="round" />
                {/* Right Blade */}
                <path d="M50,50 L85,75 C87,77 88,75 87,73 L55,48" strokeLinecap="round" strokeLinejoin="round" />
                {/* Pivot Screw */}
                <circle cx="50" cy="50" r="2.5" fill="#B89A7A" stroke="none" />
                {/* Shank 1 */}
                <path d="M50,50 C45,50 40,47 38,42 L28,42" strokeLinecap="round" strokeLinejoin="round" />
                {/* Handle Ring 1 */}
                <circle cx="20" cy="42" r="8" />
                {/* Finger Rest on Ring 1 */}
                <path d="M12,42 C10,42 8,39 9,37" strokeLinecap="round" strokeLinejoin="round" />
                {/* Shank 2 */}
                <path d="M50,50 C45,50 40,53 38,58 L28,58" strokeLinecap="round" strokeLinejoin="round" />
                {/* Handle Ring 2 */}
                <circle cx="20" cy="58" r="8" />
              </svg>

              {/* The Gold Diamond Frame (slightly larger) */}
              <div 
                className="absolute inset-2 bg-[#B89A7A]/20 transition-transform duration-500 hover:scale-105"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                }}
              />
              
              {/* The Empty Diamond Box (Inner) */}
              <div 
                className="absolute inset-4 bg-gradient-to-br from-[#E7E2D8] to-[#B89A7A]/40 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-102"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                }}
              >
                {/* Initials very faint and elegant inside the box */}
                <span className="font-playfair text-6xl text-[#6B665F]/20 italic select-none">RV</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#E7E2D8] py-20 px-6 text-center">
        <SectionReveal>
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">Work With Us</p>
          <h2 className="font-playfair text-4xl text-[#0E0E10] mb-8">Find Your Perfect Match</h2>
          <Link href="/contact" className="btn-outline-dark">Get in Touch</Link>
        </SectionReveal>
      </section>
    </>
  );
}
