import { useEffect, useRef, useState } from "react";

const CTAButton = () => {
  const [isSelected, setIsSelected] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isTouchDeviceRef = useRef(false);

  useEffect(() => {
    isTouchDeviceRef.current = window.matchMedia("(hover: none)").matches;
  }, []);

  useEffect(() => {
    if (!isTouchDeviceRef.current) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const baseStyles = `
    inline-block font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3
    text-sm sm:text-base md:text-lg rounded-full border-2
    transform transition-all duration-300 ease-in-out
    hover:scale-105 active:scale-95
    shadow-md hover:shadow-lg cursor-pointer
    backdrop-blur-lg
  `;

  const inactiveStyles = "bg-white/20 text-white border-white";
  const activeStyles = "bg-white text-black border-white";

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        if (isTouchDeviceRef.current) {
          setIsSelected(true);
        }
      }}
      onMouseEnter={() => {
        if (!isTouchDeviceRef.current) {
          setIsSelected(true);
        }
      }}
      onMouseLeave={() => {
        if (!isTouchDeviceRef.current) {
          setIsSelected(false);
        }
      }}
      className={`${baseStyles} ${isSelected ? activeStyles : inactiveStyles}`}
    >
      Book Your Free Valuation
    </button>
  );
};

export default CTAButton;
