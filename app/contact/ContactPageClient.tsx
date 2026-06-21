"use client";

import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import { motion, AnimatePresence } from "framer-motion";

const hours = [
  { day: "Monday", time: "9:00am – 6:30pm" },
  { day: "Tuesday", time: "9:00am – 6:30pm" },
  { day: "Wednesday", time: "9:00am – 6:30pm" },
  { day: "Thursday", time: "9:00am – 6:30pm" },
  { day: "Friday", time: "9:00am – 6:30pm" },
  { day: "Saturday", time: "9:00am – 6:30pm" },
  { day: "Sunday", time: "9:00am – 6:30pm" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [toast, setToast] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "A valid email is required";
    if (!form.message.trim()) e.message = "Please enter a message";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setToast(true);
    setTimeout(() => setToast(false), 5000);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const inputClass = (field: keyof FormState) =>
    `w-full font-montserrat text-sm text-[#0E0E10] bg-transparent border-b px-0 py-3 outline-none transition-colors duration-300 placeholder:text-[#6B665F]/60 focus:border-[#B89A7A] ${
      errors[field] ? "border-red-400" : "border-[#E7E2D8]"
    }`;

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0E0E10] pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(184,154,122,0.1) 0%, transparent 70%)" }} />
        <SectionReveal className="relative z-10 max-w-2xl mx-auto">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-5">Get in Touch</p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl text-[#F7F6F2] mb-6" style={{ lineHeight: 1.1 }}>
            We&apos;d Love to Hear From You
          </h1>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto mb-8" />
          <p className="font-montserrat text-[#6B665F] text-base leading-relaxed">
            Questions, enquiries, or just want to say hello — reach out and our team will get back to you within 24 hours.
          </p>
        </SectionReveal>
      </section>

      {/* Main content */}
      <section className="bg-[#F7F6F2] section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <SectionReveal direction="left">
            <h2 className="font-playfair text-3xl text-[#0E0E10] mb-10">Send Us a Message</h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClass("name")}
                    id="contact-name"
                  />
                  {errors.name && <p className="font-montserrat text-xs text-red-400 mt-2">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                    id="contact-email"
                  />
                  {errors.email && <p className="font-montserrat text-xs text-red-400 mt-2">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClass("phone")}
                    id="contact-phone"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${inputClass("message")} resize-none`}
                    id="contact-message"
                  />
                  {errors.message && <p className="font-montserrat text-xs text-red-400 mt-2">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary" disabled={loading} id="contact-submit">
                  {loading ? (
                    <span className="flex items-center gap-3">
                      <span className="w-4 h-4 border-2 border-[#F7F6F2]/30 border-t-[#F7F6F2] rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : "Send Message"}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center border border-[#E7E2D8] px-8"
              >
                <div className="w-6 h-px bg-[#B89A7A] mx-auto mb-6" />
                <h3 className="font-playfair text-2xl text-[#0E0E10] mb-4">Message Received</h3>
                <p className="font-montserrat text-sm text-[#6B665F] leading-relaxed">
                  Thank you for reaching out! We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            )}
          </SectionReveal>

          {/* Info Column */}
          <SectionReveal direction="right" delay={0.15}>
            {/* Map iframe */}
            <div className="w-full h-56 mb-10 relative overflow-hidden rounded border border-[#E7E2D8]">
              <iframe
                src="https://maps.google.com/maps?q=Salon%20Sonali%20Siriwardhana%20Rd%20Minuwangoda&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <div className="flex gap-5 items-start">
                <span className="w-1 h-1 rounded-full bg-[#B89A7A] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-[#6B665F] mb-1">Address</p>
                  <p className="font-montserrat text-sm text-[#0E0E10]">5/1/2 Siriwardhana Rd<br />Minuwangoda, Sri Lanka</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="w-1 h-1 rounded-full bg-[#B89A7A] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-[#6B665F] mb-1">Phone</p>
                  <a href="tel:+94774090444" className="font-montserrat text-sm text-[#0E0E10] hover:text-[#B89A7A] transition-colors">
                    077 409 0444
                  </a>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="w-1 h-1 rounded-full bg-[#B89A7A] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-[#6B665F] mb-1">Email</p>
                  <a href="mailto:info@salonsonali.com" className="font-montserrat text-sm text-[#0E0E10] hover:text-[#B89A7A] transition-colors">
                    info@salonsonali.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours table */}
            <div>
              <p className="font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] mb-4">Opening Hours</p>
              <div className="divide-y divide-[#E7E2D8]">
                {hours.map((h) => {
                  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
                  const isToday = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className={`flex justify-between py-3 ${isToday ? "text-[#B89A7A]" : "text-[#6B665F]"}`}
                    >
                      <span className={`font-montserrat text-sm ${isToday ? "font-semibold" : ""}`}>{h.day}</span>
                      <span className="font-montserrat text-sm">{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 bg-[#0E0E10] text-[#F7F6F2] px-8 py-4 flex items-center gap-4 shadow-2xl"
          >
            <span className="text-[#B89A7A]">—</span>
            <span className="font-montserrat text-sm">Your message has been sent!</span>
            <button onClick={() => setToast(false)} className="text-[#6B665F] hover:text-[#F7F6F2] text-lg ml-2">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
