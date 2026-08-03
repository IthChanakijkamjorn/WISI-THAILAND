import Link from "next/link";
import { cormorant } from "./brand-fonts";

export default function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-[#004874]/10 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          <div className="flex flex-col gap-4">
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

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/50">Contact</p>
            <a
              href="tel:0227294225"
              className="flex items-center gap-2 text-sm text-[#4A6274] transition hover:text-[#004874]"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.884-1.353-5.223-3.692-6.576-6.576l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              02-729-4225
            </a>
            <a
              href="mailto:admin@wisithailand.com"
              className="flex items-center gap-2 text-sm text-[#4A6274] transition hover:text-[#004874]"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              admin@wisithailand.com
            </a>
            <p className="text-sm text-[#4A6274]">
              51/2 Soi Ramkhamhaeng 96, Ramkhamhaeng Road,<br />
              Saphan Sung District, Bangkok, 10240<br />
              Mon – Fri: 08:30 – 17:30
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/50">Quick Links</p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#4A6274] transition hover:text-[#004874]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-[#004874]/10 pt-6">
          <p className="text-center text-xs text-[#004874]/40">
            &copy; 2026 WISI Thailand. All rights reserved.
          </p>
          <p className="mt-2 text-center text-[10px] leading-5 text-[#004874]/30">
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/monkik" title="monkik" className="underline hover:text-[#004874]/60">monkik</a>
            {", "}
            <a href="https://www.flaticon.com/authors/magnific" title="Magnific" className="underline hover:text-[#004874]/60">Magnific</a>
            {" and "}
            <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" className="underline hover:text-[#004874]/60">Pixel perfect</a>
            {" from "}
            <a href="https://www.flaticon.com/" title="Flaticon" className="underline hover:text-[#004874]/60">www.flaticon.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
