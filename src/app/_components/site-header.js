"use client";

import Link from "next/link";
import { cormorant, inter } from "./brand-fonts";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#004874] text-white shadow-[0_8px_32px_rgba(0,72,116,0.35)] animate-nav-drop">
      <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-3 sm:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className={`${cormorant.className} text-2xl font-700 tracking-tight text-white leading-none`}>
            WISI
          </span>
          <span className="h-5 w-px bg-[#C8A96E]/60" />
          <span className={`${inter.className} text-xs font-400 tracking-[0.25em] uppercase text-white/75`}>
            Thailand
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="transition hover:text-white hover:tracking-[0.35em]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact CTA button desktop */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-full border border-[#C8A96E]/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A96E] transition hover:bg-[#C8A96E]/10 ml-4"
          >
            Get in Touch
          </Link>

          {/* Mobile menu */}
          <div className="relative md:hidden" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="cursor-pointer rounded-full border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/90 transition hover:bg-white/10"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              Menu
            </button>
            <div
              className={`absolute right-0 mt-3 w-56 rounded-2xl border border-white/15 bg-[#003558] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-200 origin-top-right ${
                menuOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <nav
                aria-label="Mobile"
                className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
