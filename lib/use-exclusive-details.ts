"use client";

import { useEffect, type RefObject } from "react";

const detailsOpenEvent = "musicpod-details-open";

export function useExclusiveDetails(ref: RefObject<HTMLDetailsElement | null>) {
  useEffect(() => {
    const details = ref.current;
    if (!details) return;

    const close = () => details.removeAttribute("open");
    const handleToggle = () => {
      if (details.open) {
        document.dispatchEvent(new CustomEvent(detailsOpenEvent, { detail: details }));
      }
    };
    const handleAnotherDetails = (event: Event) => {
      if ((event as CustomEvent<HTMLDetailsElement>).detail !== details) close();
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (details.open && event.target instanceof Node && !details.contains(event.target)) close();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !details.open) return;
      close();
      details.querySelector<HTMLElement>("summary")?.focus();
    };

    details.addEventListener("toggle", handleToggle);
    document.addEventListener(detailsOpenEvent, handleAnotherDetails);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      details.removeEventListener("toggle", handleToggle);
      document.removeEventListener(detailsOpenEvent, handleAnotherDetails);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref]);
}
