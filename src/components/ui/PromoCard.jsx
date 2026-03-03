import { Link } from "react-router-dom";
import { motion } from "motion/react";

const cardHover = { y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } };
const cardTap = { scale: 0.98 };
const cardTransition = { type: "spring", stiffness: 400, damping: 30 };

export default function PromoCard({
  title,
  subtitle,
  ctaText,
  href = "/sale",
  bgColor = "bg-bg-cream",
}) {
  return (
    <Link to={href}>
      <motion.div
        whileHover={cardHover}
        whileTap={cardTap}
        transition={cardTransition}
        className={`${bgColor} p-8 md:p-10 border border-border/50 group cursor-pointer hover:border-border transition-colors duration-300`}
      >
        <h2 className="font-serif text-xl md:text-2xl">{title}</h2>
        {subtitle && <p className="text-secondary text-sm mt-2 leading-relaxed">{subtitle}</p>}
        {ctaText && (
          <span className="text-[11px] uppercase tracking-[0.15em] mt-4 inline-block border-b border-primary pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors duration-200">
            {ctaText}
          </span>
        )}
      </motion.div>
    </Link>
  );
}
