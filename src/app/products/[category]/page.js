import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "../../_components/site-header";
import SiteShell from "../../_components/site-shell";
import { cormorant } from "../../_components/brand-fonts";
import { client } from "../../../lib/sanity";

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

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "product" && defined(category)] { category }`);
  const cats = [...new Set(products.map((p) => p.category).filter(Boolean))];
  return cats.map((category) => ({ category }));
}

async function getCategoryProducts(category) {
  return client.fetch(
    `*[_type == "product" && category == $category && defined(slug.current)] | order(name asc) {
      _id, name, "slug": slug.current, category, brand, shortDescription,
      "imageUrl": image.asset->url
    }`,
    { category }
  );
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const products = await getCategoryProducts(category);
  if (!products || products.length === 0) {
    const exists = await client.fetch(`count(*[_type == "product" && category == $category])`, { category });
    if (exists === 0) notFound();
  }
  const label = categoryLabels[category] || category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const icon = categoryIcons[category] || '📦';

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-20">

        {/* Hero */}
        <section className="border-b border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
            <Link href="/products" className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/60 transition hover:text-[#004874]">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              All Products
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004874]/10 text-2xl">{icon}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C8A96E]">Category</p>
                <h1 className={`${cormorant.className} text-3xl font-bold text-[#0D1B2A] sm:text-4xl`}>{label}</h1>
              </div>
            </div>
            <p className="mt-2 text-sm text-[#4A6274]">{products.length} product{products.length !== 1 ? 's' : ''} available</p>
          </div>
        </section>

        {/* Grid */}
        <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
          {products.length === 0 ? (
            <div className="rounded-2xl border border-[#004874]/10 bg-white p-12 text-center">
              <p className="text-sm text-[#4A6274]">No products in this category yet.</p>
              <Link href="/products" className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#004874] hover:underline">&larr; Back</Link>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => (
                <Link
                  key={product._id}
                  href={`/products/${category}/${product.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#004874]/8 bg-white shadow-[0_2px_12px_rgba(0,72,116,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,72,116,0.14)] animate-fade-up"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <div className="relative h-44 w-full overflow-hidden bg-[#F7FAFC]">
                    {product.imageUrl ? (
                      <Image src={product.imageUrl} alt={product.name} fill className="object-contain p-4 transition duration-300 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-3xl opacity-20">📦</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#004874]/0 transition group-hover:bg-[#004874]/4" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    {product.brand && <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8A96E]">{product.brand}</p>}
                    <h3 className="text-sm font-semibold leading-5 text-[#0D1B2A] transition group-hover:text-[#004874]">{product.name}</h3>
                    {product.shortDescription && <p className="mt-1.5 flex-1 line-clamp-2 text-xs leading-5 text-[#4A6274]">{product.shortDescription}</p>}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#004874]">View details</span>
                      <svg className="h-3.5 w-3.5 text-[#004874]/40 transition group-hover:translate-x-0.5 group-hover:text-[#004874]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </SiteShell>
  );
}
