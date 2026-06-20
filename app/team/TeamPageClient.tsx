"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";

const team = [
  {
    name: "Sonali Mehta",
    title: "Founder & Master Stylist",
    speciality: "Colour Specialist · Balayage",
    bio: "With over 12 years in the industry, Sonali founded the salon with a vision to redefine luxury beauty in the city. Trained in London and Mumbai, she specialises in colour transformations and precision cuts that honour each client's individuality.",
    initials: "SM",
    gradient: "linear-gradient(135deg, #0E0E10 0%, #B89A7A 100%)",
    experience: "12 Years",
    instagram: "#",
  },
  {
    name: "Priya Sharma",
    title: "Senior Skin Therapist",
    speciality: "Facials · Microdermabrasion",
    bio: "Priya's passion for skin health goes beyond aesthetics. A certified skin therapist with training in advanced dermal treatments, she creates personalised protocols that deliver real, visible results.",
    initials: "PS",
    gradient: "linear-gradient(135deg, #2a1f14 0%, #E7E2D8 100%)",
    experience: "8 Years",
    instagram: "#",
  },
  {
    name: "Aisha Kapoor",
    title: "Nail Artist",
    speciality: "Nail Art · Gel Systems",
    bio: "Aisha transforms nails into wearable art. From minimalist geometry to intricate hand-painted florals, her precision and creativity have made her one of the most booked specialists on the team.",
    initials: "AK",
    gradient: "linear-gradient(135deg, #1a1408 0%, #6B665F 100%)",
    experience: "6 Years",
    instagram: "#",
  },
  {
    name: "Rahul Verma",
    title: "Hair Stylist",
    speciality: "Cuts · Keratin · Men's Grooming",
    bio: "Rahul brings a sharp eye for structure and texture to every cut. Whether it's a classic men's trim or a bold textured style, his technical skill and relaxed approach make clients feel instantly at ease.",
    initials: "RV",
    gradient: "linear-gradient(135deg, #0E0E10 30%, #B89A7A 100%)",
    experience: "5 Years",
    instagram: "#",
  },
  {
    name: "Divya Nair",
    title: "Wellness Specialist",
    speciality: "Lash & Brow · Scalp Therapy",
    bio: "Divya believes beauty is holistic. Specialising in lash lifts, brow sculpting, and scalp treatments, she brings a calm, nurturing energy to every appointment that leaves clients glowing from within.",
    initials: "DN",
    gradient: "linear-gradient(135deg, #3d2c1e 0%, #E7E2D8 100%)",
    experience: "7 Years",
    instagram: "#",
  },
  {
    name: "Kavya Singh",
    title: "Bridal Specialist",
    speciality: "Bridal Hair · Makeup · Styling",
    bio: "Kavya's portfolio spans hundreds of weddings across India and internationally. Her meticulous attention to detail and ability to execute any aesthetic — from classic to contemporary — makes her the go-to for brides.",
    initials: "KS",
    gradient: "linear-gradient(135deg, #1a1408 20%, #B89A7A 80%)",
    experience: "9 Years",
    instagram: "#",
  },
];

export default function TeamPageClient() {
  const [selectedMember, setSelectedMember] = useState<(typeof team)[0] | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0E0E10] pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(184,154,122,0.08) 0%, transparent 70%)" }} />
        <SectionReveal className="relative z-10 max-w-2xl mx-auto">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-5">Meet the Experts</p>
          <h1 className="font-playfair text-5xl lg:text-7xl text-[#F7F6F2] mb-6" style={{ lineHeight: 1.1 }}>
            The Hands Behind Your Look
          </h1>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto mb-8" />
          <p className="font-montserrat text-[#6B665F] text-base leading-relaxed">
            Our team of specialists brings years of expertise, continuous education, and genuine passion to every appointment.
          </p>
        </SectionReveal>
      </section>

      {/* Team Grid */}
      <section className="bg-[#F7F6F2] section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                {/* Photo area */}
                <div className="relative overflow-hidden aspect-[3/4] mb-5">
                  {/* Gradient placeholder */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ background: member.gradient }}
                  />
                  {/* Initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-playfair text-5xl text-[#F7F6F2]/20 italic">{member.initials}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0E0E10]/0 group-hover:bg-[#0E0E10]/50 transition-all duration-500 flex items-end">
                    <div className="w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] mb-1">
                        {member.speciality}
                      </p>
                      <p className="font-montserrat text-xs text-[#F7F6F2]/70">
                        View Profile →
                      </p>
                    </div>
                  </div>
                  {/* Gold corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B89A7A]/0 group-hover:border-[#B89A7A]/70 transition-all duration-500" />
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-playfair text-2xl text-[#0E0E10] group-hover:text-[#B89A7A] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-[#6B665F] mt-1">
                    {member.title}
                  </p>
                  <div className="w-8 h-px bg-[#B89A7A] mt-3 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0E0E10]/80 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              className="relative bg-[#F7F6F2] max-w-xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient band */}
              <div className="h-32" style={{ background: selectedMember.gradient }} />

              {/* Avatar */}
              <div className="px-10 -mt-10 relative z-10">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-playfair text-2xl text-[#F7F6F2] border-4 border-[#F7F6F2]"
                  style={{ background: selectedMember.gradient }}
                >
                  {selectedMember.initials}
                </div>
              </div>

              <div className="px-10 pt-5 pb-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-playfair text-3xl text-[#0E0E10]">{selectedMember.name}</h2>
                    <p className="font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] mt-1">{selectedMember.title}</p>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-[#6B665F] hover:text-[#0E0E10] transition-colors text-2xl leading-none mt-1"
                  >
                    ×
                  </button>
                </div>

                <div className="flex gap-6 mb-6 pb-6 border-b border-[#E7E2D8]">
                  <div>
                    <p className="font-montserrat text-[10px] tracking-widest uppercase text-[#6B665F] mb-1">Speciality</p>
                    <p className="font-montserrat text-sm text-[#0E0E10]">{selectedMember.speciality}</p>
                  </div>
                  <div>
                    <p className="font-montserrat text-[10px] tracking-widest uppercase text-[#6B665F] mb-1">Experience</p>
                    <p className="font-montserrat text-sm text-[#0E0E10]">{selectedMember.experience}</p>
                  </div>
                </div>

                <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed mb-8">
                  {selectedMember.bio}
                </p>

                <Link
                  href="/contact"
                  className="btn-primary text-xs"
                  onClick={() => setSelectedMember(null)}
                >
                  Book with {selectedMember.name.split(" ")[0]}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
