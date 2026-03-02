import products, {
  getProductsByCategory,
  newArrivals,
  saleProducts,
  bridalCollection,
  templeJewellery,
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
};

export default routeConfig;
