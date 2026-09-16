"use client";

import { useState } from "react";
import type { RewardMessages } from "../lib/reward-dictionaries";

type Reward = {
  code: string;
  redemptionUrl: string;
};

type Status = "idle" | "checking" | "success" | "error";

type RewardErrorMessageKey = Extract<
  keyof RewardMessages,
  | "invalidLink"
  | "unsupportedPlatform"
  | "tooOld"
  | "contentNotFound"
  | "contentMismatch"
  | "verificationUnavailable"
  | "alreadyClaimed"
  | "codesUnavailable"
  | "rateLimited"
  | "serviceUnavailable"
>;

const errorMessageKeys: Record<string, RewardErrorMessageKey> = {
  invalid_link: "invalidLink",
  unsupported_platform: "unsupportedPlatform",
  too_old: "tooOld",
  content_not_found: "contentNotFound",
  content_mismatch: "contentMismatch",
  verification_unavailable: "verificationUnavailable",
  already_claimed: "alreadyClaimed",
  codes_unavailable: "codesUnavailable",
  rate_limited: "rateLimited",
  service_unavailable: "serviceUnavailable",
};

export function ShareReward({ messages }: { messages: RewardMessages }) {
  const [shareText, setShareText] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [reward, setReward] = useState<Reward | null>(null);
  const [copied, setCopied] = useState(false);

  const updateShareText = (nextValue: string) => {
    setShareText(nextValue);
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const submitShareText = async () => {
    if (!shareText.trim() || status === "checking") return;
    setStatus("checking");
    setError("");

    try {
      const response = await fetch("/api/reward/claim", {
        body: JSON.stringify({ shareText }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload = await response.json() as Reward & { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(messages[errorMessageKeys[payload.error ?? ""] ?? "serviceUnavailable"]);
        return;
      }

      setReward(payload);
      setStatus("success");
    } catch {
      setStatus("error");
      setError(messages.serviceUnavailable);
    }
  };

  const copyRedemptionLink = async () => {
    if (!reward) return;
    await navigator.clipboard.writeText(reward.redemptionUrl);
    setCopied(true);
  };

  const resetForm = () => {
    setShareText("");
    setStatus("idle");
    setError("");
    setReward(null);
    setCopied(false);
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
        <button className="reward-retry-button" type="button" onClick={resetForm}>
          {messages.retry}
        </button>
      </section>
    );
  }

  return (
    <section aria-label={messages.pasteTitle} className="reward-upload-card">
      <p className="reward-share-hint">{messages.pasteHint}</p>
      <textarea
        aria-label={messages.pasteTitle}
        className="reward-share-textarea"
        dir="ltr"
        disabled={status === "checking"}
        id="reward-share-text"
        onChange={(event) => updateShareText(event.target.value)}
        placeholder={messages.placeholder}
        rows={4}
        value={shareText}
      />

      {error ? <p className="reward-error" role="alert">{error}</p> : null}

      <div className="reward-upload-actions">
        <button
          className="reward-primary-button"
          disabled={!shareText.trim() || status === "checking"}
          onClick={submitShareText}
          type="button"
        >
          {status === "checking" ? messages.verifying : messages.verify}
        </button>
      </div>

      {status === "checking" ? (
        <div
          aria-label={messages.verifying}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={undefined}
          className="reward-progress is-indeterminate"
        >
          <span />
        </div>
      ) : null}
    </section>
  );
}
