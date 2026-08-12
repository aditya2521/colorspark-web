import Link from "next/link";

const RAINBOW = ["#FF5E5E","#FF9500","#FFD700","#4CD964","#34AADC","#9B59B6"];

const MARQUEE_EMOJIS = [
  "🦋","🦄","🐉","🌈","🐱","🚀","🧙","🐬","👸","⚔️",
  "🌺","🐯","🦊","🏰","🧜","🌌","🐙","🎩","🦅","🍕",
  "🐠","🌻","💎","🎨","🌊","🦁","🐧","🎪","🌸","🍉",
];

const FEATURES = [
  { emoji:"🖼️", title:"200 Unique Images",    desc:"Hand-crafted images from butterflies to dragons. Every level is one-of-a-kind — no repeats, ever.",                   color:"#FF5E5E", bg:"#fff0f0", border:"#ffd6d6" },
  { emoji:"🎨", title:"40+ Color Palettes",    desc:"Vibrant, pastel, neon and more. Each level ships with a curated palette designed to make colors pop.",                  color:"#FF9500", bg:"#fff6ea", border:"#ffe4c0" },
  { emoji:"🔓", title:"Progressive Unlock",    desc:"Start with Level 1 and unlock the next level each time you complete one. Stay motivated to keep playing!",             color:"#FFD700", bg:"#fffaea", border:"#ffe97a" },
  { emoji:"🔊", title:"Satisfying Sound FX",   desc:"Correct tap, wrong tap, level complete — every action has a delightful sound effect. Toggle off anytime.",             color:"#4CD964", bg:"#f0fff4", border:"#b2f5c8" },
  { emoji:"💡", title:"Smart Hint System",     desc:"Stuck on a tricky region? The hint button reveals the correct color so you never get frustrated or bored.",            color:"#34AADC", bg:"#eef7ff", border:"#b3d9f7" },
  { emoji:"🏆", title:"Score & Progress",      desc:"Earn bonus points for clean completions. Track your total score and celebrate every milestone you hit.",                color:"#9B59B6", bg:"#f7f0ff", border:"#d9b8f5" },
];

const STEPS = [
  { num:"1", icon:"🎯", title:"Start at Level 1",   desc:"Begin your journey at Level 1. Complete it to unlock Level 2, then keep going — all the way to 200!",   color:"#FF5E5E" },
  { num:"2", icon:"🎨", title:"Choose a Color",     desc:"Tap a numbered swatch from the palette tray to select your active color.",                               color:"#FF9500" },
  { num:"3", icon:"✏️", title:"Tap to Color",       desc:"Tap matching numbered regions on the canvas to fill them — watch beautiful art come alive!",             color:"#4CD964" },
  { num:"4", icon:"🎉", title:"Complete & Unlock",  desc:"Fill every region to unlock the next level, earn score bonuses, and keep the adventure going!",          color:"#9B59B6" },
];

const DIFFICULTY = [
  { label:"Easy",   emoji:"😊", levels:"1–25",   color:"#10B981", bg:"#ECFDF5", desc:"Big clear regions & simple shapes. Perfect for little ones just starting out." },
  { label:"Medium", emoji:"🎯", levels:"26–55",  color:"#3B82F6", bg:"#EFF6FF", desc:"More regions and richer color palettes for growing young artists." },
  { label:"Hard",   emoji:"🔥", levels:"56–80",  color:"#F97316", bg:"#FFF7ED", desc:"Intricate multi-layer designs that demand real focus to complete." },
  { label:"Expert", emoji:"💎", levels:"81–200", color:"#EF4444", bg:"#FFF1F2", desc:"100+ regions per image — complex, detailed art for true coloring enthusiasts." },
];

