import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="relative grain overflow-hidden"
      style={{ backgroundColor: "#0E0E10" }}
    >
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89A7A]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89A7A]/50 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(184,154,122,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 lg:py-36 text-center">
        <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-6">
          Your Transformation Awaits
        </p>
        <h2
          className="font-playfair font-bold text-[#F7F6F2] mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1 }}
        >
          Ready to Transform?
        </h2>
        <p className="font-montserrat text-[#6B665F] text-base lg:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Book your appointment today and let our expert team craft the look
          you&apos;ve always dreamed of.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book" className="btn-primary text-sm">
            Book Your Appointment
          </Link>
          <Link href="/contact" className="btn-outline text-sm">
            Get in Touch
          </Link>
        </div>

        {/* Decorative asterisks */}
        <div className="flex justify-center gap-4 mt-16 text-[#B89A7A]/30 text-xs tracking-widest">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}
