"use client";
import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";
import artwork from "@/lib/artwork.json";

const categories = [
  { key: "animals", label: "Animals", image: "cat", color: "#348e61", background: "#eaf5ed" },
  { key: "nature", label: "Nature", image: "daisy", color: "#c5577f", background: "#ffedf3" },
  { key: "food", label: "Food & sweets", image: "cupcake", color: "#d77032", background: "#fff0e4" },
  { key: "mythical", label: "Fantasy", image: "unicorn", color: "#9665c4", background: "#f3ecfb" },
  { key: "architecture", label: "Places", image: "castle", color: "#b28628", background: "#fff7dc" },
  { key: "space", label: "Space", image: "rocket", color: "#477dc1", background: "#edf4ff" },
  { key: "fun", label: "Just for fun", image: "fun-1", color: "#c7724e", background: "#fff0e8" },
  { key: "mandalas", label: "Mandalas", image: "mandala-1", color: "#498f93", background: "#eaf7f5" },
  { key: "vehicles", label: "Vehicles", image: "submarine", color: "#4c82b8", background: "#edf5fc" },
];
export default function ArtGallery() {
  const [category, setCategory] = useState("animals");
  const active = categories.find(item => item.key === category)!;
  return <>
    <div className="category-tabs" role="group" aria-label="Artwork categories">
      {categories.map(({ key, label, image, color, background }) => <button key={key} type="button" aria-pressed={category === key} onClick={() => setCategory(key)} style={{ "--category-color": color, "--category-background": background } as CSSProperties}>
        <span className="category-picture"><Image src={`/art/${image}.svg`} alt="" width={45} height={60} /></span>
        <span className="category-label">{label}</span>
        {category === key && <span className="category-check"><Check size={10} strokeWidth={3} /></span>}
      </button>)}
    </div>
    <div className="collection-caption"><div><span style={{ background: active.color }} /><strong>{active.label}</strong><span>A little world of possibility</span></div><span>3 of our favorites</span></div>
    <div className="art-grid" aria-live="polite">{artwork.filter(art => art.category === category).map((art, index) => <a className={`art-card art-card-${index}`} href="#download" key={art.id} aria-label={`Get ColorSpark to color ${art.name}`}>
      <div className="art-image"><Image src={`/art/${art.id}.svg`} alt={art.name} width={300} height={400} /><span className="art-tag"><Sparkles size={13} /> Your next happy little moment</span></div>
      <div className="art-caption"><div><span>PICK IT. COLOR IT. LOVE IT.</span><h3>{art.name}</h3></div><span className="round-arrow"><ArrowUpRight size={21} /></span></div>
    </a>)}</div>
  </>;
}
