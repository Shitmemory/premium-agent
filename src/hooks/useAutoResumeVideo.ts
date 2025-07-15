"use client";
import { useEffect } from "react";

export function useAutoResumeVideo(
  videoRef: React.RefObject<HTMLVideoElement>
) {
  useEffect(() => {
    const tryPlay = () => {
      const video = videoRef.current;
      if (document.visibilityState === "visible" && video && video.paused) {
        video
          .play()
          .then(() => {
            // Success
          })
          .catch((err) => {
            console.warn("Auto-resume failed:", err);
          });
      }
    };

    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("focus", tryPlay);

    return () => {
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("focus", tryPlay);
    };
  }, [videoRef]);
}
// potentially remove this
