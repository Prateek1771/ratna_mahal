import { useState, useRef, useCallback } from "react";

export default function MobileImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const index = Math.round(scrollLeft / width);

    setActiveIndex(index);
  }, []);

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Product image ${index + 1}`}
            className="min-w-full snap-center aspect-square object-cover"
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to image ${index + 1}`}
            onClick={() => {
              const container = scrollRef.current;
              if (container) {
                container.scrollTo({ left: index * container.offsetWidth, behavior: "smooth" });
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors p-2 bg-clip-content ${
              index === activeIndex ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
