import { FaApple } from "react-icons/fa6";

type AppStoreBadgeProps = {
  eyebrow: string;
  label: string;
};

export function AppStoreBadge({ eyebrow, label }: AppStoreBadgeProps) {
  return (
    <span className="app-store-badge-content">
      <FaApple aria-hidden="true" className="app-store-mark" focusable="false" />
      <span className="app-store-copy">
        <small>{eyebrow}</small>
        <strong>{label}</strong>
      </span>
    </span>
  );
}
