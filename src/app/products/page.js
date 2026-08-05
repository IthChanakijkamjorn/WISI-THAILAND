import Link from "next/link";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { cormorant } from "../_components/brand-fonts";
import { productTypes } from "./_data/productTypes";

export default function ProductsPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-20">

        {/* Page hero */}
        <section className="border-b border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.4em] text-[#C8A96E]" style={{ animationDelay: '0ms' }}>
              Products
            </p>
            <h1
              className={`${cormorant.className} animate-fade-up mt-3 text-4xl font-bold text-[#0D1B2A] sm:text-5xl`}
              style={{ animationDelay: '60ms' }}
            >
              Our Product Range
            </h1>
            <p className="animate-fade-up mt-3 max-w-2xl text-base leading-7 text-[#4A6274]" style={{ animationDelay: '120ms' }}>
              Explore WISI&apos;s flagship product families — engineered for professional broadcast, CATV, and signal distribution.
            </p>
          </div>
        </section>

        {/* 4 main product type cards */}
        <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-2">
            {productTypes.map((type, index) => (
              <div
                key={type.slug}
                className="animate-fade-up group flex flex-col overflow-hidden rounded-2xl border border-[#004874]/10 bg-white shadow-[0_2px_16px_rgba(0,72,116,0.08)] transition hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(0,72,116,0.14)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Placeholder image area */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    aspectRatio: '16/9',
                    background: `linear-gradient(135deg, ${type.color} 0%, #0D1B2A 100%)`,
                  }}
                >
                  <span
                    className={`${cormorant.className} select-none text-6xl font-bold text-white/20 sm:text-8xl`}
                    aria-hidden="true"
                  >
                    {type.name}
                  </span>
                  <span
                    className={`${cormorant.className} absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-wide text-white sm:text-5xl`}
                  >
                    {type.name}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C8A96E]">Product Family</p>
                  <h2 className={`${cormorant.className} mt-2 text-3xl font-bold text-[#0D1B2A]`}>
                    {type.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#4A6274]">
                    {type.description}
                  </p>
                  <div className="mt-5">
                    <Link
                      href={`/products/${type.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#004874] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_4px_14px_rgba(0,72,116,0.25)] transition hover:bg-[#003558]"
                    >
                      Explore
                      <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming soon banner */}
        <section className="mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10">
          <div className="flex items-center gap-4 rounded-2xl border border-dashed border-[#004874]/20 bg-[#F0F5F9] px-6 py-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#004874]/10 text-sm text-[#004874]">+</span>
            <p className="text-sm text-[#4A6274]">
              <span className="font-semibold text-[#0D1B2A]">Additional product lines coming soon.</span>{' '}
              More WISI product families will be available here as they are added.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/60">Can&rsquo;t find what you need?</p>
              <h2 className={`${cormorant.className} mt-2 text-2xl font-bold text-[#0D1B2A]`}>We may still be able to help.</h2>
              <p className="mt-1 text-sm text-[#4A6274]">Get in touch and our team will look into availability and options for you.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-xl bg-[#004874] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_4px_16px_rgba(0,72,116,0.3)] transition hover:bg-[#003558]"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
