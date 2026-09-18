"use client";
import AppLogo from "./AppLogo";
import useDialogAccessibility from "./useDialogAccessibility";

import QRCode from "qrcode";
import { useEffect, useState } from "react";

export const APP_STORE_URL =
  "https://apps.apple.com/in/app/colorspark-match-blend/id6800969507";

function AppleLogo({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 170 170">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.98-5.66-8.71-10.15-18.94-13.47-30.68-3.32-11.75-4.98-23.01-4.98-33.79 0-14.47 3.6-26.65 10.8-36.54 7.2-9.89 16.32-14.94 27.36-15.15 4.9 0 10.23 1.25 16 3.75 5.77 2.5 9.77 3.86 12 4.08 1.85-.22 5.98-1.63 12.39-4.23 6.42-2.61 11.96-3.81 16.63-3.6 12.39.65 22.37 5.16 29.93 13.53-10.88 6.64-16.21 15.79-16 27.46.22 9.03 3.65 16.58 10.3 22.66 6.64 6.08 14.53 9.4 23.66 9.95-2.29 6.86-5.06 13.72-8.31 20.59zM119.22 31.84c0-7.29 2.56-14.15 7.67-20.59 5.11-6.43 11.53-10.51 19.26-12.25 1.09 7.4-1.36 14.36-7.36 20.89-6 6.53-12.86 10.52-20.57 11.95h-.05c.67-4.27 1.05-8.47 1.05-12.6v2.6z" />
    </svg>
  );
}

type AppStoreDownloadProps = {
  variant?: "badge" | "cta";
};

export default function AppStoreDownload({ variant = "badge" }: AppStoreDownloadProps) {
  const [isOpen, setIsOpen] = useState(false);
  useDialogAccessibility(isOpen, "app-store-dialog-title");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    QRCode.toDataURL(APP_STORE_URL, {
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

  const isCta = variant === "cta";

  return (
    <>
      <a
        href={APP_STORE_URL}
        onClick={handleClick}
        className={isCta
          ? "flex items-center justify-center gap-3 bg-white text-[#FF5722] px-8 py-4 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all"
          : "flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-2xl font-bold text-base shadow-xl hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
        }
        aria-label="Download ColorSpark on the App Store"
      >
        <AppleLogo className={isCta ? "w-6 h-6 fill-[#FF5722]" : "w-7 h-7 fill-white"} />
        {isCta ? (
          <span>Download on App Store</span>
        ) : (
          <span className="text-left">
            <span className="block text-[10px] font-normal opacity-70 leading-tight">Download on the</span>
            <span className="block text-base font-black leading-tight">App Store</span>
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
            aria-labelledby="app-store-dialog-title"
            className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center text-[#1a1a2e] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
              aria-label="Close App Store QR code"
            >
              ×
            </button>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-white">
              <AppLogo size={56} />
            </div>
            <h2 id="app-store-dialog-title" className="text-2xl font-black">Get ColorSpark</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">Scan with your iPhone or iPad to download from the App Store.</p>
            <div className="mx-auto mt-5 flex h-[248px] w-[248px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-2 shadow-inner">
              {qrCode ? (
                // Generated locally from the same App Store URL used by the button.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrCode} alt="QR code for the ColorSpark App Store page" className="h-full w-full" />
              ) : (
                <span className="text-sm text-gray-400">Creating QR code…</span>
              )}
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#FF5722] hover:underline"
            >
              Open App Store page <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
