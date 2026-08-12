"use client";
import Link from "next/link";
import { useState } from "react";

const RAINBOW = ["#FF5E5E","#FF9500","#FFD700","#4CD964","#34AADC","#9B59B6"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* rainbow stripe */}
      <div className="flex h-1">
        {RAINBOW.map((c) => <div key={c} className="flex-1" style={{ background: c }} />)}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className="text-3xl">🎨</span>
          <span className="text-2xl font-black tracking-tight">
            {["C","o","l","o","r","S","p","a","r","k"].map((ch, i) => (
              <span key={i} style={{ color: RAINBOW[i % RAINBOW.length] }}>{ch}</span>
            ))}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-700 text-sm">
          <Link href="/#features" className="text-gray-600 hover:text-[#FF5E5E] transition-colors font-semibold">Features</Link>
          <Link href="/#how-it-works" className="text-gray-600 hover:text-[#FF9500] transition-colors font-semibold">How It Works</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-[#34AADC] transition-colors font-semibold">Privacy</Link>
          <Link href="/terms" className="text-gray-600 hover:text-[#9B59B6] transition-colors font-semibold">Terms</Link>
          <a
            href="#download"
            className="bg-[#FF6B35] text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-[#e85a24] transition-colors"
          >
            Get App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {[["/#features","Features"],["/#how-it-works","How It Works"],["/privacy","Privacy"],["/terms","Terms"]].map(([href,label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-gray-700 font-semibold py-2 border-b border-gray-50">
              {label}
            </Link>
          ))}
          <a href="#download" onClick={() => setOpen(false)}
            className="bg-[#FF6B35] text-white text-center py-2 rounded-full font-bold mt-1">
            Get App
          </a>
        </div>
      )}
    </nav>
  );
}
