import Image from "next/image";

export default function AppLogo({ size = 44, className = "" }: { size?: number; className?: string }) {
  return <Image src="/app-icon.png" alt="ColorSpark app logo" width={size} height={size} unoptimized className={`app-logo ${className}`} />;
}

export function BrandName() {
  const colors = ["#ef5753", "#ed8b20", "#c7a000", "#3d9c5a", "#3788cc", "#a256c7", "#ed6565", "#e99225", "#46a765", "#398bc9"];
  return <span className="brand-name">{Array.from("ColorSpark").map((letter, index) => <span key={index} style={{ color: colors[index] }}>{letter}</span>)}</span>;
}
