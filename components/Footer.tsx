import Link from "next/link";

const RAINBOW = ["#FF5E5E","#FF9500","#FFD700","#4CD964","#34AADC","#9B59B6"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      {/* rainbow stripe */}
      <div className="flex h-1">
        {RAINBOW.map((c) => <div key={c} className="flex-1" style={{ background: c }} />)}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🎨</span>
              <span className="text-xl font-black">
                {["C","o","l","o","r","S","p","a","r","k"].map((ch, i) => (
                  <span key={i} style={{ color: RAINBOW[i % RAINBOW.length] }}>{ch}</span>
                ))}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A fun color-by-number game for kids of all ages. 200 unique images, vibrant palettes, and relaxing gameplay.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5E5E] transition-colors">Home</Link></li>
              <li><Link href="/#features" className="hover:text-[#FF9500] transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-[#4CD964] transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-[#34AADC] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#9B59B6] transition-colors">Terms & Conditions</Link></li>
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              Contact: <a href="mailto:support@colorspark.app" className="hover:text-[#FF5E5E]">support@colorspark.app</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ColorSpark. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
