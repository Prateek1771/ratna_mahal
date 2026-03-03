import { useState } from "react";

export default function SizeSelector({ sizes, selectedSize, onSizeChange }) {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.12em] font-semibold">
          Select Size
        </span>
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="text-[11px] text-secondary underline underline-offset-2 hover:text-primary transition-colors duration-200"
        >
          Size Guide
        </button>
      </div>

      {showGuide && (
        <div className="mt-2 mb-3 p-4 bg-bg-light border border-border text-xs text-secondary leading-relaxed">
          <p className="font-semibold text-primary mb-2 uppercase tracking-wider">Size Guide</p>
          <p>Necklaces: 16" (choker), 18" (princess), 20" (matinee)</p>
          <p>Rings: Measured by inner circumference in mm</p>
          <p>Bangles: Measured by inner diameter — 2.4" (small) to 2.8" (large)</p>
          <button onClick={() => setShowGuide(false)} className="mt-2 underline hover:text-primary">Close</button>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`border px-4 py-2.5 text-sm transition-all duration-200 min-w-[60px] ${
              selectedSize === size
                ? "border-primary bg-primary text-white"
                : "border-border hover:border-primary"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
