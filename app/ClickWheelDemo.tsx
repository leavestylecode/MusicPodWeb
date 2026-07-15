"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { Messages } from "../lib/dictionaries";

const itemIcons = [
  "/product/icons/favorites.webp",
  "/product/icons/playlists.webp",
  "/product/icons/albums.webp",
  "/product/icons/shuffle.webp",
  "/product/icons/theme.webp",
] as const;

function pointerAngle(event: PointerEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  return Math.atan2(
    event.clientY - (rect.top + rect.height / 2),
    event.clientX - (rect.left + rect.width / 2),
  );
}

function format(template: string, item: string) {
  return template.replace("{item}", item);
}

export function ClickWheelDemo({ messages }: { messages: Messages["wheel"] }) {
  const items = messages.items.map((label, index) => ({ label, icon: itemIcons[index] }));
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(messages.help);
  const lastAngle = useRef<number | null>(null);
  const travel = useRef(0);

  const move = (direction: number) => {
    setIndex((current) => {
      const next = (current + direction + items.length) % items.length;
      setMessage(items[next].label);
      return next;
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    lastAngle.current = pointerAngle(event);
    travel.current = 0;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (lastAngle.current === null || !event.currentTarget.hasPointerCapture(event.pointerId)) return;

    const angle = pointerAngle(event);
    let delta = angle - lastAngle.current;
    if (delta > Math.PI) delta -= Math.PI * 2;
    if (delta < -Math.PI) delta += Math.PI * 2;

    travel.current += delta;
    lastAngle.current = angle;

    if (Math.abs(travel.current) > 0.24) {
      move(travel.current > 0 ? 1 : -1);
      travel.current = 0;
    }
  };

  const releasePointer = () => {
    lastAngle.current = null;
    travel.current = 0;
  };

  const selectCurrent = () => setMessage(format(messages.selected, items[index].label));
  const playCurrent = () => setMessage(format(messages.playing, items[index].label));

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
      move(1);
    }
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      move(-1);
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectCurrent();
    }
  };

  return (
    <div className="wheel-demo">
      <div className="demo-screen">
        <div className="demo-carousel" aria-live="polite">
          <Image src={items[index].icon} alt="" width="148" height="148" unoptimized />
          <div className="demo-side-icon demo-side-left">
            <Image src={items[(index + items.length - 1) % items.length].icon} alt="" width="148" height="148" unoptimized />
          </div>
          <div className="demo-side-icon demo-side-right">
            <Image src={items[(index + 1) % items.length].icon} alt="" width="148" height="148" unoptimized />
          </div>
        </div>
        <strong>{items[index].label}</strong>
        <div className="demo-dots" aria-hidden="true">
          {items.map((item, dotIndex) => <i className={dotIndex === index ? "active" : ""} key={item.label} />)}
        </div>
      </div>

      <div
        aria-describedby="wheel-demo-help"
        aria-label={messages.group}
        className="click-wheel"
        onKeyDown={handleKeyDown}
        onPointerCancel={releasePointer}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={releasePointer}
        role="group"
        tabIndex={0}
      >
        <button
          aria-label={messages.menu}
          className="wheel-control wheel-menu"
          onClick={() => { setIndex(0); setMessage(items[0].label); }}
          onPointerDown={(event) => event.stopPropagation()}
          type="button"
        >MENU</button>
        <button aria-label={messages.previous} className="wheel-control wheel-previous" onClick={() => move(-1)} onPointerDown={(event) => event.stopPropagation()} type="button">◀◀</button>
        <button aria-label={messages.next} className="wheel-control wheel-next" onClick={() => move(1)} onPointerDown={(event) => event.stopPropagation()} type="button">▶▶</button>
        <button aria-label={messages.play} className="wheel-control wheel-play" onClick={playCurrent} onPointerDown={(event) => event.stopPropagation()} type="button">▶Ⅱ</button>
        <button aria-label={format(messages.select, items[index].label)} className="wheel-center" onClick={selectCurrent} onPointerDown={(event) => event.stopPropagation()} type="button" />
      </div>

      <p className="wheel-demo-help" id="wheel-demo-help" aria-live="polite">{message}</p>
    </div>
  );
}
