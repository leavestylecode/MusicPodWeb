"use client";

import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PersonalizationShowcaseProps = {
  artist: string;
  combinationsLabel: string;
  nowPlayingLabel: string;
  paletteLabel: string;
  presetNames: readonly string[];
  track: string;
};

type ThemeStyle = CSSProperties & Record<`--${string}`, string>;

const navigationIcons = [
  "/product/icons/playlists.webp",
  "/product/icons/favorites.webp",
  "/product/icons/albums.webp",
  "/product/icons/shuffle.webp",
  "/product/icons/theme.webp",
  "/product/icons/now-playing.webp",
] as const;

const finishes = [
  {
    id: "original",
    accent: "#e8222b",
    accentSoft: "#ff6571",
    icon: "/product/icons/theme.webp",
  },
  {
    id: "classic-silver",
    accent: "#c9cbcc",
    accentSoft: "#f3f5f6",
    icon: "/product/icons/albums.webp",
  },
  {
    id: "classic-black",
    accent: "#1c1c1e",
    accentSoft: "#696970",
    icon: "/product/icons/shuffle.webp",
  },
  {
    id: "classic-white",
    accent: "#f4f4f2",
    accentSoft: "#ffffff",
    icon: "/product/icons/favorites.webp",
  },
  {
    id: "red",
    accent: "#e8222b",
    accentSoft: "#ff6571",
    icon: "/product/icons/favorites.webp",
  },
  {
    id: "orange",
    accent: "#f28d03",
    accentSoft: "#ffbe55",
    icon: "/product/icons/playlists.webp",
  },
  {
    id: "yellow",
    accent: "#eaba00",
    accentSoft: "#ffe45f",
    icon: "/product/icons/albums.webp",
  },
  {
    id: "green",
    accent: "#00803d",
    accentSoft: "#35d07e",
    icon: "/product/icons/theme.webp",
  },
  {
    id: "teal",
    accent: "#009e9e",
    accentSoft: "#41d6d6",
    icon: "/product/icons/shuffle.webp",
  },
  {
    id: "blue",
    accent: "#0082ce",
    accentSoft: "#43b9ff",
    icon: "/product/icons/playlists.webp",
  },
  {
    id: "purple",
    accent: "#52388b",
    accentSoft: "#9577d7",
    icon: "/product/icons/albums.webp",
  },
  {
    id: "pink",
    accent: "#cd2370",
    accentSoft: "#ff74b2",
    icon: "/product/icons/favorites.webp",
  },
] as const;

type Finish = (typeof finishes)[number];

function finishStyle(finish: Finish): ThemeStyle {
  return {
    "--pod-accent": finish.accent,
    "--pod-accent-soft": finish.accentSoft,
  };
}

function PodPreview({
  artist,
  finish,
  nowPlayingLabel,
  track,
}: {
  artist: string;
  finish: Finish;
  nowPlayingLabel: string;
  track: string;
}) {
  const activeIconIndex = navigationIcons.indexOf(finish.icon);
  const leftIcon = navigationIcons[(activeIconIndex - 1 + navigationIcons.length) % navigationIcons.length];
  const rightIcon = navigationIcons[(activeIconIndex + 1) % navigationIcons.length];

  return (
    <div className="personalization-device">
      <div className="personalization-app-screen">
        <div className="personalization-now-playing-card">
          <div className="personalization-icon-row">
            <Image alt="" className="personalization-icon-side personalization-icon-left" height="72" src={leftIcon} unoptimized width="72" />
            <Image alt="" className="personalization-icon-active" height="112" src={finish.icon} unoptimized width="112" />
            <Image alt="" className="personalization-icon-side personalization-icon-right" height="72" src={rightIcon} unoptimized width="72" />
          </div>

          <strong className="personalization-screen-title">{nowPlayingLabel}</strong>
          <div className="personalization-page-dots" aria-hidden="true"><i /><i /><i /><i /><i /></div>

          <div className="personalization-track-card">
            <Image alt="" className="personalization-track-art" height="72" src="/product/albums/neon.webp" unoptimized width="72" />
            <div className="personalization-track-copy">
              <strong>{track}</strong>
              <span>{artist}</span>
              <i aria-hidden="true"><span /></i>
              <small><span>1:42</span><span>−2:16</span></small>
            </div>
            <Image alt="" className="personalization-vinyl" height="72" src="/product/textures/vinyl.webp" unoptimized width="72" />
          </div>
        </div>

        <div className="personalization-wheel">
          <span className="personalization-menu">MENU</span>
          <span className="personalization-previous">◀◀</span>
          <span className="personalization-next">▶▶</span>
          <span className="personalization-play">Ⅱ</span>
          <i className="personalization-center" />
        </div>
      </div>

      <Image
        alt=""
        aria-hidden="true"
        className="personalization-device-frame"
        height="1560"
        priority={false}
        src="/product/iphone-frame.png"
        unoptimized
        width="877"
      />
    </div>
  );
}

