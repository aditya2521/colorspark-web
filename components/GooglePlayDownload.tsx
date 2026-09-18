"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";
import AppLogo from "./AppLogo";
import useDialogAccessibility from "./useDialogAccessibility";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.colorspark.matchblend";

function GooglePlayLogo({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M3.609 1.814L13.792 12 3.61 22.186c-.367-.324-.61-.795-.61-1.341V3.155c0-.546.243-1.017.609-1.341zM15.207 13.414l2.766 2.766-12.72 7.262 9.954-10.028zm2.766-5.594l-2.766 2.766L5.253.558l12.72 7.262zm1.095 1.095l3.524 2.01c.902.516.902 1.353 0 1.869l-3.524 2.01-2.18-2.18 2.18-2.18z" />
    </svg>
  );
}

export default function GooglePlayDownload({ variant = "badge" }: { variant?: "badge" | "cta" }) {
  const isCta = variant === "cta";
  const [isOpen, setIsOpen] = useState(false);
  const [qrCode, setQrCode] = useState("");
  useDialogAccessibility(isOpen, "google-play-dialog-title");

  useEffect(() => {
    if (!isOpen) return;

    QRCode.toDataURL(GOOGLE_PLAY_URL, {
      width: 280,
      margin: 2,
      color: { dark: "#1a1a2e", light: "#ffffff" },
      errorCorrectionLevel: "M",
    }).then(setQrCode);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const mobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    if (!mobileDevice) {
      event.preventDefault();
      setIsOpen(true);
    }
  }

  return (
    <>
    <a
      href={GOOGLE_PLAY_URL}
      onClick={handleClick}
      className={isCta
        ? "flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/30 hover:-translate-y-1 transition-all"
        : "flex items-center gap-3 text-white px-6 py-3.5 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
      }
      style={isCta ? undefined : { background: "linear-gradient(135deg,#FF5722,#FF8C00)" }}
      aria-label="Download ColorSpark on Google Play"
    >
      <GooglePlayLogo className="w-6 h-6 fill-white" />
      {isCta ? (
        <span>Download on Google Play</span>
      ) : (
        <span className="text-left">
          <span className="block text-[10px] font-normal opacity-80 leading-tight">Get it on</span>
          <span className="block text-base font-black leading-tight">Google Play</span>
        </span>
      )}
    </a>
    {isOpen && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111827]/70 p-4 backdrop-blur-sm"
        role="presentation"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="google-play-dialog-title"
          className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center text-[#1a1a2e] shadow-2xl"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
            aria-label="Close Google Play QR code"
          >
            ×
          </button>
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-white">
            <AppLogo size={56} />
          </div>
          <h2 id="google-play-dialog-title" className="text-2xl font-black">Get ColorSpark on Google Play</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">Scan with your Android phone to download from Google Play.</p>
          <div className="mx-auto mt-5 flex h-[248px] w-[248px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-2 shadow-inner">
            {qrCode ? (
              // Generated from the same Google Play URL used by the button.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qrCode} alt="QR code for the ColorSpark Google Play page" className="h-full w-full" />
            ) : (
              <span className="text-sm text-gray-400">Creating QR code…</span>
            )}
          </div>
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-bold text-[#FF5722] hover:underline"
          >
            Open Google Play page <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    )}
    </>
  );
}
