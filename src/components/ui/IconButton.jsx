export default function IconButton({
  children,
  className = "",
  ariaLabel,
  ...rest
}) {
  return (
    <button
      aria-label={ariaLabel}
      className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
