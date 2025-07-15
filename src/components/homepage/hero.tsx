"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import CTAButton from "../cta-button";

interface HeroProps {
  scrollTargetRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  ready: any;
}

const HeroSection = ({ scrollTargetRef, videoRef, ready }: HeroProps) => {
  const scrollToNext = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full flex flex-col justify-between overflow-hidden snap-start"
      style={{ height: "calc(var(--vh, 1vh) * 100)", minHeight: "100vh" }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 translate-y-[-70px] sm:translate-y-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Mobile Fallback Image */}
      <div
        className="sm:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
      />

      {/* Top-to-bottom gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

      {/* Bottom overlay gradient */}

      <div className="absolute bottom-0 left-0 w-full h-1/3 z-30 pointer-events-none">
        {/* Desktop gradient */}
        <div
          className="w-full h-full hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(3, 3, 3, 0.65) 50%, rgba(23, 23, 23, 1) 70%)",
          }}
        />

        {/* Mobile gradient — starts lower (e.g. 40%) */}
        <div
          className="w-full h-full sm:hidden block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(3, 3, 3, 0.65) 25%, rgba(23, 23, 23, 1) 60%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-40 text-center max-w-3xl mx-auto w-full">
        {ready && (
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight drop-shadow-lg"
          >
            London Property, Elevated
          </motion.h1>
        )}

        {ready && (
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white font-semibold mb-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto drop-shadow-md"
          >
            Discover How Much Your Home Is Really Worth
          </motion.p>
        )}

        <CTAButton />
      </div>

      {/* Chevron Scroll Button */}
      <div
        className="
    absolute 
    left-1/2 
    -translate-x-1/2 
    z-30 
    animate-bounce 
    text-white 
    text-3xl 
    hover:text-gray-300 
    transition 
    cursor-pointer
    bottom-[98px] sm:bottom-[64px] md:bottom-[88px] lg:bottom-[120px]
  "
      >
        <button onClick={scrollToNext} className="cursor-pointer">
          <HiChevronDown size={39} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { HiChevronDown } from "react-icons/hi";
// import CTAButton from "../cta-button";

// interface HeroProps {
//   scrollTargetRef: React.RefObject<HTMLDivElement | null>;
//   videoRef: React.RefObject<HTMLVideoElement | null>;
//   ready: any;
// }

// const HeroSection = ({ scrollTargetRef, videoRef, ready }: HeroProps) => {
//   const scrollToNext = () => {
//     if (scrollTargetRef.current) {
//       scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="h-screen snap-start relative w-full overflow-hidden flex items-start justify-center pt-24 sm:pt-32 md:pt-40 ">
//       {/* Background Gradient Overlay at Bottom */}
//       <div className="absolute top-[55%] sm:top-[75%] left-0 w-full h-[45%] sm:h-[25%] z-20 pointer-events-none">
//         <div
//           className="w-full h-full sm:block hidden"
//           style={{
//             background:
//               "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 65%, rgb(23, 23, 23) 93%)",
//           }}
//         />
//         <div
//           className="w-full h-full sm:hidden block"
//           style={{
//             background:
//               "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 27%, rgba(23, 23, 23) 45%)",
//           }}
//         />
//       </div>
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         className="absolute inset-0 w-full h-full object-cover translate-y-[-70px] sm:translate-y-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         poster="/images/hero-poster.jpg"
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//       </video>

//       {/* Mobile Fallback Background */}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 z-10" />

//       {/* Main Content */}
//       <div className="relative z-20 px-4 sm:px-6 md:px-8 py-4 sm:py-6 max-w-3xl w-full text-center max-sm:mt-[1px]">
//         {ready && (
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white font-bold mb-4 text-3xl sm:text-3xl md:text-5xl leading-tight"
//           >
//             London Property, Elevated
//           </motion.h1>
//         )}

//         {ready && (
//           <motion.p
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-white font-bold mb-6 text-xs sm:text-base md:text-lg max-w-xl mx-auto"
//           >
//             Discover How Much Your Home Is Really Worth
//           </motion.p>
//         )}

//         <CTAButton />
//       </div>

//       {/* Chevron */}
//       <div className="absolute bottom-[225px] md:bottom-32 z-30 flex justify-center w-full">
//         <button
//           onClick={scrollToNext}
//           className="animate-bounce text-white text-3xl hover:text-gray-300 transition cursor-pointer"
//         >
//           <HiChevronDown size={39} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
