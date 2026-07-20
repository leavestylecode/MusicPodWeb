"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type StrandsShowcaseProps = {
  ariaLabel: string;
  artist: string;
  track: string;
};

const AUTO_ROTATION_MS = 6500;

const songs = [
  {
    accent: "#ff493f",
    elapsed: "1:42",
    image: "/product/albums/neon.webp",
    objectPosition: "center 58%",
    progress: 0.43,
    remaining: "−2:16",
    strands: ["#ff493f", "#ffb23f", "#28c4df", "#e33de2"],
    title: null,
  },
  {
    accent: "#42bde8",
    elapsed: "0:58",
    image: "/product/albums/ocean.webp",
    objectPosition: "center",
    progress: 0.28,
    remaining: "−2:31",
    strands: ["#1e8ed1", "#42d2ef", "#9beaff", "#f1fbff"],
    title: "First Light",
  },
  {
    accent: "#e58a52",
    elapsed: "2:06",
    image: "/product/albums/desert.webp",
    objectPosition: "center",
    progress: 0.61,
    remaining: "−1:19",
    strands: ["#cc5f35", "#ff9860", "#ffc782", "#8794a4"],
    title: "After Rain",
  },
  {
    accent: "#ffc158",
    elapsed: "1:17",
    image: "/product/albums/light.webp",
    objectPosition: "center",
    progress: 0.35,
    remaining: "−2:25",
    strands: ["#f4a83c", "#ffd87e", "#48bdd8", "#28758f"],
    title: "Blue Hour",
  },
  {
    accent: "#df4cdd",
    elapsed: "2:24",
    image: "/product/albums/purple.webp",
    objectPosition: "center",
    progress: 0.52,
    remaining: "−2:11",
    strands: ["#d839d5", "#f078f3", "#8958e8", "#536ee7"],
    title: "Neon Moon",
  },
] as const;

type SongCoverStyle = CSSProperties & Record<"--strand-accent", string>;

function smootherStep(value: number) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function edgeTaper(value: number) {
  return smootherStep(value / 0.23) * smootherStep((1 - value) / 0.23);
}

function strandWave(index: number, value: number, clock: number) {
  const x = (value - 0.5) * 2;
  const phase = index * 2.05;
  const frequency = 4.25 + index * 0.8;
  const velocity = 1.55 + index * 0.95;
  return (
    Math.sin(x * frequency + clock * velocity + phase) * 0.62 +
    Math.sin(x * frequency * 1.17 - clock * velocity * 0.78 + phase * 1.7) * 0.4
  );
}

function mainWave(value: number, clock: number) {
  const x = (value - 0.5) * 2;
  return Math.sin(x * 4.3 + clock * 2.05) * 0.68 + Math.sin(x * 2.55 - clock * 1.35 + 0.8) * 0.32;
}

