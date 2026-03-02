import Breadcrumb from "./Breadcrumb";
import Badge from "../ui/Badge";
import SizeSelector from "./SizeSelector";
import AddToBag from "./AddToBag";
import ShippingBanner from "./ShippingBanner";
import ProductDetails from "./ProductDetails";
import ShippingReturns from "./ShippingReturns";

function formatPrice(amount) {
  return "\u20B9" + amount.toLocaleString("en-IN");
}

export default function ProductInfo({ product }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product.category, href: `/${product.category.toLowerCase()}` },
    { label: product.brand, href: "#" },
  ];

  const emiAmount = Math.round(product.price / 6);

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      {product.badge && (
        <div className="mt-5">
          <Badge type={product.badge} />
        </div>
      )}

      <p className="text-[11px] uppercase tracking-[0.14em] font-semibold mt-5 text-primary/80">
        {product.brand}
      </p>

      <h1 className="font-serif text-2xl md:text-[28px] mt-1.5 leading-snug">{product.name}</h1>

      <div className="mt-4">
        {product.originalPrice ? (
          <div className="flex items-baseline gap-2.5">
            <span className="line-through text-secondary text-sm">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="text-accent text-xl font-semibold">
              {formatPrice(product.price)}
            </span>
          </div>
        ) : (
          <span className="text-xl">{formatPrice(product.price)}</span>
        )}
      </div>

      <p className="text-[11px] text-secondary mt-2 tracking-wide">
        No-cost EMI from {formatPrice(emiAmount)}/month &middot; UPI &amp; COD available
      </p>

      <div className="mt-8 pt-6 border-t border-border">
        {product.sizes && product.sizes.length > 0 && (
          <div>
            <SizeSelector sizes={product.sizes} />
          </div>
        )}

        <div className="mt-5">
          <AddToBag />
        </div>
      </div>

      <div className="mt-6">
        <ShippingBanner />
      </div>

      <div className="mt-6">
        <ProductDetails description={product.description} />
      </div>

      <div>
        <ShippingReturns />
      </div>
    </div>
  );
}
