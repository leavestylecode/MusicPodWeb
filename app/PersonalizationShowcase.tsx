"use client";

import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PersonalizationShowcaseProps = {
  combinationsLabel: string;
  paletteLabel: string;
  presetNames: readonly string[];
};

type ThemeStyle = CSSProperties & Record<`--${string}`, string>;

const finishes = [
  {
    id: "original",
    shell: "#000000",
    wheel: "#e8222b",
    center: "#000000",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#030a1a",
    screenGlow: "#2855af",
    icon: "/product/icons/theme.webp",
  },
  {
    id: "classic-silver",
    shell: "#c9cbcc",
    wheel: "#f4f4f2",
    center: "#c9cbcc",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#0d1114",
    screenGlow: "#b4bcc5",
    icon: "/product/icons/albums.webp",
  },
  {
    id: "classic-black",
    shell: "#1c1c1e",
    wheel: "#000000",
    center: "#1c1c1e",
    controls: "rgba(255, 255, 255, 0.92)",
    screenBase: "#16051f",
    screenGlow: "#752d9a",
    icon: "/product/icons/shuffle.webp",
  },
  {
    id: "classic-white",
    shell: "#f4f4f2",
    wheel: "#f4f4f2",
    center: "#f4f4f2",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#0d1114",
    screenGlow: "#b4bcc5",
    icon: "/product/icons/favorites.webp",
  },
  {
    id: "red",
    shell: "#e8222b",
    wheel: "#f4f4f2",
    center: "#e8222b",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#1f0508",
    screenGlow: "#db4254",
    icon: "/product/icons/favorites.webp",
  },
  {
    id: "orange",
    shell: "#f28d03",
    wheel: "#f4f4f2",
    center: "#f28d03",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#1a0c03",
    screenGlow: "#c5753f",
    icon: "/product/icons/playlists.webp",
  },
  {
    id: "yellow",
    shell: "#eaba00",
    wheel: "#f4f4f2",
    center: "#eaba00",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#1f1c05",
    screenGlow: "#dbcc42",
    icon: "/product/icons/albums.webp",
  },
  {
    id: "green",
    shell: "#00803d",
    wheel: "#f4f4f2",
    center: "#00803d",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#05140e",
    screenGlow: "#24c57d",
    icon: "/product/icons/theme.webp",
  },
  {
    id: "teal",
    shell: "#009e9e",
    wheel: "#f4f4f2",
    center: "#009e9e",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#02181f",
    screenGlow: "#2b96ba",
    icon: "/product/icons/shuffle.webp",
  },
  {
    id: "blue",
    shell: "#0082ce",
    wheel: "#f4f4f2",
    center: "#0082ce",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#030a1a",
    screenGlow: "#2855af",
    icon: "/product/icons/playlists.webp",
  },
  {
    id: "purple",
    shell: "#52388b",
    wheel: "#f4f4f2",
    center: "#52388b",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#16051f",
    screenGlow: "#752d9a",
    icon: "/product/icons/albums.webp",
  },
  {
    id: "pink",
    shell: "#cd2370",
    wheel: "#f4f4f2",
    center: "#cd2370",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#240a16",
    screenGlow: "#db8aaf",
    icon: "/product/icons/favorites.webp",
  },
] as const;

type Finish = (typeof finishes)[number];

function finishStyle(finish: Finish): ThemeStyle {
  return {
    "--pod-shell": finish.shell,
    "--pod-wheel": finish.wheel,
    "--pod-center": finish.center,
    "--pod-controls": finish.controls,
    "--pod-screen-base": finish.screenBase,
    "--pod-screen-glow": finish.screenGlow,
  };
}

function PodPreview({ finish }: { finish: Finish }) {
  return (
    <div className="personalization-device">
      <div className="personalization-screen">
        <span className="personalization-screen-glow" />
        <div className="personalization-icon-row">
          <Image alt="" height="72" src="/product/icons/favorites.webp" unoptimized width="72" />
          <Image alt="" className="personalization-icon-active" height="112" src={finish.icon} unoptimized width="112" />
          <Image alt="" height="72" src="/product/icons/playlists.webp" unoptimized width="72" />
        </div>
        <div className="personalization-page-dots"><i /><i /><i /></div>
      </div>

      <div className="personalization-wheel">
        <span className="personalization-menu">MENU</span>
        <span className="personalization-previous">◀◀</span>
        <span className="personalization-next">▶▶</span>
        <span className="personalization-play">▶Ⅱ</span>
        <i className="personalization-center" />
      </div>
    </div>
  );
}

export function PersonalizationShowcase({
  combinationsLabel,
  paletteLabel,
  presetNames,
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
                  <PodPreview finish={option} />
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
              type="button"
            >
              <span style={{ background: option.shell }}>
                <i style={{ background: option.wheel }} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
