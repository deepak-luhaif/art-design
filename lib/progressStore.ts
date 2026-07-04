"use client";

type Listener = () => void;

const listeners = new Map<string, Set<Listener>>();

function keyFor(slug: string) {
  return `drawalong-progress-${slug}`;
}

/** localStorage is the single source of truth for tutorial progress; components read it via useSyncExternalStore. */
export function getStoredStep(slug: string, total: number): number {
  try {
    const raw = localStorage.getItem(keyFor(slug));
    const n = raw ? parseInt(raw, 10) : NaN;
    if (n >= 1 && n <= total) return n;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return 1;
}

export function setStoredStep(slug: string, step: number): void {
  try {
    localStorage.setItem(keyFor(slug), String(step));
  } catch {
    // localStorage unavailable — state just won't persist across reloads
  }
  listeners.get(slug)?.forEach((cb) => cb());
}

export function subscribeStoredStep(slug: string, callback: Listener): () => void {
  let set = listeners.get(slug);
  if (!set) {
    set = new Set();
    listeners.set(slug, set);
  }
  set.add(callback);
  return () => set.delete(callback);
}