function StrandsMeter({ colors, progress }: { colors: readonly string[]; progress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let isVisible = false;
    let pageVisible = document.visibilityState === "visible";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawCurve = (wave: (value: number) => number, start: number, end: number) => {
      const inset = 9;
      const span = width - inset * 2;
      context.beginPath();
      for (let step = start; step <= end; step += 1) {
        const value = step / 120;
        const x = inset + span * value;
        const y = height / 2 + wave(value) * height * 0.205 * edgeTaper(value);
        if (step === start) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
    };

    const render = (timestamp: number) => {
      context.clearRect(0, 0, width, height);
      const clock = (motionQuery.matches ? 1.8 : timestamp / 1000) * 0.68;
      const inset = 9;

      context.lineCap = "round";
      context.lineJoin = "round";
      context.globalCompositeOperation = "lighter";

      colors.forEach((color, index) => {
        const gradient = context.createLinearGradient(inset, 0, width - inset, 0);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.15, color);
        gradient.addColorStop(0.85, color);
        gradient.addColorStop(1, "transparent");
        const wave = (value: number) => strandWave(index, value, clock) * 0.25 / 0.205;

        drawCurve(wave, 0, 120);
        context.strokeStyle = gradient;
        context.globalAlpha = 0.42;
        context.lineWidth = 5;
        context.shadowBlur = 12;
        context.shadowColor = color;
        context.stroke();

        drawCurve(wave, 0, 120);
        context.globalAlpha = 0.94;
        context.lineWidth = 1.25;
        context.shadowBlur = 4;
        context.stroke();
      });

      context.globalCompositeOperation = "source-over";
      context.shadowBlur = 0;
      const whiteWave = (value: number) => mainWave(value, clock) * 0.215 / 0.205;

      drawCurve(whiteWave, 0, 120);
      context.strokeStyle = "rgba(255,255,255,.32)";
      context.globalAlpha = 1;
      context.lineWidth = 1.35;
      context.stroke();

      const playedSteps = Math.round(progress * 120);
      drawCurve(whiteWave, 0, playedSteps);
      context.strokeStyle = "rgba(255,255,255,.98)";
      context.lineWidth = 1.55;
      context.stroke();

      const dotX = inset + (width - inset * 2) * progress;
      const dotY = height / 2 + whiteWave(progress) * height * 0.205 * edgeTaper(progress);
      context.beginPath();
      context.arc(dotX, dotY, 3.5, 0, Math.PI * 2);
      context.fillStyle = "white";
      context.fill();

      if (!motionQuery.matches && isVisible && pageVisible) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const redraw = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      render(performance.now());
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (motionQuery.matches || isVisible) redraw();
    });
    observer.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) redraw();
      else window.cancelAnimationFrame(frame);
    }, { rootMargin: "120px 0px" });
    visibilityObserver.observe(canvas);

    resize();
    render(0);

    const handleMotionChange = () => redraw();
    const handleVisibilityChange = () => {
      pageVisible = document.visibilityState === "visible";
      if (pageVisible && isVisible) redraw();
      else window.cancelAnimationFrame(frame);
    };
    motionQuery.addEventListener("change", handleMotionChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      visibilityObserver.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.cancelAnimationFrame(frame);
    };
  }, [colors, progress]);

  return <canvas aria-hidden="true" className="strands-meter" ref={canvasRef} />;
}

export function StrandsShowcase({ ariaLabel, artist, track }: StrandsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const activeSong = songs[activeIndex];
  const activeTitle = activeSong.title ?? track;
  const isAutoPaused = hasFocus || isHovered;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isAutoPaused || motionQuery.matches) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % songs.length);
    }, AUTO_ROTATION_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isAutoPaused]);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + songs.length) % songs.length);
  };

  return (
    <div
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="strands-showcase"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHasFocus(false);
      }}
      onFocusCapture={() => setHasFocus(true)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      role="group"
      tabIndex={0}
    >
      <div aria-hidden="true" className="strands-artwork-stack">
        {songs.map((song, index) => (
          <Image
            alt=""
            className="strands-artwork"
            data-active={index === activeIndex || undefined}
            fill
            key={song.image}
            sizes="(max-width: 760px) 100vw, 520px"
            src={song.image}
            style={{ objectPosition: song.objectPosition }}
            unoptimized
          />
        ))}
      </div>

      <span aria-hidden="true" className="strands-scrim" />

      <div aria-hidden="true" className="strands-track-count">
        <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
        <span>/</span>
        <span>{String(songs.length).padStart(2, "0")}</span>
      </div>

      <div aria-atomic="true" aria-live={isAutoPaused ? "polite" : "off"} className="strands-copy">
        <strong>{activeTitle}</strong>
        <span>{artist}</span>
      </div>

      <div className="strands-progress">
        <StrandsMeter colors={activeSong.strands} progress={activeSong.progress} />
        <div><span>{activeSong.elapsed}</span><span>{activeSong.remaining}</span></div>
      </div>

      <div aria-label={ariaLabel} className="strands-cover-picker" role="group">
        {songs.map((song, index) => {
          const title = song.title ?? track;
          const style = { "--strand-accent": song.accent } as SongCoverStyle;

          return (
            <button
              aria-label={`${title} · ${artist}`}
              aria-pressed={index === activeIndex}
              data-active={index === activeIndex || undefined}
              key={song.image}
              onClick={() => setActiveIndex(index)}
              style={style}
              type="button"
            >
              <Image alt="" fill sizes="60px" src={song.image} unoptimized />
            </button>
          );
        })}
      </div>
    </div>
  );
}
