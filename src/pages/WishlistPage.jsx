import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ui/ProductCard";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function WishlistPage() {
  const { items, itemCount, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <svg
          className="mx-auto mb-6 text-secondary"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <h1 className="font-serif text-2xl md:text-3xl">
          Your wishlist is empty
        </h1>
        <p className="text-secondary text-sm mt-3 max-w-sm mx-auto">
          Save pieces you love and come back to them anytime.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-primary text-white px-10 py-3.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-primary/85 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl mb-1">Wishlist</h1>
          <p className="text-secondary text-sm">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </div>
        <button
          onClick={clearWishlist}
          className="text-[11px] text-secondary underline underline-offset-2 hover:text-accent transition-colors uppercase tracking-[0.12em]"
        >
          Clear Wishlist
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ProductCard
                product={{
                  ...item,
                  images: [item.image],
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
