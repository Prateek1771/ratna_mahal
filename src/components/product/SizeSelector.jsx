import { useState } from "react";

export default function SizeSelector({ sizes }) {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.12em] font-semibold">
          Select Size
        </span>
        <button className="text-[11px] text-secondary underline underline-offset-2 hover:text-primary transition-colors duration-200">
          Size Guide
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
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
