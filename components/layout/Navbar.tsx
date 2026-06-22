"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F6F2]/95 backdrop-blur-sm shadow-sm border-b border-[#E7E2D8]"
            : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16 lg:h-20" : "h-24 lg:h-32"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Salon Sonali Logo"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-12 lg:h-16" : "h-20 lg:h-28"
              }`}
              style={{
                filter: scrolled ? "invert(1)" : "none",
                mixBlendMode: scrolled ? "multiply" : "screen",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-montserrat text-sm font-medium tracking-wider uppercase gold-underline transition-colors duration-300 ${
                    scrolled ? "text-[#0E0E10]" : "text-[#F7F6F2]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>


          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-[#0E0E10] group-hover:bg-[#B89A7A]" : "bg-[#F7F6F2] group-hover:bg-[#B89A7A]"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-[#0E0E10] group-hover:bg-[#B89A7A]" : "bg-[#F7F6F2] group-hover:bg-[#B89A7A]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-[#0E0E10] group-hover:bg-[#B89A7A]" : "bg-[#F7F6F2] group-hover:bg-[#B89A7A]"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0E0E10] flex flex-col justify-center items-center gap-10 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-playfair text-4xl text-[#F7F6F2] hover:text-[#B89A7A] transition-colors duration-300"
            style={{
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: `transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms, color 0.3s ease`,
            }}
          >
            {link.label}
          </Link>
        ))}

      </div>
    </>
  );
}
