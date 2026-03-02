import useCarousel from "../../hooks/useCarousel";

export default function Carousel({ children, className = "" }) {
  const { scrollRef, canScrollLeft, canScrollRight, scroll } = useCarousel();

  return (
    <div className={`relative group/carousel ${className}`}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2"
      >
        {children}
      </div>

      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="hidden md:flex absolute -left-4 top-[35%] -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-200 z-10 opacity-0 group-hover/carousel:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="hidden md:flex absolute -right-4 top-[35%] -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-200 z-10 opacity-0 group-hover/carousel:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}
