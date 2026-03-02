import { Link } from "react-router-dom";
import { mainNav } from "../../data/navigation";

export default function MobileHeader({ onMenuOpen }) {
  const categoryPills = mainNav.slice(0, 8);

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
          <button aria-label="Account">
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
          </button>

          {/* Bag icon */}
          <button aria-label="Shopping bag">
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
          </button>
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
      <div className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-hide">
        {categoryPills.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="border border-border rounded-full px-3 py-1 text-[11px] uppercase tracking-wider whitespace-nowrap hover:border-primary transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
}
