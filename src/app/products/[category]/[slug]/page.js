import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../_components/site-header";
import SiteShell from "../../../_components/site-shell";
import { cormorant } from "../../../_components/brand-fonts";
import { client } from "../../../../lib/sanity";
import ProductImageLightbox from "../../_components/ProductImageLightbox";

const categoryLabels = {
  'headend-processing': 'Headend & Processing',
  'signal-distribution': 'Signal Distribution',
  'fibre-optic-solutions': 'Fibre Optic Solutions',
  'accessories-modules': 'Accessories & Modules',
};

export async function generateStaticParams() {
  const products = await client.fetch(
    `*[_type == "product" && defined(slug.current)] { category, "slug": slug.current }`
  );
  return products.filter((p) => p.category && p.slug).map((p) => ({ category: p.category, slug: p.slug }));
}

async function getProduct(slug) {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, "slug": slug.current, category, brand,
      shortDescription, description, atAGlance, featured,
      "imageUrl": image.asset->url,
      "datasheetUrl": datasheet.asset->url,
      specifications
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }) {
  const { category, slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  const categoryLabel = categoryLabels[category] || category;

  const flatSpecs = product.specifications?.length > 0 && typeof product.specifications[0].label === 'string';

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-20">

        {/* Breadcrumb */}
        <div className="border-b border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto w-full max-w-7xl px-6 py-4 sm:px-10">
            <nav className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em]">
              <Link href="/products" className="text-[#004874]/50 transition hover:text-[#004874]">Products</Link>
              <svg className="h-3 w-3 text-[#004874]/30" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <Link href={`/products/${category}`} className="text-[#004874]/50 transition hover:text-[#004874]">{categoryLabel}</Link>
              <svg className="h-3 w-3 text-[#004874]/30" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="max-w-[200px] truncate text-[#004874]">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">

            {/* Image */}
            <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
              {product.imageUrl ? (
                <ProductImageLightbox imageUrl={product.imageUrl} productName={product.name} />
              ) : (
                <div className="flex h-96 w-full items-center justify-center rounded-2xl bg-[#F0F5F9]">
                  <span className="text-4xl opacity-20">📦</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col gap-5 animate-fade-up" style={{ animationDelay: '80ms' }}>
              {product.featured && (
                <span className="inline-block w-fit rounded-full bg-[#C8A96E] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">Featured</span>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/50">{categoryLabel}</p>
                <h1 className={`${cormorant.className} mt-2 text-3xl font-bold text-[#0D1B2A] sm:text-4xl`}>{product.name}</h1>
                {product.brand && <p className="mt-1 text-sm font-medium text-[#C8A96E]">{product.brand}</p>}
              </div>

              {product.shortDescription && (
                <p className="text-base leading-7 text-[#4A6274]">{product.shortDescription}</p>
              )}

              {product.description && (
                <div className="rounded-xl border border-[#004874]/8 bg-[#F7FAFC] p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/50">Description</p>
                  <p className="whitespace-pre-line text-sm leading-7 text-[#4A6274]">{product.description}</p>
                </div>
              )}

              <div className="mt-auto flex flex-col gap-3">
                {product.datasheetUrl && (
                  <a
                    href={product.datasheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-[#004874]/15 bg-white px-5 py-3.5 text-sm font-semibold text-[#004874] shadow-sm transition hover:bg-[#004874] hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Download Datasheet (PDF)
                  </a>
                )}
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#004874] px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_4px_16px_rgba(0,72,116,0.3)] transition hover:bg-[#003558]"
                >
                  Enquire About This Product
                </Link>
              </div>
            </div>
          </div>

          {/* At a Glance */}
          {product.atAGlance?.length > 0 && (
            <div className="mt-12 animate-fade-up" style={{ animationDelay: '120ms' }}>
              <h2 className={`${cormorant.className} mb-5 text-2xl font-bold text-[#0D1B2A]`}>At a Glance</h2>
              <div className="grid gap-3 rounded-2xl border border-[#004874]/8 bg-[#F7FAFC] p-6 sm:grid-cols-2">
                {product.atAGlance.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#004874] text-[10px] text-white">✓</span>
                    <p className="text-sm leading-6 text-[#4A6274]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          {product.specifications?.length > 0 && (
            <div className="mt-12 animate-fade-up" style={{ animationDelay: '160ms' }}>
              <h2 className={`${cormorant.className} mb-5 text-2xl font-bold text-[#0D1B2A]`}>Specifications</h2>
              {flatSpecs ? (
                <div className="overflow-hidden rounded-2xl border border-[#004874]/8 bg-white">
                  <div className="border-b border-[#004874]/8 bg-[#F7FAFC] px-6 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]">Technical Data</p>
                  </div>
                  {product.specifications.map((row, i) => (
                    <div key={row._key || i} className={`flex px-6 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7FAFC]'} border-b border-[#004874]/5 last:border-0`}>
                      <span className="w-1/2 font-medium text-[#0D1B2A]">{row.label}</span>
                      <span className="w-1/2 text-[#4A6274]">{row.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {product.specifications.map((tab) => (
                    <div key={tab._key} className="overflow-hidden rounded-2xl border border-[#004874]/8 bg-white">
                      <div className="border-b border-[#004874]/8 bg-[#F7FAFC] px-6 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]">{tab.tabName}</p>
                      </div>
                      {tab.rows?.map((row, i) => (
                        <div key={row._key || i} className={`flex px-6 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7FAFC]'} border-b border-[#004874]/5 last:border-0`}>
                          <span className="w-1/2 font-medium text-[#0D1B2A]">{row.label}</span>
                          <span className="w-1/2 text-[#4A6274]">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </SiteShell>
  );
}
