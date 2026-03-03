import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";

function formatPrice(amount) {
  return "\u20B9" + amount.toLocaleString("en-IN");
}

function CartItem({ item, onUpdateQty, onRemove }) {
  const key = `${item.id}_${item.selectedSize}`;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0, overflow: "hidden" }}
      transition={{ duration: 0.3 }}
      className="flex gap-4 pb-6 mb-6 border-b border-border"
    >
      <Link to={`/product/${item.id}`} className="shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover"
        />
      </Link>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] uppercase tracking-[0.12em] text-secondary font-semibold">
          {item.brand}
        </p>
        <p className="text-sm mt-0.5 truncate">{item.name}</p>
        <p className="text-[11px] text-secondary mt-1">Size: {item.selectedSize}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-border">
            <button
              onClick={() => onUpdateQty(key, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-sm hover:bg-bg-light transition-colors"
            >
              &minus;
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-sm border-x border-border">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQty(key, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-sm hover:bg-bg-light transition-colors"
            >
              +
            </button>
          </div>

          <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
        </div>

        <button
          onClick={() => onRemove(key)}
          className="text-[11px] text-secondary underline underline-offset-2 hover:text-accent transition-colors mt-2"
        >
          Remove
        </button>
      </div>
    </motion.div>
  );
}

export default function CartPage() {
  const { items, itemCount, subtotal, shippingFee, total, updateQty, removeItem } = useCart();

  function handleUpdateQty(key, qty) {
    const [id, ...sizeParts] = key.split("_");
    const selectedSize = sizeParts.join("_");
    updateQty(Number(id), selectedSize, qty);
  }

  function handleRemove(key) {
    const [id, ...sizeParts] = key.split("_");
    const selectedSize = sizeParts.join("_");
    removeItem(Number(id), selectedSize);
  }

  if (items.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <svg className="mx-auto mb-6 text-secondary" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <h1 className="font-serif text-2xl md:text-3xl">Your bag is empty</h1>
        <p className="text-secondary text-sm mt-3 max-w-sm mx-auto">
          Explore our curated collections and find something you love.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-primary text-white px-10 py-3.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-primary/85 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <h1 className="font-serif text-2xl md:text-3xl mb-1">Shopping Bag</h1>
      <p className="text-secondary text-sm mb-8">{itemCount} {itemCount === 1 ? "item" : "items"}</p>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Items list */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <CartItem
                key={`${item.id}_${item.selectedSize}`}
                item={item}
                onUpdateQty={handleUpdateQty}
                onRemove={handleRemove}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-8 border border-border p-6">
            <h2 className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Shipping</span>
                <span>{shippingFee === 0 ? "Complimentary" : formatPrice(shippingFee)}</span>
              </div>
              {shippingFee > 0 && (
                <p className="text-[11px] text-secondary">
                  Free shipping on orders above {formatPrice(10000)}
                </p>
              )}
            </div>

            <div className="flex justify-between mt-6 pt-4 border-t border-border font-medium">
              <span>Total</span>
              <span className="text-lg">{formatPrice(total)}</span>
            </div>

            <Link
              to="/checkout"
              className="block w-full mt-6 bg-primary text-white py-3.5 text-center text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-primary/85 transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/"
              className="block w-full mt-3 border border-primary text-primary py-3.5 text-center text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-primary/5 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
