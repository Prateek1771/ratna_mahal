import SectionHeading from "./SectionHeading";
import Carousel from "../ui/Carousel";
import ProductCard from "../ui/ProductCard";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function ProductCarousel({ title, products, subtitle }) {
  const reveal = useScrollReveal();

  return (
    <section ref={reveal} className="animate-on-scroll max-w-[1440px] mx-auto px-4 md:px-8 py-10 md:py-12">
      <SectionHeading title={title} subtitle={subtitle} />

      <Carousel>
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[44%] sm:min-w-[32%] md:min-w-[23%] lg:min-w-[19%] snap-start px-2"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
