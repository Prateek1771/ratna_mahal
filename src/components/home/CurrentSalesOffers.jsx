import PromoCard from "../ui/PromoCard";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function CurrentSalesOffers() {
  const reveal = useScrollReveal();

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div ref={reveal} className="animate-on-scroll slide-left">
          <PromoCard
            title="Get 10% Off Your First Order"
            subtitle="Use code JEWEL10 at checkout. Valid for new customers only."
            ctaText="Shop Now"
          />
        </div>
        <div ref={reveal} className="animate-on-scroll slide-right">
          <PromoCard
            title="Free Shipping Across India"
            subtitle="On all orders above ₹10,000. Cash on Delivery available."
            ctaText="Learn More"
          />
        </div>
      </div>
    </section>
  );
}
