"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const steps = ["Service", "Specialist", "Details"];

const serviceCategories = [
  {
    category: "Hair Services",
    services: [
      "Hair Cutting – Rs. 3,000+",
      "Hair Colouring – Rs. 8,500+",
      "Keratine Treatments – Rs. 18,000+",
      "Hair Extentions – Price on Request",
      "Hair Straightening – Rs. 15,000+",
      "Hair Relaxing – Rs. 10,000+",
      "Baby Hair Cuts – Rs. 1,500"
    ],
  },
  {
    category: "Hair Treatments",
    services: [
      "Hair Growth Treatments – Rs. 5,000+",
      "Anti - Dandruff Treatments – Rs. 3,500+",
      "Scalp Analysis – Rs. 1,500",
      "Bond Fusion Treatments – Rs. 7,000+",
      "Conditioner Treatments – Rs. 3,000+",
      "Oil Treatments – Rs. 2,500"
    ],
  },
  {
    category: "Skin Treatments",
    services: [
      "Pimple/Acne Treatments – Rs. 4,500+",
      "Anti - Pigmentation Treatments – Rs. 6,000+",
      "Skin Lightning Treatments – Rs. 7,500+",
      "Anti - Aging Treatments – Rs. 8,000+"
    ],
  },
  {
    category: "Dressings",
    services: [
      "Bridal Dressings – Price on Request",
      "Makeup – Rs. 7,500+",
      "Hair Styles – Rs. 4,500+",
      "Hair Settings – Rs. 3,000+",
      "Saree Draping – Rs. 2,000+"
    ],
  },
  {
    category: "Other Services",
    services: [
      "Eyebrows Shaping – Rs. 1,000",
      "Eye Lash Extentions – Rs. 8,000+",
      "Face Waxing – Rs. 2,500",
      "Body Waxing – Rs. 6,000+",
      "Menicure – Rs. 3,500",
      "Pedicure – Rs. 4,500"
    ],
  },
];

const specialists = [
  { name: "Sonali Mehta", speciality: "Colour & Cuts", initials: "SM" },
  { name: "Priya Sharma", speciality: "Skin Treatments", initials: "PS" },
  { name: "Aisha Kapoor", speciality: "Waxing & Brows", initials: "AK" },
  { name: "Rahul Verma", speciality: "Cuts & Styling", initials: "RV" },
  { name: "Divya Nair", speciality: "Lash & Brow", initials: "DN" },
  { name: "Kavya Singh", speciality: "Bridal", initials: "KS" },
];

