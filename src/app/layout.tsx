import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Frantz",
  description: "I am Alex Frantz, a junior developer working primarily as QA at Medal.tv. I do JavaScript and Python alongside learning Java and more.",
  keywords: "alex frantz, frantz, alex, qa, javascript, html, react, python, java, alexavier frantz, alexavier, alexav, alexfrantz",
  openGraph: {
    title: "Alex Frantz",
    url: "https://alexav.gg",
    description: "I am Alex Frantz, a junior developer working primarily as QA at Medal.tv. I do JavaScript and Python alongside learning Java and more."
  },
  appleWebApp: {
    title: "Alex Frantz",
    startupImage: "/apple-touch-icon.png"
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png"
    }
  ],
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlausibleProvider domain={"alexav.gg"} customDomain={'https://metrics.alexav.gg/js/script.js'}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </PlausibleProvider>
  );
}
