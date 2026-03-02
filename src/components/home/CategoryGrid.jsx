import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import categories from "../../data/categories";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function CategoryGrid() {
  const reveal = useScrollReveal();

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
      <SectionHeading title="Categories to Explore" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            ref={reveal}
            to={`/${category.slug}`}
            className={`animate-on-scroll stagger-${index + 1} relative group overflow-hidden aspect-[4/5] cursor-pointer block`}
          >
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <span className="text-white font-serif text-lg md:text-xl">
                {category.name}
              </span>
              <div className="h-0.5 w-0 bg-white mt-2 group-hover:w-12 transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
