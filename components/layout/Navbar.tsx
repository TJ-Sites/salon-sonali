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
        className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b border-[#222222]"
        style={{
          backgroundColor: "#000000",
          boxShadow: scrolled ? "0 4px 25px rgba(0, 0, 0, 0.8)" : "0 2px 10px rgba(0, 0, 0, 0.5)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Subtle luxury hair wave accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,40 C150,90 350,0 500,45 C650,90 850,10 1000,50 C1100,75 1170,30 1200,40' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1.5'/%3E%3Cpath d='M0,25 C200,80 400,-5 600,40 C800,85 1000,15 1200,35' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3Cpath d='M0,55 C180,10 380,70 580,30 C780,-10 980,60 1200,20' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1.2'/%3E%3Cpath d='M0,15 C250,60 450,20 650,55 C850,90 1050,30 1200,45' fill='none' stroke='rgba(184,154,122,0.12)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-[72px] sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1">
            <img
              src="/logo.jpg"
              alt="Salon Sonali Logo"
              className="h-14 sm:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                mixBlendMode: "screen",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-montserrat text-sm font-medium tracking-wider uppercase gold-underline text-[#FFFFFF] hover:text-[#B89A7A] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 p-2 group focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#FFFFFF] group-hover:bg-[#B89A7A] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#FFFFFF] group-hover:bg-[#B89A7A] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#FFFFFF] group-hover:bg-[#B89A7A] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#000000] flex flex-col justify-center items-center gap-10 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-playfair text-4xl text-[#FFFFFF] hover:text-[#B89A7A] transition-colors duration-300"
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
