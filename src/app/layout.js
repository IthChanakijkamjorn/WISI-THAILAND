import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "WISI Thailand",
  description: "Authorised representative of WISI products for broadcast, SMATV/MATV headend, signal processing, and fibre distribution across Thailand.",
  openGraph: {
    title: "WISI Thailand",
    description: "Authorised representative of WISI products for broadcast, SMATV/MATV headend, signal processing, and fibre distribution across Thailand.",
    url: "https://wisithailand.co.th",
    siteName: "WISI Thailand",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
