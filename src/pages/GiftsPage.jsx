import products from "../data/products";
import ProductCarousel from "../components/home/ProductCarousel";
import Breadcrumb from "../components/product/Breadcrumb";

const priceRanges = [
  {
    title: "Under ₹15,000",
    subtitle: "Thoughtful gifts that sparkle",
    filter: (p) => p.price < 15000,
  },
  {
    title: "₹15,000 – ₹50,000",
    subtitle: "Everyday luxury they'll treasure",
    filter: (p) => p.price >= 15000 && p.price < 50000,
  },
  {
    title: "₹50,000 – ₹1,00,000",
    subtitle: "For the moments that matter most",
    filter: (p) => p.price >= 50000 && p.price < 100000,
  },
  {
    title: "Luxury — ₹1 Lakh+",
    subtitle: "The ultimate statement of love",
    filter: (p) => p.price >= 100000,
  },
];

export default function GiftsPage() {
  return (
    <div>
      {/* Hero banner */}
      <div className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1759906766380-7a5849e6fb13?w=1400&q=80"
          alt="Gift Guide"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 hero-fade-in">
          <h1 className="font-serif text-3xl md:text-5xl mb-2">Gift Guide</h1>
          <p className="text-sm md:text-base opacity-80 max-w-xl">
            Find the perfect jewellery gift — curated by price range
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-2">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Gifts" },
          ]}
        />
      </div>

      {/* Price range sections */}
      {priceRanges.map((range) => {
        const rangeProducts = products.filter(range.filter);
        if (rangeProducts.length === 0) return null;

        return (
          <ProductCarousel
            key={range.title}
            title={range.title}
            subtitle={range.subtitle}
            products={rangeProducts}
          />
        );
      })}
    </div>
  );
}
