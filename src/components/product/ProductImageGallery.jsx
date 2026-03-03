import { useState } from "react";

export default function ProductImageGallery({ images }) {
  const displayImages = images.slice(0, 6);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="hidden md:grid grid-cols-2 gap-1.5">
        {displayImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden group/img"
            onClick={() => setLightbox(index)}
          >
            <img
              src={src}
              alt={`Product image ${index + 1}`}
              loading={index < 2 ? "eager" : "lazy"}
              className="aspect-square object-cover w-full cursor-zoom-in transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              aria-label="Previous image"
              className="absolute left-6 text-white/70 hover:text-white transition-colors"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <img
            src={displayImages[lightbox]}
            alt={`Product image ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox < displayImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              aria-label="Next image"
              className="absolute right-6 text-white/70 hover:text-white transition-colors"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
