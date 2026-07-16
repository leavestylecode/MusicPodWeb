"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type StrandsShowcaseProps = {
  ariaLabel: string;
  artist: string;
  track: string;
};

const strandColors = ["#ff493f", "#ffb23f", "#28c4df", "#e33de2"] as const;

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

function StrandsMeter() {
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

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawCurve = (
      wave: (value: number) => number,
      start: number,
      end: number,
    ) => {
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
      const progress = 0.43;

      context.lineCap = "round";
      context.lineJoin = "round";
      context.globalCompositeOperation = "lighter";

      strandColors.forEach((color, index) => {
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
      context.strokeStyle = "rgba(255,255,255,.34)";
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

      if (!motionQuery.matches) frame = window.requestAnimationFrame(render);
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (motionQuery.matches) render(0);
    });
    observer.observe(canvas);
    resize();
    render(0);

    const handleMotionChange = () => {
      window.cancelAnimationFrame(frame);
      render(0);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas aria-hidden="true" className="strands-meter" ref={canvasRef} />;
}

export function StrandsShowcase({ ariaLabel, artist, track }: StrandsShowcaseProps) {
  return (
    <div aria-label={ariaLabel} className="strands-showcase" role="img">
      <Image
        alt=""
        className="strands-artwork"
        fill
        sizes="(max-width: 760px) 86vw, 520px"
        src="/product/albums/neon.webp"
        unoptimized
      />
      <span aria-hidden="true" className="strands-scrim" />
      <div aria-hidden="true" className="strands-track-count"><strong>3</strong><span>/</span><span>12</span></div>
      <div className="strands-info-module">
        <strong>{track}<span> · </span>{artist}</strong>
        <div className="strands-progress">
          <StrandsMeter />
          <div><span>1:42</span><span>−2:16</span></div>
        </div>
      </div>
    </div>
  );
}
