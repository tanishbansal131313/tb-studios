import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "TB Studios",
  description: "Building innovative mobile apps and digital experiences.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "TB Studios",
    "Nova VPN",
    "EarnPlay",
    "Android Apps",
    "Games",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  <head>
    <meta
      name="monetag"
      content="8111e5e5743fc69da598a720817b0a6e"
    />
  </head>
  <body>
        {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1349634460823258"
          crossOrigin="anonymous"
        />

        {/* Monetag Multitag */}
        <Script
          src="https://quge5.com/88/tag.min.js"
          strategy="afterInteractive"
          data-zone="266342"
          data-cfasync="false"
        />
        <Navbar />

        <main>{children}</main>

        <Footer />

        <GoogleAnalytics gaId="G-927HHXZSLS" />
      </body>
    </html>
  );
}