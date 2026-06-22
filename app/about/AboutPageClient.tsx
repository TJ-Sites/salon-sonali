"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  { icon: "01", title: "Craftsmanship", description: "Every technique we perform is practised to perfection. We invest in continuous education so our team always brings the very best to your appointment." },
  { icon: "02", title: "Personalisation", description: "No two clients are alike. We take time to listen, understand, and create a service that's tailored entirely to you — your face, your lifestyle, your vision." },
  { icon: "03", title: "Premium Products", description: "We partner exclusively with brands that share our commitment to quality, sustainability, and hair and skin health." },
  { icon: "04", title: "Lasting Relationships", description: "Many of our clients have been with us for years. We build trust through consistency, honesty, and genuinely caring about your results." },
];

const milestones = [
  { year: "2012", event: "Salon Sonali opens its doors in a small, intimate studio with a team of two." },
  { year: "2015", event: "Expanded to a full-service salon, adding skin and advanced beauty treatments to our offering." },
  { year: "2018", event: "Launched our bridal specialist programme — now one of our most in-demand services." },
  { year: "2021", event: "Reached 5,000 happy clients and welcomed three new specialists to the team." },
  { year: "2024", event: "Relocated to our current flagship space — designed to feel like a sanctuary." },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero statement */}
      <section className="bg-[#0E0E10] pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(184,154,122,0.12) 0%, transparent 60%)" }} />
        <SectionReveal className="relative z-10 max-w-3xl mx-auto">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-6">Our Story</p>
          <h1 className="font-playfair italic text-4xl sm:text-5xl lg:text-7xl text-[#F7F6F2] mb-8 leading-tight">
            Beauty is not a luxury —<br />it is a language.
          </h1>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto mb-8" />
          <p className="font-montserrat text-[#6B665F] text-base lg:text-lg leading-relaxed">
            At Salon Sonali, we believe that taking care of yourself is one of the most powerful things you can do. We are here to help you do it beautifully.
          </p>
        </SectionReveal>
      </section>

      {/* Story — split screen */}
      <section className="bg-[#F7F6F2] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <SectionReveal direction="left" className="relative min-h-[500px] lg:min-h-0">
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #0E0E10 0%, #3d2c1e 50%, #B89A7A 100%)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-playfair text-8xl italic text-[#F7F6F2]/10">12+</p>
            </div>
            <div className="absolute bottom-10 left-10">
              <p className="font-montserrat text-xs tracking-widest uppercase text-[#B89A7A]">Years of Excellence</p>
              <div className="w-8 h-px bg-[#B89A7A]/40 mx-auto mb-4" />
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal direction="right" delay={0.15} className="flex flex-col justify-center px-10 lg:px-16 py-20">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-6">How It Began</p>
            <h2 className="font-playfair text-4xl text-[#0E0E10] mb-8 leading-tight">
              From a Single Chair to a Full Sanctuary
            </h2>
            <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed mb-5">
              Salon Sonali started in 2012 as a small, two-chair studio with one clear vision: to make every person who walks through the door feel extraordinary. Founder Sonali Mehta had spent years working in acclaimed salons across London and Mumbai, absorbing the finest techniques and the belief that great beauty work is a form of art.
            </p>
            <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed mb-10">
              What began as an intimate space has grown into a full-service sanctuary — but the heart of it has never changed. Every client is a person, not a booking slot. Every appointment is an opportunity to listen, collaborate, and create something genuinely beautiful.
            </p>
            <Link href="/team" className="btn-outline-dark self-start">Meet the Team</Link>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#E7E2D8] section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">What We Stand For</p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#0E0E10]">Our Values</h2>
            <div className="w-16 h-px bg-[#B89A7A] mx-auto mt-6" />
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-[#F7F6F2] p-8"
              >
                <span className="block w-8 h-px bg-[#B89A7A] mb-5" />
                <h3 className="font-playfair text-xl text-[#0E0E10] mb-4">{v.title}</h3>
                <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F7F6F2] section-padding">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">A Decade of Growth</p>
            <h2 className="font-playfair text-4xl text-[#0E0E10]">Our Journey</h2>
            <div className="w-16 h-px bg-[#B89A7A] mx-auto mt-6" />
          </SectionReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#E7E2D8]" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-10 items-start"
                >
                  {/* Year */}
                  <div className="w-14 flex-shrink-0 text-right relative">
                    <span className="font-playfair text-sm text-[#B89A7A] font-bold">{m.year}</span>
                    {/* Dot */}
                    <div className="absolute -right-6 top-1.5 w-3 h-3 rounded-full bg-[#B89A7A] border-2 border-[#F7F6F2]" />
                  </div>
                  {/* Event */}
                  <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed pt-0.5">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0E0E10] py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(184,154,122,0.08) 0%, transparent 70%)" }} />
        <SectionReveal className="relative z-10">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-4">Join Our Story</p>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#F7F6F2] mb-8">Become Part of the Sonali Family</h2>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </SectionReveal>
      </section>
    </>
  );
}
