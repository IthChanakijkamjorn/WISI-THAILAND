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

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 sm:px-10">
          <Link href="/products" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/60 hover:text-[#004874]">&larr; All Products</Link>
          <div className="mt-4 flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">{label}</p>
            <h1 className={`${cormorant.className} text-4xl font-semibold text-[#0D1B2A] sm:text-5xl`}>
              {products.length} product{products.length !== 1 ? 's' : ''} available.
            </h1>
          </div>
          {products.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-white/70 bg-white/70 p-10 text-center">
              <p className="text-[#4A6274]">No products in this category yet.</p>
              <Link href="/products" className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#004874] hover:underline">&larr; Back</Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <Link
                  key={product._id}
                  href={`/products/${category}/${product.slug}`}
                  className="group rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_32px_rgba(0,72,116,0.09)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,72,116,0.15)] animate-fade-up"
                  style={{ animationDelay: `${index * 60}ms` }}
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
                  <h3 className="text-base font-semibold text-[#0D1B2A] transition group-hover:text-[#004874]">{product.name}</h3>
                  {product.brand && <p className="mt-1 text-xs text-[#004874]/60">{product.brand}</p>}
                  {product.shortDescription && <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#4A6274]">{product.shortDescription}</p>}
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]">View details &rarr;</p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </SiteShell>
  );
}
