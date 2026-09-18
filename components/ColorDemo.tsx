"use client";

import { useState } from "react";
import { Check, Lightbulb, Palette, RotateCcw, Sparkles, Undo2 } from "lucide-react";
import art from "@/lib/demo-art.json";
import AppLogo from "./AppLogo";
import styles from "./ColorDemo.module.css";

const slots = [...new Set(art.regions.map((region) => region.colorNumber))];
const colorNames = ["Ocean blue", "Deep blue", "Sandy shore", "Tangerine", "Apricot", "Soft peach", "Pearl white", "Cocoa", "Golden orange", "Sunset", "Coral red", "Bubble blue", "Rosy pink", "Mango", "Seaweed green", "Papaya"];
// Keep labels inside their visible regions, including the nested eye shapes.
const labelPositions: Record<string, [number, number]> = {
  "fish-eye": [100, 178], "fish-pupil": [100, 192], "fish-belly": [143, 261],
  "scale1": [170, 180], "scale2": [200, 194], "scale3": [160, 207],
  "scale4": [188, 220], "fin-top": [173, 152], "fin-bot": [173, 275],
  "bubble1": [55, 148], "bubble2": [35, 108], "bubble3": [68, 90],
  "coral1": [259, 353], "coral2": [48, 356], "seaweed": [225, 344],
  "starfish": [95, 378], "smile-f": [80, 221],
};

