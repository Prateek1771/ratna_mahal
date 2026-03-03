import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { commonNavStart, commonNavEnd, womensNav, mensNav } from "../../data/navigation";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export default function MobileHeader({ gender, onMenuOpen }) {
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const visibleNav = [...commonNavStart, ...(gender === "women" ? womensNav : mensNav), ...commonNavEnd];
  const categoryPills = gender === "women" ? visibleNav.slice(0, 6) : visibleNav;

  return (
    <header className="md:hidden">
      {/* Row 1 — Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger menu */}
        <button onClick={onMenuOpen} aria-label="Open menu">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-lg">
          Ratna Mahal
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          {/* User icon */}
          <Link to="/profile" aria-label="Account">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Wishlist icon */}
          <Link to="/wishlist" aria-label="Wishlist" className="relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-accent text-white text-[9px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Bag icon */}
          <Link to="/cart" aria-label="Shopping bag" className="relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-accent text-white text-[9px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Row 2 — Search bar */}
      <div className="mx-4 mb-2 relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search jewellery, designers..."
          className="rounded-full bg-bg-light border border-border px-4 py-2 text-sm w-full pl-9 outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Row 3 — Category pills */}
      <div className="overflow-x-auto px-4 pb-3 scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={gender}
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, staggerChildren: 0.025 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            {categoryPills.map((item) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.15 } }}
              >
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="border border-border rounded-full px-3 py-1 text-[11px] uppercase tracking-wider whitespace-nowrap hover:border-primary transition-colors"
                >
                  {item}
                </Link>
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
}
