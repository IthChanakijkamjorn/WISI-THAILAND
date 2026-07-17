import Link from "next/link";
import { cormorant } from "./brand-fonts";

export default function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-[#004874]/10 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className={`${cormorant.className} text-2xl font-bold text-[#004874]`}>WISI</span>
              <span className="h-4 w-px bg-[#C8A96E]/60" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#4A6274]">Thailand</span>
            </div>
            <p className="text-sm leading-6 text-[#4A6274]">
              Authorised representative of WISI products.<br />
              Serving broadcasters, system integrators,<br />
              and hospitality operators across Thailand.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/50">
              Contact
            </p>
            <a
              href="tel:+6621234567"
              className="flex items-center gap-2 text-sm text-[#4A6274] transition hover:text-[#004874]"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H3.72a2.25 2.25 0 0 0-2.25 2.25v.75" />
              </svg>
              +66 2 XXX XXXX
            </a>
            <a
              href="mailto:info@wisithailand.co.th"
              className="flex items-center gap-2 text-sm text-[#4A6274] transition hover:text-[#004874]"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
              </svg>
              info@wisithailand.co.th
            </a>
            <p className="text-sm text-[#4A6274]">
              Bangkok, Thailand<br />
              Mon – Fri: 08:30 – 17:30
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/50">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#4A6274] transition hover:text-[#004874]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#004874]/10 pt-6">
          <p className="text-center text-xs text-[#004874]/40">
            &copy; 2026 WISI Thailand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
