"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="h-2 w-full overflow-hidden rounded-full"
      style={{ background: "var(--color-surface-2)" }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: "var(--color-accent)" }}
        initial={false}
        animate={{ width: `${pct}%` }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
      />
    </div>
  );
}
