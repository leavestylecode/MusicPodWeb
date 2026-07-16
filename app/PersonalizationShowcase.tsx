"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useState } from "react";

type PersonalizationShowcaseProps = {
  combinationsLabel: string;
  paletteLabel: string;
  presetNames: [string, string, string, string];
};

type ThemeStyle = CSSProperties & Record<`--${string}`, string>;

const podColors = [
  "#e8222b",
  "#f28d03",
  "#eaba00",
  "#00803d",
  "#009e9e",
  "#0082ce",
  "#52388b",
  "#cd2370",
  "#f4f4f2",
  "#c9cbcc",
  "#1c1c1e",
  "#000000",
] as const;

const finishes = [
  {
    id: "original",
    shell: "#000000",
    shellHighlight: "#26262a",
    shellShadow: "#050506",
    wheel: "#e8222b",
    wheelHighlight: "#f13740",
    wheelShadow: "#cf1720",
    center: "#000000",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#030a1a",
    screenGlow: "#2855af",
    icon: "/product/icons/theme.webp",
  },
  {
    id: "silver",
    shell: "#c9cbcc",
    shellHighlight: "#f1f2f2",
    shellShadow: "#aeb0b2",
    wheel: "#f4f4f2",
    wheelHighlight: "#ffffff",
    wheelShadow: "#dededb",
    center: "#c9cbcc",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#0d1114",
    screenGlow: "#b4bcc5",
    icon: "/product/icons/albums.webp",
  },
  {
    id: "blue",
    shell: "#0082ce",
    shellHighlight: "#169be2",
    shellShadow: "#006baa",
    wheel: "#f4f4f2",
    wheelHighlight: "#ffffff",
    wheelShadow: "#dededb",
    center: "#0082ce",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#02181f",
    screenGlow: "#2b96ba",
    icon: "/product/icons/playlists.webp",
  },
  {
    id: "pink",
    shell: "#cd2370",
    shellHighlight: "#e33e87",
    shellShadow: "#ac1458",
    wheel: "#f4f4f2",
    wheelHighlight: "#ffffff",
    wheelShadow: "#dededb",
    center: "#cd2370",
    controls: "rgba(0, 0, 0, 0.78)",
    screenBase: "#240a16",
    screenGlow: "#db8aaf",
    icon: "/product/icons/favorites.webp",
  },
] as const;

export function PersonalizationShowcase({
  combinationsLabel,
  paletteLabel,
  presetNames,
}: PersonalizationShowcaseProps) {
  const [selected, setSelected] = useState(0);
  const finish = finishes[selected];
  const style = {
    "--pod-shell": finish.shell,
    "--pod-shell-highlight": finish.shellHighlight,
    "--pod-shell-shadow": finish.shellShadow,
    "--pod-wheel": finish.wheel,
    "--pod-wheel-highlight": finish.wheelHighlight,
    "--pod-wheel-shadow": finish.wheelShadow,
    "--pod-center": finish.center,
    "--pod-controls": finish.controls,
    "--pod-screen-base": finish.screenBase,
    "--pod-screen-glow": finish.screenGlow,
  } as ThemeStyle;

  return (
    <div className="personalization-showcase reveal" style={style}>
      <div aria-hidden="true" className="personalization-device-stage">
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
      </div>

      <div className="personalization-controls">
        <div className="personalization-control-heading">
          <span>{combinationsLabel}</span>
          <strong aria-live="polite">{presetNames[selected]}</strong>
        </div>

        <div className="finish-options">
          {finishes.map((option, index) => (
            <button
              aria-label={presetNames[index]}
              aria-pressed={selected === index}
              className={selected === index ? "is-selected" : undefined}
              key={option.id}
              onClick={() => setSelected(index)}
              type="button"
            >
              <span style={{ background: option.shell }}>
                <i style={{ background: option.wheel }} />
              </span>
            </button>
          ))}
        </div>

        <div aria-label={paletteLabel} className="pod-color-spectrum" role="img">
          {podColors.map((color) => <i aria-hidden="true" key={color} style={{ background: color }} />)}
        </div>
      </div>
    </div>
  );
}
