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
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(4px)" : "none",
          boxShadow: scrolled ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" : "none",
          borderBottom: scrolled ? "1px solid #E7E2D8" : "1px solid transparent",
          transition: "background-color 1.2s cubic-bezier(0.25, 1, 0.3, 1), backdrop-filter 1.2s cubic-bezier(0.25, 1, 0.3, 1), box-shadow 1.2s cubic-bezier(0.25, 1, 0.3, 1), border-color 1.2s cubic-bezier(0.25, 1, 0.3, 1)"
        }}
      >
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between ${
            scrolled ? "h-16 lg:h-20" : "h-24 lg:h-32"
          }`}
          style={{
            transition: "height 1.2s cubic-bezier(0.25, 1, 0.3, 1)"
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Salon Sonali Logo"
              className={`w-auto object-contain ${
                scrolled ? "h-12 lg:h-16" : "h-20 lg:h-28"
              }`}
              style={{
                filter: scrolled ? "invert(1)" : "invert(0)",
                mixBlendMode: scrolled ? "multiply" : "screen",
                transition: "height 1.2s cubic-bezier(0.25, 1, 0.3, 1), filter 1.2s cubic-bezier(0.25, 1, 0.3, 1)"
              }}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-montserrat text-sm font-medium tracking-wider uppercase gold-underline ${
                    scrolled ? "text-[#000000]" : "text-[#FFFFFF]"
                  }`}
                  style={{
                    transition: "color 1.2s cubic-bezier(0.25, 1, 0.3, 1)"
                  }}
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
                scrolled ? "bg-[#000000] group-hover:bg-[#B89A7A]" : "bg-[#FFFFFF] group-hover:bg-[#B89A7A]"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-[#000000] group-hover:bg-[#B89A7A]" : "bg-[#FFFFFF] group-hover:bg-[#B89A7A]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-[#000000] group-hover:bg-[#B89A7A]" : "bg-[#FFFFFF] group-hover:bg-[#B89A7A]"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
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
