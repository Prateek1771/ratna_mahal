import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductImageGallery from "../components/product/ProductImageGallery";
import MobileImageGallery from "../components/product/MobileImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductCarousel from "../components/home/ProductCarousel";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-secondary text-lg">Product not found.</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 8);

  const brandProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 8);

  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="md:grid md:grid-cols-[58%_42%] md:gap-8">
          <div>
            <ProductImageGallery images={product.images} />
            <MobileImageGallery images={product.images} />
          </div>
          <div className="md:sticky md:top-4 md:self-start mt-6 md:mt-0">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <ProductCarousel title="You May Also Like" products={relatedProducts} />
      )}
      {brandProducts.length > 0 && (
        <ProductCarousel
          title={`More From ${product.brand}`}
          products={brandProducts}
        />
      )}
    </main>
  );
}
