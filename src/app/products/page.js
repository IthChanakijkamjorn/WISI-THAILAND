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
      <main className="relative pt-28">
        <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-12 sm:px-10">
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">Products</p>
            <h1 className={`${cormorant.className} text-4xl font-semibold text-[#0D1B2A] sm:text-5xl`}>
              Our Product Range
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#4A6274]">
              We carry a curated selection of WISI products for broadcast, SMATV/MATV headend, signal processing, and fibre distribution. Contact us directly for enquiries.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
          {orderedCats.length === 0 ? (
            <div className="rounded-3xl border border-white/70 bg-white/80 p-12 text-center">
              <p className="text-[#4A6274]">No products yet. Check back soon.</p>
            </div>
          ) : (
            orderedCats.map((cat, ci) => (
              <div key={cat} className="mb-14 animate-fade-up" style={{ animationDelay: `${ci * 80}ms` }}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px flex-1 bg-[#004874]/10" />
                  <h2 className={`${cormorant.className} text-xl font-semibold text-[#004874]`}>
                    {categoryLabels[cat] || cat}
                  </h2>
                  <span className="h-px flex-1 bg-[#004874]/10" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {grouped[cat].map((product, pi) => (
                    <Link
                      key={product._id}
                      href={`/products/${product.category}/${product.slug}`}
                      className="group flex flex-col rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_32px_rgba(0,72,116,0.09)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,72,116,0.15)] animate-fade-up"
                      style={{ animationDelay: `${ci * 80 + pi * 60}ms` }}
                    >
                      {product.imageUrl ? (
                        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-2xl bg-gray-50">
                          <Image src={product.imageUrl} alt={product.name} fill className="object-contain p-2 transition group-hover:scale-105" />
                        </div>
                      ) : (
                        <div className="mb-4 flex h-40 w-full items-center justify-center rounded-2xl bg-[#004874]/5">
                          <span className="text-[10px] uppercase tracking-widest text-[#004874]/30">No image</span>
                        </div>
                      )}
                      <h3 className={`${cormorant.className} text-lg font-semibold text-[#0D1B2A] transition group-hover:text-[#004874]`}>
                        {product.name}
                      </h3>
                      {product.brand && <p className="mt-1 text-xs text-[#004874]/60">{product.brand}</p>}
                      {product.shortDescription && (
                        <p className="mt-2 flex-1 line-clamp-2 text-sm leading-6 text-[#4A6274]">{product.shortDescription}</p>
                      )}
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]">View details &rarr;</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_18px_40px_rgba(0,72,116,0.10)] lg:flex-row lg:items-center animate-fade-up" style={{ animationDelay: "160ms" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/60">Can&rsquo;t find what you need?</p>
              <h2 className={`${cormorant.className} mt-3 text-2xl font-semibold text-[#0D1B2A]`}>We may still be able to help.</h2>
              <p className="mt-2 text-sm text-[#4A6274]">Get in touch and our team will look into availability and options for you.</p>
            </div>
            <Link href="/contact" className="shrink-0 rounded-full bg-[#004874] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#003558]">Contact Us</Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