const PHONE_EMOJIS = [
  {e:"😊",n:1,diff:"easy",locked:false},{e:"☀️",n:2,diff:"easy",locked:false},{e:"🏠",n:3,diff:"easy",locked:true},{e:"🍎",n:4,diff:"easy",locked:true},
  {e:"🌸",n:5,diff:"easy",locked:true},{e:"🍦",n:6,diff:"easy",locked:true},{e:"🍄",n:7,diff:"easy",locked:true},{e:"🎈",n:8,diff:"easy",locked:true},
  {e:"🐟",n:9,diff:"easy",locked:true},{e:"🍭",n:10,diff:"easy",locked:true},{e:"👻",n:11,diff:"easy",locked:true},{e:"❤️",n:12,diff:"easy",locked:true},
];
const DIFF_CELL: Record<string, {bg:string;border:string;num:string}> = {
  easy:   { bg:"#D1FAE5", border:"#10B981", num:"#059669" },
  medium: { bg:"#DBEAFE", border:"#3B82F6", num:"#1D4ED8" },
  hard:   { bg:"#FFEDD5", border:"#F97316", num:"#C2410C" },
  expert: { bg:"#FEE2E2", border:"#EF4444", num:"#B91C1C" },
};

// Phone mockup component (CSS-only, no images)
function PhoneMockup() {
  return (
    <div className="phone-float relative select-none" style={{width:260}}>
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{background:"radial-gradient(circle at 50% 60%, #FF6B35 0%, #FFD700 40%, #4CD964 80%, transparent 100%)"}} />

      {/* Phone shell */}
      <div className="relative rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden border-4 border-gray-800"
        style={{background:"#111"}}>

        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

        {/* Screen */}
        <div className="overflow-hidden" style={{background:"#FFFDF5", minHeight:520}}>
          {/* Rainbow stripe */}
          <div className="flex h-1.5">
            {["#FF4D4D","#FF8C00","#FFD700","#4CAF50","#2196F3","#9C27B0"].map(c =>
              <div key={c} className="flex-1" style={{background:c}} />
            )}
          </div>

          {/* Header */}
          <div className="bg-white px-4 pt-10 pb-2 flex items-center gap-2 border-b border-gray-100">
            <span className="text-[10px] font-black text-orange-400">‹ Back</span>
            <span className="text-[11px] font-black text-gray-700 ml-1">🎨 Choose a Level</span>
          </div>

          {/* Filter tabs */}
          <div className="bg-white px-2 py-1.5 flex gap-1 border-b border-gray-100">
            {[["All","#555"],["Easy","#10B981"],["Medium","#3B82F6"],["Hard","#F97316"]].map(([l,c])=>(
              <div key={l} className="rounded-full px-2 py-0.5 text-white"
                style={{background: l==="Easy" ? c : l==="All" ? "#eee" : "transparent",
                        border:`1.5px solid ${c}`,
                        color: l==="All" ? "#555" : l==="Easy" ? "#fff" : c,
                        fontSize:8, fontWeight:800}}>
                {l}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-4 gap-1 p-2">
            {PHONE_EMOJIS.map(({e,n,diff,locked})=>{
              const s = DIFF_CELL[diff];
              return locked ? (
                <div key={n} className="rounded-xl flex flex-col items-center justify-center py-2 border-2"
                  style={{background:"#F3F3F3", borderColor:"#E0E0E0", opacity:0.5}}>
                  <span style={{fontSize:14}}>🔒</span>
                </div>
              ) : (
                <div key={n} className="rounded-xl flex flex-col items-center justify-center py-2 border-2"
                  style={{background:s.bg, borderColor:s.border}}>
                  <span style={{fontSize:16}}>{e}</span>
                  <span style={{fontSize:7,fontWeight:900,color:s.num}}>{n}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom bar hint */}
          <div className="mx-2 rounded-xl bg-white border border-gray-100 p-2 flex items-center gap-2 mt-1">
            <span style={{fontSize:14}}>🌸</span>
            <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full" style={{width:"40%",background:"linear-gradient(90deg,#FF6B35,#FFD700)"}} />
            </div>
            <span style={{fontSize:8,fontWeight:700,color:"#aaa"}}>40%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-14 pb-28 px-4"
        style={{background:"linear-gradient(135deg,#fff8ee 0%,#fffdf5 45%,#f0f7ff 100%)"}}>
        {/* Background blobs */}
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full opacity-40 pointer-events-none"
          style={{background:"#FFD6E0", filter:"blur(60px)"}} />
        <div className="absolute -top-16 -right-24 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
          style={{background:"#D6EAFF", filter:"blur(80px)"}} />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-25 pointer-events-none"
          style={{background:"#D6FFE8", filter:"blur(60px)"}} />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-orange-100 mb-6 text-sm">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="font-bold text-gray-500">Kids & Adults Love It</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-6">
              <span style={{color:"#1a1a2e"}}>Color by</span><br />
              <span style={{
                background:"linear-gradient(135deg, #FF6B35 0%, #FFD700 50%, #FF6B35 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                backgroundClip:"text"
              }}>Number</span>
              <span style={{color:"#1a1a2e"}}> Fun!</span>
            </h1>

            <p className="text-gray-500 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              200 hand-crafted images, 40+ color palettes, 4 difficulty tiers.
              Start at Level 1 and <strong className="text-gray-700">unlock your way</strong> through all 200 levels!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8" id="download">
              <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl font-bold text-base shadow-xl hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                <span className="text-2xl"></span>
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-60">Download on the</div>
                  <div className="text-base font-black">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 text-white px-6 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                style={{background:"linear-gradient(135deg,#FF6B35,#FF8C00)"}}>
                <span className="text-2xl">▶</span>
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-80">Coming Soon on</div>
                  <div className="text-base font-black">Google Play</div>
                </div>
              </a>
            </div>

            {/* Proof strip */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500 font-semibold">
              <span className="flex items-center gap-1.5">✅ <span>Free to Play</span></span>
              <span className="flex items-center gap-1.5">✅ <span>No Ads</span></span>
              <span className="flex items-center gap-1.5">✅ <span>Kid Friendly</span></span>
            </div>
          </div>

          {/* Right: Phone */}
          <div className="order-1 lg:order-2 flex-shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────── */}
      <section className="overflow-hidden bg-white border-y border-gray-100 py-3">
        <div className="flex" style={{width:"max-content"}}>
          <div className="marquee-track flex gap-5 pr-5">
            {[...MARQUEE_EMOJIS, ...MARQUEE_EMOJIS].map((e, i) => (
              <span key={i} className="text-3xl select-none">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {value:"200", label:"Unique Levels",    color:"#FF5E5E", bg:"#fff0f0", icon:"🖼️"},
            {value:"200", label:"Original Images",  color:"#FF9500", bg:"#fff6ea", icon:"🎨"},
            {value:"40+", label:"Color Palettes",   color:"#4CD964", bg:"#f0fff4", icon:"🌈"},
            {value:"4",   label:"Difficulty Tiers", color:"#34AADC", bg:"#eef7ff", icon:"⭐"},
          ].map(({value,label,color,bg,icon}) => (
            <div key={label} className="rounded-3xl p-6 text-center hover:scale-105 transition-transform cursor-default"
              style={{background:bg, border:`2px solid ${color}22`}}>
              <div className="text-3xl mb-2">{icon}</div>
              <div className="text-4xl font-black mb-1" style={{color}}>{value}</div>
              <div className="text-sm text-gray-500 font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────── */}
      <section id="features" className="py-24 px-4" style={{background:"linear-gradient(180deg,#fffdf5,#f8f4ff)"}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{color:"#FF9500", background:"#fff6ea"}}>
              Why Kids Love It
            </span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              Everything You Need to{" "}
              <span style={{color:"#FF5E5E"}}>Create</span> &amp;{" "}
              <span style={{color:"#4CD964"}}>Have Fun</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              ColorSpark is packed with features designed to make coloring joyful, relaxing, and rewarding for every age.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({emoji,title,desc,color,bg,border})=>(
              <div key={title}
                className="group rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{background:bg, borderColor:border}}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm"
                  style={{background:"white", border:`2px solid ${border}`}}>
                  {emoji}
                </div>
                <h3 className="text-xl font-black mb-2" style={{color}}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{color:"#34AADC", background:"#eef7ff"}}>
              Simple &amp; Fun
            </span>
            <h2 className="text-4xl sm:text-5xl font-black">How It Works</h2>
            <p className="text-gray-400 mt-4">Four easy steps to create beautiful artwork</p>
          </div>

          {/* Steps with connecting line */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Desktop connector */}
            <div className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-0.5"
              style={{background:"linear-gradient(90deg,#FF5E5E,#FF9500,#4CD964,#9B59B6)"}} />

            {STEPS.map(({num,icon,title,desc,color})=>(
              <div key={num} className="relative text-center group">
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-md z-10 group-hover:scale-110 transition-transform"
                  style={{background:`${color}18`, border:`2px solid ${color}40`, backgroundColor:"white"}}>
                  {icon}
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg"
                    style={{background:color}}>{num}</div>
                </div>
                <h3 className="text-lg font-black mb-2" style={{color}}>{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFICULTY TIERS ───────────────────────────── */}
      <section className="py-24 px-4" style={{background:"linear-gradient(180deg,#f8f4ff,#fffdf5)"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-3">
              Something for <span style={{color:"#FF5E5E"}}>Everyone</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Four difficulty tiers — from big simple shapes for toddlers to 100+ region masterpieces for experts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFICULTY.map(({label,emoji,levels,color,bg,desc})=>(
              <div key={label}
                className="rounded-3xl p-6 border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default"
                style={{background:bg, borderColor:color+"55"}}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm"
                  style={{background:color}}>
                  {emoji}
                </div>
                <div className="text-xl font-black mb-1" style={{color}}>{label}</div>
                <div className="text-xs font-bold mb-3 px-2 py-0.5 rounded-full inline-block text-white"
                  style={{background:color}}>Levels {levels}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEVEL PREVIEW STRIP ─────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-2 text-gray-800">A Taste of What Awaits</h2>
          <p className="text-gray-400 mb-10 text-sm">Just a few of the 200 unique images you'll color</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
            {MARQUEE_EMOJIS.map((emoji,i)=>(
              <div key={i}
                className="aspect-square rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-sm border-2"
                style={{
                  background: [DIFF_CELL.easy.bg,DIFF_CELL.medium.bg,DIFF_CELL.hard.bg,DIFF_CELL.expert.bg][i%4],
                  borderColor:[DIFF_CELL.easy.border,DIFF_CELL.medium.border,DIFF_CELL.hard.border,DIFF_CELL.expert.border][i%4],
                }}>
                <span className="text-xl sm:text-2xl">{emoji}</span>
                <span className="text-[9px] font-black mt-0.5"
                  style={{color:[DIFF_CELL.easy.num,DIFF_CELL.medium.num,DIFF_CELL.hard.num,DIFF_CELL.expert.num][i%4]}}>
                  {i+1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-28 px-4 text-white text-center relative overflow-hidden"
        style={{background:"linear-gradient(135deg,#FF6B35 0%,#FF8C00 35%,#FFD700 65%,#FF6B35 100%)"}}>
        {/* Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
          style={{background:"white", filter:"blur(60px)", transform:"translate(-30%,-30%)"}} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{background:"white", filter:"blur(80px)", transform:"translate(30%,30%)"}} />

        <div className="relative max-w-3xl mx-auto">
          <div className="text-6xl mb-4 pulse-soft">🌈</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 drop-shadow-lg">
            Start Coloring Today!
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of kids and adults who love ColorSpark.
            Download free, start at Level 1, and unlock all 200 levels one beautiful image at a time!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-[#FF6B35] px-8 py-4 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all">
               Download on App Store
            </a>
            <a href="#" className="bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/30 hover:-translate-y-1 transition-all">
              ▶ Google Play (Soon)
            </a>
          </div>
        </div>
      </section>

      {/* Legal strip */}
      <section className="py-6 px-4 bg-[#fffdf5] text-center border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-2">Please review our policies before playing</p>
        <div className="flex gap-6 justify-center">
          <Link href="/privacy" className="text-[#34AADC] font-semibold hover:underline text-sm">Privacy Policy</Link>
          <Link href="/terms"   className="text-[#9B59B6] font-semibold hover:underline text-sm">Terms &amp; Conditions</Link>
        </div>
      </section>
    </>
  );
}
