import designers from "../data/designers";
import { getProductsByBrand } from "../data/products";
import ProductCarousel from "../components/home/ProductCarousel";
import Breadcrumb from "../components/product/Breadcrumb";

export default function DesignersPage() {
  return (
    <div>
      {/* Hero banner */}
      <div className="relative h-[28vh] md:h-[45vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1760080839074-07e553b0565e?w=1400&q=80"
          alt="Our Designers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 hero-fade-in">
          <h1 className="font-serif text-3xl md:text-5xl mb-2">
            Our Designers
          </h1>
          <p className="text-sm md:text-base opacity-80 max-w-xl">
            India's finest jewellery houses — each with a story of heritage and craft
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-2">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Designers" },
          ]}
        />
      </div>

      {/* Designer sections */}
      {designers.map((designer) => {
        const designerProducts = getProductsByBrand(designer.name);

        return (
          <section key={designer.id} className="mb-4">
            {/* Designer feature card */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8">
              <div className="relative h-48 md:h-80 overflow-hidden group">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h2 className="font-serif text-2xl md:text-4xl">
                    {designer.name}
                  </h2>
                  <p className="text-sm opacity-70 mt-1.5">
                    {designer.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Designer's products carousel */}
            {designerProducts.length > 0 && (
              <ProductCarousel
                title={`From ${designer.name}`}
                products={designerProducts}
              />
            )}
          </section>
        );
      })}
    </div>
  );
}
