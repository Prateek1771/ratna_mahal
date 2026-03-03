import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { commonNavStart, commonNavEnd, womensNav, mensNav } from "../../data/navigation";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
};

const tabVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const springTransition = { type: "spring", stiffness: 500, damping: 40 };

export default function Header({ gender, onGenderChange }) {
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const visibleNav = [...commonNavStart, ...(gender === "women" ? womensNav : mensNav), ...commonNavEnd];
  return (
    <header className="hidden md:block">
      {/* Row 1 — Utility bar */}
      <div className="flex justify-between items-center px-8 py-2 border-b border-border text-secondary">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onGenderChange("women")}
            className={`relative pb-0.5 text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
              gender === "women" ? "text-primary" : "text-secondary hover:text-primary"
            }`}
          >
            Women
            {gender === "women" && (
              <motion.span
                layoutId="desktop-gender-indicator"
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary"
                transition={springTransition}
              />
            )}
          </button>
          <span className="text-border text-[10px]">|</span>
          <button
            onClick={() => onGenderChange("men")}
            className={`relative pb-0.5 text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
              gender === "men" ? "text-primary" : "text-secondary hover:text-primary"
            }`}
          >
            Men
            {gender === "men" && (
              <motion.span
                layoutId="desktop-gender-indicator"
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary"
                transition={springTransition}
              />
            )}
          </button>
        </div>
        <div className="flex items-center gap-3">
          <a href="/stores" className="text-[11px] uppercase tracking-[0.12em] hover:text-primary transition-colors duration-200">
            Store Locator
          </a>
          <span className="text-border text-[10px]">|</span>
          <a href="/gold-rate" className="text-[11px] uppercase tracking-[0.12em] hover:text-primary transition-colors duration-200">
            Gold Rate Today
          </a>
          <span className="text-border text-[10px]">|</span>
          <a href="/customer-service" className="text-[11px] uppercase tracking-[0.12em] hover:text-primary transition-colors duration-200">
            Customer Service
          </a>
        </div>
      </div>

      {/* Row 2 — Logo & actions */}
      <div className="flex justify-between items-center px-8 py-5">
        {/* Search */}
        <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200 group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="text-[11px] uppercase tracking-[0.12em]">Search</span>
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-[28px] tracking-[0.04em] text-primary hover:opacity-80 transition-opacity duration-200">
          Ratna Mahal
        </Link>

        {/* Account / Wishlist / Bag */}
        <div className="flex items-center gap-7">
          <Link to="/profile" className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.12em]">Account</span>
          </Link>

          <Link to="/wishlist" className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition-colors duration-200">
            <div className="relative">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-accent text-white text-[9px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="text-[10px] uppercase tracking-[0.12em]">Wishlist</span>
          </Link>

          <Link to="/cart" className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition-colors duration-200 relative">
            <div className="relative">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-accent text-white text-[9px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="text-[10px] uppercase tracking-[0.12em]">Bag</span>
          </Link>
        </div>
      </div>

      {/* Row 3 — Main navigation */}
      <nav className="flex justify-center px-8 py-3 border-t border-b border-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={gender}
            className="flex justify-center gap-6 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visibleNav.map((item) => (
              <motion.span key={item} variants={tabVariants}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 relative after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[1.5px] after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    item === "SALE"
                      ? "text-accent font-medium"
                      : "text-primary/80 hover:text-primary"
                  }`}
                >
                  {item}
                </Link>
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </nav>
    </header>
  );
}
