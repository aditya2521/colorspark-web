import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "ColorSpark – Color by Number Game",
  description: "ColorSpark is a fun color-by-number game for kids with 100 unique images, vibrant palettes, and relaxing gameplay.",
  keywords: ["color by number", "kids game", "coloring app", "ColorSpark", "painting game"],
  openGraph: {
    title: "ColorSpark – Color by Number Game",
    description: "100 unique images to color. Pick a number, pick a color, create something beautiful!",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${nunito.className} min-h-full flex flex-col bg-[#fffdf5] text-[#1a1a2e] antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
