import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  icons: { icon: "/app-icon.png", apple: "/app-icon.png" },
  title: "ColorSpark – Color by Number Game for Kids",
  description: "Find your happy place with ColorSpark. Explore 465+ color-by-number sketches across 9 creative worlds. Relaxing, ad-free coloring for iPhone and iPad.",
  keywords: ["color by number", "kids game", "coloring app", "ColorSpark", "painting game", "color by number app", "kids coloring", "number coloring"],
  metadataBase: new URL("https://colorspark-21.web.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ColorSpark – Color by Number Game for Kids",
    description: "465+ sketches, 9 creative worlds, and a little calm. Explore ColorSpark, the ad-free color-by-number app.",
    type: "website",
    url: "https://colorspark-21.web.app",
    siteName: "ColorSpark",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColorSpark – Color by Number Game for Kids",
    description: "A little color. A little calm. Explore 465+ color-by-number sketches with ColorSpark.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${nunito.className} ${nunito.variable} min-h-full flex flex-col bg-[#fffdf5] text-[#1a1a2e] antialiased`}>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
