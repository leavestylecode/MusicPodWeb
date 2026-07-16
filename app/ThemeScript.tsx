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
  root.dataset.theme = resolved;
  root.dataset.themePreference = preference;
  root.style.colorScheme = resolved;
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} id="musicpod-theme" />;
}
