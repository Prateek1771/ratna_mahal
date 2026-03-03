import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function formatPrice(amount) {
  return "\u20B9" + amount.toLocaleString("en-IN");
}

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh",
];

const inputClass = "w-full border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, subtotal, shippingFee, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pin: "",
    payment: "upi",
  });

  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address1 || !form.city || !form.state || !form.pin) {
      return;
    }
    clearCart();
    navigate("/");
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <h1 className="font-serif text-2xl md:text-3xl mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left — Form */}
        <div className="lg:col-span-3 space-y-8">
          {/* Contact */}
          <section>
            <h2 className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-4">
              Contact Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </section>

          {/* Shipping */}
          <section>
            <h2 className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-4">
              Shipping Address
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="address1"
                placeholder="Address Line 1"
                value={form.address1}
                onChange={handleChange}
                className={inputClass}
                required
              />
              <input
                type="text"
                name="address2"
                placeholder="Address Line 2 (Optional)"
                value={form.address2}
                onChange={handleChange}
                className={inputClass}
              />
              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={`${inputClass} ${!form.state ? "text-secondary" : ""}`}
                  required
                >
                  <option value="" disabled>State</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="pin"
                  placeholder="PIN Code"
                  value={form.pin}
                  onChange={handleChange}
                  className={inputClass}
                  maxLength={6}
                  required
                />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-4">
              Payment Method
            </h2>
            <div className="space-y-3">
              {[
                { value: "upi", label: "UPI" },
                { value: "card", label: "Credit / Debit Card" },
                { value: "netbanking", label: "Net Banking" },
                { value: "cod", label: "Cash on Delivery" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 border px-4 py-3.5 cursor-pointer transition-colors ${
                    form.payment === opt.value ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={opt.value}
                    checked={form.payment === opt.value}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <span className="text-sm">{opt.label}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* Right — Summary */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-8 border border-border p-6">
            <h2 className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={`${item.id}_${item.selectedSize}`} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-secondary">{item.brand}</p>
                    <p className="text-sm truncate">{item.name}</p>
                    <p className="text-[11px] text-secondary">
                      {item.selectedSize} &middot; Qty {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm shrink-0">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm border-t border-border pt-4">
              <div className="flex justify-between">
                <span className="text-secondary">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Shipping</span>
                <span>{shippingFee === 0 ? "Complimentary" : formatPrice(shippingFee)}</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-border font-medium">
              <span>Total</span>
              <span className="text-lg">{formatPrice(total)}</span>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-primary/85 active:scale-[0.99] transition-all"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
