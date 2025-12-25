import { useState, useEffect } from "react";

interface RotatingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export const RotatingText = ({ words, className = "", interval = 2500 }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block relative ${className}`}>
      <span
        className={`inline-block transition-all duration-300 ${
          isAnimating 
            ? "opacity-0 translate-y-4" 
            : "opacity-100 translate-y-0"
        }`}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};
