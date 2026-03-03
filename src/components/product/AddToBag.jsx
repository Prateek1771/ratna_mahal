import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function AddToBag({ product, selectedSize }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const needsSize = product?.sizes && product.sizes.length > 0;
  const disabled = needsSize && !selectedSize;

  function handleClick() {
    if (disabled || !product) return;
    addItem({
      id: product.id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      image: product.images[0],
      selectedSize: selectedSize || "One Size",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`w-full py-4 text-[12px] uppercase tracking-[0.18em] font-medium active:scale-[0.99] transition-all duration-200 ${
          disabled
            ? "bg-border text-secondary cursor-not-allowed"
            : added
            ? "bg-green-800 text-white"
            : "bg-primary text-white hover:bg-primary/85"
        }`}
      >
        {added ? "Added to Bag" : disabled ? "Select a Size" : "Add to Bag"}
      </button>
      <p className="text-center text-[11px] text-secondary mt-2.5 tracking-wide">
        Free shipping across India on orders above &#x20B9;10,000
      </p>
    </div>
  );
}
