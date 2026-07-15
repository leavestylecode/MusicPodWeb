"use client";

import { useRef, type PointerEvent, type PropsWithChildren } from "react";

type SpotlightCardProps = PropsWithChildren<{
  className?: string;
  spotlightColor?: string;
}>;

// Interaction pattern adapted from React Bits' Spotlight Card component.
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.12)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType === "touch") return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    card.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <article
      className={`spotlight-card ${className}`}
      onPointerMove={handlePointerMove}
      ref={cardRef}
    >
      {children}
    </article>
  );
}
