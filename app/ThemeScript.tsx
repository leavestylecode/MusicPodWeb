const themeBootstrap = `(() => {
  const root = document.documentElement;
  const storageKey = "musicpod-theme";
  let preference = "system";

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") preference = stored;
  } catch {}

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = preference === "system" ? (systemDark ? "dark" : "light") : preference;
  const iconHref = resolved === "dark" ? "/app-icon-dark.png" : "/app-icon.png";
  const syncThemeIcons = () => {
    document.querySelectorAll("link[data-musicpod-theme-icon]").forEach((link) => {
      link.setAttribute("href", iconHref);
    });
  };
  root.dataset.theme = resolved;
  root.dataset.themePreference = preference;
  root.style.colorScheme = resolved;
  syncThemeIcons();
  document.addEventListener("DOMContentLoaded", syncThemeIcons, { once: true });
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} id="musicpod-theme" />;
}
