import Link from "next/link";
import AppLogo from "./AppLogo";
export default function Footer(){
return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="flex h-1">
        <div className="flex-1" style={{"background": "#FF5E5E"}}>

        </div>
        <div className="flex-1" style={{"background": "#FF9500"}}>

        </div>
        <div className="flex-1" style={{"background": "#FFD700"}}>

        </div>
        <div className="flex-1" style={{"background": "#4CD964"}}>

        </div>
        <div className="flex-1" style={{"background": "#34AADC"}}>

        </div>
        <div className="flex-1" style={{"background": "#9B59B6"}}>

        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">
                <AppLogo size={38} />
              </span>
              <span className="text-xl font-black">
                <span style={{"color": "#FF5E5E"}}>
                  {"C"}
                </span>
                <span style={{"color": "#FF9500"}}>
                  {"o"}
                </span>
                <span style={{"color": "#FFD700"}}>
                  {"l"}
                </span>
                <span style={{"color": "#4CD964"}}>
                  {"o"}
                </span>
                <span style={{"color": "#34AADC"}}>
                  {"r"}
                </span>
                <span style={{"color": "#9B59B6"}}>
                  {"S"}
                </span>
                <span style={{"color": "#FF5E5E"}}>
                  {"p"}
                </span>
                <span style={{"color": "#FF9500"}}>
                  {"a"}
                </span>
                <span style={{"color": "#FFD700"}}>
                  {"r"}
                </span>
                <span style={{"color": "#4CD964"}}>
                  {"k"}
                </span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {"A joyful color-by-number game for kids & adults. 465+ unique sketches, 9 magical categories, and relaxing offline gameplay."}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-4">
              {"Quick Links"}
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link className="hover:text-[#FF5E5E] transition-colors" href="/">
                  {"Home"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FF9500] transition-colors" href="/#categories">
                  {"9 Categories"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4CD964] transition-colors" href="/#features">
                  {"Features"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#34AADC] transition-colors" href="/#how-it-works">
                  {"How It Works"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FF6B35] transition-colors" href="/#download">
                  {"Download"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-4">
              {"Legal & Support"}
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link className="hover:text-[#34AADC] transition-colors" href="/privacy/">
                  {"Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#9B59B6] transition-colors" href="/terms/">
                  {"Terms & Conditions"}
                </Link>
              </li>
              <li>
                <Link href="mailto:aditya159121@gmail.com" className="hover:text-[#FF5E5E] transition-colors">
                  {"Contact Support"}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              <Link href="mailto:aditya159121@gmail.com" className="hover:text-[#FF5E5E]">
                {"aditya159121@gmail.com"}
              </Link>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>
            {"© "}
            {"2026"}
            {" ColorSpark. All rights reserved."}
          </p>
          <div className="flex gap-4">
            <Link className="hover:text-gray-600 transition-colors" href="/privacy/">
              {"Privacy Policy"}
            </Link>
            <Link className="hover:text-gray-600 transition-colors" href="/terms/">
              {"Terms & Conditions"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
);
}
