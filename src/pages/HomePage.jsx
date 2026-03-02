import HeroSection from "../components/home/HeroSection";
import CurrentSalesOffers from "../components/home/CurrentSalesOffers";
import ProductCarousel from "../components/home/ProductCarousel";
import CategoryGrid from "../components/home/CategoryGrid";
import DesignerFeature from "../components/home/DesignerFeature";
import { saleProducts, bestSellers, newArrivals, backByDemand } from "../data/products";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CurrentSalesOffers />
      <ProductCarousel title="Just Went on Sale" products={saleProducts} />
      <CategoryGrid />
      <ProductCarousel title="Best Sellers" products={bestSellers} />
      <ProductCarousel title="New Arrivals" products={newArrivals} />
      <ProductCarousel title="Back by Popular Demand" products={backByDemand} />
      <DesignerFeature />
    </main>
  );
}
