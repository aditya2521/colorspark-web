"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MoveHorizontal, Sparkles } from "lucide-react";
import AppLogo from "./AppLogo";
import styles from "./HeroArt.module.css";

const artworks = [
  { id: "butterfly", title: "Beautiful Butterfly", label: "Butterfly" },
  { id: "fish", title: "Happy Fish", label: "Fish" },
  { id: "cat", title: "Cute Cat", label: "Cat" },
];

export default function HeroArt() {
  const [selected, setSelected] = useState(0);
  const [reveal, setReveal] = useState(72);
  const art = artworks[selected];
  return (
    <div className={styles.showcase}>
      <div className={styles.heading}><AppLogo size={28} /><span>YOUR NEXT LITTLE MASTERPIECE</span><Sparkles size={19} /></div>
      <div className={styles.book}>
        <div className={styles.page}>
          <span className={styles.pageLabel}>A LITTLE POSSIBILITY</span>
          <Image src={`/art/${art.id}-outline.svg`} alt={`Numbered sketch of ${art.title}`} width={300} height={400} priority />
          <span className={styles.pageNumber}>01 — Pick your spark</span>
        </div>
        <div className={`${styles.page} ${styles.finishedPage}`}>
          <span className={styles.pageLabel}>A LITTLE MAGIC</span>
          <div className={styles.reveal}>
            <Image src={`/art/${art.id}-outline.svg`} alt="" width={300} height={400} priority />
            <Image src={`/art/${art.id}.svg`} alt={`${art.title}, ${reveal}% revealed in color`} width={300} height={400} priority className={styles.colored} style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }} />
            {reveal > 0 && reveal < 100 && <span className={styles.revealLine} style={{ left: `${reveal}%` }} aria-hidden="true" />}
          </div>
          <span className={styles.pageNumber}>02 — Make it yours</span>
        </div>
      </div>
      <div className={styles.colorControl}>
        <label htmlFor="hero-color-reveal"><MoveHorizontal size={16} /> Slide a little color into your day</label>
        <input id="hero-color-reveal" aria-label="Amount of color revealed" type="range" min={0} max={100} value={reveal} onChange={event => setReveal(Number(event.target.value))} />
        <span className={styles.rangeEnds}><span>A fresh start</span><span>Pure joy</span></span>
      </div>
      <div className={styles.footer}>
        <div className={styles.tabs} role="group" aria-label="Choose featured artwork">
          {artworks.map((item, index) => <button key={item.id} type="button" aria-label={`Show ${item.title}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.label}</button>)}
        </div>
        <a href="#try-it">Try coloring <ArrowRight size={15} /></a>
      </div>
    </div>
  );
}
