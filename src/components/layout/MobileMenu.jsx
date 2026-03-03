import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { commonNavStart, commonNavEnd, womensNav, mensNav } from "../../data/navigation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.18 } },
};

const springTransition = { type: "spring", stiffness: 500, damping: 40 };

export default function MobileMenu({ isOpen, onClose, gender, onGenderChange }) {
  const visibleNav = [...commonNavStart, ...(gender === "women" ? womensNav : mensNav), ...commonNavEnd];
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm bg-white transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-border">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em]">
            Menu
          </span>
          <button onClick={onClose} aria-label="Close menu" className="p-1 hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Gender toggle */}
        <div className="flex border-b border-border">
          <button
            onClick={() => onGenderChange("women")}
            className={`relative flex-1 py-3 text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
              gender === "women"
                ? "text-primary font-semibold"
                : "text-secondary"
            }`}
          >
            Women
            {gender === "women" && (
              <motion.span
                layoutId="mobile-gender-indicator"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                transition={springTransition}
              />
            )}
          </button>
          <button
            onClick={() => onGenderChange("men")}
            className={`relative flex-1 py-3 text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
              gender === "men"
                ? "text-primary font-semibold"
                : "text-secondary"
            }`}
          >
            Men
            {gender === "men" && (
              <motion.span
                layoutId="mobile-gender-indicator"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                transition={springTransition}
              />
            )}
          </button>
        </div>

        {/* Scrollable nav list */}
        <nav className="overflow-y-auto h-[calc(100%-57px-45px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={gender}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {visibleNav.map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={onClose}
                    className={`flex items-center justify-between px-6 py-3.5 border-b border-border/60 text-[13px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                      item === "SALE"
                        ? "text-accent font-medium"
                        : "hover:bg-bg-light"
                    }`}
                  >
                    {item}
                    <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}
