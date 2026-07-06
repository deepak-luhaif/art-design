import { useEffect, useRef } from "react";

interface SwipeHandlers {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SWIPE_THRESHOLD = 50; // Minimum distance to register a swipe
const SWIPE_TIME_THRESHOLD = 500; // Maximum time for swipe (ms)

export function useSwipeNavigation(
  { onSwipeLeft, onSwipeRight }: SwipeHandlers,
  enabled = true
) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (
        touchStartX.current === null ||
        touchStartY.current === null ||
        touchStartTime.current === null
      ) {
        return;
      }

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();

      // Calculate distances
      const distanceX = touchEndX - touchStartX.current;
      const distanceY = touchEndY - touchStartY.current;
      const distance = Math.abs(distanceX);
      const timeTaken = touchEndTime - touchStartTime.current;

      // Check if it's a valid swipe (horizontal, within threshold time, minimum distance)
      const isValidSwipe =
        Math.abs(distanceY) < Math.abs(distanceX) && // More horizontal than vertical
        timeTaken < SWIPE_TIME_THRESHOLD &&
        distance > SWIPE_THRESHOLD;

      if (isValidSwipe) {
        if (distanceX > 0) {
          // Swiped right
          onSwipeRight();
        } else {
          // Swiped left
          onSwipeLeft();
        }
      }

      // Reset
      touchStartX.current = null;
      touchStartY.current = null;
      touchStartTime.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [enabled, onSwipeLeft, onSwipeRight]);
}
