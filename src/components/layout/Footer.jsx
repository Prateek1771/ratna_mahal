import { useState } from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/navigation";
import SocialIcons from "../ui/SocialIcons";

function AccordionSection({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-6 py-4 text-xs uppercase tracking-[0.12em] font-semibold"
      >
        {title}
        <span className={`text-secondary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 pb-4" : "max-h-0"
        }`}
      >
        <ul className="px-6 space-y-2.5">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-")}`}
                className="text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const sections = Object.entries(footerLinks);

  return (
    <footer className="border-t border-border">
      {/* Desktop footer */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-10">
          {sections.map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-")}`}
                      className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile footer — accordion */}
      <div className="md:hidden">
        {sections.map(([title, links]) => (
          <AccordionSection key={title} title={title} links={links} />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-8 px-6 md:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-secondary tracking-wide">
            &copy; 2026 Ratna Mahal. All rights reserved. &middot; BIS Hallmarked Jewellery
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
