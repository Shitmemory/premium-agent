"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative text-4xl sm:text-5xl font-bold tracking-widest uppercase">
        <span className="text-gray-300 select-none">THE MODERN HOUSE</span>
        <span
          className="absolute left-0 top-0 overflow-hidden text-black"
          style={{
            width: `${progress}%`,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          THE MODERN HOUSE
        </span>
      </div>
    </div>
  );
}
