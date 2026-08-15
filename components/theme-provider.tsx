"use client";

import { useServerInsertedHTML } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
type ThemePreference = Theme | "system";

type ThemeContextValue = {
  /** The theme currently applied to the document. */
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "theme";

/* ── External store ─────────────────────────────────────────────
   The resolved theme lives in a module-level variable so the DOM class
   and the value React reads are always the same. `applyTheme` is the only
   place it changes, and it updates the variable + the <html> class
   atomically — which is what keeps the toggle responsive on one click. */
let currentTheme: Theme = "light";

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function getPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // localStorage unavailable (private mode, disabled) — fall back to OS.
  }
  return "system";
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(preference: ThemePreference): Theme {
  return preference === "system" ? getSystemTheme() : preference;
}

function getSnapshot(): Theme {
  return currentTheme;
}

/** SSR snapshot — must match the HTML the server renders. */
function getServerSnapshot(): Theme {
  return "light";
}

const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored === "dark" ||
      (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.add(dark ? "dark" : "light");
  } catch (e) {
    document.documentElement.classList.add("light");
  }
})();`;

/** Updates the store and the `.light`/`.dark` class on <html> (globals.css). */
function applyTheme(theme: Theme) {
  currentTheme = theme;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

function subscribeTheme(onChange: () => void) {
  // Sync the store with the saved/system preference right away (the class
  // itself was applied before paint by the init script in the layout), then
  // keep it in sync whenever the OS scheme or another tab changes it.
  applyTheme(resolveTheme(getPreference()));

  listeners.add(onChange);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const sync = () => {
    applyTheme(resolveTheme(getPreference()));
    emit();
  };
  mq.addEventListener("change", sync);
  window.addEventListener("storage", sync);
  return () => {
    listeners.delete(onChange);
    mq.removeEventListener("change", sync);
    window.removeEventListener("storage", sync);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Inject the theme-init script into the SSR <head> OUTSIDE the React tree
  // (useServerInsertedHTML streams raw HTML into the head). It runs before
  // first paint so the page never flashes the wrong colors, and because React
  // never renders this <script> as a component, React 19's dev warning about
  // inline script tags is avoided entirely.
  useServerInsertedHTML(() => (
    <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
  ));

  // The server snapshot ("light") matches SSR HTML during hydration; React
  // then re-renders with the real value once the client store is read.
  const theme = useSyncExternalStore(subscribeTheme, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next: Theme = currentTheme === "light" ? "dark" : "light";
    applyTheme(next); // updates currentTheme + <html> class synchronously
    emit(); // React reads the new snapshot and re-renders on this same click
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable — the theme still applies for this session.
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
