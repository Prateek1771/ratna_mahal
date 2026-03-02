export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-serif text-2xl md:text-3xl tracking-wide">{title}</h2>
      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-border" />
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        <span className="h-px w-8 bg-border" />
      </div>
      {subtitle && (
        <p className="text-secondary text-sm mt-3 max-w-md mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