export function PersonalizationShowcase({
  artist,
  combinationsLabel,
  nowPlayingLabel,
  paletteLabel,
  presetNames,
  track,
}: PersonalizationShowcaseProps) {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const pointerStart = useRef<{ id: number; x: number } | null>(null);
  const total = finishes.length;
  const finish = finishes[selected];

  const goTo = (index: number) => setSelected((index + total) % total);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setSelected((current) => (current + 1) % total);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, total]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    setPaused(true);
    pointerStart.current = { id: event.pointerId, x: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    if (!start || start.id !== event.pointerId) return;
    const distance = event.clientX - start.x;
    pointerStart.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (Math.abs(distance) > 42) goTo(selected + (distance < 0 ? 1 : -1));
    setPaused(false);
  };

  const previousIndex = (selected - 1 + total) % total;
  const nextIndex = (selected + 1) % total;

  return (
    <div className="personalization-showcase reveal" style={finishStyle(finish)}>
      <div
        aria-label={combinationsLabel}
        aria-roledescription="carousel"
        className="personalization-carousel"
        onBlurCapture={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(previousIndex);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(nextIndex);
          }
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        tabIndex={0}
      >
        <div
          className="personalization-carousel-viewport"
          onPointerCancel={() => {
            pointerStart.current = null;
            setPaused(false);
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div
            className="personalization-carousel-track"
            style={{ transform: `translate3d(-${selected * 100}%, 0, 0)` }}
          >
            {finishes.map((option, index) => (
              <div
                aria-hidden={selected !== index}
                aria-label={`${presetNames[index]} · ${index + 1}/${total}`}
                aria-roledescription="slide"
                className="personalization-slide"
                key={option.id}
                role="group"
                style={finishStyle(option)}
              >
                <div aria-hidden="true" className="personalization-device-stage">
                  <PodPreview artist={artist} finish={option} nowPlayingLabel={nowPlayingLabel} track={track} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label={`${combinationsLabel}: ${presetNames[previousIndex]}`}
          className="personalization-carousel-arrow is-previous"
          onClick={() => goTo(previousIndex)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          aria-label={`${combinationsLabel}: ${presetNames[nextIndex]}`}
          className="personalization-carousel-arrow is-next"
          onClick={() => goTo(nextIndex)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="personalization-controls">
        <div className="personalization-control-heading">
          <span>{combinationsLabel}</span>
          <div>
            <strong aria-atomic="true" aria-live={paused ? "polite" : "off"}>{presetNames[selected]}</strong>
            <em>{String(selected + 1).padStart(2, "0")} / {total}</em>
          </div>
        </div>

        <div aria-label={paletteLabel} className="finish-options" role="group">
          {finishes.map((option, index) => (
            <button
              aria-label={presetNames[index]}
              aria-pressed={selected === index}
              className={selected === index ? "is-selected" : undefined}
              key={option.id}
              onClick={() => goTo(index)}
              style={finishStyle(option)}
              type="button"
            >
              <span>
                <i />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
