"use client";
import { useEffect } from "react";

/** Keep keyboard focus inside an open download dialog and restore its trigger. */
export default function useDialogAccessibility(open: boolean, titleId: string) {
  useEffect(() => {
    if (!open) return;
    const dialog = document.querySelector<HTMLElement>(`[aria-labelledby="${titleId}"]`);
    if (!dialog) return;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => Array.from(dialog.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]'));
    focusables()[0]?.focus();
    const trap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const elements = focusables();
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    dialog.addEventListener("keydown", trap);
    return () => { dialog.removeEventListener("keydown", trap); document.body.style.overflow = overflow; trigger?.focus(); };
  }, [open, titleId]);
}
