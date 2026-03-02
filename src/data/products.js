const products = [
  {
    id: 1,
    brand: "Tanishq",
    name: "Divyam Kundan Bridal Necklace Set in 22K Gold",
    price: 285000,
    originalPrice: null,
    badge: "best-seller",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: ["16 inch", "18 inch", "20 inch"],
    description: "An exquisite Kundan bridal necklace from Tanishq's Divyam collection. Handcrafted by master karigars in 22K gold with uncut diamonds, polki, and meenakari work on the reverse. A statement piece for the modern Indian bride.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 2,
    brand: "Sabyasachi",
    name: "Heritage Jadau Ring in 22K Gold with Uncut Diamonds",
    price: 175000,
    originalPrice: null,
    badge: "best-seller",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1719559746390-57f3af2794ab?w=800&q=80",
      "https://images.unsplash.com/photo-1771782191574-caf77b4522fe?w=800&q=80",
      "https://images.unsplash.com/photo-1729751291840-3da5d4b56e6c?w=800&q=80",
      "https://images.unsplash.com/photo-1720093601709-66ce9c0068a1?w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10", "12", "14", "16"],
    description: "A regal Jadau ring from Sabyasachi's Heritage collection, featuring uncut diamonds set in 22K gold with intricate hand-engraved detailing inspired by Mughal jewellery traditions.",
    aboutBrand: "Sabyasachi Mukherjee's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 3,
    brand: "Kalyan Jewellers",
    name: "Mudhra Antique Gold Bangle Set (Set of 4)",
    price: 95000,
    originalPrice: 120000,
    badge: "sale",
    category: "Bangles",
    images: [
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1770399821052-78e8244290d3?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80"
    ],
    sizes: ["2.4", "2.6", "2.8", "2.10"],
    description: "A stunning set of four antique-finish bangles from the Mudhra collection. Crafted in 22K gold with traditional South Indian temple motifs and fine granulation work. BIS Hallmarked.",
    aboutBrand: "Kalyan Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 4,
    brand: "Amrapali",
    name: "Rajasthani Chandbali Earrings in Silver with Gold Plating",
    price: 18500,
    originalPrice: 24000,
    badge: "sale",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1714733831162-0a6e849141be?w=800&q=80",
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80"
    ],
    sizes: [],
    description: "Handcrafted Chandbali earrings inspired by the royal jewellery of Rajasthan. Features crescent moon design with dangling pearls, kundan setting, and meenakari enamel work in vibrant colours.",
    aboutBrand: "Amrapali Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 5,
    brand: "Malabar Gold & Diamonds",
    name: "Mine Diamond Solitaire Pendant Necklace in 18K Gold",
    price: 145000,
    originalPrice: null,
    badge: "new",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?w=800&q=80",
      "https://images.unsplash.com/photo-1502780033682-7c480d8624b3?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80"
    ],
    sizes: ["16 inch", "18 inch"],
    description: "An elegant solitaire diamond pendant from the Mine collection, featuring a brilliant-cut certified diamond in an 18K white gold bezel setting on a delicate chain. Perfect for everyday luxury.",
    aboutBrand: "Malabar Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 6,
    brand: "Sabyasachi",
    name: "Royal Bengal Gold Kada with Polki Diamonds",
    price: 350000,
    originalPrice: null,
    badge: null,
    category: "Bangles",
    images: [
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1770399821052-78e8244290d3?w=800&q=80"
    ],
    sizes: ["2.4", "2.6", "2.8"],
    description: "A majestic gold kada from Sabyasachi's Royal Bengal collection. Features elaborate Polki diamond work with enamel detailing, inspired by the jewellery of Bengal's zamindars.",
    aboutBrand: "Sabyasachi Mukherjee's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 7,
    brand: "Tanishq",
    name: "Rivaah Gold Mangalsutra with Diamond Pendant",
    price: 65000,
    originalPrice: 82000,
    badge: "sale",
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80",
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80",
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80"
    ],
    sizes: ["18 inch", "20 inch", "22 inch"],
    description: "A contemporary mangalsutra from Tanishq's Rivaah bridal collection, featuring a stunning diamond-studded pendant on a delicate gold and black beaded chain. The perfect blend of tradition and modernity.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 8,
    brand: "Titan Raga",
    name: "Raga Moonlight Garden Watch in Rose Gold",
    price: 8995,
    originalPrice: null,
    badge: "new",
    category: "Watches",
    images: [
      "https://images.unsplash.com/photo-1766518303334-aaa928ceed45?w=800&q=80",
      "https://images.unsplash.com/photo-1767009951352-a271b6155eeb?w=800&q=80",
      "https://images.unsplash.com/photo-1762071775668-68a2dfda0318?w=800&q=80",
      "https://images.unsplash.com/photo-1767009951316-c3d2b63179ef?w=800&q=80"
    ],
    sizes: [],
    description: "A graceful women's watch from Titan Raga's Moonlight Garden collection. Features a mother-of-pearl dial with crystal hour markers, set in a rose gold-plated stainless steel case with a mesh bracelet.",
    aboutBrand: "Titan Raga, from the Tata Group, is India's leading women's watch brand, known for elegant designs that celebrate the spirit of the Indian woman."
  },
  {
    id: 9,
    brand: "CaratLane",
    name: "Paisley Dreams 18K Gold Ring with Diamonds",
    price: 32000,
    originalPrice: null,
    badge: null,
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1639560253263-55eb77367e84?w=800&q=80",
      "https://images.unsplash.com/photo-1726256677740-dfd61fa1af26?w=800&q=80",
      "https://images.unsplash.com/photo-1719559746390-57f3af2794ab?w=800&q=80",
      "https://images.unsplash.com/photo-1655707063092-5c4509de41b8?w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10", "12", "14"],
    description: "A delicate everyday ring from CaratLane's Paisley Dreams collection, featuring the iconic Indian paisley motif in 18K gold accented with brilliant-cut diamonds. Lightweight and perfect for daily wear.",
    aboutBrand: "CaratLane, a Tanishq partnership, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 10,
    brand: "Amrapali",
    name: "Tribal Silver Jhumka Earrings with Gold Wash",
    price: 12500,
    originalPrice: 16000,
    badge: "sale",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1714733831162-0a6e849141be?w=800&q=80",
      "https://images.unsplash.com/photo-1597055952513-4e9bce9345c3?w=800&q=80"
    ],
    sizes: [],
    description: "Traditional bell-shaped Jhumka earrings handcrafted by Rajasthani artisans. Sterling silver with gold wash finish, adorned with ghungroo beads and intricate filigree work.",
    aboutBrand: "Amrapali Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 11,
    brand: "Kalyan Jewellers",
    name: "Tejasvi Temple Gold Necklace in 22K",
    price: 225000,
    originalPrice: null,
    badge: "best-seller",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: ["18 inch", "20 inch"],
    description: "A magnificent temple jewellery necklace from the Tejasvi collection. Crafted in 22K gold with Lakshmi and peacock motifs, rubies, emeralds, and traditional kemp stones. A South Indian masterpiece.",
    aboutBrand: "Kalyan Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 12,
    brand: "Tanishq",
    name: "Mia by Tanishq Diamond Pendant Chain in 14K Gold",
    price: 28000,
    originalPrice: null,
    badge: null,
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1502780033682-7c480d8624b3?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80"
    ],
    sizes: ["16 inch", "18 inch"],
    description: "A minimalist diamond pendant from Mia by Tanishq, designed for the modern working woman. Lightweight 14K gold chain with a dainty diamond-studded geometric pendant. Perfect for office and everyday wear.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 13,
    brand: "Titan Raga",
    name: "Raga Viva Analog Watch in Gold Tone",
    price: 6495,
    originalPrice: null,
    badge: "new",
    category: "Watches",
    images: [
      "https://images.unsplash.com/photo-1767009951352-a271b6155eeb?w=800&q=80",
      "https://images.unsplash.com/photo-1768062251804-92344088e223?w=800&q=80",
      "https://images.unsplash.com/photo-1766518303334-aaa928ceed45?w=800&q=80",
      "https://images.unsplash.com/photo-1767009951316-c3d2b63179ef?w=800&q=80"
    ],
    sizes: [],
    description: "The Raga Viva collection brings contemporary elegance with a champagne dial, Swarovski crystal indices, and a gold-tone stainless steel bracelet. Water-resistant and built for the modern Indian woman.",
    aboutBrand: "Titan Raga, from the Tata Group, is India's leading women's watch brand, known for elegant designs that celebrate the spirit of the Indian woman."
  },
  {
    id: 14,
    brand: "Malabar Gold & Diamonds",
    name: "Era Uncut Diamond Rani Haar in 22K Gold",
    price: 425000,
    originalPrice: 495000,
    badge: "sale",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80"
    ],
    sizes: ["22 inch", "24 inch"],
    description: "A grand Rani Haar (long necklace) from the Era collection, featuring uncut diamonds, emeralds, and south sea pearls set in 22K gold. Designed for bridal trousseau and special celebrations.",
    aboutBrand: "Malabar Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 15,
    brand: "CaratLane",
    name: "Aarya Navratna Ring in 18K Gold",
    price: 45000,
    originalPrice: null,
    badge: null,
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1771782191574-caf77b4522fe?w=800&q=80",
      "https://images.unsplash.com/photo-1639560253263-55eb77367e84?w=800&q=80",
      "https://images.unsplash.com/photo-1720093601709-66ce9c0068a1?w=800&q=80",
      "https://images.unsplash.com/photo-1726256677740-dfd61fa1af26?w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10", "12"],
    description: "A beautiful Navratna ring featuring nine precious gemstones — ruby, emerald, yellow sapphire, diamond, blue sapphire, hessonite, cat's eye, pearl, and red coral — set in 18K gold. Believed to bring good fortune.",
    aboutBrand: "CaratLane, a Tanishq partnership, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 16,
    brand: "Amrapali",
    name: "Kundan Maang Tikka with Pearl Drops",
    price: 15500,
    originalPrice: null,
    badge: "new",
    category: "Maang Tikka",
    images: [
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80"
    ],
    sizes: [],
    description: "A stunning Kundan maang tikka (forehead ornament) with delicate pearl drops. Handcrafted in silver with gold plating, featuring traditional Rajasthani stone setting and meenakari enamel on the back.",
    aboutBrand: "Amrapali Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 17,
    brand: "Tanishq",
    name: "Rivaah Bengali Gold Choker with Ruby & Emerald",
    price: 195000,
    originalPrice: 245000,
    badge: "sale",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80"
    ],
    sizes: ["14 inch", "16 inch"],
    description: "A resplendent Bengali choker from the Rivaah regional bridal collection. Crafted in 22K gold with traditional nakshi work, rubies, and emeralds. Inspired by the jewellery worn by Bengali brides on their wedding day.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 18,
    brand: "Kalyan Jewellers",
    name: "Ziah Solitaire Diamond Earrings in 18K White Gold",
    price: 78000,
    originalPrice: null,
    badge: null,
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1597055952513-4e9bce9345c3?w=800&q=80",
      "https://images.unsplash.com/photo-1714733831162-0a6e849141be?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80"
    ],
    sizes: [],
    description: "Classic solitaire diamond stud earrings from the Ziah collection, featuring IGI-certified brilliant-cut diamonds in a four-prong 18K white gold setting. Timeless elegance for every occasion.",
    aboutBrand: "Kalyan Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 19,
    brand: "Sabyasachi",
    name: "Gulkand Polki Choker Set with Earrings",
    price: 475000,
    originalPrice: null,
    badge: "best-seller",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80"
    ],
    sizes: ["14 inch", "16 inch"],
    description: "The iconic Gulkand bridal set from Sabyasachi's flagship collection. A magnificent Polki choker with matching earrings, featuring uncut diamonds, emeralds, and baroque pearls set in 22K gold with fine meenakari.",
    aboutBrand: "Sabyasachi Mukherjee's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 20,
    brand: "CaratLane",
    name: "Bloom 18K Rose Gold Diamond Nose Pin",
    price: 8500,
    originalPrice: null,
    badge: "new",
    category: "Nose Pins",
    images: [
      "https://images.unsplash.com/photo-1763017707624-213684457a9d?w=800&q=80",
      "https://images.unsplash.com/photo-1762709414326-67c887a8dc98?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80"
    ],
    sizes: [],
    description: "A dainty floral nose pin from CaratLane's Bloom collection, featuring a single brilliant-cut diamond set in 18K rose gold. Screw-back closure for secure and comfortable everyday wear.",
    aboutBrand: "CaratLane, a Tanishq partnership, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 21,
    brand: "Tanishq",
    name: "Rivaah Gold Mangalsutra with Black Beads in 22K",
    price: 48000,
    originalPrice: null,
    badge: null,
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80",
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80",
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80"
    ],
    sizes: ["18 inch", "20 inch"],
    description: "A classic mangalsutra from Tanishq's Rivaah collection with traditional black beads and a 22K gold pendant featuring delicate filigree work.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 22,
    brand: "Malabar Gold & Diamonds",
    name: "Mine Diamond Mangalsutra Pendant in 18K Gold",
    price: 55000,
    originalPrice: 68000,
    badge: "sale",
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80",
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80",
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80"
    ],
    sizes: ["18 inch", "20 inch", "22 inch"],
    description: "A contemporary diamond mangalsutra from the Mine collection with a geometric pendant set in 18K gold. Modern design meets tradition.",
    aboutBrand: "Malabar Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 23,
    brand: "CaratLane",
    name: "Mangalsutra Bracelet in 18K Rose Gold",
    price: 32000,
    originalPrice: null,
    badge: "new",
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80",
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80",
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A modern mangalsutra reimagined as an elegant bracelet in 18K rose gold with black onyx beads and a diamond-studded charm.",
    aboutBrand: "CaratLane, a Tanishq partnership, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 24,
    brand: "Kalyan Jewellers",
    name: "Mudhra Temple Gold Bangle in 22K",
    price: 78000,
    originalPrice: null,
    badge: null,
    category: "Bangles",
    images: [
      "https://images.unsplash.com/photo-1770399821052-78e8244290d3?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80"
    ],
    sizes: ["2.4", "2.6", "2.8"],
    description: "A heavy temple-style bangle from the Mudhra collection, featuring Lakshmi motifs and intricate nakshi work in 22K gold. BIS Hallmarked.",
    aboutBrand: "Kalyan Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 25,
    brand: "Tanishq",
    name: "Mia Diamond Bangle in 18K Gold",
    price: 42000,
    originalPrice: 52000,
    badge: "sale",
    category: "Bangles",
    images: [
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["2.4", "2.6", "2.8"],
    description: "A sleek diamond-studded bangle from Mia by Tanishq, featuring a row of brilliant-cut diamonds in an 18K gold setting. Perfect for everyday elegance.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 26,
    brand: "Amrapali",
    name: "Rajasthani Lac Bangles Set with Kundan (Set of 6)",
    price: 14500,
    originalPrice: null,
    badge: "new",
    category: "Bangles",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1770399821052-78e8244290d3?w=800&q=80"
    ],
    sizes: ["2.4", "2.6", "2.8"],
    description: "A vibrant set of six lac bangles with Kundan stone setting and mirror work, handcrafted by Rajasthani artisans. Traditional festive wear.",
    aboutBrand: "Amrapali Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 27,
    brand: "Tanishq",
    name: "Divyam Diamond Studs in 18K White Gold",
    price: 38000,
    originalPrice: null,
    badge: null,
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1714733831162-0a6e849141be?w=800&q=80",
      "https://images.unsplash.com/photo-1597055952513-4e9bce9345c3?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80"
    ],
    sizes: [],
    description: "Classic diamond stud earrings from the Divyam collection, featuring round brilliant diamonds in a prong setting of 18K white gold.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 28,
    brand: "Malabar Gold & Diamonds",
    name: "Era Gold Jhumka Earrings in 22K",
    price: 52000,
    originalPrice: null,
    badge: "best-seller",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80"
    ],
    sizes: [],
    description: "Traditional gold jhumka earrings from the Era collection, crafted in 22K gold with filigree work and gold bead detailing. A South Indian classic.",
    aboutBrand: "Malabar Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 29,
    brand: "CaratLane",
    name: "Paisley Dreams Diamond Ring in 18K Rose Gold",
    price: 28000,
    originalPrice: 35000,
    badge: "sale",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1742240439165-60790db1ee93?w=800&q=80",
      "https://images.unsplash.com/photo-1719559746390-57f3af2794ab?w=800&q=80",
      "https://images.unsplash.com/photo-1655707063092-5c4509de41b8?w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "A rose gold diamond ring from the Paisley Dreams collection featuring a delicate floral motif with micro-pave diamonds.",
    aboutBrand: "CaratLane, a Tanishq partnership, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 30,
    brand: "Malabar Gold & Diamonds",
    name: "Mine Solitaire Engagement Ring in Platinum",
    price: 125000,
    originalPrice: null,
    badge: "new",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1729751291840-3da5d4b56e6c?w=800&q=80",
      "https://images.unsplash.com/photo-1771782191574-caf77b4522fe?w=800&q=80",
      "https://images.unsplash.com/photo-1720093601709-66ce9c0068a1?w=800&q=80"
    ],
    sizes: ["5", "6", "7", "8", "9", "10"],
    description: "A stunning solitaire engagement ring featuring an IGI-certified round brilliant diamond in a classic six-prong platinum setting.",
    aboutBrand: "Malabar Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 31,
    brand: "Sabyasachi",
    name: "Heritage Kundan Maang Tikka with Emerald Drop",
    price: 24000,
    originalPrice: null,
    badge: null,
    category: "Maang Tikka",
    images: [
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80",
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80"
    ],
    sizes: [],
    description: "A bridal maang tikka from the Heritage collection, featuring Kundan work with an emerald drop and pearl strings in gold-plated silver.",
    aboutBrand: "Sabyasachi Mukherjee's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 32,
    brand: "Tanishq",
    name: "Rivaah Bridal Maang Tikka in 22K Gold",
    price: 35000,
    originalPrice: 42000,
    badge: "sale",
    category: "Maang Tikka",
    images: [
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80",
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80"
    ],
    sizes: [],
    description: "A traditional bridal maang tikka from the Rivaah collection, crafted in 22K gold with rubies and pearls. Adjustable chain for comfort.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 33,
    brand: "Tanishq",
    name: "Mia Diamond Nose Ring in 18K Gold",
    price: 12000,
    originalPrice: null,
    badge: null,
    category: "Nose Pins",
    images: [
      "https://images.unsplash.com/photo-1762709414326-67c887a8dc98?w=800&q=80",
      "https://images.unsplash.com/photo-1763017707624-213684457a9d?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80"
    ],
    sizes: [],
    description: "A delicate diamond nose ring from Mia by Tanishq, with a cluster of diamonds set in 18K yellow gold. Wire-back closure.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 34,
    brand: "Amrapali",
    name: "Silver Nath with Pearl Chain (Bridal Nose Ring)",
    price: 9500,
    originalPrice: null,
    badge: "best-seller",
    category: "Nose Pins",
    images: [
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1762709414326-67c887a8dc98?w=800&q=80",
      "https://images.unsplash.com/photo-1763017707624-213684457a9d?w=800&q=80"
    ],
    sizes: [],
    description: "A statement bridal nath (nose ring) with pearl chain, handcrafted in sterling silver with gold plating and Kundan stone setting.",
    aboutBrand: "Amrapali Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 35,
    brand: "Kalyan Jewellers",
    name: "Tejasvi Temple Necklace with Lakshmi Pendant in 22K",
    price: 185000,
    originalPrice: null,
    badge: null,
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: ["18 inch", "20 inch"],
    description: "A traditional temple necklace with Goddess Lakshmi pendant, crafted in 22K gold with kemp stones and rubies. South Indian heritage piece.",
    aboutBrand: "Kalyan Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 36,
    brand: "Malabar Gold & Diamonds",
    name: "Kasavu Temple Gold Haram with Ruby in 22K",
    price: 320000,
    originalPrice: 375000,
    badge: "sale",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?w=800&q=80"
    ],
    sizes: ["24 inch", "26 inch"],
    description: "A magnificent temple haram (long necklace) from the Kasavu collection, featuring elaborate deity motifs, rubies, and coin designs in 22K gold.",
    aboutBrand: "Malabar Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 37,
    brand: "Tanishq",
    name: "Maharaja 22K Gold Figaro Chain",
    price: 85000,
    originalPrice: null,
    badge: "new",
    category: "Men's Chains",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1605812276723-c31bb1a68285?w=800&q=80",
      "https://images.unsplash.com/photo-1772289935001-a50146e62ce1?w=800&q=80"
    ],
    sizes: ["20 inch", "22 inch", "24 inch"],
    description: "A bold Figaro chain in 22K gold from Tanishq's men's collection. Features alternating link pattern with a high-polish finish. BIS Hallmarked and perfect for everyday wear or layering.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 38,
    brand: "Sabyasachi",
    name: "Heritage Gold Kada for Men",
    price: 65000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Kadas",
    images: [
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1772289935001-a50146e62ce1?w=800&q=80",
      "https://images.unsplash.com/photo-1767096612165-b5a33caa48a5?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "A substantial gold kada for men from Sabyasachi's Heritage collection. Crafted in 22K gold with traditional hand-engraved motifs inspired by Rajput warrior jewellery. A symbol of strength and heritage.",
    aboutBrand: "Sabyasachi Mukherjee's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 39,
    brand: "Kalyan Jewellers",
    name: "Bold Signet Ring in 22K Gold",
    price: 48000,
    originalPrice: null,
    badge: null,
    category: "Men's Rings",
    images: [
      "https://images.unsplash.com/photo-1615119799858-2b4aebdc80d8?w=800&q=80",
      "https://images.unsplash.com/photo-1677144197445-0c090669c1ec?w=800&q=80",
      "https://images.unsplash.com/photo-1613142659446-bf37da865799?w=800&q=80"
    ],
    sizes: ["8", "9", "10", "11", "12", "13"],
    description: "A commanding signet ring in 22K gold with a flat, engravable top and tapered band. Substantial weight with a brushed matte finish. A modern take on the classic gentleman's ring.",
    aboutBrand: "Kalyan Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 40,
    brand: "CaratLane",
    name: "Diamond Accent Bracelet in 18K Gold",
    price: 35000,
    originalPrice: null,
    badge: "new",
    category: "Men's Bracelets",
    images: [
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1772289935001-a50146e62ce1?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A sleek men's bracelet in 18K gold with subtle diamond accents. Features a modern curb link design with a secure fold-over clasp. Lightweight yet striking.",
    aboutBrand: "CaratLane, a Tanishq partnership, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 41,
    brand: "Amrapali",
    name: "Classic Gold Cufflinks with Enamel",
    price: 22000,
    originalPrice: null,
    badge: null,
    category: "Men's Cufflinks",
    images: [
      "https://images.unsplash.com/photo-1767096612165-b5a33caa48a5?w=800&q=80",
      "https://images.unsplash.com/photo-1772289935001-a50146e62ce1?w=800&q=80",
      "https://images.unsplash.com/photo-1605812276723-c31bb1a68285?w=800&q=80"
    ],
    sizes: [],
    description: "Handcrafted gold cufflinks with traditional Rajasthani enamel work. Features vibrant meenakari detailing on 22K gold with a hinged T-bar closure. Perfect for weddings and formal occasions.",
    aboutBrand: "Amrapali Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 42,
    brand: "Malabar Gold & Diamonds",
    name: "Om Pendant with Gold Chain in 22K",
    price: 42000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Chains",
    images: [
      "https://images.unsplash.com/photo-1605812276723-c31bb1a68285?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1767096612165-b5a33caa48a5?w=800&q=80"
    ],
    sizes: ["20 inch", "22 inch"],
    description: "A devotional Om pendant in 22K gold on a sturdy cable chain. The pendant features raised Om symbol with diamond-cut detailing. A meaningful accessory for the modern man.",
    aboutBrand: "Malabar Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 43,
    brand: "CaratLane",
    name: "Platinum & Gold Men's Band Ring",
    price: 28000,
    originalPrice: null,
    badge: null,
    category: "Men's Rings",
    images: [
      "https://images.unsplash.com/photo-1677144197445-0c090669c1ec?w=800&q=80",
      "https://images.unsplash.com/photo-1613142659446-bf37da865799?w=800&q=80",
      "https://images.unsplash.com/photo-1615119799858-2b4aebdc80d8?w=800&q=80"
    ],
    sizes: ["8", "9", "10", "11", "12"],
    description: "A contemporary men's band ring combining platinum and 18K gold in a two-tone design. Features a comfort-fit band with brushed platinum centre and polished gold edges.",
    aboutBrand: "CaratLane, a Tanishq partnership, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 44,
    brand: "Tanishq",
    name: "Rudraksha Gold Bracelet in 22K",
    price: 38000,
    originalPrice: null,
    badge: "new",
    category: "Men's Bracelets",
    images: [
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1767096612165-b5a33caa48a5?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A spiritual men's bracelet featuring genuine Rudraksha beads strung with 22K gold links and caps. Combines traditional significance with modern design. Adjustable clasp for perfect fit.",
    aboutBrand: "Tanishq, from the house of Tata, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  }
];

export const saleProducts = products.filter(p => p.badge === "sale");
export const bestSellers = products.filter(p => p.badge === "best-seller");
export const newArrivals = products.filter(p => p.badge === "new");
export const backByDemand = [products[0], products[5], products[8], products[11], products[14]];

export function getProductsByCategory(category) {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getProductsByBrand(brand) {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}

export const templeJewellery = products.filter(p =>
  p.name.toLowerCase().includes("temple") ||
  p.description.toLowerCase().includes("temple") ||
  p.description.toLowerCase().includes("lakshmi") ||
  p.description.toLowerCase().includes("kemp")
);

export const bridalCollection = products.filter(p =>
  p.name.toLowerCase().includes("bridal") ||
  p.name.toLowerCase().includes("rivaah") ||
  p.description.toLowerCase().includes("bridal") ||
  p.category === "Mangalsutra" ||
  p.category === "Maang Tikka" ||
  (p.price >= 100000 && ["Necklaces", "Bangles"].includes(p.category))
);

export const giftItems = products.filter(p =>
  p.price <= 50000 ||
  p.badge === "new" ||
  p.category === "Watches"
);

export const mensCollection = products.filter(p =>
  p.category.startsWith("Men's")
);

export default products;
