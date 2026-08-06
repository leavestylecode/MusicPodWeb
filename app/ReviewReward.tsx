"use client";

import Image from "next/image";
import { type DragEvent, useEffect, useRef, useState } from "react";
import type { RewardMessages } from "../lib/reward-dictionaries";
import { detectSelectedStarsFromPixels } from "../lib/reward-star-detection.mjs";

type Reward = {
  code: string;
  redemptionUrl: string;
};

type Status = "idle" | "checking" | "success" | "error";

const maxFileSize = 15 * 1024 * 1024;

function detectSelectedStars(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return 0;
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  return detectSelectedStarsFromPixels(pixels, canvas.width, canvas.height);
}

async function imageCanvas(file: File) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = document.createElement("img");
    image.src = objectUrl;
    await image.decode();

    const scale = Math.min(1, 1280 / image.naturalWidth);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("canvas_unavailable");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function highContrastTop(canvas: HTMLCanvasElement) {
  const crop = document.createElement("canvas");
  crop.width = canvas.width;
  crop.height = Math.max(1, Math.round(canvas.height * 0.58));
  const context = crop.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("canvas_unavailable");
  context.drawImage(canvas, 0, 0, crop.width, crop.height, 0, 0, crop.width, crop.height);

  const image = context.getImageData(0, 0, crop.width, crop.height);
  for (let offset = 0; offset < image.data.length; offset += 4) {
    const luminance = image.data[offset] * 0.2126 + image.data[offset + 1] * 0.7152 + image.data[offset + 2] * 0.0722;
    const value = luminance >= 118 ? 0 : 255;
    image.data[offset] = value;
    image.data[offset + 1] = value;
    image.data[offset + 2] = value;
  }
  context.putImageData(image, 0, 0);
  return crop;
}

function containsMusicPod(text: string) {
  const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized.includes("musicpod") || normalized.includes("musicp0d") || normalized.includes("rnusicpod");
}

async function recognizeProductName(canvas: HTMLCanvasElement, onProgress: (value: number) => void) {
  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("eng", 1, {
    logger(message) {
      if (message.status === "recognizing text") onProgress(0.26 + message.progress * 0.68);
    },
  });

  try {
    const result = await worker.recognize(highContrastTop(canvas));
    return containsMusicPod(result.data.text);
  } finally {
    await worker.terminate();
  }
}

