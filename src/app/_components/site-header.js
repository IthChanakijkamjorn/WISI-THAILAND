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

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#00385E]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-black text-[#00385E]">
              W
            </span>
            <span className={`${cormorant.className} text-xl font-bold tracking-wide text-white`}>
              WISI Thailand
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                  pathname === link.href
                    ? "text-white after:absolute after:inset-x-0 after:-bottom-0 after:h-0.5 after:rounded-full after:bg-[#4CC3F0]"
                    : "text-[#9FC6DE] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full border border-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-[#00385E]"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl transition hover:bg-white/10 md:hidden"
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
        style={{ background: "rgba(0,17,31,0.6)", backdropFilter: "blur(4px)" }}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-x-0 top-16 z-40 transition-all duration-300 md:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#00385E] shadow-[0_20px_60px_rgba(0,20,40,0.45)]">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition ${
                i !== navLinks.length - 1 ? "border-b border-white/10" : ""
              } ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-[#9FC6DE] hover:bg-white/10 hover:text-white"
              } ${link.href === "/contact" ? "!text-white font-bold" : ""}`}
            >
              {link.label}
              <svg className="h-4 w-4 opacity-40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
