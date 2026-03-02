import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";

function formatPrice(value) {
  return `\u20B9${value.toLocaleString("en-IN")}`;
}

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlisted((prev) => !prev);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      {/* Image container */}
      <div className="aspect-square overflow-hidden relative bg-bg-light">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Wishlist heart button */}
        <button
          onClick={handleWishlistToggle}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 ${
            wishlisted
              ? "bg-white shadow-md scale-100"
              : "bg-white/70 opacity-0 group-hover:opacity-100 hover:bg-white hover:shadow-md"
          }`}
        >
          {wishlisted ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-accent animate-[heartPop_0.3s_ease]">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px] text-primary/70">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          )}
        </button>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge type={product.badge} />
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="pt-3">
        <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-primary/90">
          {product.brand}
        </p>
        <p className="text-xs text-secondary mt-1 line-clamp-2 leading-relaxed">
          {product.name}
        </p>
        <div className="mt-1.5">
          {product.originalPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-secondary line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-sm text-accent font-semibold">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-sm font-medium">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>

      <style>{`
        @keyframes heartPop {
          0% { transform: scale(0.6); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Link>
  );
}
