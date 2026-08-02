import Link from "next/link";
import Image from "next/image";
import { cormorant } from "./_components/brand-fonts";
import SiteHeader from "./_components/site-header";
import SiteShell from "./_components/site-shell";
import anniversaryIcon from "./100-years-wisi-icon.png";

const services = [
  {
    tag: "Distribution",
    title: "Product Distribution",
    description:
      "We supply WISI broadcast and signal distribution equipment to system integrators, contractors, and operators across Thailand — with local stock and fast fulfilment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-24 w-24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25 12 3 3 8.25m18 0-9 5.25m9-5.25v7.5L12 21m0-7.5L3 8.25m9 5.25V21m0-7.5L3 8.25m0 0v7.5L12 21" />
      </svg>
    ),
    delay: "0ms",
  },
  {
    tag: "Consultation",
    title: "Technical Consultation",
    description:
      "Our team works with you from the design stage — reviewing system requirements, recommending the right products, and ensuring everything fits your environment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-24 w-24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.66l-3.276 3.276a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.024 4.318c.044.583.02 1.196-.14 1.743Z" />
      </svg>
    ),
    delay: "80ms",
  },
  {
    tag: "Support",
    title: "After-Sales Support",
    description:
      "We stay engaged after delivery. Whether you need configuration guidance, spare parts, or troubleshooting, we are a direct line away.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-24 w-24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    delay: "160ms",
  },
];

const pillars = [
  { value: "WISI", label: "European Quality" },
  { value: "Local", label: "Thai Support Team" },
  { value: "Direct", label: "Authorised Rep" },
];

export default function Home() {
  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative overflow-hidden">

        {/* ── 100 Years Anniversary Banner ────────────────── */}
        <section className="relative mt-16 overflow-hidden bg-[#00385E]">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/5 blur-[100px]" />
            <div className="absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-[#4CC3F0]/10 blur-[100px]" />
          </div>
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center sm:px-10 lg:flex-row lg:justify-center lg:gap-8 lg:text-left animate-fade-up">
            <Image
              src={anniversaryIcon}
              alt="WISI 100 Years Anniversary"
              className="h-40 w-40 shrink-0 object-contain sm:h-48 sm:w-48"
              priority
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#4CC3F0]">Celebrating a Milestone</p>
              <h2 className={`${cormorant.className} mt-2 text-2xl font-bold text-white sm:text-3xl`}>
                100 Years of WISI Engineering Excellence
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                Since 1926, WISI has been engineering trusted broadcast and signal distribution technology across Europe — and we&rsquo;re proud to bring a century of that expertise to Thailand.
              </p>
            </div>
          </div>
        </section>

        {/* ── Hero ───────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center">
          {/* Background gradient blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#004874]/8 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#C8A96E]/10 blur-[100px]" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-16 sm:px-10">
            {/* Top badge */}
            <div className="animate-fade-up flex justify-center" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#004874]/20 bg-white/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#004874] shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96E]" />
                Authorised WISI Distributor — Thailand
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`${cormorant.className} animate-fade-up mx-auto mt-6 max-w-4xl text-center text-5xl font-bold leading-[1.15] text-[#0D1B2A] sm:text-6xl lg:text-7xl`}
              style={{ animationDelay: "80ms" }}
            >
              Broadcast &amp; Signal<br />
              <span className="text-[#004874]">Infrastructure</span> for Thailand.
            </h1>

            <p
              className="animate-fade-up mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-[#4A6274] sm:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              WISI Thailand supports system integrators, broadcasters, and hospitality operators with reliable, European-quality WISI products — backed by a local team.
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/products"
                className="rounded-xl bg-[#004874] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_24px_rgba(0,72,116,0.4)] transition hover:bg-[#003558] hover:shadow-[0_8px_28px_rgba(0,72,116,0.5)]"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-[#004874]/25 bg-white/80 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874] backdrop-blur transition hover:border-[#004874]/40 hover:bg-white"
              >
                Talk to Us
              </Link>
            </div>

            {/* Pillars row */}
            <div
              className="animate-fade-up mx-auto mt-14 flex max-w-lg flex-wrap items-center justify-center gap-6 sm:gap-10"
              style={{ animationDelay: "320ms" }}
            >
              {pillars.map((p, i) => (
                <div key={p.value} className="flex items-center gap-3">
                  {i !== 0 && <span className="hidden h-6 w-px bg-[#004874]/15 sm:block" />}
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#004874]">{p.value}</p>
                    <p className="text-[11px] text-[#4A6274]">{p.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Do ────────────────── */}
        <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10">
          <div className="mb-12 text-center animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C8A96E]">What We Do</p>
            <h2 className={`${cormorant.className} mt-3 text-4xl font-bold text-[#0D1B2A]`}>
              More than a distributor.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#4A6274]">
              We combine product supply with genuine technical know-how to make sure every deployment is the right one.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.tag}
                className="relative overflow-hidden rounded-2xl bg-[#00385E] p-7 shadow-[0_4px_24px_rgba(0,56,94,0.18)]"
                style={{ animationDelay: s.delay }}
              >
                {/* Fading white overlay from top-right */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-white/25 via-white/5 to-transparent" />

                {/* Icon overlay, top-right, large */}
                <div className="pointer-events-none absolute -right-6 -top-6 text-white/15">
                  {s.icon}
                </div>

                <span className="relative inline-block rounded-full bg-[#C8A96E]/20 px-3 py-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8A96E]">
                  {s.tag}
                </span>
                <h3 className={`${cormorant.className} relative mt-3 text-xl font-bold text-white`}>{s.title}</h3>
                <p className="relative mt-2 text-sm leading-6 text-white/70">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why WISI strip ───────────────── */}
        <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10">
          <div className="overflow-hidden rounded-2xl bg-[#F0F5F9] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">Why WISI</p>
                <h2 className={`${cormorant.className} mt-3 text-3xl font-bold text-[#0D1B2A] lg:text-4xl`}>
                  Trusted across Europe.<br />Now available in Thailand.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#4A6274]">
                  WISI is a German manufacturer with over 70 years of expertise in broadcast, headend, and fibre optic signal distribution. Every product is engineered for long-term reliability in demanding environments.
                </p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874] transition hover:gap-3"
                >
                  Browse our product range
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "80ms" }}>
                {[
                  { label: "100+", desc: "Years of WISI engineering" },
                  { label: "🇩🇪", desc: "German-engineered products" },
                  { label: "Local", desc: "Bangkok-based support" },
                  { label: "Direct", desc: "Authorised representative" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white p-5 shadow-sm">
                    <p className="text-2xl font-bold text-[#004874]">{item.label}</p>
                    <p className="mt-1 text-xs text-[#4A6274]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────── */}
        <section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10">
          <div
            className="relative overflow-hidden rounded-2xl bg-[#004874] p-8 text-white sm:p-12 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-[#C8A96E]/20" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8A96E]">Let&rsquo;s work together</p>
                <h2 className={`${cormorant.className} mt-4 text-3xl font-bold lg:text-4xl`}>
                  Ready to discuss your next project?
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                  Whether you need product information, technical guidance, or a custom solution — our team is here for you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur transition hover:bg-white/20"
                >
                  Send a Message
                </Link>
                <a
                  href="tel:0227294225"
                  className="rounded-xl bg-[#C8A96E] px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#b8975e]"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
