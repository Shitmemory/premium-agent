// "use client";

// import { useEffect, useRef, useState } from "react";
// import HeroSection from "./hero";
// import SocialProof from "./social-proof";
// import Loader from "@/components/layout/loading";
// import FeaturedSection from "./featured-section";

// export default function HeroWrapper() {
//   const nextSectionRef = useRef<HTMLDivElement | null>(null);
//   const featuredRef = useRef<HTMLDivElement | null>(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [searchOpen, setSearchOpen] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     html.style.scrollSnapType = "none";

//     const video = videoRef.current;

//     const endLoading = () => {
//       setLoading(false);
//       setTimeout(() => {
//         html.style.scrollSnapType = "y mandatory";
//       }, 50);
//     };

//     const onCanPlay = () => endLoading();

//     if (video) {
//       video.addEventListener("canplaythrough", onCanPlay);
//     }

//     const fallbackTimeout = setTimeout(() => {
//       endLoading();
//     }, 4000);

//     return () => {
//       clearTimeout(fallbackTimeout);
//       if (video) {
//         video.removeEventListener("canplaythrough", onCanPlay);
//       }
//     };
//   }, []);

//   return (
//     <main className="relative h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden">
//       {/* Loading Overlay */}
//       <div
//         className={`fixed inset-0 z-[100] bg-black transition-opacity duration-500 ${
//           loading
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <Loader />
//       </div>

//       {/* Dark Overlay */}
//       {searchOpen && (
//         <div
//           id="overlay"
//           className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-500"
//         />
//       )}

//       {/* Main Content */}
//       <div
//         className="transition-all duration-500 relative z-10"
//         style={{
//           willChange: "transform, opacity",
//           transform: "translateZ(0)",
//           isolation: "isolate",
//         }}
//       >
//         <HeroSection
//           scrollTargetRef={nextSectionRef}
//           videoRef={videoRef}
//           ready={!loading}
//         />
//         <SocialProof ref={nextSectionRef} scrollTargetRef={featuredRef} />
//         <FeaturedSection ref={featuredRef} />
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./hero";
import SocialProof from "./social-proof";
import Loader from "@/components/layout/loading";
import FeaturedSection from "./featured-section";

export default function HeroWrapper() {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();
    window.addEventListener("resize", setVH);

    const video = videoRef.current;

    const endLoading = () => {
      setLoading(false);
    };

    const onCanPlay = () => endLoading();

    if (video) {
      video.addEventListener("canplaythrough", onCanPlay);
    }

    const fallbackTimeout = setTimeout(() => {
      endLoading();
    }, 4000);

    return () => {
      clearTimeout(fallbackTimeout);
      if (video) {
        video.removeEventListener("canplaythrough", onCanPlay);
      }
      window.removeEventListener("resize", setVH);
    };
  }, []);

  return (
    <main
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      className={`relative scroll-smooth overflow-x-hidden ${
        !loading ? "snap-y snap-mandatory" : ""
      }`}
    >
      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-opacity duration-500 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Loader />
      </div>

      {/* Dark Overlay for Search */}
      {searchOpen && (
        <div
          id="overlay"
          className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-500"
        />
      )}

      {/* Main Content */}
      <div
        className="transition-all duration-500 relative z-10"
        style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          isolation: "isolate",
        }}
      >
        <HeroSection
          scrollTargetRef={nextSectionRef}
          videoRef={videoRef}
          ready={!loading}
        />
        <SocialProof ref={nextSectionRef} scrollTargetRef={featuredRef} />
        <FeaturedSection ref={featuredRef} />
      </div>
    </main>
  );
}
