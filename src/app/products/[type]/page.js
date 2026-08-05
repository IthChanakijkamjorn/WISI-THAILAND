import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../_components/site-header";
import SiteShell from "../../_components/site-shell";
import { cormorant } from "../../_components/brand-fonts";
import { productTypes } from "../_data/productTypes";

export async function generateStaticParams() {
  return productTypes.map((t) => ({ type: t.slug }));
}

export default async function ProductTypePage({ params }) {
  const { type } = await params;
  const productType = productTypes.find((t) => t.slug === type);
  if (!productType) notFound();

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-20">

        {/* Hero */}
        <section className="border-b border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
            {/* Back + breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/60">
              <Link href="/products" className="inline-flex items-center gap-1.5 transition hover:text-[#004874]">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Products
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-[#004874]">{productType.name}</span>
            </div>

            <div className="mt-5">
              <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.4em] text-[#C8A96E]" style={{ animationDelay: '0ms' }}>
                Product Family
              </p>
              <h1
                className={`${cormorant.className} animate-fade-up mt-2 text-4xl font-bold text-[#0D1B2A] sm:text-5xl`}
                style={{ animationDelay: '60ms' }}
              >
                {productType.name}
              </h1>
              <p className="animate-fade-up mt-3 max-w-2xl text-base leading-7 text-[#4A6274]" style={{ animationDelay: '120ms' }}>
                {productType.description}
              </p>
            </div>
          </div>
        </section>

        {/* Knowledge overview */}
        <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
          <div className="animate-fade-up rounded-2xl border border-[#004874]/10 bg-white p-8 shadow-[0_2px_16px_rgba(0,72,116,0.06)]" style={{ animationDelay: '80ms' }}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C8A96E]">Knowledge Overview</p>
            <h2 className={`${cormorant.className} mt-2 text-2xl font-bold text-[#0D1B2A]`}>
              About {productType.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#4A6274]">
              Detailed product family information, technical overview, and application guides will be available here soon.
            </p>
          </div>
        </section>

        {/* Product listing */}
        <section className="mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10">
          <div className="mb-6 flex items-center gap-4">
            <h2 className={`${cormorant.className} text-2xl font-bold text-[#0D1B2A]`}>
              Products in this family
            </h2>
            <span className="h-px flex-1 bg-[#004874]/8" />
          </div>

          {/* Skeleton placeholder cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="h-40 animate-pulse rounded-2xl bg-[#E8EEF3]" />
                <div className="h-3 w-3/4 animate-pulse rounded bg-[#E8EEF3]" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-[#E8EEF3]" />
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-[#4A6274]/70">
            Products will appear here once imported.
          </p>
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
