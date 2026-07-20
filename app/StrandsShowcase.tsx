"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useState } from "react";

type StrandsShowcaseProps = {
  ariaLabel: string;
  artist: string;
  track: string;
};

const songs = [
  {
    accent: "#ff493f",
    image: "/product/albums/neon.webp",
    objectPosition: "center 58%",
    title: null,
  },
  {
    accent: "#42bde8",
    image: "/product/albums/ocean.webp",
    objectPosition: "center",
    title: "First Light",
  },
  {
    accent: "#e58a52",
    image: "/product/albums/desert.webp",
    objectPosition: "center",
    title: "After Rain",
  },
  {
    accent: "#ffc158",
    image: "/product/albums/light.webp",
    objectPosition: "center",
    title: "Blue Hour",
  },
  {
    accent: "#df4cdd",
    image: "/product/albums/purple.webp",
    objectPosition: "center",
    title: "Neon Moon",
  },
] as const;

type SongCoverStyle = CSSProperties & Record<"--strand-accent", string>;

export function StrandsShowcase({ ariaLabel, artist, track }: StrandsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSong = songs[activeIndex];
  const activeTitle = activeSong.title ?? track;

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + songs.length) % songs.length);
  };

  return (
    <div
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="strands-showcase"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
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

      <div aria-atomic="true" aria-live="polite" className="strands-copy">
        <strong>{activeTitle}</strong>
        <span>{artist}</span>
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
