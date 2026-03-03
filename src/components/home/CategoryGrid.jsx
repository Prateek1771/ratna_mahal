import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import categories from "../../data/categories";

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function CategoryGrid() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
      <SectionHeading title="Categories to Explore" />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            custom={index}
          >
            <Link
              to={`/${category.slug}`}
              className="relative group overflow-hidden aspect-[3/4] sm:aspect-[4/5] cursor-pointer block"
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-white font-serif text-lg md:text-xl">
                  {category.name}
                </span>
                <div className="h-0.5 w-0 bg-white mt-2 group-hover:w-12 transition-all duration-500" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
