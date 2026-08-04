import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { cormorant } from "../_components/brand-fonts";
import { client } from "../../lib/sanity";

const categoryLabels = {
  'headend-processing': 'Headend & Processing',
  'signal-distribution': 'Signal Distribution',
  'fibre-optic-solutions': 'Fibre Optic Solutions',
  'accessories-modules': 'Accessories & Modules',
};

const categoryIcons = {
  'headend-processing': '📡',
  'signal-distribution': '🔀',
  'fibre-optic-solutions': '💡',
  'accessories-modules': '🔧',
};

const categoryOrder = [
  'headend-processing',
  'signal-distribution',
  'fibre-optic-solutions',
  'accessories-modules',
];

async function getAllProducts() {
  return client.fetch(
    `*[_type == "product" && defined(slug.current)] | order(name asc) {
      _id, name, "slug": slug.current, category, brand, shortDescription,
      "imageUrl": image.asset->url
    }`
  );
}

export default async function ProductsPage() {
  const allProducts = await getAllProducts();

  const grouped = {};
  allProducts.forEach((p) => {
    const cat = p.category || 'other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
  });

  const orderedCats = [
    ...categoryOrder.filter((c) => grouped[c]),
    ...Object.keys(grouped).filter((c) => !categoryOrder.includes(c)),
  ];

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-20">

        {/* Page hero */}
        <section className="border-b border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C8A96E] animate-fade-up" style={{ animationDelay: '0ms' }}>Products</p>
            <h1 className={`${cormorant.className} mt-3 text-4xl font-bold text-[#0D1B2A] sm:text-5xl animate-fade-up`} style={{ animationDelay: '60ms' }}>
              Our Product Range
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#4A6274] animate-fade-up" style={{ animationDelay: '120ms' }}>
              A curated selection of WISI products spanning a wide range of technology solutions.
            </p>

            {/* Category quick-jump pills */}
            {orderedCats.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: '180ms' }}>
                {orderedCats.map((cat) => (
                  <a
                    key={cat}
                    href={`#cat-${cat}`}
                    className="rounded-full border border-[#004874]/20 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#004874] transition hover:bg-[#004874] hover:text-white"
                  >
                    {categoryIcons[cat] || ''} {categoryLabels[cat] || cat}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Products by category */}
        <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
          {orderedCats.length === 0 ? (
            <div className="rounded-2xl border border-[#004874]/10 bg-white p-14 text-center shadow-sm">
              <p className="text-2xl">📦</p>
              <p className="mt-3 text-sm text-[#4A6274]">No products yet. Check back soon.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-16">
              {orderedCats.map((cat, ci) => (
                <div key={cat} id={`cat-${cat}`} className="animate-fade-up" style={{ animationDelay: `${ci * 60}ms` }}>
                  {/* Category heading */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#004874]/8 text-lg">
                        {categoryIcons[cat] || '📦'}
                      </span>
                      <h2 className={`${cormorant.className} text-2xl font-bold text-[#0D1B2A]`}>
                        {categoryLabels[cat] || cat}
                      </h2>
                      <span className="rounded-full bg-[#004874]/8 px-2.5 py-0.5 text-xs font-semibold text-[#004874]">
                        {grouped[cat].length}
                      </span>
                    </div>
                    <span className="h-px flex-1 bg-[#004874]/8" />
                    <Link
                      href={`/products/${cat}`}
                      className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/60 transition hover:text-[#004874]"
                    >
                      View all &rarr;
                    </Link>
                  </div>

                  {/* Product grid */}
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {grouped[cat].map((product, pi) => (
                      <Link
                        key={product._id}
                        href={`/products/${product.category}/${product.slug}`}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-[#004874]/8 bg-white shadow-[0_2px_12px_rgba(0,72,116,0.06)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,72,116,0.12)]"
                        style={{ animationDelay: `${pi * 40}ms` }}
                      >
                        {/* Image */}
                        <div className="relative h-44 w-full overflow-hidden bg-[#F7FAFC]">
                          {product.imageUrl ? (
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              fill
                              className="object-contain p-4 transition duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <span className="text-3xl opacity-20">📦</span>
                            </div>
                          )}
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-[#004874]/0 transition group-hover:bg-[#004874]/4" />
                        </div>

                        {/* Info */}
                        <div className="flex flex-1 flex-col p-4">
                          {product.brand && (
                            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8A96E]">{product.brand}</p>
                          )}
                          <h3 className="text-sm font-semibold leading-5 text-[#0D1B2A] transition group-hover:text-[#004874]">
                            {product.name}
                          </h3>
                          {product.shortDescription && (
                            <p className="mt-1.5 flex-1 line-clamp-2 text-xs leading-5 text-[#4A6274]">
                              {product.shortDescription}
                            </p>
                          )}
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#004874]">
                              View details
                            </span>
                            <svg className="h-3.5 w-3.5 text-[#004874]/40 transition group-hover:translate-x-0.5 group-hover:text-[#004874]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
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
