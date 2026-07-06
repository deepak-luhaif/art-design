// Tutorial onboarding state management
const SWIPE_TUTORIAL_KEY = "art-design-swipe-tutorial-seen";

export const getTutorialSeen = (tutorialSlug: string): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const seen = localStorage.getItem(`${SWIPE_TUTORIAL_KEY}-${tutorialSlug}`);
    return seen === "true";
  } catch {
    return false;
  }
};

export const setTutorialSeen = (tutorialSlug: string): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${SWIPE_TUTORIAL_KEY}-${tutorialSlug}`, "true");
  } catch {
    // Silently fail if localStorage is not available
  }
};

export const subscribeTutorialSeen = (
  tutorialSlug: string,
  callback: (seen: boolean) => void
): (() => void) => {
  // Immediately call with current value
  callback(getTutorialSeen(tutorialSlug));

  // Listen for storage changes (e.g., from other tabs)
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === `${SWIPE_TUTORIAL_KEY}-${tutorialSlug}`) {
      callback(e.newValue === "true");
    }
  };

  window.addEventListener("storage", handleStorageChange);
  return () => window.removeEventListener("storage", handleStorageChange);
};
