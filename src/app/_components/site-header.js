import Link from "next/link";
import { cormorant } from "./brand-fonts";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/40 bg-white/80 px-6 backdrop-blur-md sm:px-10">
      <Link href="/" className={`${cormorant.className} text-xl font-semibold text-[#0D1B2A] tracking-wide`}>
        WISI Thailand
      </Link>
      <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
        <Link href="/products" className="transition hover:text-[#004874]">Products</Link>
        <Link href="/projects" className="transition hover:text-[#004874]">Projects</Link>
        <Link href="/contact" className="rounded-full bg-[#004874] px-4 py-2 text-white transition hover:bg-[#003558]">Contact</Link>
      </nav>
    </header>
  );
}
