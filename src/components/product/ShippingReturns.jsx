import { useState } from "react";

export default function ShippingReturns() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3.5 border-b border-border cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-[0.12em] font-semibold">
          Shipping &amp; Returns
        </span>
        <span className={`text-secondary text-sm transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="text-sm text-secondary leading-[1.8] mt-4 pb-2 space-y-2">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-secondary/60 shrink-0" />
            Free shipping across India on orders above &#x20B9;10,000
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-secondary/60 shrink-0" />
            Cash on Delivery available on select pin codes
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-secondary/60 shrink-0" />
            Easy returns within 15 days of delivery
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-secondary/60 shrink-0" />
            Items must be unworn with original packaging &amp; certificate
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-secondary/60 shrink-0" />
            Insured delivery with tamper-proof packaging
          </li>
        </ul>
      </div>
    </div>
  );
}
