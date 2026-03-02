import { useState, useEffect, useCallback } from "react";
import { promos } from "../../data/navigation";

export default function PromoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const transition = useCallback((newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 200);
  }, []);

  const next = useCallback(() => {
    transition((currentIndex + 1) % promos.length);
  }, [currentIndex, transition]);

  const prev = useCallback(() => {
    transition((currentIndex - 1 + promos.length) % promos.length);
  }, [currentIndex, transition]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="bg-bg-dark text-white h-10 flex items-center justify-center relative overflow-hidden">
      <button
        onClick={prev}
        aria-label="Previous promotion"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 text-white/50 hover:text-white transition-colors duration-200"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <p
        className={`text-[11px] tracking-[0.15em] uppercase text-center px-10 transition-opacity duration-200 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {promos[currentIndex]}
      </p>

      <button
        onClick={next}
        aria-label="Next promotion"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 text-white/50 hover:text-white transition-colors duration-200"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
