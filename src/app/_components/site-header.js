"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cormorant } from "./brand-fonts";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top thin gradient bar for brand accent */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-gradient-to-r from-[#00B4D8] via-[#004874] to-[#00B4D8]" />

      <header className="fixed inset-x-0 top-1 z-50 px-3 pt-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-gradient-to-r from-[#00243D] via-[#003558] to-[#004874] px-5 py-3 shadow-[0_10px_40px_rgba(0,20,40,0.35)] ring-1 ring-white/10 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#7FD8FF] to-[#00B4D8] text-sm font-black text-[#00243D] shadow-[0_0_0_3px_rgba(255,255,255,0.15)]">
              W
            </span>
            <span className={`${cormorant.className} hidden text-lg font-bold tracking-[0.15em] text-white sm:block`}>
              WISI <span className="text-[#7FD8FF]">THAILAND</span>
            </span>
          </Link>

          {/* Desktop pill nav */}
          <nav className="hidden items-center gap-1 rounded-full bg-white/5 p-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition ${
                  pathname === link.href
                    ? "bg-[#7FD8FF] text-[#00243D] shadow-[0_2px_10px_rgba(127,216,255,0.5)]"
                    : "text-[#BFE7FF] hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 transition hover:bg-white/15 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        style={{ background: "rgba(0,17,31,0.6)", backdropFilter: "blur(6px)" }}
      />

      {/* Mobile menu drawer (slides from right) */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 max-w-[80vw] transform bg-gradient-to-b from-[#00243D] to-[#003558] shadow-[0_0_60px_rgba(0,20,40,0.5)] transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] transition ${
                pathname === link.href
                  ? "bg-[#7FD8FF] text-[#00243D]"
                  : "text-[#BFE7FF] hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
