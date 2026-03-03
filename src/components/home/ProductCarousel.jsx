import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import Carousel from "../ui/Carousel";
import ProductCard from "../ui/ProductCard";
import useScrollReveal from "../../hooks/useScrollReveal";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

export default function ProductCarousel({ title, products, subtitle }) {
  const reveal = useScrollReveal();

  return (
    <section ref={reveal} className="animate-on-scroll max-w-[1440px] mx-auto px-4 md:px-8 py-10 md:py-12">
      <SectionHeading title={title} subtitle={subtitle} />

      <Carousel>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="min-w-[44%] sm:min-w-[32%] md:min-w-[23%] lg:min-w-[19%] snap-start px-2"
            variants={itemVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
}
