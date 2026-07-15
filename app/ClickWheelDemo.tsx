"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";

const items = [
  { label: "Favorite Songs", icon: "/product/icons/favorites.webp" },
  { label: "Playlists", icon: "/product/icons/playlists.webp" },
  { label: "Albums", icon: "/product/icons/albums.webp" },
  { label: "Shuffle", icon: "/product/icons/shuffle.webp" },
  { label: "Theme", icon: "/product/icons/theme.webp" },
];

function pointerAngle(event: PointerEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  return Math.atan2(
    event.clientY - (rect.top + rect.height / 2),
    event.clientX - (rect.left + rect.width / 2),
  );
}

export function ClickWheelDemo() {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("沿转盘滑动，或使用方向键");
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
      setMessage(`已选择 ${items[index].label}`);
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
        className="click-wheel"
        role="group"
        aria-label="MusicPod 点按式转盘演示"
        aria-describedby="wheel-demo-help"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={releasePointer}
        onPointerCancel={releasePointer}
      >
        <button
          className="wheel-control wheel-menu"
          type="button"
          aria-label="返回第一个项目"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => { setIndex(0); setMessage(items[0].label); }}
        >MENU</button>
        <button
          className="wheel-control wheel-previous"
          type="button"
          aria-label="上一个项目"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => move(-1)}
        >◀◀</button>
        <button
          className="wheel-control wheel-next"
          type="button"
          aria-label="下一个项目"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => move(1)}
        >▶▶</button>
        <button
          className="wheel-control wheel-play"
          type="button"
          aria-label="播放所选项目"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => setMessage(`正在播放 ${items[index].label}`)}
        >▶Ⅱ</button>
        <button
          className="wheel-center"
          type="button"
          aria-label={`选择 ${items[index].label}`}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => setMessage(`已选择 ${items[index].label}`)}
        />
      </div>

      <p className="wheel-demo-help" id="wheel-demo-help" aria-live="polite">{message}</p>
    </div>
  );
}
