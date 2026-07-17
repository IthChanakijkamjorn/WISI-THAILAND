import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "WISI Thailand",
  description: "Authorised representative of WISI products for broadcast, SMATV/MATV headend, signal processing, and fibre distribution across Thailand.",
  icons: {
    icon: "/favicon.ico",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
