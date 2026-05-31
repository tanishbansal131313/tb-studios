import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/Footer";

import Navbar from "../components/navigation/Navbar";
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
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
        <GoogleAnalytics gaId="G-927HHXZSLS" />
      </body>
    </html>
  );
}