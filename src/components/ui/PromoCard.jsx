export default function PromoCard({
  title,
  subtitle,
  ctaText,
  bgColor = "bg-bg-cream",
}) {
  return (
    <div className={`${bgColor} p-8 md:p-10 border border-border/50 group cursor-pointer hover:border-border transition-colors duration-300`}>
      <h3 className="font-serif text-xl md:text-2xl">{title}</h3>
      {subtitle && <p className="text-secondary text-sm mt-2 leading-relaxed">{subtitle}</p>}
      {ctaText && (
        <span className="text-[11px] uppercase tracking-[0.15em] mt-4 inline-block border-b border-primary pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors duration-200">
          {ctaText}
        </span>
      )}
    </div>
  );
}
