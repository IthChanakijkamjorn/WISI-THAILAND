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
  description: "Authorised representative of WISI products, supplying a wide range of technology solutions to businesses across Thailand.",
  openGraph: {
    title: "WISI Thailand",
    description: "Authorised representative of WISI products, supplying a wide range of technology solutions to businesses across Thailand.",
    url: "https://www.wisithailand.com",
    siteName: "WISI Thailand",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "WISI Thailand Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "WISI Thailand",
    description: "Authorised representative of WISI products, supplying a wide range of technology solutions to businesses across Thailand.",
    images: ["/icon.png"],
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
