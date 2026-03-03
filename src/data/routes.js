import products, {
  getProductsByCategory,
  newArrivals,
  saleProducts,
  bridalCollection,
  templeJewellery,
  mensCollection,
  bridalAccessories,
  groomsCollection,
} from "./products";

const routeConfig = {
  necklaces: {
    title: "Necklaces",
    subtitle: "From temple gold to diamond solitaires — adorn your neckline",
    heroImage: "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=1400&q=80",
    getProducts: () => getProductsByCategory("Necklaces"),
  },
  rings: {
    title: "Rings",
    subtitle: "Engagement solitaires, everyday bands & statement cocktail rings",
    heroImage: "https://images.unsplash.com/photo-1729751291840-3da5d4b56e6c?w=1400&q=80",
    getProducts: () => getProductsByCategory("Rings"),
  },
  earrings: {
    title: "Earrings",
    subtitle: "Jhumkas, chandbalis, studs & drops for every occasion",
    heroImage: "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=1400&q=80",
    getProducts: () => getProductsByCategory("Earrings"),
  },
  bangles: {
    title: "Bangles & Kadas",
    subtitle: "Gold bangles, diamond kadas & festive lac sets",
    heroImage: "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=1400&q=80",
    getProducts: () => getProductsByCategory("Bangles"),
  },
  mangalsutra: {
    title: "Mangalsutra",
    subtitle: "Traditional & contemporary designs for the modern bride",
    heroImage: "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=1400&q=80",
    getProducts: () => getProductsByCategory("Mangalsutra"),
  },
  new: {
    title: "New Arrivals",
    subtitle: "Just landed — the latest from India's top designers",
    heroImage: "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?w=1400&q=80",
    getProducts: () => newArrivals,
  },
  sale: {
    title: "Sale",
    subtitle: "Limited time offers on handpicked jewellery",
    heroImage: "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=1400&q=80",
    getProducts: () => saleProducts,
  },
  bridal: {
    title: "Bridal Collection",
    subtitle: "Curated sets for the most beautiful day of your life",
    heroImage: "https://images.unsplash.com/photo-1760080839060-591149703647?w=1400&q=80",
    getProducts: () => bridalCollection,
  },
  "temple-jewellery": {
    title: "Temple Jewellery",
    subtitle: "South Indian heritage — Lakshmi, peacock & coin motifs in 22K gold",
    heroImage: "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=1400&q=80",
    getProducts: () => templeJewellery,
  },
  mens: {
    title: "Men's Collection",
    subtitle: "Bold chains, kadas, rings & bracelets for the modern man",
    heroImage: "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=1400&q=80",
    getProducts: () => mensCollection,
  },
  watches: {
    title: "Watches",
    subtitle: "Elegant timepieces from India's finest watch brands",
    heroImage: "https://images.unsplash.com/photo-1766518303334-aaa928ceed45?w=1400&q=80",
    getProducts: () => getProductsByCategory("Watches"),
  },
  "nose-pins": {
    title: "Nose Pins & Naths",
    subtitle: "Diamond studs, gold rings & bridal naths for every style",
    heroImage: "https://images.unsplash.com/photo-1763017707624-213684457a9d?w=1400&q=80",
    getProducts: () => getProductsByCategory("Nose Pins"),
  },
  "maang-tikka": {
    title: "Maang Tikka",
    subtitle: "Bridal forehead ornaments — from minimalist to grand Kundan",
    heroImage: "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=1400&q=80",
    getProducts: () => getProductsByCategory("Maang Tikka"),
  },
  anklets: {
    title: "Anklets",
    subtitle: "Silver payals, gold anklets & charm designs",
    heroImage: "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=1400&q=80",
    getProducts: () => getProductsByCategory("Anklets"),
  },
  pendants: {
    title: "Pendants",
    subtitle: "Solitaire diamonds, temple gold & devotional pendants",
    heroImage: "https://images.unsplash.com/photo-1502780033682-7c480d8624b3?w=1400&q=80",
    getProducts: () => getProductsByCategory("Pendants"),
  },
  bracelets: {
    title: "Bracelets",
    subtitle: "Tennis bracelets, charm bracelets & bangle-style designs",
    heroImage: "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=1400&q=80",
    getProducts: () => getProductsByCategory("Bracelets"),
  },

  // ===== Umbrella Routes =====

  "bridal-accessories": {
    title: "Bridal Accessories",
    subtitle: "Head-to-toe bridal ornaments — maang patti, jhoomar, hathphool & more",
    heroImage: "https://images.unsplash.com/photo-1760080839060-591149703647?w=1400&q=80",
    getProducts: () => bridalAccessories,
    subCategories: [
      { name: "Maang Patti", slug: "maang-patti" },
      { name: "Jhoomar", slug: "jhoomar" },
      { name: "Jadanagam", slug: "jadanagam" },
      { name: "Kan Chain", slug: "kan-chain" },
      { name: "Bajuband", slug: "bajuband" },
      { name: "Hathphool", slug: "hathphool" },
      { name: "Kamarband", slug: "kamarband" },
      { name: "Kardhani", slug: "kardhani" },
    ],
  },
  "grooms-collection": {
    title: "Groom's Collection",
    subtitle: "Kalgi, sehra, moti haar & more — jewellery for the Indian groom",
    heroImage: "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=1400&q=80",
    getProducts: () => groomsCollection,
    subCategories: [
      { name: "Kalgi", slug: "mens-kalgi" },
      { name: "Sehra", slug: "mens-sehra" },
      { name: "Moti Haar", slug: "mens-moti-haar" },
      { name: "Bajuband", slug: "mens-bajuband" },
      { name: "Kurta Buttons", slug: "mens-kurta-buttons" },
      { name: "Brooch", slug: "mens-brooch" },
      { name: "Murki", slug: "mens-murki" },
    ],
  },

  // ===== Women's Individual Routes =====

  "maang-patti": {
    title: "Maang Patti",
    subtitle: "Ornate forehead chains — a centrepiece of the bridal solah shringar",
    heroImage: "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=1400&q=80",
    getProducts: () => getProductsByCategory("Maang Patti"),
  },
  jhoomar: {
    title: "Jhoomar",
    subtitle: "Crescent passa headpieces for the regal bride",
    heroImage: "https://images.unsplash.com/photo-1613343868927-889e61bac00d?w=1400&q=80",
    getProducts: () => getProductsByCategory("Jhoomar"),
  },
  jadanagam: {
    title: "Jadanagam",
    subtitle: "South Indian serpent braid ornaments in temple gold",
    heroImage: "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=1400&q=80",
    getProducts: () => getProductsByCategory("Jadanagam"),
  },
  "kan-chain": {
    title: "Kan Chain",
    subtitle: "Ear-to-hair chains — a delicate bridal finishing touch",
    heroImage: "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=1400&q=80",
    getProducts: () => getProductsByCategory("Kan Chain"),
  },
  bugadi: {
    title: "Bugadi",
    subtitle: "Maharashtrian ear cuffs — tradition meets contemporary design",
    heroImage: "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=1400&q=80",
    getProducts: () => getProductsByCategory("Bugadi"),
  },
  bajuband: {
    title: "Bajuband & Vanki",
    subtitle: "Upper arm ornaments — from Rajasthani Jadau to South Indian vanki",
    heroImage: "https://images.unsplash.com/photo-1758995116383-f51775896add?w=1400&q=80",
    getProducts: () => getProductsByCategory("Bajuband"),
  },
  hathphool: {
    title: "Hathphool",
    subtitle: "Hand harnesses connecting ring to bracelet — bridal hand jewellery",
    heroImage: "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=1400&q=80",
    getProducts: () => getProductsByCategory("Hathphool"),
  },
  kamarband: {
    title: "Kamarband",
    subtitle: "Bridal waist belts in gold — the crowning touch for lehengas & sarees",
    heroImage: "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=1400&q=80",
    getProducts: () => getProductsByCategory("Kamarband"),
  },
  kardhani: {
    title: "Kardhani",
    subtitle: "Waist chains & hip chains — from silver ghungroo to gold elegance",
    heroImage: "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=1400&q=80",
    getProducts: () => getProductsByCategory("Kardhani"),
  },
  bichiya: {
    title: "Bichiya",
    subtitle: "Traditional toe rings — an essential part of Indian bridal jewellery",
    heroImage: "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=1400&q=80",
    getProducts: () => getProductsByCategory("Bichiya"),
  },

  // ===== Men's Individual Routes =====

  "mens-kalgi": {
    title: "Men's Kalgi",
    subtitle: "Turban ornaments for the groom — feather-shaped crowns in gold & polki",
    heroImage: "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=1400&q=80",
    getProducts: () => getProductsByCategory("Men's Kalgi"),
  },
  "mens-sehra": {
    title: "Men's Sehra",
    subtitle: "Pearl face veils for the groom — a North Indian wedding tradition",
    heroImage: "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=1400&q=80",
    getProducts: () => getProductsByCategory("Men's Sehra"),
  },
  "mens-moti-haar": {
    title: "Men's Moti Haar",
    subtitle: "Pearl necklaces for the groom — multi-strand elegance",
    heroImage: "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=1400&q=80",
    getProducts: () => getProductsByCategory("Men's Moti Haar"),
  },
  "mens-bajuband": {
    title: "Men's Bajuband",
    subtitle: "Groom's armlets — bold cuffs in gold and silver",
    heroImage: "https://images.unsplash.com/photo-1758995116383-f51775896add?w=1400&q=80",
    getProducts: () => getProductsByCategory("Men's Bajuband"),
  },
  "mens-kurta-buttons": {
    title: "Men's Kurta Buttons",
    subtitle: "Jewelled kurta buttons — the groom's finishing detail",
    heroImage: "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=1400&q=80",
    getProducts: () => getProductsByCategory("Men's Kurta Buttons"),
  },
  "mens-brooch": {
    title: "Men's Brooch",
    subtitle: "Sherwani brooches — from Bengal tigers to diamond clusters",
    heroImage: "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=1400&q=80",
    getProducts: () => getProductsByCategory("Men's Brooch"),
  },
  "mens-murki": {
    title: "Men's Murki",
    subtitle: "Groom's ear studs — a subtle traditional ornament",
    heroImage: "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=1400&q=80",
    getProducts: () => getProductsByCategory("Men's Murki"),
  },
};

export default routeConfig;
