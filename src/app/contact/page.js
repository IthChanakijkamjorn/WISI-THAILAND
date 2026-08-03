"use client";

import { useState } from "react";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { cormorant } from "../_components/brand-fonts";

const contactDetails = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "admin@wisithailand.com",
    href: "mailto:admin@wisithailand.com",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "02 729 4225-6",
    href: "tel:0227294225",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Bangkok, Thailand",
    href: "https://maps.google.com/?q=Expert+Electronic+Bangkok+Thailand",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Fri: 08:30 – 17:30",
    href: undefined,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      company: formData.get("company"),
      inquiryType: formData.get("inquiryType"),
      message: formData.get("message"),
    };
    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      let recaptchaToken = "";
      if (siteKey && typeof window !== "undefined" && window.grecaptcha) {
        recaptchaToken = await new Promise((resolve, reject) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(siteKey, { action: "contact_form" })
              .then(resolve)
              .catch(reject);
          });
        });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-20">

        {/* Page hero */}
        <section className="border-b border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C8A96E] animate-fade-up" style={{ animationDelay: "0ms" }}>
              Contact Us
            </p>
            <h1 className={`${cormorant.className} mt-3 text-4xl font-bold text-[#0D1B2A] sm:text-5xl animate-fade-up`} style={{ animationDelay: "60ms" }}>
              Get in touch with us.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#4A6274] animate-fade-up" style={{ animationDelay: "120ms" }}>
              Whether you have a product enquiry, need technical advice, or want to explore a partnership — we are ready to hear from you.
            </p>
          </div>
        </section>

        {/* Contact detail chips */}
        <section className="border-b border-[#004874]/8 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10">
            <div className="flex flex-wrap gap-3">
              {contactDetails.map((c) =>
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.label === "Address" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-[#004874]/10 bg-[#F7FAFC] px-4 py-3 text-sm transition hover:border-[#004874]/30 hover:bg-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#004874]/8 text-[#004874]">
                      {c.icon}
                    </span>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#004874]/50">{c.label}</p>
                      <p className="font-semibold text-[#0D1B2A]">{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 rounded-xl border border-[#004874]/10 bg-[#F7FAFC] px-4 py-3 text-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#004874]/8 text-[#004874]">
                      {c.icon}
                    </span>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#004874]/50">{c.label}</p>
                      <p className="font-semibold text-[#0D1B2A]">{c.value}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#004874]/8 bg-white p-8 shadow-[0_4px_24px_rgba(0,72,116,0.07)] animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <h2 className={`${cormorant.className} mb-6 text-2xl font-bold text-[#0D1B2A]`}>Send us a message</h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Full Name *
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-[#004874]/12 bg-[#F7FAFC] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] outline-none transition focus:border-[#004874]/40 focus:bg-white"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Email *
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl border border-[#004874]/12 bg-[#F7FAFC] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] outline-none transition focus:border-[#004874]/40 focus:bg-white"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Company
                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="mt-1 w-full rounded-xl border border-[#004874]/12 bg-[#F7FAFC] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] outline-none transition focus:border-[#004874]/40 focus:bg-white"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Inquiry Type
                  <select
                    name="inquiryType"
                    className="mt-1 w-full rounded-xl border border-[#004874]/12 bg-[#F7FAFC] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] outline-none transition focus:border-[#004874]/40 focus:bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Product Enquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#004874]/70 sm:col-span-2">
                  Message *
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help you."
                    className="mt-1 w-full resize-none rounded-xl border border-[#004874]/12 bg-[#F7FAFC] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] outline-none transition focus:border-[#004874]/40 focus:bg-white"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#004874] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_4px_16px_rgba(0,72,116,0.3)] transition hover:bg-[#003558] disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>

              {status === "success" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  <span>✅</span> Message sent! We will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                  <span>❌</span> Something went wrong. Please try again.
                </div>
              )}

              <p className="mt-4 text-center text-[10px] leading-5 text-[#4A6274]/70">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#004874]">Privacy Policy</a>
                {" "}and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#004874]">Terms of Service</a>
                {" "}apply.
              </p>
            </form>

            {/* Info + tips */}
            <div className="flex flex-col gap-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
              <div className="rounded-2xl border border-[#004874]/8 bg-white p-6 shadow-[0_4px_24px_rgba(0,72,116,0.07)]">
                <h3 className={`${cormorant.className} text-xl font-bold text-[#0D1B2A]`}>Our Address</h3>
                <p className="mt-3 text-sm leading-6 text-[#4A6274]">
                  51/2 Soi Ramkhamhaeng 96,<br />
                  Ramkhamhaeng Road, Saphan Sung District,<br />
                  Bangkok, 10240
                </p>
              </div>

              <div className="rounded-2xl border border-[#004874]/8 bg-white p-6 shadow-[0_4px_24px_rgba(0,72,116,0.07)]">
                <h3 className={`${cormorant.className} text-xl font-bold text-[#0D1B2A]`}>Helpful to include</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Product model or category you're interested in",
                    "Project type and scale",
                    "Your company name and role",
                    "Preferred contact method and timing",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-sm text-[#4A6274]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#004874]/8 text-[10px] font-bold text-[#004874]">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#004874]/8 bg-[#004874] p-6 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">About Us</p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  We are the authorised representative of WISI products in Thailand — supporting system integrators, broadcasters, and hospitality operators with European-quality infrastructure and local expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section className="border-t border-[#004874]/8">
          <div className="mx-auto w-full max-w-7xl px-6 pb-6 pt-10 sm:px-10">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">Our Location</p>
                <h2 className={`${cormorant.className} mt-1 text-2xl font-bold text-[#0D1B2A]`}>Find Us in Bangkok</h2>
              </div>
              <a
                href="https://maps.google.com/?q=Expert+Electronic+Bangkok+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#004874]/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#004874] transition hover:bg-[#004874] hover:text-white"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
          <div className="w-full overflow-hidden" style={{ height: "420px" }}>
            <iframe
              title="WISI Thailand Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.38609066924545!2d100.66875873523065!3d13.773522739164934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d617e3d712dc1%3A0x6ba8fa786858ff4b!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC5h-C4geC4i-C5jOC5gOC4nuC4tOC4o-C5jOC4lyDguK3guLTguYDguKXguYfguITguYLguJfguKPguJnguLTguIQg4LmB4Lit4LiZ4LiU4LmMIOC4hOC4reC4oeC4oeC4ueC4meC4tOC5gOC4hOC4iuC4seC5iOC4mSDguIjguLPguIGguLHguJQ!5e0!3m2!1sth!2sth!4v1785722621308!5m2!1sth!2sth"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