export default function ColorDemo() {
  const [selected, setSelected] = useState(1);
  const [filled, setFilled] = useState<string[]>([]);
  const [hinted, setHinted] = useState<string | null>(null);
  const [message, setMessage] = useState("Pick a color. Tap its matching numbers. Make it yours.");
  const complete = filled.length === art.regions.length;
  const progress = Math.round(filled.length / art.regions.length * 100);
  const remaining = art.regions.filter((region) => region.colorNumber === selected && !filled.includes(region.id));

  function fill(id: string, color: number) {
    if (filled.includes(id)) return;
    if (color !== selected) {
      setMessage(`That space needs color ${color}. Choose it from your palette below.`);
      return;
    }
    const next = [...filled, id];
    setFilled(next);
    setHinted(null);
    if (next.length === art.regions.length) {
      setMessage("Every little color added up to something beautiful. You made this!");
      return;
    }
    const colorFinished = art.regions.filter((region) => region.colorNumber === color).every((region) => next.includes(region.id));
    if (colorFinished) {
      const nextColor = slots.find((number) => art.regions.some((region) => region.colorNumber === number && !next.includes(region.id)))!;
      setSelected(nextColor);
      setMessage(`Color ${color} complete! Next up: ${colorNames[nextColor - 1].toLowerCase()}.`);
    } else {
      setMessage("Lovely. Keep filling the highlighted numbers.");
    }
  }

  function reset() {
    setFilled([]); setSelected(1); setHinted(null);
    setMessage("A fresh canvas. A little more possibility.");
  }

  function undo() {
    const last = art.regions.find((region) => region.id === filled[filled.length - 1]);
    if (!last) return;
    setFilled(filled.slice(0, -1)); setSelected(last.colorNumber); setHinted(null);
    setMessage("Last color undone. Take it at your own pace.");
  }

  return (
    <div className={styles.studio}>
      <div className={styles.header}>
        <div className={styles.identity}><AppLogo size={43} /><div><span className={styles.eyebrow}>A MOMENT FOR YOU</span><h3>Your little art studio</h3></div></div>
        <span className={styles.preview}><span /> Live preview</span>
      </div>

      <div className={styles.canvasArea}>
        <div className={styles.canvasCaption}><span>01 / HAPPY FISH</span><span>Take your time <Sparkles size={13} /></span></div>
        <div className={styles.paper}>
          <svg viewBox={art.viewBox} className={styles.art} role="group" aria-label="Interactive Happy Fish coloring preview">
            {art.regions.map((region) => {
              const { kind, ...attributes } = region.shape;
              const shape = { ...attributes, ...("w" in attributes ? { width: attributes.w, height: attributes.h, w: undefined, h: undefined } : {}) };
              const Tag = kind as "path" | "rect" | "circle" | "ellipse" | "polygon";
              const done = filled.includes(region.id);
              const active = !done && region.colorNumber === selected;
              const position = labelPositions[region.id] ?? region.label;
              return <g key={region.id}>
                <Tag {...shape} className={`${styles.region} ${active ? styles.activeRegion : ""} ${hinted === region.id ? styles.hinted : ""}`} fill={done ? art.colors[region.colorNumber - 1] : active ? "#fff0dc" : "#fffefb"} stroke="#8b7b69" strokeWidth="0.9" strokeLinejoin="round" role="button" tabIndex={done ? -1 : 0} aria-label={`${region.id}, color ${region.colorNumber}${done ? ", filled" : ""}`} aria-disabled={done} onClick={() => fill(region.id, region.colorNumber)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); fill(region.id, region.colorNumber); } }} />
                {!done && <text x={position[0]} y={position[1]} textAnchor="middle" dominantBaseline="central" className={`${styles.number} ${active ? styles.activeNumber : ""}`} pointerEvents="none">{region.colorNumber}</text>}
              </g>;
            })}
          </svg>
        </div>
        <div className={styles.canvasTools}>
          <span className={styles.canvasNote}>{complete ? <><Check size={14} /> Beautifully done</> : <><span className={styles.smallDot} /> A little color, a little closer</>}</span>
          <div className={styles.tools}>
            <button type="button" onClick={undo} disabled={!filled.length} aria-label="Undo last color" title="Undo last color"><Undo2 size={16} /></button>
            <button type="button" onClick={reset} disabled={!filled.length} aria-label="Reset coloring preview" title="Start again"><RotateCcw size={16} /></button>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.progressHeading}><span>{complete ? "Your little masterpiece" : "Your masterpiece in the making"}</span><strong>{progress}<span>%</span></strong></div>
        <div className={styles.progress} role="progressbar" aria-label="Artwork completed" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${progress}%` }} /></div>
        <div className={styles.paletteHeading}><div><span className={styles.selectedDot} style={{ background: art.colors[selected - 1] }} /><span>{complete ? "Every color, beautifully placed" : colorNames[selected - 1]}<small>{complete ? "Ready for another?" : `${remaining.length} ${remaining.length === 1 ? "space" : "spaces"} left to color`}</small></span></div><button type="button" className={styles.hint} disabled={complete} onClick={() => { if (remaining[0]) { setHinted(remaining[0].id); setMessage(`Look for the orange outline around color ${selected}.`); } }}><Lightbulb size={15} /> Hint</button></div>
        <div className={styles.palette} role="group" aria-label="Choose a numbered color">
          {slots.map((number) => {
            const done = art.regions.filter((region) => region.colorNumber === number).every((region) => filled.includes(region.id));
            return <button type="button" className={styles.swatch} key={number} onClick={() => { setSelected(number); setHinted(null); setMessage(`Find the highlighted spaces for ${colorNames[number - 1].toLowerCase()}.`); }} disabled={done} aria-pressed={selected === number && !complete} aria-label={`${done ? "Completed" : "Select"} color ${number}, ${colorNames[number - 1]}`} title={`${number} · ${colorNames[number - 1]}`}><span style={{ background: art.colors[number - 1] }}><span>{done ? <Check size={14} /> : number}</span></span></button>;
          })}
        </div>
        <p className={styles.status} role="status">{complete ? <Sparkles size={15} /> : <Palette size={14} />}<span>{message}</span></p>
        {complete && <button type="button" className={styles.again} onClick={reset}>A fresh canvas <RotateCcw size={15} /></button>}
      </div>
    </div>
  );
}
