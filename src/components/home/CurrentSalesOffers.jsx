import { motion } from "motion/react";
import PromoCard from "../ui/PromoCard";

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.15 } },
};

export default function CurrentSalesOffers() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <PromoCard
            title="Get 10% Off Your First Order"
            subtitle="Use code JEWEL10 at checkout. Valid for new customers only."
            ctaText="Shop Now"
          />
        </motion.div>
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <PromoCard
            title="Free Shipping Across India"
            subtitle="On all orders above ₹10,000. Cash on Delivery available."
            ctaText="Learn More"
          />
        </motion.div>
      </div>
    </section>
  );
}
