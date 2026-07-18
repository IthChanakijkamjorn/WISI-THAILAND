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

function isFlatSpecs(specifications) {
  if (!specifications || specifications.length === 0) return false;
  const first = specifications[0];
  return typeof first.label === 'string' && typeof first.value === 'string';
}

export default async function ProductPage({ params }) {
  const { category, slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  const categoryLabel = categoryLabels[category] || category;
  const flatSpecs = isFlatSpecs(product.specifications);

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 sm:px-10">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/60">
            <Link href="/products" className="hover:text-[#004874]">Products</Link>
            <span>/</span>
            <Link href={`/products/${category}`} className="hover:text-[#004874]">{categoryLabel}</Link>
            <span>/</span>
            <span className="text-[#004874] truncate max-w-[160px]">{product.name}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
              {product.imageUrl ? (
                <ProductImageLightbox imageUrl={product.imageUrl} productName={product.name} />
              ) : (
                <div className="flex h-96 w-full items-center justify-center rounded-3xl bg-[#004874]/5">
                  <span className="text-[10px] uppercase tracking-widest text-[#004874]/30">No image</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-5 animate-fade-up" style={{ animationDelay: "80ms" }}>
              {product.featured && (
                <span className="inline-block w-fit rounded-full bg-[#004874] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">Featured</span>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/60">{categoryLabel}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0D1B2A] sm:text-4xl">{product.name}</h1>
                {product.brand && <p className="mt-1 text-sm text-[#004874]/60">{product.brand}</p>}
              </div>
              {product.shortDescription && <p className="text-base leading-7 text-[#4A6274]">{product.shortDescription}</p>}
              {product.description && (
                <div className="rounded-2xl border border-[#004874]/10 bg-white p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/60">Description</p>
                  <p className="whitespace-pre-line text-sm leading-7 text-[#4A6274]">{product.description}</p>
                </div>
              )}
              <div className="mt-auto flex flex-col gap-3">
                {product.datasheetUrl && (
                  <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-[#004874]/15 bg-white px-5 py-4 text-sm font-semibold text-[#004874] transition hover:bg-[#004874] hover:text-white">
                    <span>📄</span> Download Datasheet (PDF)
                  </a>
                )}
                <Link href="/contact" className="rounded-full bg-[#004874] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#003558]">
                  Enquire About This Product
                </Link>
              </div>
            </div>
          </div>

          {product.atAGlance && product.atAGlance.length > 0 && (
            <div className="mt-10 animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="rounded-2xl border border-[#004874]/10 bg-white p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/60">At a Glance</p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.atAGlance.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-6 text-[#4A6274]">
                      <span className="mt-1 shrink-0 text-[#004874]">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {product.specifications && product.specifications.length > 0 && (
            <div className="mt-16 animate-fade-up" style={{ animationDelay: "160ms" }}>
              <h2 className={`${cormorant.className} text-2xl font-semibold text-[#0D1B2A] mb-6`}>Specifications</h2>
              {flatSpecs ? (
                <div className="rounded-2xl border border-[#004874]/10 bg-white overflow-hidden">
                  <div className="px-6 py-4 bg-[#004874]/5 border-b border-[#004874]/10">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]">Technical Data</p>
                  </div>
                  {product.specifications.map((row, i) => (
                    <div key={row._key || i} className={`flex px-6 py-3 text-sm border-b border-[#004874]/5 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#004874]/[0.02]'}`}>
                      <span className="w-1/2 font-medium text-[#0D1B2A]">{row.label}</span>
                      <span className="w-1/2 text-[#4A6274]">{row.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {product.specifications.map((tab) => (
                    <div key={tab._key} className="rounded-2xl border border-[#004874]/10 bg-white overflow-hidden">
                      <div className="px-6 py-4 bg-[#004874]/5 border-b border-[#004874]/10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]">{tab.tabName}</p>
                      </div>
                      {tab.rows && tab.rows.map((row, i) => (
                        <div key={row._key || i} className={`flex px-6 py-3 text-sm border-b border-[#004874]/5 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#004874]/[0.02]'}`}>
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