async function sha256(file: File) {
  const digest = await crypto.subtle.digest("SHA-256", await file.arrayBuffer());
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function ReviewReward({ messages }: { messages: RewardMessages }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef("");
  const dragDepthRef = useRef(0);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [reward, setReward] = useState<Reward | null>(null);
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => () => {
    if (previewRef.current) URL.revokeObjectURL(previewRef.current);
  }, []);

  const selectFile = (nextFile?: File) => {
    dragDepthRef.current = 0;
    setIsDragging(false);
    if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    previewRef.current = "";
    setPreview("");
    setError("");
    setReward(null);
    setCopied(false);
    setProgress(0);

    if (!nextFile || !nextFile.type.startsWith("image/")) {
      setFile(null);
      setStatus("error");
      setError(messages.invalidFile);
      return;
    }
    if (nextFile.size > maxFileSize) {
      setFile(null);
      setStatus("error");
      setError(messages.tooLarge);
      return;
    }

    setFile(nextFile);
    previewRef.current = URL.createObjectURL(nextFile);
    setPreview(previewRef.current);
    setStatus("idle");
  };

  const dragEnter = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    dragDepthRef.current += 1;
    setIsDragging(true);
  };

  const dragLeave = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) setIsDragging(false);
  };

  const dragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const dropFile = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    selectFile(event.dataTransfer.files[0]);
  };

  const clearFile = () => {
    if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    previewRef.current = "";
    if (inputRef.current) inputRef.current.value = "";
    dragDepthRef.current = 0;
    setFile(null);
    setPreview("");
    setStatus("idle");
    setProgress(0);
    setError("");
    setReward(null);
    setCopied(false);
    setIsDragging(false);
  };

  const checkScreenshot = async () => {
    if (!file || status === "checking") return;
    setStatus("checking");
    setError("");
    setProgress(0.04);

    try {
      const [canvas, proofHash] = await Promise.all([imageCanvas(file), sha256(file)]);
      setProgress(0.16);

      if (detectSelectedStars(canvas) !== 5) {
        setStatus("error");
        setError(messages.validationFailed);
        return;
      }

      setProgress(0.25);
      if (!await recognizeProductName(canvas, setProgress)) {
        setStatus("error");
        setError(messages.validationFailed);
        return;
      }

      setProgress(0.96);
      const response = await fetch("/api/reward/claim", {
        body: JSON.stringify({ proofHash }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload = await response.json() as Reward & { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(payload.error === "codes_unavailable" ? messages.codesUnavailable : messages.serviceUnavailable);
        return;
      }

      setProgress(1);
      setReward(payload);
      setStatus("success");
    } catch (cause) {
      console.error("Screenshot recognition failed", cause);
      setStatus("error");
      setError(messages.serviceUnavailable);
    }
  };

  const copyRedemptionLink = async () => {
    if (!reward) return;
    await navigator.clipboard.writeText(reward.redemptionUrl);
    setCopied(true);
  };

  if (status === "success" && reward) {
    return (
      <section className="reward-result" aria-live="polite">
        <div className="reward-result-mark" aria-hidden="true">✓</div>
        <h2>{messages.success}</h2>
        <p>{messages.successBody}</p>
        <div className="reward-code-block">
          <span>{messages.codeLabel}</span>
          <a href={reward.redemptionUrl} rel="external noopener" target="_blank">
            {reward.redemptionUrl}<span aria-hidden="true">↗</span>
          </a>
          <button type="button" onClick={copyRedemptionLink}>{copied ? messages.copied : messages.copy}</button>
        </div>
        <a
          className="reward-primary-button"
          href={reward.redemptionUrl}
          rel="external noopener"
          target="_blank"
        >
          {messages.redeem}<span aria-hidden="true">↗</span>
        </a>
        <button className="reward-retry-button" type="button" onClick={clearFile}>
          {messages.retry}
        </button>
      </section>
    );
  }

  return (
    <section aria-label={messages.uploadTitle} className="reward-upload-card">
      <input
        accept="image/*"
        className="reward-file-input"
        id="reward-screenshot"
        onChange={(event) => selectFile(event.target.files?.[0])}
        ref={inputRef}
        type="file"
      />

      {preview ? (
        <div className="reward-preview">
          <Image alt="" fill sizes="(max-width: 700px) 88vw, 520px" src={preview} unoptimized />
        </div>
      ) : (
        <label
          className={`reward-dropzone${isDragging ? " is-dragging" : ""}`}
          htmlFor="reward-screenshot"
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDragOver={dragOver}
          onDrop={dropFile}
        >
          <span className="reward-upload-icon" aria-hidden="true">↑</span>
          <strong>{messages.choose}</strong>
          <small>PNG · JPG · HEIC</small>
        </label>
      )}

      <p className="reward-local-note"><span aria-hidden="true">●</span>{messages.localOnly}</p>

      {error ? <p className="reward-error" role="alert">{error}</p> : null}

      <div className="reward-upload-actions">
        {file ? (
          <button className="reward-secondary-button" disabled={status === "checking"} onClick={clearFile} type="button">
            {messages.clear}
          </button>
        ) : null}
        <button className="reward-primary-button" disabled={!file || status === "checking"} onClick={checkScreenshot} type="button">
          {status === "checking" ? messages.analyzing : messages.analyze}
        </button>
      </div>

      {status === "checking" ? (
        <div className="reward-progress" aria-label={messages.analyzing} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
          <span style={{ width: `${Math.max(4, Math.round(progress * 100))}%` }} />
        </div>
      ) : null}
    </section>
  );
}
