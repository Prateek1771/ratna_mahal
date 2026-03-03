import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import designers from "../../data/designers";

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function DesignerFeature() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
      <SectionHeading title="Recommended Designers" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {designers.slice(0, 6).map((designer, index) => (
          <motion.div
            key={designer.id}
            variants={cardVariants}
            custom={index}
          >
            <Link
              to="/designers"
              className="relative h-60 md:h-80 overflow-hidden group cursor-pointer block"
            >
              <img
                src={designer.image}
                alt={designer.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="font-serif text-2xl md:text-3xl">{designer.name}</h3>
                <p className="text-sm opacity-70 mt-1.5">{designer.tagline}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] mt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Collection
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
