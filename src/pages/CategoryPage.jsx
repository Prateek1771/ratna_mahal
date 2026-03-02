import { useParams, Link } from "react-router-dom";
import routeConfig from "../data/routes";
import ProductCard from "../components/ui/ProductCard";
import Breadcrumb from "../components/product/Breadcrumb";
import useScrollReveal from "../hooks/useScrollReveal";

export default function CategoryPage() {
  const { slug } = useParams();
  const route = routeConfig[slug];
  const reveal = useScrollReveal();

  if (!route) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-secondary mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.14em] border border-primary px-6 py-3 hover:bg-primary hover:text-white transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const products = route.getProducts();

  return (
    <div>
      {/* Hero banner */}
      <div className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <img
          src={route.heroImage}
          alt={route.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 hero-fade-in">
          <h1 className="font-serif text-3xl md:text-5xl mb-2">
            {route.title}
          </h1>
          <p className="text-sm md:text-base opacity-80 max-w-xl">
            {route.subtitle}
          </p>
        </div>
      </div>

      {/* Breadcrumb + count */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: route.title },
          ]}
        />
        <span className="text-xs text-secondary">
          {products.length} {products.length === 1 ? "product" : "products"}
        </span>
      </div>

      {/* Product grid */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 pb-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                ref={reveal}
                className={`animate-on-scroll stagger-${Math.min(index + 1, 6)}`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-secondary">
            <p className="text-lg">No products found in this category yet.</p>
            <Link
              to="/"
              className="inline-block mt-4 text-xs uppercase tracking-[0.14em] border border-primary px-6 py-3 hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
