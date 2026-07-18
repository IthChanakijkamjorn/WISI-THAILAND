"use client";

import { useState } from "react";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { cormorant } from "../_components/brand-fonts";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
      <main className="relative pt-28">
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:px-10">
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">Contact Us</p>
            <h1 className={`${cormorant.className} text-4xl font-semibold text-[#0D1B2A] sm:text-5xl`}>
              Get in touch with us.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#4A6274]">
              Whether you have a product enquiry, need technical advice, or want to explore a partnership — we are ready to hear from you.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            {/* Info card */}
            <div
              className="rounded-3xl border border-white/70 bg-white/75 p-7 shadow-[0_18px_40px_rgba(0,72,116,0.10)] animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <h2 className={`${cormorant.className} text-2xl font-semibold text-[#0D1B2A]`}>Direct line</h2>
              <p className="mt-3 text-sm leading-6 text-[#4A6274]">
                We are the authorised representative of WISI products in Thailand. Reach out to our team for product details, availability, or technical guidance.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#004874]/50">Email</p>
                  <p className="mt-1 font-semibold text-[#0D1B2A]">admin@wisithailand.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#004874]/50">Phone</p>
                  <p className="mt-1 font-semibold text-[#0D1B2A]">02 729 4225-6</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#004874] px-5 py-4 text-white">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Office Hours</p>
                <p className="mt-1 text-sm font-semibold">Monday – Friday: 08:30 – 17:30</p>
                <p className="mt-0.5 text-xs text-white/60">Closed on Saturday &amp; Sunday</p>
              </div>

              <div className="mt-6 text-sm text-[#4A6274]">
                <p className="font-semibold text-[#004874]">Helpful to include</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside">
                  <li>Product model or category you&rsquo;re interested in</li>
                  <li>Project type and scale</li>
                  <li>Your company name and role</li>
                  <li>Preferred contact method and timing</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/70 bg-white/85 p-7 shadow-[0_18px_40px_rgba(0,72,116,0.10)] animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Full Name
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-1 w-full rounded-2xl border border-[#004874]/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] shadow-sm outline-none transition focus:border-[#004874]/50"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-2xl border border-[#004874]/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] shadow-sm outline-none transition focus:border-[#004874]/50"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Company
                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="mt-1 w-full rounded-2xl border border-[#004874]/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] shadow-sm outline-none transition focus:border-[#004874]/50"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/70">
                  Inquiry Type
                  <select
                    name="inquiryType"
                    className="mt-1 w-full rounded-2xl border border-[#004874]/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] shadow-sm outline-none transition focus:border-[#004874]/50"
                  >
                    <option>General Inquiry</option>
                    <option>Product Enquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#004874]/70 sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help you."
                    className="mt-1 w-full resize-none rounded-2xl border border-[#004874]/15 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#0D1B2A] shadow-sm outline-none transition focus:border-[#004874]/50"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full rounded-full bg-[#004874] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#003558] disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="mt-4 text-xs font-semibold text-green-600">
                  ✅ Message sent! We will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-xs font-semibold text-red-500">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
