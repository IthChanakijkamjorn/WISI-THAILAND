import Link from "next/link";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { cormorant } from "../_components/brand-fonts";
import { products, categories } from "../../lib/products";

export default function ProductsPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">

        {/* Header */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-12 sm:px-10">
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">Products</p>
            <h1 className={`${cormorant.className} text-4xl font-semibold text-[#0D1B2A] sm:text-5xl`}>
              Our Product Range
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#4A6274]">
              We carry a curated selection of WISI products for broadcast, SMATV/MATV headend, signal processing, and fibre distribution. If you are interested in any item, contact us directly — we do not operate a shop.
            </p>
          </div>
        </section>

        {/* Category groups */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
          {categories.map((cat, ci) => {
            const catProducts = products.filter((p) => p.category === cat);
            return (
              <div
                key={cat}
                className="mb-14 animate-fade-up"
                style={{ animationDelay: `${ci * 80}ms` }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px flex-1 bg-[#004874]/10" />
                  <h2 className={`${cormorant.className} text-xl font-semibold text-[#004874]`}>{cat}</h2>
                  <span className="h-px flex-1 bg-[#004874]/10" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {catProducts.map((product, pi) => (
                    <div
                      key={product.id}
                      className="flex flex-col rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_12px_32px_rgba(0,72,116,0.09)] transition hover:shadow-[0_18px_40px_rgba(0,72,116,0.15)] animate-fade-up"
                      style={{ animationDelay: `${ci * 80 + pi * 60}ms` }}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A96E]">
                        {product.model}
                      </span>
                      <h3 className={`${cormorant.className} mt-2 text-lg font-semibold text-[#0D1B2A]`}>
                        {product.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-[#4A6274]">
                        {product.shortDescription}
                      </p>
                      <Link
                        href="/contact"
                        className="mt-5 inline-block self-start rounded-full border border-[#004874]/25 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874] transition hover:bg-[#004874] hover:text-white hover:border-[#004874]"
                      >
                        Enquire
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA strip */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          <div
            className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_18px_40px_rgba(0,72,116,0.10)] lg:flex-row lg:items-center animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/60">Can&rsquo;t find what you need?</p>
              <h2 className={`${cormorant.className} mt-3 text-2xl font-semibold text-[#0D1B2A]`}>
                We may still be able to help.
              </h2>
              <p className="mt-2 text-sm text-[#4A6274]">Get in touch and our team will look into availability and options for you.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-[#004874] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#003558]"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
