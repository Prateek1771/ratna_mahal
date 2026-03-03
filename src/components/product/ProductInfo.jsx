import { useState } from "react";
import { motion } from "motion/react";
import Breadcrumb from "./Breadcrumb";
import Badge from "../ui/Badge";
import SizeSelector from "./SizeSelector";
import AddToBag from "./AddToBag";
import ShippingBanner from "./ShippingBanner";
import ProductDetails from "./ProductDetails";
import ShippingReturns from "./ShippingReturns";
import { useWishlist } from "../../context/WishlistContext";

function formatPrice(amount) {
  return "\u20B9" + amount.toLocaleString("en-IN");
}

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const { isWishlisted, toggleItem } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product.category, href: `/${product.category.toLowerCase()}` },
    { label: product.brand, href: "#" },
  ];

  const emiAmount = Math.round(product.price / 6);

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      {product.badge && (
        <div className="mt-5">
          <Badge type={product.badge} />
        </div>
      )}

      <p className="text-[11px] uppercase tracking-[0.14em] font-semibold mt-5 text-primary/80">
        {product.brand}
      </p>

      <h1 className="font-serif text-2xl md:text-[28px] mt-1.5 leading-snug">{product.name}</h1>

      <div className="mt-4">
        {product.originalPrice ? (
          <div className="flex items-baseline gap-2.5">
            <span className="line-through text-secondary text-sm">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="text-accent text-xl font-semibold">
              {formatPrice(product.price)}
            </span>
          </div>
        ) : (
          <span className="text-xl">{formatPrice(product.price)}</span>
        )}
      </div>

      <p className="text-xs text-secondary mt-2 tracking-wide">
        No-cost EMI from {formatPrice(emiAmount)}/month &middot; UPI &amp; COD available
      </p>

      <div className="mt-8 pt-6 border-t border-border">
        {product.sizes && product.sizes.length > 0 && (
          <div>
            <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSizeChange={setSelectedSize} />
          </div>
        )}

        <div className="flex gap-3 mt-5">
          <div className="flex-1">
            <AddToBag product={product} selectedSize={selectedSize} />
          </div>
          <motion.button
            onClick={() => toggleItem(product)}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className="w-14 flex items-center justify-center"
          >
            {wishlisted ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-accent"
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </motion.svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary/70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      <div className="mt-6">
        <ShippingBanner />
      </div>

      <div className="mt-6">
        <ProductDetails description={product.description} />
      </div>

      <div>
        <ShippingReturns />
      </div>
    </div>
  );
}
