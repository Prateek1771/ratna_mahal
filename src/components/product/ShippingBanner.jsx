export default function ShippingBanner() {
  return (
    <div className="border-t border-b border-border py-3.5 flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-secondary">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
      <span className="text-xs text-secondary">Free Shipping Across India &amp; Easy 15-Day Returns</span>
    </div>
  );
}
