import { useState } from "react";

export default function ProductDetails({ description }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3.5 border-b border-border cursor-pointer group"
      >
        <span className="text-[11px] uppercase tracking-[0.12em] font-semibold">
          Product Details
        </span>
        <span className={`text-secondary text-sm transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-sm text-secondary leading-[1.8] mt-4 pb-2">
          {description}
        </p>
      </div>
    </div>
  );
}