export default function BookPageClient() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
  const [confirmed, setConfirmed] = useState(false);

  const canProceed = [
    selectedService !== "",
    selectedSpecialist !== "",
    form.name && form.email && form.date && form.time,
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    await new Promise((r) => setTimeout(r, 1000));
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-[#0E0E10] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="text-5xl text-[#B89A7A] mb-8">✦</div>
          <h2 className="font-playfair text-4xl text-[#F7F6F2] mb-4">You&apos;re Booked!</h2>
          <p className="font-montserrat text-[#6B665F] mb-3">
            <span className="text-[#F7F6F2]">{selectedService}</span>
          </p>
          <p className="font-montserrat text-[#6B665F] mb-3">
            with <span className="text-[#F7F6F2]">{selectedSpecialist}</span>
          </p>
          <p className="font-montserrat text-[#6B665F] mb-10">
            on <span className="text-[#F7F6F2]">{form.date}</span> at <span className="text-[#F7F6F2]">{form.time}</span>
          </p>
          <p className="font-montserrat text-sm text-[#6B665F] mb-10">A confirmation will be sent to <span className="text-[#B89A7A]">{form.email}</span></p>
          <button
            onClick={() => { setConfirmed(false); setStep(0); setSelectedService(""); setSelectedSpecialist(""); setForm({ name: "", email: "", phone: "", date: "", time: "", notes: "" }); }}
            className="btn-outline"
          >
            Book Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0E0E10] pt-36 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(184,154,122,0.1) 0%, transparent 60%)" }} />
        <SectionReveal className="relative z-10 max-w-2xl mx-auto">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-5">Reservations</p>
          <h1 className="font-playfair text-5xl lg:text-6xl text-[#F7F6F2] mb-6" style={{ lineHeight: 1.1 }}>
            Book Your Appointment
          </h1>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto" />
        </SectionReveal>
      </section>

      {/* Booking form */}
      <section className="bg-[#F7F6F2] section-padding">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-0 mb-16">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 flex items-center justify-center font-montserrat text-sm font-medium transition-all duration-500 ${
                      i <= step
                        ? "bg-[#B89A7A] text-[#F7F6F2]"
                        : "bg-[#E7E2D8] text-[#6B665F]"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`font-montserrat text-[10px] tracking-widest uppercase mt-2 ${i <= step ? "text-[#B89A7A]" : "text-[#6B665F]"}`}>
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-20 lg:w-32 h-px mx-2 mb-6 transition-all duration-500 ${i < step ? "bg-[#B89A7A]" : "bg-[#E7E2D8]"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-playfair text-3xl text-[#0E0E10] mb-10">Choose Your Service</h2>
                <div className="space-y-6">
                  {serviceCategories.map((cat) => (
                    <div key={cat.category}>
                      <p className="font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] mb-3">{cat.category}</p>
                      <div className="space-y-2">
                        {cat.services.map((svc) => (
                          <button
                            key={svc}
                            onClick={() => setSelectedService(svc)}
                            className={`w-full text-left px-6 py-4 font-montserrat text-sm border transition-all duration-300 ${
                              selectedService === svc
                                ? "border-[#B89A7A] bg-[#B89A7A]/5 text-[#0E0E10]"
                                : "border-[#E7E2D8] text-[#6B665F] hover:border-[#B89A7A]/50 hover:text-[#0E0E10]"
                            }`}
                          >
                            <span className={`mr-3 ${selectedService === svc ? "text-[#B89A7A]" : "text-transparent"}`}>✓</span>
                            {svc}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-playfair text-3xl text-[#0E0E10] mb-10">Choose Your Specialist</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specialists.map((sp) => (
                    <button
                      key={sp.name}
                      onClick={() => setSelectedSpecialist(sp.name)}
                      className={`flex items-center gap-5 p-6 border text-left transition-all duration-300 ${
                        selectedSpecialist === sp.name
                          ? "border-[#B89A7A] bg-[#B89A7A]/5"
                          : "border-[#E7E2D8] hover:border-[#B89A7A]/50"
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-playfair text-sm text-[#F7F6F2] flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #0E0E10, #B89A7A)" }}
                      >
                        {sp.initials}
                      </div>
                      <div>
                        <p className="font-playfair text-lg text-[#0E0E10]">{sp.name}</p>
                        <p className="font-montserrat text-xs text-[#6B665F]">{sp.speciality}</p>
                      </div>
                      {selectedSpecialist === sp.name && (
                        <span className="ml-auto text-[#B89A7A]">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-playfair text-3xl text-[#0E0E10] mb-10">Your Details</h2>

                {/* Summary */}
                <div className="bg-[#E7E2D8] p-6 mb-10 space-y-2">
                  <p className="font-montserrat text-xs tracking-widest uppercase text-[#B89A7A] mb-3">Booking Summary</p>
                  <p className="font-montserrat text-sm text-[#0E0E10]"><span className="text-[#6B665F]">Service: </span>{selectedService}</p>
                  <p className="font-montserrat text-sm text-[#0E0E10]"><span className="text-[#6B665F]">Specialist: </span>{selectedSpecialist}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <input
                        required
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full font-montserrat text-sm text-[#0E0E10] bg-transparent border-b border-[#E7E2D8] px-0 py-3 outline-none focus:border-[#B89A7A] transition-colors placeholder:text-[#6B665F]/60"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full font-montserrat text-sm text-[#0E0E10] bg-transparent border-b border-[#E7E2D8] px-0 py-3 outline-none focus:border-[#B89A7A] transition-colors placeholder:text-[#6B665F]/60"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full font-montserrat text-sm text-[#0E0E10] bg-transparent border-b border-[#E7E2D8] px-0 py-3 outline-none focus:border-[#B89A7A] transition-colors placeholder:text-[#6B665F]/60"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full font-montserrat text-sm text-[#0E0E10] bg-transparent border-b border-[#E7E2D8] px-0 py-3 outline-none focus:border-[#B89A7A] transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <select
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full font-montserrat text-sm text-[#0E0E10] bg-transparent border-b border-[#E7E2D8] px-0 py-3 outline-none focus:border-[#B89A7A] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Preferred Time *</option>
                        {["9:00am","10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <textarea
                        placeholder="Special requests or notes (optional)"
                        rows={3}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="w-full font-montserrat text-sm text-[#0E0E10] bg-transparent border-b border-[#E7E2D8] px-0 py-3 outline-none focus:border-[#B89A7A] transition-colors resize-none placeholder:text-[#6B665F]/60"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" disabled={!canProceed[2]}>
                    Confirm Booking
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-[#E7E2D8]">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="btn-outline-dark disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Back
            </button>
            {step < 2 && (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed[step]}
                className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
