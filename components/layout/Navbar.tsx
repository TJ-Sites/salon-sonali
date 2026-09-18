"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.4)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Salon Sonali Logo"
              className="h-10 lg:h-14 w-auto object-contain"
              style={{
                filter: "invert(0)",
                mixBlendMode: "screen",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-montserrat text-sm font-medium tracking-wider uppercase ${
                      isActive
                        ? "text-[#B89A7A] underline decoration-[#B89A7A] underline-offset-4"
                        : "text-[#FFFFFF] gold-underline"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#FFFFFF] group-hover:bg-[#B89A7A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#FFFFFF] group-hover:bg-[#B89A7A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#FFFFFF] group-hover:bg-[#B89A7A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
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
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-playfair text-4xl transition-colors duration-300 ${
                isActive ? "text-[#B89A7A]" : "text-[#FFFFFF] hover:text-[#B89A7A]"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms, color 0.3s ease`,
              }}
            >
              {link.label}
            </Link>
          );
        })}

      </div>
    </>
  );
}
