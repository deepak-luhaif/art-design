"use client";

import { useState, useEffect } from "react";
import { setTutorialSeen } from "@/lib/tutorialStore";

interface SwipeTutorialProps {
  tutorialSlug: string;
  onDismiss: () => void;
}

export default function SwipeTutorial({
  tutorialSlug,
  onDismiss,
}: SwipeTutorialProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<"idle" | "swiping">(
    "idle"
  );

  // Animate the swipe gesture demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev === "idle" ? "swiping" : "idle"));
    }, 2500); // Repeat animation every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTutorialSeen(tutorialSlug);
    onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="w-full max-w-sm mx-4 p-8 bg-[var(--color-surface)] border border-[var(--color-border)] sketchbook-page flex flex-col gap-6"
        style={{
          animation: "slideIn 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        {/* Header */}
        <div className="text-center">
          <h2
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "var(--tracking-display)",
              color: "var(--color-text-primary)",
            }}
          >
            Swipe to Navigate
          </h2>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            On mobile, use left and right swipes to move between frames
          </p>
        </div>

        {/* Gesture Demo Container */}
        <div className="relative h-40 bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
          {/* Left Arrow (Swipe Left) */}
          <div className="absolute left-4 flex flex-col items-center gap-2">
            <div
              className="text-3xl"
              style={{
                animation:
                  animationPhase === "swiping"
                    ? "swipeLeftAnimation 1000ms ease-in-out forwards"
                    : "none",
              }}
            >
              ←
            </div>
            <span
              className="text-xs uppercase tracking-widest font-semibold text-center"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Previous
            </span>
          </div>

          {/* Center Info */}
          <div className="flex flex-col items-center gap-2 px-4">
            <div
              className="w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: "var(--color-accent)" }}
            >
              <span
                className="text-sm font-semibold uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Swipe
              </span>
            </div>
          </div>

          {/* Right Arrow (Swipe Right) */}
          <div className="absolute right-4 flex flex-col items-center gap-2">
            <div
              className="text-3xl"
              style={{
                animation:
                  animationPhase === "swiping"
                    ? "swipeRightAnimation 1000ms ease-in-out forwards"
                    : "none",
              }}
            >
              →
            </div>
            <span
              className="text-xs uppercase tracking-widest font-semibold text-center"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Next
            </span>
          </div>

          {/* Animated hand/finger indicator */}
          <div
            className="absolute bottom-2 w-6 h-6 rounded-full"
            style={{
              background: "var(--color-accent)",
              opacity: 0.3,
              animation:
                animationPhase === "swiping"
                  ? "fingerSwipe 1000ms ease-in-out forwards"
                  : "none",
            }}
          />
        </div>

        {/* Instructions */}
        <div className="text-center space-y-3">
          <p
            className="text-sm"
            style={{ color: "var(--color-text-primary)" }}
          >
            <strong>Swipe horizontally</strong> on the drawing area to navigate
            frames
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-secondary)" }}
          >
            You can also use <kbd className="px-2 py-1 border border-[var(--color-border)] rounded text-xs">←</kbd> <kbd className="px-2 py-1 border border-[var(--color-border)] rounded text-xs">→</kbd> keys on
            keyboard
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="w-full min-h-11 px-4 py-3 text-xs uppercase tracking-widest font-semibold border transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] hover:border-[var(--color-accent)] active:scale-95"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-primary)",
          }}
        >
          Got it, let&apos;s draw!
        </button>
      </div>
    </div>
  );
}
