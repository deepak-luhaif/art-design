import type { ShapeSpec } from "./types";

const roughPathCache = new Map<string, string>();

/**
 * Generates a stable, deterministic seed from a string (stroke ID)
 * to ensure that each stroke gets a consistent hand-drawn appearance.
 */
export function getSeedFromString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (Math.abs(hash) % 100000) + 1; // seed must be between 1 and 2^31
}

/**
 * Converts a ShapeSpec into a sketchy path 'd' string using Rough.js.
 * Caches the result on the client to avoid visual jittering during page interaction.
 */
export function getCachedRoughPath(strokeId: string, shape: ShapeSpec): string {
  const seed = getSeedFromString(strokeId);
  const cacheKey = `${strokeId}-${seed}-${shape.type}`;
  
  if (roughPathCache.has(cacheKey)) {
    return roughPathCache.get(cacheKey)!;
  }

  if (typeof window === "undefined") {
    // Return placeholder during server-side rendering to avoid reference errors
    return "";
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const roughModule = require("roughjs");
    const rough = roughModule.default || roughModule;
    const gen = rough.generator();

    // Use a very subtle sketchy effect: low roughness and bowing
    const options = {
      roughness: shape.type === "path" ? 0.3 : 0.45,
      bowing: 0.8,
      strokeWidth: 1.5,
      seed: seed,
    };

    let drawable;
    switch (shape.type) {
      case "line":
        drawable = gen.line(shape.x1, shape.y1, shape.x2, shape.y2, options);
        break;
      case "circle":
        // roughjs circle takes cx, cy, diameter
        drawable = gen.circle(shape.cx, shape.cy, shape.r * 2, options);
        break;
      case "ellipse":
        // roughjs ellipse takes cx, cy, width, height
        drawable = gen.ellipse(shape.cx, shape.cy, shape.rx * 2, shape.ry * 2, options);
        break;
      case "path":
        drawable = gen.path(shape.d, options);
        break;
      default:
        return "";
    }

    interface RoughPath {
      d: string;
    }
    const pathString = gen.toPaths(drawable).map((p: RoughPath) => p.d).join(" ");
    roughPathCache.set(cacheKey, pathString);
    return pathString;
  } catch (error) {
    console.error("Failed to generate rough path for stroke:", strokeId, error);
    return "";
  }
}
