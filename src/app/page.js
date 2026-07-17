import Link from "next/link";
import { cormorant } from "./_components/brand-fonts";
import SiteHeader from "./_components/site-header";
import SiteShell from "./_components/site-shell";

const services = [
  {
    tag: "Distribution",
    title: "Product Distribution",
    description:
      "We supply WISI broadcast and signal distribution equipment to system integrators, contractors, and operators across Thailand — with local stock and fast fulfilment.",
    delay: "100ms",
  },
  {
    tag: "Consultation",
    title: "Technical Consultation",
    description:
      "Our team works with you from the design stage — reviewing system requirements, recommending the right products, and ensuring everything fits your environment.",
    delay: "200ms",
  },
  {
    tag: "Support",
    title: "After-Sales Support",
    description:
      "We stay engaged after delivery. Whether you need configuration guidance, spare parts, or troubleshooting, we are a direct line away.",
    delay: "300ms",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">

        {/* Hero */}
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-12 sm:px-10 lg:flex-row lg:items-center">
          {/* Left */}
          <div className="flex-1">
            <p
              className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C8A96E] animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              WISI Thailand
            </p>
            <h1
              className={`${cormorant.className} mt-4 text-4xl font-semibold leading-tight text-[#0D1B2A] sm:text-5xl lg:text-6xl animate-fade-up`}
              style={{ animationDelay: "80ms" }}
            >
              Delivering broadcast and signal distribution solutions across Thailand.
            </h1>
            <p
              className="mt-5 max-w-xl text-base leading-8 text-[#4A6274] animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              WISI Thailand is the authorised representative of WISI products. We support system integrators, broadcasters, and hospitality operators with reliable, future-ready infrastructure.
            </p>
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/products"
                className="rounded-full bg-[#004874] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#003558]"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#004874]/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#004874] transition hover:border-[#004874]/60"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="mt-10 flex flex-wrap items-center gap-8 text-sm text-[#4A6274] animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <div>
                <p className="text-2xl font-semibold text-[#004874]">WISI</p>
                <p>European Quality</p>
              </div>
              <div className="h-8 w-px bg-[#004874]/15" />
              <div>
                <p className="text-2xl font-semibold text-[#004874]">Local</p>
                <p>Thai Support Team</p>
              </div>
              <div className="h-8 w-px bg-[#004874]/15" />
              <div>
                <p className="text-2xl font-semibold text-[#004874]">Direct</p>
                <p>Authorised Rep</p>
              </div>
            </div>
          </div>

          {/* Right — Quick Contact Card */}
          <div
            className="flex-1 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_25px_70px_rgba(0,72,116,0.15)] backdrop-blur">
              <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[#C8A96E]/20 blur-2xl" />
              <div className="absolute bottom-4 left-4 h-32 w-32 rounded-full bg-[#004874]/10 blur-2xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/60">
                  Get in touch
                </p>
                <h2 className={`${cormorant.className} mt-3 text-2xl font-semibold text-[#0D1B2A]`}>
                  Ready to discuss a project?
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4A6274]">
                  Reach out directly or send us a message and we will get back to you promptly.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+6621234567"
                    className="flex items-center gap-3 rounded-2xl border border-[#004874]/10 bg-[#F4F7FA] px-4 py-3 text-sm text-[#004874] transition hover:bg-[#e8eef4]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#004874]/10 text-base">📞</span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#004874]/50">Phone</p>
                      <p className="font-semibold">+66 2 XXX XXXX</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@wisithailand.co.th"
                    className="flex items-center gap-3 rounded-2xl border border-[#004874]/10 bg-white px-4 py-3 text-sm text-[#004874] transition hover:bg-[#F4F7FA]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#004874]/10 text-base">✉️</span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#004874]/50">Email</p>
                      <p className="font-semibold">info@wisithailand.co.th</p>
                    </div>
                  </a>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#004874] px-4 py-3 text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Office Hours</p>
                    <p className="mt-0.5 text-sm font-semibold">Mon – Fri: 08:30 – 17:30</p>
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/80">Bangkok, TH</span>
                </div>

                <Link
                  href="/contact"
                  className="mt-5 block rounded-full bg-[#004874] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#003558]"
                >
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">What We Do</p>
            <h2 className={`${cormorant.className} text-3xl font-semibold text-[#0D1B2A]`}>
              More than a distributor.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[#4A6274]">
              We combine product supply with genuine technical know-how to make sure every deployment is the right one.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.tag}
                className="rounded-3xl border border-white/70 bg-white/75 p-7 shadow-[0_18px_40px_rgba(0,72,116,0.09)] animate-fade-up"
                style={{ animationDelay: s.delay }}
              >
                <span className="inline-block rounded-full border border-[#C8A96E]/40 bg-[#C8A96E]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A96E]">
                  {s.tag}
                </span>
                <h3 className={`${cormorant.className} mt-4 text-xl font-semibold text-[#0D1B2A]`}>{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4A6274]">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          <div
            className="rounded-[36px] bg-[#004874] p-8 text-white shadow-[0_25px_70px_rgba(0,72,116,0.3)] sm:p-12 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8A96E]">Let&rsquo;s work together</p>
                <h2 className={`${cormorant.className} mt-4 text-3xl font-semibold`}>
                  Ready to discuss your next project?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                  Whether you need product information, technical guidance, or a custom solution — our team is here for you.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block shrink-0 rounded-full border border-[#C8A96E] bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#C8A96E] transition hover:bg-[#C8A96E] hover:text-[#004874]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
