import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
        alt="Indian bridal jewellery collection"
        className="object-cover w-full h-full scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        style={{ animationName: "slowZoom" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 hero-fade-in">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4 opacity-80">
          Handcrafted Indian Jewellery
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
          Celebrate Every
          <br />
          <span className="italic">Occasion</span>
        </h1>
        <p className="text-sm md:text-base mt-5 max-w-md opacity-80 leading-relaxed">
          Exquisite gold, diamond & Kundan jewellery from India's finest jewellers
        </p>
        <Link to="/new" className="mt-10 inline-block bg-white text-primary px-10 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-primary hover:text-white transition-all duration-300 border border-white">
          Shop the Collection
        </Link>
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
