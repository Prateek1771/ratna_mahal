const typeStyles = {
  "best-seller": "bg-primary text-white",
  new: "bg-primary text-white",
  sale: "bg-accent text-white",
};

const typeLabels = {
  "best-seller": "Best Seller",
  new: "New",
  sale: "Sale",
};

export default function Badge({ type, className = "" }) {
  return (
    <span
      className={`inline-block uppercase text-[10px] font-medium tracking-[0.1em] px-2.5 py-1 ${typeStyles[type] || ""} ${className}`}
    >
      {typeLabels[type] || type}
    </span>
  );
}
