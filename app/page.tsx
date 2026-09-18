import Link from "next/link";
import AppStoreDownload from "@/components/AppStoreDownload";
import GooglePlayDownload from "@/components/GooglePlayDownload";
import HeroArt from "@/components/HeroArt";
import ArtGallery from "@/components/ArtGallery";
import ColorDemo from "@/components/ColorDemo";

// Restored from the live Firebase deployment, with the three requested additions.
export default function HomePage() {
  return <>
    <section className="relative overflow-hidden pt-14 pb-28 px-4" style={{"background": "linear-gradient(135deg,#fff8ee 0%,#fffdf5 45%,#f0f7ff 100%)"}}>
      <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full opacity-40 pointer-events-none" style={{"background": "#FFD6E0", "filter": "blur(60px)"}}>

      </div>
      <div className="absolute -top-16 -right-24 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none" style={{"background": "#D6EAFF", "filter": "blur(80px)"}}>

      </div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-25 pointer-events-none" style={{"background": "#D6FFE8", "filter": "blur(60px)"}}>

      </div>
      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-orange-100 mb-6 text-sm">
            <span>
              {"⭐⭐⭐⭐⭐"}
            </span>
            <span className="font-bold text-gray-600">
              {"465+ Sketches · 9 Categories"}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-6">
            <span style={{"color": "#1a1a2e"}}>
              {"Color by"}
            </span>
            <br />
            <span style={{"background": "linear-gradient(135deg, #FF5722 0%, #FFA502 50%, #FF5722 100%)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent", "backgroundClip": "text"}}>
              {"Number"}
            </span>
            <span style={{"color": "#1a1a2e"}}>
              {" Joy!"}
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {"Explore "}
            <strong className="text-gray-800">
              {"465+ unique hand-crafted sketches"}
            </strong>
            {" across 9 magical categories. Choose your favorite theme, pick any artwork, and color your way to total relaxation!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8" id="download">
            <AppStoreDownload />
            <GooglePlayDownload />
          </div>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500 font-semibold">
            <span className="flex items-center gap-1.5">
              {"✅ "}
              <span>
                {"100% Free to Play"}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              {"✅ "}
              <span>
                {"No Annoying Ads"}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              {"✅ "}
              <span>
                {"Offline Friendly"}
              </span>
            </span>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-[500px] min-w-0 shrink-0"><HeroArt /></div>
      </div>
    </section>
    <section className="overflow-hidden bg-white border-y border-gray-100 py-3">
      <div className="flex" style={{"width": "max-content"}}>
        <div className="marquee-track flex gap-5 pr-5">
          <span className="text-3xl select-none">
            {"🦋"}
          </span>
          <span className="text-3xl select-none">
            {"🦄"}
          </span>
          <span className="text-3xl select-none">
            {"🐉"}
          </span>
          <span className="text-3xl select-none">
            {"🌈"}
          </span>
          <span className="text-3xl select-none">
            {"🐱"}
          </span>
          <span className="text-3xl select-none">
            {"🚀"}
          </span>
          <span className="text-3xl select-none">
            {"🧙"}
          </span>
          <span className="text-3xl select-none">
            {"🐬"}
          </span>
          <span className="text-3xl select-none">
            {"👸"}
          </span>
          <span className="text-3xl select-none">
            {"🏰"}
          </span>
          <span className="text-3xl select-none">
            {"🌺"}
          </span>
          <span className="text-3xl select-none">
            {"🐯"}
          </span>
          <span className="text-3xl select-none">
            {"🦊"}
          </span>
          <span className="text-3xl select-none">
            {"🍕"}
          </span>
          <span className="text-3xl select-none">
            {"🧜"}
          </span>
          <span className="text-3xl select-none">
            {"🌌"}
          </span>
          <span className="text-3xl select-none">
            {"🐙"}
          </span>
          <span className="text-3xl select-none">
            {"🎪"}
          </span>
          <span className="text-3xl select-none">
            {"🦅"}
          </span>
          <span className="text-3xl select-none">
            {"🚗"}
          </span>
          <span className="text-3xl select-none">
            {"🐠"}
          </span>
          <span className="text-3xl select-none">
            {"🌻"}
          </span>
          <span className="text-3xl select-none">
            {"💎"}
          </span>
          <span className="text-3xl select-none">
            {"🎨"}
          </span>
          <span className="text-3xl select-none">
            {"🌊"}
          </span>
          <span className="text-3xl select-none">
            {"🦁"}
          </span>
          <span className="text-3xl select-none">
            {"🐧"}
          </span>
          <span className="text-3xl select-none">
            {"🧘"}
          </span>
          <span className="text-3xl select-none">
            {"🌸"}
          </span>
          <span className="text-3xl select-none">
            {"🍉"}
          </span>
          <span className="text-3xl select-none">
            {"🦋"}
          </span>
          <span className="text-3xl select-none">
            {"🦄"}
          </span>
          <span className="text-3xl select-none">
            {"🐉"}
          </span>
          <span className="text-3xl select-none">
            {"🌈"}
          </span>
          <span className="text-3xl select-none">
            {"🐱"}
          </span>
          <span className="text-3xl select-none">
            {"🚀"}
          </span>
          <span className="text-3xl select-none">
            {"🧙"}
          </span>
          <span className="text-3xl select-none">
            {"🐬"}
          </span>
          <span className="text-3xl select-none">
            {"👸"}
          </span>
          <span className="text-3xl select-none">
            {"🏰"}
          </span>
          <span className="text-3xl select-none">
            {"🌺"}
          </span>
          <span className="text-3xl select-none">
            {"🐯"}
          </span>
          <span className="text-3xl select-none">
            {"🦊"}
          </span>
          <span className="text-3xl select-none">
            {"🍕"}
          </span>
          <span className="text-3xl select-none">
            {"🧜"}
          </span>
          <span className="text-3xl select-none">
            {"🌌"}
          </span>
          <span className="text-3xl select-none">
            {"🐙"}
          </span>
          <span className="text-3xl select-none">
            {"🎪"}
          </span>
          <span className="text-3xl select-none">
            {"🦅"}
          </span>
          <span className="text-3xl select-none">
            {"🚗"}
          </span>
          <span className="text-3xl select-none">
            {"🐠"}
          </span>
          <span className="text-3xl select-none">
            {"🌻"}
          </span>
          <span className="text-3xl select-none">
            {"💎"}
          </span>
          <span className="text-3xl select-none">
            {"🎨"}
          </span>
          <span className="text-3xl select-none">
            {"🌊"}
          </span>
          <span className="text-3xl select-none">
            {"🦁"}
          </span>
          <span className="text-3xl select-none">
            {"🐧"}
          </span>
          <span className="text-3xl select-none">
            {"🧘"}
          </span>
          <span className="text-3xl select-none">
            {"🌸"}
          </span>
          <span className="text-3xl select-none">
            {"🍉"}
          </span>
        </div>
      </div>
    </section>
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-3xl p-6 text-center hover:scale-105 transition-transform cursor-default" style={{"background": "#fff0f0", "border": "2px solid #FF5E5E22"}}>
          <div className="text-3xl mb-2">
            {"🎨"}
          </div>
          <div className="text-4xl font-black mb-1" style={{"color": "#FF5E5E"}}>
            {"465+"}
          </div>
          <div className="text-sm text-gray-500 font-semibold">
            {"Unique Sketches"}
          </div>
        </div>
        <div className="rounded-3xl p-6 text-center hover:scale-105 transition-transform cursor-default" style={{"background": "#fff6ea", "border": "2px solid #FF950022"}}>
          <div className="text-3xl mb-2">
            {"🗂️"}
          </div>
          <div className="text-4xl font-black mb-1" style={{"color": "#FF9500"}}>
            {"9"}
          </div>
          <div className="text-sm text-gray-500 font-semibold">
            {"Art Categories"}
          </div>
        </div>
        <div className="rounded-3xl p-6 text-center hover:scale-105 transition-transform cursor-default" style={{"background": "#fffaea", "border": "2px solid #F59E0B22"}}>
          <div className="text-3xl mb-2">
            {"⭐"}
          </div>
          <div className="text-4xl font-black mb-1" style={{"color": "#F59E0B"}}>
            {"1,395"}
          </div>
          <div className="text-sm text-gray-500 font-semibold">
            {"Stars to Collect"}
          </div>
        </div>
        <div className="rounded-3xl p-6 text-center hover:scale-105 transition-transform cursor-default" style={{"background": "#eef7ff", "border": "2px solid #34AADC22"}}>
          <div className="text-3xl mb-2">
            {"👑"}
          </div>
          <div className="text-4xl font-black mb-1" style={{"color": "#34AADC"}}>
            {"4"}
          </div>
          <div className="text-sm text-gray-500 font-semibold">
            {"Difficulty Modes"}
          </div>
        </div>
      </div>
    </section>
    <section id="categories" className="py-24 px-4" style={{"background": "linear-gradient(180deg,#fffdf5,#f8f4ff)"}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{"color": "#FF5722", "background": "#fff6ea"}}>
            {"Explore Our Art Worlds"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            {"9 Magical "}
            <span style={{"color": "#FF5722"}}>
              {"Categories"}
            </span>
            {" to Discover"}
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {"From majestic wildlife and cosmic adventures to relaxing mandalas and fantasy dragons — choose what inspires you today."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#F0FDF4", "borderColor": "#BBF7D0"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🐾"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#10B981"}}>
                  {"68 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#10B981"}}>
                {"Animals"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Wildlife, jungle creatures, birds & colorful sea life."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#10B981"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#FDF2F8", "borderColor": "#FBCFE8"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🌸"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#EC4899"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#EC4899"}}>
                {"Nature"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Flowers, serene forests, landscapes & botanical wonders."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#EC4899"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#FEF2F2", "borderColor": "#FECACA"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🍕"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#EF4444"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#EF4444"}}>
                {"Food & Sweets"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Delicious fruits, pizza, ice creams, cakes & sweet treats."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#EF4444"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#F5F3FF", "borderColor": "#DDD6FE"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🦄"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#8B5CF6"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#8B5CF6"}}>
                {"Fantasy & Magic"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Magical unicorns, fiery dragons, wizards & mythical beasts."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#8B5CF6"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#FFFBEB", "borderColor": "#FDE68A"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🏰"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#F59E0B"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#F59E0B"}}>
                {"Places & Wonders"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Fairy tale castles, cozy cottages, towers & landmarks."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#F59E0B"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#ECFEFF", "borderColor": "#A5F3FC"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🌌"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#06B6D4"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#06B6D4"}}>
                {"Space & Cosmos"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Astronauts, rockets, cosmic galaxies & alien planets."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#06B6D4"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#FFF7ED", "borderColor": "#FED7AA"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🎨"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#F97316"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#F97316"}}>
                {"Fun & Lifestyle"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Hobbies, music, sports, seasonal holidays & joyful moments."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#F97316"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#EEF2FF", "borderColor": "#C7D2FE"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🧘"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#6366F1"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#6366F1"}}>
                {"Mandalas & Zen"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Relaxing symmetry art, geometric chakras & calming patterns."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#6366F1"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
          <div className="group rounded-3xl p-7 border-2 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#EFF6FF", "borderColor": "#BFDBFE"}}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-white border border-gray-100">
                  {"🚗"}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-xs" style={{"color": "#3B82F6"}}>
                  {"50 Sketches"}
                </span>
              </div>
              <h3 className="text-xl font-black mb-2" style={{"color": "#3B82F6"}}>
                {"Vehicles & Speed"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Sports cars, high-speed trains, airplanes & majestic ships."}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-black" style={{"color": "#3B82F6"}}>
              <span>
                {"Color Theme"}
              </span>
              <span>
                {"Explore ›"}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16 retained-gallery">
  <div className="text-center mb-8"><h3 className="text-3xl font-black text-gray-800">A Peek Inside Each Art World</h3><p className="text-gray-500 mt-3">Choose a category and find your next little masterpiece.</p></div>
  <ArtGallery />
</div>
      </div>
    </section>
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{"color": "#3B82F6", "background": "#EFF6FF"}}>
            {"Why Players Love ColorSpark"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            {"Designed for "}
            <span style={{"color": "#FF5E5E"}}>
              {"Creativity"}
            </span>
            {" &"}
            {" "}
            <span style={{"color": "#10B981"}}>
              {"Pure Relaxation"}
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            {"ColorSpark is crafted with smooth responsiveness, intuitive controls, and rich visuals for artists of every age."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default" style={{"background": "#fff0f0", "borderColor": "#ffd6d6"}}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm bg-white" style={{"border": "2px solid #ffd6d6"}}>
              {"🖼️"}
            </div>
            <h3 className="text-xl font-black mb-2" style={{"color": "#FF5E5E"}}>
              {"465+ Bespoke Sketches"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {"Every single artwork is hand-designed and unique. 465+ original line-art drawings ready to color."}
            </p>
          </div>
          <div className="group rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default" style={{"background": "#fff6ea", "borderColor": "#ffe4c0"}}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm bg-white" style={{"border": "2px solid #ffe4c0"}}>
              {"🗂️"}
            </div>
            <h3 className="text-xl font-black mb-2" style={{"color": "#FF9500"}}>
              {"9 Joyful Themes"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {"Animals, Fantasy, Space, Mandalas, Food, Nature, and more. Something exciting for every mood."}
            </p>
          </div>
          <div className="group rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default" style={{"background": "#fffaea", "borderColor": "#ffe97a"}}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm bg-white" style={{"border": "2px solid #ffe97a"}}>
              {"🎨"}
            </div>
            <h3 className="text-xl font-black mb-2" style={{"color": "#FFD700"}}>
              {"Harmonious Palettes"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {"Curated color swatches crafted specifically for each category so your finished art always looks stunning."}
            </p>
          </div>
          <div className="group rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default" style={{"background": "#f0fff4", "borderColor": "#b2f5c8"}}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm bg-white" style={{"border": "2px solid #b2f5c8"}}>
              {"🔍"}
            </div>
            <h3 className="text-xl font-black mb-2" style={{"color": "#4CD964"}}>
              {"Smooth Pinch-to-Zoom"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {"Effortlessly zoom in on intricate regions or pan across large canvases with seamless responsiveness."}
            </p>
          </div>
          <div className="group rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default" style={{"background": "#eef7ff", "borderColor": "#b3d9f7"}}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm bg-white" style={{"border": "2px solid #b3d9f7"}}>
              {"💡"}
            </div>
            <h3 className="text-xl font-black mb-2" style={{"color": "#34AADC"}}>
              {"Smart Hint & Flash"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {"Never get stuck. Tap the hint bulb to pinpoint missing regions or use instant color number indicators."}
            </p>
          </div>
          <div className="group rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default" style={{"background": "#f7f0ff", "borderColor": "#d9b8f5"}}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm bg-white" style={{"border": "2px solid #d9b8f5"}}>
              {"⭐"}
            </div>
            <h3 className="text-xl font-black mb-2" style={{"color": "#9B59B6"}}>
              {"Star Progress System"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {"Earn up to 3 stars per sketch, track total stars collected across all categories, and unlock crown masterpieces."}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" className="py-24 px-4" style={{"background": "linear-gradient(180deg,#fffdf5,#f8f4ff)"}}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{"color": "#34AADC", "background": "#eef7ff"}}>
            {"Simple & Rewarding"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">
            {"How to Play"}
          </h2>
          <p className="text-gray-400 mt-4">
            {"Pick a category, select your sketch, and begin creating!"}
          </p>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-0.5" style={{"background": "linear-gradient(90deg,#FF5E5E,#FF9500,#4CD964,#9B59B6)"}}>

          </div>
          <div className="relative text-center group">
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-md z-10 group-hover:scale-110 transition-transform" style={{"background": "#FF5E5E18", "border": "2px solid #FF5E5E40", "backgroundColor": "white"}}>
              {"🗂️"}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg" style={{"background": "#FF5E5E"}}>
                {"1"}
              </div>
            </div>
            <h3 className="text-lg font-black mb-2" style={{"color": "#FF5E5E"}}>
              {"Choose a Category"}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {"Pick from 9 themes — like Animals, Space, Fantasy, or Zen Mandalas."}
            </p>
          </div>
          <div className="relative text-center group">
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-md z-10 group-hover:scale-110 transition-transform" style={{"background": "#FF950018", "border": "2px solid #FF950040", "backgroundColor": "white"}}>
              {"🎯"}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg" style={{"background": "#FF9500"}}>
                {"2"}
              </div>
            </div>
            <h3 className="text-lg font-black mb-2" style={{"color": "#FF9500"}}>
              {"Select a Sketch"}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {"Browse 465+ sketches and pick any level you want to color."}
            </p>
          </div>
          <div className="relative text-center group">
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-md z-10 group-hover:scale-110 transition-transform" style={{"background": "#4CD96418", "border": "2px solid #4CD96440", "backgroundColor": "white"}}>
              {"🎨"}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg" style={{"background": "#4CD964"}}>
                {"3"}
              </div>
            </div>
            <h3 className="text-lg font-black mb-2" style={{"color": "#4CD964"}}>
              {"Tap to Color"}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {"Tap matching numbered regions on the canvas to fill them with color."}
            </p>
          </div>
          <div className="relative text-center group">
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-md z-10 group-hover:scale-110 transition-transform" style={{"background": "#9B59B618", "border": "2px solid #9B59B640", "backgroundColor": "white"}}>
              {"⭐"}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg" style={{"background": "#9B59B6"}}>
                {"4"}
              </div>
            </div>
            <h3 className="text-lg font-black mb-2" style={{"color": "#9B59B6"}}>
              {"Earn Stars & Relax"}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {"Complete the artwork cleanly to earn up to 3 stars and celebrate your creation!"}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="try-it" className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
    <div><span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 bg-orange-50 text-orange-600">A Tiny Taste of ColorSpark</span>
      <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">Go on.<br /><span className="text-[#FF5722]">Color outside<br />your routine.</span></h2>
      <p className="text-gray-500 text-lg leading-relaxed max-w-md">Choose a number, tap its matching spaces, and feel the little spark for yourself.</p>
      <p className="text-gray-500 text-sm mt-6">Your first mini masterpiece starts right here.</p>
      <Link href="#download" className="inline-flex mt-8 font-bold text-[#FF5722] hover:underline">Love this feeling? Get the full app →</Link>
    </div><ColorDemo />
  </div>
</section>
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{"color": "#FF5722", "background": "#fff6ea"}}>
            {"The ColorSpark Experience"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-3">
            {"Crafted for "}
            <span style={{"color": "#FF5722"}}>
              {"Joy & Peace of Mind"}
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {"Everything in ColorSpark is built to give you the most relaxing, fluid, and delightful coloring experience."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-3xl p-6 border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#ECFDF5", "borderColor": "#A7F3D0"}}>
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm bg-white border border-gray-100">
                {"📴"}
              </div>
              <div className="text-xs font-black mb-2 px-2.5 py-0.5 rounded-full inline-block text-white" style={{"background": "#10B981"}}>
                {"Play Anywhere"}
              </div>
              <h3 className="text-lg font-black mb-2" style={{"color": "#10B981"}}>
                {"100% Offline Friendly"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"No Wi-Fi or mobile data needed. Enjoy smooth, uninterrupted coloring on flights, road trips, or quiet downtime."}
              </p>
            </div>
          </div>
          <div className="rounded-3xl p-6 border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#EFF6FF", "borderColor": "#BFDBFE"}}>
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm bg-white border border-gray-100">
                {"🛡️"}
              </div>
              <div className="text-xs font-black mb-2 px-2.5 py-0.5 rounded-full inline-block text-white" style={{"background": "#3B82F6"}}>
                {"Ad-Free & Safe"}
              </div>
              <h3 className="text-lg font-black mb-2" style={{"color": "#3B82F6"}}>
                {"Zero Distractions"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"No banner ads, video popups, or user tracking. A clean, safe creative space designed for kids and adults alike."}
              </p>
            </div>
          </div>
          <div className="rounded-3xl p-6 border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#FFF7ED", "borderColor": "#FED7AA"}}>
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm bg-white border border-gray-100">
                {"🔍"}
              </div>
              <div className="text-xs font-black mb-2 px-2.5 py-0.5 rounded-full inline-block text-white" style={{"background": "#F97316"}}>
                {"Fluid Controls"}
              </div>
              <h3 className="text-lg font-black mb-2" style={{"color": "#F97316"}}>
                {"Pinch, Pan & Zoom"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Seamless responsive gestures make it effortless to color tiny intricate details without straining your eyes."}
              </p>
            </div>
          </div>
          <div className="rounded-3xl p-6 border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default flex flex-col justify-between" style={{"background": "#F5F3FF", "borderColor": "#DDD6FE"}}>
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm bg-white border border-gray-100">
                {"🎉"}
              </div>
              <div className="text-xs font-black mb-2 px-2.5 py-0.5 rounded-full inline-block text-white" style={{"background": "#8B5CF6"}}>
                {"Pure Satisfaction"}
              </div>
              <h3 className="text-lg font-black mb-2" style={{"color": "#8B5CF6"}}>
                {"Stars & Celebrations"}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {"Satisfying audio chimes, smart flash feedback, and festive confetti bursts celebrate each finished masterpiece."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-28 px-4 text-white text-center relative overflow-hidden" style={{"background": "linear-gradient(135deg,#FF5722 0%,#FF8C00 35%,#FFD700 65%,#FF5722 100%)"}}>
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{"background": "white", "filter": "blur(60px)", "transform": "translate(-30%,-30%)"}}>

      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none" style={{"background": "white", "filter": "blur(80px)", "transform": "translate(30%,30%)"}}>

      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="text-6xl mb-4 pulse-soft">
          {"🎨"}
        </div>
        <h2 className="text-4xl sm:text-5xl font-black mb-4 drop-shadow-lg">
          {"Start Your Art Journey Today!"}
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {"Join thousands of kids and adults who love ColorSpark. Download free, pick your favorite category, and color over 465+ unique sketches!"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AppStoreDownload variant="cta" />
          <GooglePlayDownload variant="cta" />
        </div>
      </div>
    </section>
    <section className="py-6 px-4 bg-[#fffdf5] text-center border-t border-gray-100">
      <p className="text-sm text-gray-400 mb-2">
        {"Please review our policies before playing"}
      </p>
      <div className="flex gap-6 justify-center">
        <Link className="text-[#34AADC] font-semibold hover:underline text-sm" href="/privacy/">
          {"Privacy Policy"}
        </Link>
        <Link className="text-[#9B59B6] font-semibold hover:underline text-sm" href="/terms/">
          {"Terms & Conditions"}
        </Link>
      </div>
    </section>
  </>;
}
