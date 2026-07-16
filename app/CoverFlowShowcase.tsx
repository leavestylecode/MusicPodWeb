"use client";

import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getCoverFlowGestureIntent,
  getCoverFlowSwipeDirection,
  type CoverFlowGestureIntent,
} from "../lib/cover-flow-gesture";

const albums = [
  {
    artist: "MusicPod Sessions",
    colors: ["#3a91bc", "#d9f6ff", "#17628e"],
    image: "/product/albums/ocean.webp",
    name: "Open Water",
    tracks: ["First Light", "Open Water", "Blue Horizon"],
  },
  {
    artist: "MusicPod Sessions",
    colors: ["#b8562f", "#df9668", "#4a5363"],
    image: "/product/albums/desert.webp",
    name: "Sirocco",
    tracks: ["Copper Sky", "Sirocco", "After Rain"],
  },
  {
    artist: "MusicPod Sessions",
    colors: ["#e93032", "#1eb9dd", "#10141b"],
    image: "/product/albums/neon.webp",
    name: "Midnight Memory",
    tracks: ["Night Signal", "Midnight Memory", "Last Train"],
  },
  {
    artist: "MusicPod Sessions",
    colors: ["#d5953d", "#1e647d", "#0c2235"],
    image: "/product/albums/light.webp",
    name: "Light Trails",
    tracks: ["Slow Exposure", "Light Trails", "Blue Hour"],
  },
  {
    artist: "MusicPod Sessions",
    colors: ["#dc2fc4", "#8f48e8", "#121422"],
    image: "/product/albums/purple.webp",
    name: "Afterglow",
    tracks: ["Violet Air", "Afterglow", "Neon Moon"],
  },
] as const;

type CoverFlowShowcaseProps = {
  groupLabel: string;
  nextLabel: string;
  previousLabel: string;
  selectTemplate: string;
};

type CoverStyle = CSSProperties & {
  "--cover-offset": number;
};

type ActivePointer = {
  id: number;
  intent: CoverFlowGestureIntent;
  startX: number;
  startY: number;
};

function wrappedOffset(index: number, activeIndex: number) {
  const direct = index - activeIndex;
  if (direct > albums.length / 2) return direct - albums.length;
  if (direct < -albums.length / 2) return direct + albums.length;
  return direct;
}

export function CoverFlowShowcase({
  groupLabel,
  nextLabel,
  previousLabel,
  selectTemplate,
}: CoverFlowShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [flipped, setFlipped] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activePointer = useRef<ActivePointer | null>(null);
  const suppressClick = useRef(false);
  const activeAlbum = albums[activeIndex];

  const move = useCallback((direction: number) => {
    setFlipped(false);
    setActiveIndex((current) => (current + direction + albums.length) % albums.length);
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);
    return () => motionQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (focusWithin || hovered || flipped || reducedMotion) return;

    const timer = window.setInterval(() => move(1), 3000);
    return () => window.clearInterval(timer);
  }, [flipped, focusWithin, hovered, move, reducedMotion]);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;

    activePointer.current = {
      id: event.pointerId,
      intent: "pending",
      startX: event.clientX,
      startY: event.clientY,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = activePointer.current;
    if (!pointer || pointer.id !== event.pointerId || pointer.intent === "vertical") return;

    const deltaX = event.clientX - pointer.startX;
    const deltaY = event.clientY - pointer.startY;

    if (pointer.intent === "pending") {
      const intent = getCoverFlowGestureIntent(deltaX, deltaY);
      if (intent === "pending") return;

      pointer.intent = intent;
      if (intent === "vertical") return;

      event.currentTarget.setPointerCapture(event.pointerId);
    }
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = activePointer.current;
    if (!pointer || pointer.id !== event.pointerId) return;

    activePointer.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (pointer.intent !== "horizontal") return;
    const direction = getCoverFlowSwipeDirection(event.clientX - pointer.startX);
    if (direction === 0) return;

    suppressClick.current = true;
    move(direction);
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);
  }

  const backdropStyle = {
    "--flow-accent": activeAlbum.colors[0],
    "--flow-glow": activeAlbum.colors[1],
    "--flow-base": activeAlbum.colors[2],
  } as CSSProperties;

  return (
    <div
      aria-label={groupLabel}
      className="cover-flow-showcase"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false);
      }}
      onFocus={() => setFocusWithin(true)}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped((current) => !current);
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerCancel={(event) => {
        activePointer.current = null;
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="group"
      style={backdropStyle}
      tabIndex={0}
    >
      <div aria-hidden="true" className="cover-flow-aura" />

      <div className="cover-flow-stage">
        {albums.map((album, index) => {
          const offset = wrappedOffset(index, activeIndex);
          const clamped = Math.max(-1, Math.min(1, offset));
          const scale = Math.max(1 - Math.abs(clamped) * 0.16, 0.84);
          const x = (clamped * 0.31 + offset * 0.26) * 222;
          const coverStyle = {
            "--cover-offset": offset,
            opacity: Math.abs(offset) > 2 ? 0 : 1,
            transform: `translate3d(${x}px, 0, ${-Math.abs(offset) * 38}px) rotateY(${-clamped * 58}deg) scale(${scale})`,
            zIndex: 20 - Math.abs(offset),
          } as CoverStyle;
          const isActive = index === activeIndex;

          return (
            <button
              aria-label={selectTemplate.replace("{item}", album.name)}
              aria-pressed={isActive}
              className="cover-flow-cover"
              data-active={isActive || undefined}
              data-flipped={isActive && flipped ? true : undefined}
              key={album.image}
              onClick={() => {
                if (suppressClick.current) return;
                if (isActive) setFlipped((current) => !current);
                else {
                  setFlipped(false);
                  setActiveIndex(index);
                }
              }}
              style={coverStyle}
              type="button"
            >
              <span className="cover-flow-card">
                <span className="cover-flow-front">
                  <Image alt="" fill sizes="222px" src={album.image} unoptimized />
                  <span aria-hidden="true" className="cover-flow-sheen" />
                </span>
                <span className="cover-flow-back">
                  <strong>{album.name}</strong>
                  <span>{album.artist}</span>
                  <ol>
                    {album.tracks.map((track, trackIndex) => (
                      <li key={track}><i>{String(trackIndex + 1).padStart(2, "0")}</i>{track}</li>
                    ))}
                  </ol>
                </span>
              </span>
              <span aria-hidden="true" className="cover-flow-reflection">
                <Image alt="" fill sizes="222px" src={album.image} unoptimized />
              </span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="cover-flow-caption">
        <button aria-label={previousLabel} onClick={() => move(-1)} type="button">‹</button>
        <div><strong>{activeAlbum.name}</strong><span>{activeAlbum.artist}</span></div>
        <button aria-label={nextLabel} onClick={() => move(1)} type="button">›</button>
      </div>

      <div aria-hidden="true" className="cover-flow-dots">
        {albums.map((album, index) => <i className={index === activeIndex ? "active" : ""} key={album.name} />)}
      </div>
    </div>
  );
}
