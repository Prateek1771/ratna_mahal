export default function AddToBag() {
  return (
    <div>
      <button className="w-full bg-primary text-white py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-primary/85 active:scale-[0.99] transition-all duration-200">
        Add to Bag
      </button>
      <p className="text-center text-[11px] text-secondary mt-2.5 tracking-wide">
        Free shipping across India on orders above &#x20B9;10,000
      </p>
    </div>
  );
}
