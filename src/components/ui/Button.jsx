const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary/90",
  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  accent:
    "bg-accent text-white hover:bg-accent/90",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  return (
    <button
      className={`px-6 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors duration-200 ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
