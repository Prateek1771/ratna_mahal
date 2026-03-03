const products = [
  {
    id: 1,
    brand: "Suvarni",
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
    description: "An exquisite Kundan bridal necklace from Suvarni's Divyam collection. Handcrafted by master karigars in 22K gold with uncut diamonds, polki, and meenakari work on the reverse. A statement piece for the modern Indian bride.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 2,
    brand: "Vaidehi",
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
    description: "A regal Jadau ring from Vaidehi's Heritage collection, featuring uncut diamonds set in 22K gold with intricate hand-engraved detailing inspired by Mughal jewellery traditions.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 3,
    brand: "Hemkara Jewellers",
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
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 4,
    brand: "Padmini",
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
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 5,
    brand: "Kanchan Gold & Diamonds",
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
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 6,
    brand: "Vaidehi",
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
    description: "A majestic gold kada from Vaidehi's Royal Bengal collection. Features elaborate Polki diamond work with enamel detailing, inspired by the jewellery of Bengal's zamindars.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 7,
    brand: "Suvarni",
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
    description: "A contemporary mangalsutra from Suvarni's Rivaah bridal collection, featuring a stunning diamond-studded pendant on a delicate gold and black beaded chain. The perfect blend of tradition and modernity.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 8,
    brand: "Shringar",
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
    description: "A graceful women's watch from Shringar's Moonlight Garden collection. Features a mother-of-pearl dial with crystal hour markers, set in a rose gold-plated stainless steel case with a mesh bracelet.",
    aboutBrand: "Shringar, is India's leading women's watch brand, known for elegant designs that celebrate the spirit of the Indian woman."
  },
  {
    id: 9,
    brand: "Sonara",
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
    description: "A delicate everyday ring from Sonara's Paisley Dreams collection, featuring the iconic Indian paisley motif in 18K gold accented with brilliant-cut diamonds. Lightweight and perfect for daily wear.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 10,
    brand: "Padmini",
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
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 11,
    brand: "Hemkara Jewellers",
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
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 12,
    brand: "Suvarni",
    name: "Mia by Suvarni Diamond Pendant Chain in 14K Gold",
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
    description: "A minimalist diamond pendant from Mia by Suvarni, designed for the modern working woman. Lightweight 14K gold chain with a dainty diamond-studded geometric pendant. Perfect for office and everyday wear.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 13,
    brand: "Shringar",
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
    aboutBrand: "Shringar, is India's leading women's watch brand, known for elegant designs that celebrate the spirit of the Indian woman."
  },
  {
    id: 14,
    brand: "Kanchan Gold & Diamonds",
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
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 15,
    brand: "Sonara",
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
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 16,
    brand: "Padmini",
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
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 17,
    brand: "Suvarni",
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
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 18,
    brand: "Hemkara Jewellers",
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
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 19,
    brand: "Vaidehi",
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
    description: "The iconic Gulkand bridal set from Vaidehi's flagship collection. A magnificent Polki choker with matching earrings, featuring uncut diamonds, emeralds, and baroque pearls set in 22K gold with fine meenakari.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 20,
    brand: "Sonara",
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
    description: "A dainty floral nose pin from Sonara's Bloom collection, featuring a single brilliant-cut diamond set in 18K rose gold. Screw-back closure for secure and comfortable everyday wear.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 21,
    brand: "Suvarni",
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
    description: "A classic mangalsutra from Suvarni's Rivaah collection with traditional black beads and a 22K gold pendant featuring delicate filigree work.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 22,
    brand: "Kanchan Gold & Diamonds",
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
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 23,
    brand: "Sonara",
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
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 24,
    brand: "Hemkara Jewellers",
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
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 25,
    brand: "Suvarni",
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
    description: "A sleek diamond-studded bangle from Mia by Suvarni, featuring a row of brilliant-cut diamonds in an 18K gold setting. Perfect for everyday elegance.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 26,
    brand: "Padmini",
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
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 27,
    brand: "Suvarni",
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
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 28,
    brand: "Kanchan Gold & Diamonds",
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
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 29,
    brand: "Sonara",
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
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 30,
    brand: "Kanchan Gold & Diamonds",
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
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 31,
    brand: "Vaidehi",
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
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 32,
    brand: "Suvarni",
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
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 33,
    brand: "Suvarni",
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
    description: "A delicate diamond nose ring from Mia by Suvarni, with a cluster of diamonds set in 18K yellow gold. Wire-back closure.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 34,
    brand: "Padmini",
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
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 35,
    brand: "Hemkara Jewellers",
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
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 36,
    brand: "Kanchan Gold & Diamonds",
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
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 37,
    brand: "Suvarni",
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
    description: "A bold Figaro chain in 22K gold from Suvarni's men's collection. Features alternating link pattern with a high-polish finish. BIS Hallmarked and perfect for everyday wear or layering.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 38,
    brand: "Vaidehi",
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
    description: "A substantial gold kada for men from Vaidehi's Heritage collection. Crafted in 22K gold with traditional hand-engraved motifs inspired by Rajput warrior jewellery. A symbol of strength and heritage.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 39,
    brand: "Hemkara Jewellers",
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
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 40,
    brand: "Sonara",
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
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 41,
    brand: "Padmini",
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
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 42,
    brand: "Kanchan Gold & Diamonds",
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
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 43,
    brand: "Sonara",
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
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 44,
    brand: "Suvarni",
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
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- Earrings (3 new) ---
  {
    id: 45,
    brand: "Hemkara Jewellers",
    name: "Tejasvi Temple Jhumka Earrings in 22K Gold",
    price: 62000,
    originalPrice: null,
    badge: "new",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80",
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80"
    ],
    sizes: [],
    description: "Grand temple-style jhumka earrings from the Tejasvi collection, crafted in 22K gold with Lakshmi motifs and ruby detailing. A South Indian bridal essential.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 46,
    brand: "Sonara",
    name: "Geometric Diamond Studs in 18K White Gold",
    price: 22000,
    originalPrice: 28000,
    badge: "sale",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1597055952513-4e9bce9345c3?w=800&q=80",
      "https://images.unsplash.com/photo-1714733831162-0a6e849141be?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80"
    ],
    sizes: [],
    description: "Contemporary geometric diamond studs from Sonara, featuring pave-set diamonds in an 18K white gold hexagonal frame. Perfect for the modern professional.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 47,
    brand: "Vaidehi",
    name: "Chandbali Drop Earrings with Pearls & Kundan",
    price: 34000,
    originalPrice: null,
    badge: "best-seller",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80"
    ],
    sizes: [],
    description: "Exquisite chandbali earrings from Vaidehi featuring crescent-moon Kundan work with baroque pearl drops and meenakari enamel on reverse. A bridal favourite.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },

  // --- Mangalsutra (3 new) ---
  {
    id: 48,
    brand: "Sonara",
    name: "Modern Mangalsutra Bracelet in 18K Gold with Diamonds",
    price: 36000,
    originalPrice: null,
    badge: "new",
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80",
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80",
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A contemporary take on the mangalsutra — reimagined as a sleek bracelet in 18K gold with black onyx beads and diamond accents. For the modern bride.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 49,
    brand: "Hemkara Jewellers",
    name: "Traditional Long Mangalsutra in 22K Gold",
    price: 72000,
    originalPrice: 85000,
    badge: "sale",
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80",
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80",
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80"
    ],
    sizes: ["24 inch", "26 inch", "28 inch"],
    description: "A traditional long mangalsutra with a double-layered gold chain and elaborate pendant featuring Lakshmi motifs. A timeless South Indian bridal piece.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 50,
    brand: "Kanchan Gold & Diamonds",
    name: "Daily Wear Diamond Mangalsutra in 18K Gold",
    price: 28000,
    originalPrice: null,
    badge: null,
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80",
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80",
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80"
    ],
    sizes: ["16 inch", "18 inch"],
    description: "A lightweight daily-wear mangalsutra with a dainty diamond pendant in 18K gold on a sleek black beaded chain. Perfect for office and everyday styling.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- Watches (3 new) ---
  {
    id: 51,
    brand: "Shringar",
    name: "Raga Ethnic Dial Watch in Gold Tone",
    price: 7495,
    originalPrice: null,
    badge: null,
    category: "Watches",
    images: [
      "https://images.unsplash.com/photo-1762071775668-68a2dfda0318?w=800&q=80",
      "https://images.unsplash.com/photo-1766518303334-aaa928ceed45?w=800&q=80",
      "https://images.unsplash.com/photo-1767009951352-a271b6155eeb?w=800&q=80"
    ],
    sizes: [],
    description: "A Shringar watch with an ethnic paisley-pattern dial and gold-tone stainless steel bracelet. Swarovski crystal hour markers and water-resistant case.",
    aboutBrand: "Shringar, is India's leading women's watch brand, known for elegant designs that celebrate the spirit of the Indian woman."
  },
  {
    id: 52,
    brand: "Sonara",
    name: "Diamond-Accent Chronograph Watch in Rose Gold",
    price: 12995,
    originalPrice: 15995,
    badge: "sale",
    category: "Watches",
    images: [
      "https://images.unsplash.com/photo-1768062251804-92344088e223?w=800&q=80",
      "https://images.unsplash.com/photo-1767009951316-c3d2b63179ef?w=800&q=80",
      "https://images.unsplash.com/photo-1766518303334-aaa928ceed45?w=800&q=80"
    ],
    sizes: [],
    description: "A rose gold chronograph watch with diamond-accent bezel and mother-of-pearl sub-dials. Genuine leather strap with deployant clasp. A statement piece for the modern woman.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 53,
    brand: "Suvarni",
    name: "Heritage Collection Analog Watch in Antique Gold",
    price: 9995,
    originalPrice: null,
    badge: "new",
    category: "Watches",
    images: [
      "https://images.unsplash.com/photo-1767009951316-c3d2b63179ef?w=800&q=80",
      "https://images.unsplash.com/photo-1762071775668-68a2dfda0318?w=800&q=80",
      "https://images.unsplash.com/photo-1768062251804-92344088e223?w=800&q=80"
    ],
    sizes: [],
    description: "An antique gold-finish analog watch inspired by Indian heritage motifs. Features temple-style engravings on the case and a jewel-studded crown. Mesh bracelet with adjustable clasp.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- Nose Pins (2 new) ---
  {
    id: 54,
    brand: "Vaidehi",
    name: "Bridal Nath with Kundan & Pearl Chain",
    price: 18500,
    originalPrice: null,
    badge: "best-seller",
    category: "Nose Pins",
    images: [
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1762709414326-67c887a8dc98?w=800&q=80",
      "https://images.unsplash.com/photo-1763017707624-213684457a9d?w=800&q=80"
    ],
    sizes: [],
    description: "A statement bridal nath from Vaidehi featuring elaborate Kundan work with a pearl-beaded chain, gold-plated silver. The ultimate bridal accessory.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 55,
    brand: "Kanchan Gold & Diamonds",
    name: "Mine Diamond Nose Stud in 18K White Gold",
    price: 6500,
    originalPrice: null,
    badge: null,
    category: "Nose Pins",
    images: [
      "https://images.unsplash.com/photo-1763017707624-213684457a9d?w=800&q=80",
      "https://images.unsplash.com/photo-1762709414326-67c887a8dc98?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80"
    ],
    sizes: [],
    description: "A classic solitaire diamond nose stud set in 18K white gold with a screw-back closure. IGI certified, perfect for daily wear.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- Maang Tikka (2 new) ---
  {
    id: 56,
    brand: "Sonara",
    name: "Minimalist Diamond Maang Tikka in 18K Gold",
    price: 18000,
    originalPrice: null,
    badge: "new",
    category: "Maang Tikka",
    images: [
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80"
    ],
    sizes: [],
    description: "A sleek, minimalist maang tikka with a single diamond drop in 18K gold. Delicate chain design for the contemporary bride who loves subtle elegance.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 57,
    brand: "Hemkara Jewellers",
    name: "Heavy Bridal Maang Tikka in 22K Gold with Rubies",
    price: 45000,
    originalPrice: 52000,
    badge: "sale",
    category: "Maang Tikka",
    images: [
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80",
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80"
    ],
    sizes: [],
    description: "A grand bridal maang tikka in 22K gold with rubies, pearls, and kemp stone detailing. Multi-strand chain design for a regal look.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },

  // --- Anklets (3 new) ---
  {
    id: 58,
    brand: "Padmini",
    name: "Silver Payal with Ghungroo Bells (Pair)",
    price: 8500,
    originalPrice: null,
    badge: "best-seller",
    category: "Anklets",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80"
    ],
    sizes: ["9 inch", "10 inch", "11 inch"],
    description: "Traditional silver payals (anklets) with tiny ghungroo bells, handcrafted by Rajasthani artisans. The musical chime adds charm to every step.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 59,
    brand: "Suvarni",
    name: "Mia Gold Anklet with Diamond Charms in 18K",
    price: 24000,
    originalPrice: null,
    badge: "new",
    category: "Anklets",
    images: [
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80"
    ],
    sizes: ["9 inch", "10 inch"],
    description: "A delicate gold anklet from Mia by Suvarni with diamond-studded charms on a fine 18K gold chain. Modern, lightweight, and perfect for everyday wear.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 60,
    brand: "Kanchan Gold & Diamonds",
    name: "Charm Anklet in 22K Gold with Dangling Hearts",
    price: 32000,
    originalPrice: 38000,
    badge: "sale",
    category: "Anklets",
    images: [
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["9 inch", "10 inch", "11 inch"],
    description: "A 22K gold charm anklet with dangling heart pendants and diamond-cut finish. Secure lobster-claw clasp with adjustable chain.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- Pendants (3 new) ---
  {
    id: 61,
    brand: "Kanchan Gold & Diamonds",
    name: "Om Pendant in 22K Gold with Diamond Centre",
    price: 28000,
    originalPrice: null,
    badge: "best-seller",
    category: "Pendants",
    images: [
      "https://images.unsplash.com/photo-1605812276723-c31bb1a68285?w=800&q=80",
      "https://images.unsplash.com/photo-1502780033682-7c480d8624b3?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80"
    ],
    sizes: ["18 inch chain", "20 inch chain"],
    description: "A devotional Om pendant in 22K gold with a diamond-studded centre on a sturdy gold chain. A meaningful everyday accessory.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 62,
    brand: "Sonara",
    name: "Diamond Solitaire Pendant in 18K White Gold",
    price: 45000,
    originalPrice: null,
    badge: "new",
    category: "Pendants",
    images: [
      "https://images.unsplash.com/photo-1502780033682-7c480d8624b3?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80"
    ],
    sizes: ["16 inch chain", "18 inch chain"],
    description: "An elegant solitaire diamond pendant in a bezel setting of 18K white gold on a delicate chain. IGI certified, brilliant-cut diamond. The perfect everyday luxury.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 63,
    brand: "Hemkara Jewellers",
    name: "Temple Gold Pendant with Lakshmi Motif in 22K",
    price: 52000,
    originalPrice: null,
    badge: null,
    category: "Pendants",
    images: [
      "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80",
      "https://images.unsplash.com/photo-1502780033682-7c480d8624b3?w=800&q=80"
    ],
    sizes: ["18 inch chain", "20 inch chain"],
    description: "A traditional temple-style pendant featuring Goddess Lakshmi motif in 22K gold with kemp stone border. Comes with a matching gold chain.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },

  // --- Women's Bracelets (3 new) ---
  {
    id: 64,
    brand: "Sonara",
    name: "Tennis Bracelet in 18K White Gold with Diamonds",
    price: 95000,
    originalPrice: 115000,
    badge: "sale",
    category: "Bracelets",
    images: [
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A classic tennis bracelet featuring a continuous line of brilliant-cut diamonds in 18K white gold. Secure box clasp with safety latch. Timeless elegance.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 65,
    brand: "Padmini",
    name: "Silver Charm Bracelet with Rajasthani Motifs",
    price: 12500,
    originalPrice: null,
    badge: "new",
    category: "Bracelets",
    images: [
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A sterling silver charm bracelet with hand-engraved Rajasthani motifs — peacock, lotus, and elephant charms with gold wash finish. Artisan crafted.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 66,
    brand: "Suvarni",
    name: "Mia Bangle-Style Bracelet in 18K Gold with Diamonds",
    price: 48000,
    originalPrice: null,
    badge: null,
    category: "Bracelets",
    images: [
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A sleek bangle-style bracelet from Mia by Suvarni, featuring a hinged 18K gold band with channel-set diamonds. Modern and stackable.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // ===== NEW BRIDAL ACCESSORIES & GROOM'S COLLECTION (IDs 67–112) =====

  // --- Maang Patti (3) ---
  {
    id: 67,
    brand: "Suvarni",
    name: "Bridal Maang Patti in 22K Gold with Kundan & Pearls",
    price: 68000,
    originalPrice: null,
    badge: "new",
    category: "Maang Patti",
    images: [
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80"
    ],
    sizes: [],
    description: "A grand bridal maang patti in 22K gold with Kundan polki stones, seed pearls, and meenakari work on the reverse. Five-strand chain design drapes elegantly along the hairline.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 68,
    brand: "Vaidehi",
    name: "Heritage Maang Patti with Jadau Work & Ruby Drops",
    price: 95000,
    originalPrice: null,
    badge: "best-seller",
    category: "Maang Patti",
    images: [
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1613343868927-889e61bac00d?w=800&q=80"
    ],
    sizes: [],
    description: "A Vaidehi signature maang patti featuring Jadau craftsmanship with uncut diamonds, Burmese rubies, and baroque pearl drops. Adjustable hook and chain closure.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 69,
    brand: "Padmini",
    name: "Rajasthani Maang Patti in Silver with Gold Wash",
    price: 28000,
    originalPrice: 34000,
    badge: "sale",
    category: "Maang Patti",
    images: [
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80",
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80"
    ],
    sizes: [],
    description: "A tribal-inspired maang patti in sterling silver with gold wash, featuring hand-set turquoise and coral stones. Inspired by Rajasthani bridal traditions.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },

  // --- Jhoomar (3) ---
  {
    id: 70,
    brand: "Vaidehi",
    name: "Kundan Jhoomar Passa with Pearl Tassels",
    price: 85000,
    originalPrice: null,
    badge: "best-seller",
    category: "Jhoomar",
    images: [
      "https://images.unsplash.com/photo-1613343868927-889e61bac00d?w=800&q=80",
      "https://images.unsplash.com/photo-1760080839060-591149703647?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80"
    ],
    sizes: [],
    description: "A crescent-shaped Kundan jhoomar passa from Vaidehi with cascading pearl tassels and emerald drops. Worn on the side of the head for a regal bridal look.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 71,
    brand: "Padmini",
    name: "Mughal Jhoomar in Silver with Kundan & Meenakari",
    price: 42000,
    originalPrice: null,
    badge: "new",
    category: "Jhoomar",
    images: [
      "https://images.unsplash.com/photo-1760080839060-591149703647?w=800&q=80",
      "https://images.unsplash.com/photo-1613343868927-889e61bac00d?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80"
    ],
    sizes: [],
    description: "A Mughal-inspired jhoomar headpiece in sterling silver with Kundan stones and vibrant meenakari enamel. Fan-shaped design with dangling pearl strings.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 72,
    brand: "Hemkara Jewellers",
    name: "Bridal Jhoomar Passa in 22K Gold with Polki Diamonds",
    price: 120000,
    originalPrice: null,
    badge: null,
    category: "Jhoomar",
    images: [
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80",
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1760080839060-591149703647?w=800&q=80"
    ],
    sizes: [],
    description: "A luxurious bridal jhoomar in 22K gold set with polki diamonds, rubies, and South Sea pearls. Traditional Hyderabadi design for the discerning bride.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },

  // --- Jadanagam (2) ---
  {
    id: 73,
    brand: "Suvarni",
    name: "Temple Jadanagam Hair Ornament in 22K Gold",
    price: 55000,
    originalPrice: null,
    badge: null,
    category: "Jadanagam",
    images: [
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80"
    ],
    sizes: [],
    description: "A traditional South Indian jadanagam (serpent-shaped hair ornament) in 22K gold with kemp and emerald stones. Worn along the braid for weddings and classical dance.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 74,
    brand: "Kanchan Gold & Diamonds",
    name: "Jadanagam Braid Ornament Set with Ruby & Emerald",
    price: 72000,
    originalPrice: 82000,
    badge: "sale",
    category: "Jadanagam",
    images: [
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80"
    ],
    sizes: [],
    description: "A complete jadanagam braid ornament set in gold-plated silver with rubies, emeralds, and CZ stones. Includes three graduated pieces for a full bridal braid look.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- Kan Chain (2) ---
  {
    id: 75,
    brand: "Padmini",
    name: "Ear-to-Hair Kan Chain with Kundan & Pearl Drops",
    price: 18500,
    originalPrice: null,
    badge: "new",
    category: "Kan Chain",
    images: [
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80"
    ],
    sizes: [],
    description: "A decorative kan chain (ear chain) connecting earring to hair, featuring Kundan work with pearl drops and gold-plated silver links. A signature bridal accessory.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 76,
    brand: "Sonara",
    name: "Modern Kan Chain in 18K Gold with Diamond Accent",
    price: 24000,
    originalPrice: null,
    badge: null,
    category: "Kan Chain",
    images: [
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80"
    ],
    sizes: [],
    description: "A minimalist kan chain in 18K gold with a single diamond accent, designed to loop from ear cuff to hair pin. Contemporary bridal chic.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },

  // --- Bugadi (2) ---
  {
    id: 77,
    brand: "Hemkara Jewellers",
    name: "Maharashtrian Bugadi Ear Cuff in 22K Gold",
    price: 32000,
    originalPrice: null,
    badge: "best-seller",
    category: "Bugadi",
    images: [
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1762709414326-67c887a8dc98?w=800&q=80"
    ],
    sizes: [],
    description: "A traditional Maharashtrian bugadi (ear cuff) in 22K gold with a paisley motif and ruby centre stone. Worn on the upper ear cartilage as part of Marathi bridal jewellery.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 78,
    brand: "Suvarni",
    name: "Contemporary Bugadi with Diamond Cluster in 18K Gold",
    price: 28000,
    originalPrice: null,
    badge: "new",
    category: "Bugadi",
    images: [
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80"
    ],
    sizes: [],
    description: "A modern take on the bugadi ear cuff in 18K gold with a pave diamond cluster. Lightweight and comfortable for all-day wear. Adjustable clip design.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- Bajuband (3) ---
  {
    id: 79,
    brand: "Vaidehi",
    name: "Royal Bajuband Armlet in Gold with Jadau Work",
    price: 125000,
    originalPrice: null,
    badge: "best-seller",
    category: "Bajuband",
    images: [
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A magnificent Vaidehi bajuband (armlet) in 22K gold with Jadau uncut diamonds, emeralds, and ruby cabochons. Worn on the upper arm, a quintessential bridal ornament.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 80,
    brand: "Padmini",
    name: "Tribal Bajuband in Silver with Turquoise Stones",
    price: 15000,
    originalPrice: null,
    badge: null,
    category: "Bajuband",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A bohemian tribal bajuband in oxidized silver with natural turquoise stones and coin motifs. Adjustable chain closure. Perfect for festivals and fusion wear.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 81,
    brand: "Suvarni",
    name: "Kundan Bajuband Vanki in 22K Gold with Pearls",
    price: 88000,
    originalPrice: null,
    badge: "new",
    category: "Bajuband",
    images: [
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A V-shaped Kundan bajuband (vanki) in 22K gold with pearl edges and kemp stone accents. A South Indian bridal essential also popular in Rajasthani weddings.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- Hathphool (3) ---
  {
    id: 82,
    brand: "Vaidehi",
    name: "Bridal Hathphool Hand Harness in Gold with Kundan",
    price: 78000,
    originalPrice: null,
    badge: "best-seller",
    category: "Hathphool",
    images: [
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A stunning Vaidehi hathphool (hand harness) in 22K gold with Kundan stones and pearl chains connecting ring to bracelet. Worn on the back of the hand for bridal ceremonies.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 83,
    brand: "Padmini",
    name: "Five-Finger Hathphool in Silver with Gold Wash",
    price: 22000,
    originalPrice: 26000,
    badge: "sale",
    category: "Hathphool",
    images: [
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80"
    ],
    sizes: ["S", "M"],
    description: "A five-finger hathphool in sterling silver with gold wash, featuring floral Kundan centres and delicate chain links to each finger ring. Rajasthani bridal artistry.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 84,
    brand: "Kanchan Gold & Diamonds",
    name: "Hathphool Bracelet Ring in 22K Gold with CZ",
    price: 48000,
    originalPrice: null,
    badge: null,
    category: "Hathphool",
    images: [
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A modern hathphool design in 22K gold connecting a broad bracelet to a statement ring with CZ-studded floral motifs and fine chain links.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- Kamarband (3) ---
  {
    id: 85,
    brand: "Suvarni",
    name: "Bridal Kamarband Waist Belt in 22K Gold with Rubies",
    price: 185000,
    originalPrice: null,
    badge: null,
    category: "Kamarband",
    images: [
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A grand bridal kamarband (waist belt) in 22K gold with Burmese rubies, emeralds, and pearl tassels. Multi-strand design with adjustable hook closure.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 86,
    brand: "Vaidehi",
    name: "Heritage Kamarband with Jadau & Emerald Drops",
    price: 225000,
    originalPrice: null,
    badge: "best-seller",
    category: "Kamarband",
    images: [
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1760080839060-591149703647?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A museum-worthy Vaidehi kamarband featuring Jadau craftsmanship with uncut diamonds, Zambian emeralds, and South Sea pearl drops. A statement bridal waist piece.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 87,
    brand: "Hemkara Jewellers",
    name: "Temple Kamarband in 22K Gold with Kemp Stones",
    price: 145000,
    originalPrice: 165000,
    badge: "sale",
    category: "Kamarband",
    images: [
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A South Indian temple-style kamarband in 22K gold with kemp stones and Lakshmi motifs. Flexible linked design that drapes around the waist elegantly.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },

  // --- Kardhani (3) ---
  {
    id: 88,
    brand: "Padmini",
    name: "Rajasthani Silver Kardhani with Ghungroo Bells",
    price: 12000,
    originalPrice: null,
    badge: "best-seller",
    category: "Kardhani",
    images: [
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A traditional Rajasthani kardhani (waist chain) in sterling silver with tiny ghungroo bells and coin charms. Adjustable chain with hook closure.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 89,
    brand: "Kanchan Gold & Diamonds",
    name: "Gold Kardhani Hip Chain in 22K with Kemp Stones",
    price: 95000,
    originalPrice: null,
    badge: null,
    category: "Kardhani",
    images: [
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A 22K gold kardhani hip chain with kemp stone-studded medallions and mango motifs. A traditional South Indian bridal waist ornament.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 90,
    brand: "Sonara",
    name: "Delicate Kardhani Belly Chain in 18K Gold with Diamonds",
    price: 38000,
    originalPrice: null,
    badge: "new",
    category: "Kardhani",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A contemporary kardhani belly chain in 18K gold with diamond-studded stations and a fine cable chain. Perfect for saree styling and modern bridal looks.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },

  // --- Bichiya (3) ---
  {
    id: 91,
    brand: "Sonara",
    name: "Modern Bichiya Toe Ring Set in 18K Gold (Pair)",
    price: 14000,
    originalPrice: null,
    badge: "new",
    category: "Bichiya",
    images: [
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: [],
    description: "A pair of modern bichiya (toe rings) in 18K gold with a minimalist diamond accent. Adjustable open-band design for comfortable daily wear.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 92,
    brand: "Hemkara Jewellers",
    name: "Traditional Silver Bichiya Set with Paisley Motif (Pair)",
    price: 4500,
    originalPrice: null,
    badge: "best-seller",
    category: "Bichiya",
    images: [
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: [],
    description: "A pair of traditional silver bichiya with intricate paisley motifs and jali cutwork. An essential part of the Indian bridal solah shringar.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 93,
    brand: "Suvarni",
    name: "Bridal Bichiya Set in 22K Gold with Ruby Accent (Pair)",
    price: 22000,
    originalPrice: null,
    badge: null,
    category: "Bichiya",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80"
    ],
    sizes: [],
    description: "A bridal bichiya set in 22K gold with a central ruby and delicate filigree work. Adjustable band design. Comes in a pair for both feet.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // ===== MEN'S GROOM'S COLLECTION =====

  // --- Men's Kalgi (3) ---
  {
    id: 94,
    brand: "Vaidehi",
    name: "Groom's Kalgi Turban Ornament with Jadau & Pearls",
    price: 65000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Kalgi",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: [],
    description: "A Vaidehi groom's kalgi (turban ornament) with Jadau work, uncut diamonds, and cascading pearl strings. The feather-shaped design crowns the safa with royal elegance.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 95,
    brand: "Suvarni",
    name: "22K Gold Kalgi with Emerald & Ruby Accents",
    price: 48000,
    originalPrice: null,
    badge: "new",
    category: "Men's Kalgi",
    images: [
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: [],
    description: "A regal groom's kalgi in 22K gold featuring emerald and ruby stones in a sunburst design. Pin-back attachment for secure fastening to the turban.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 96,
    brand: "Hemkara Jewellers",
    name: "Classic Groom's Kalgi in Gold with Pearl Drops",
    price: 35000,
    originalPrice: 42000,
    badge: "sale",
    category: "Men's Kalgi",
    images: [
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80"
    ],
    sizes: [],
    description: "A classic gold kalgi with a crescent motif, pearl drops, and polki stone centre. A timeless groom's turban accessory for the Indian wedding.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },

  // --- Men's Sehra (2) ---
  {
    id: 97,
    brand: "Vaidehi",
    name: "Pearl & Gold Sehra Face Veil for the Groom",
    price: 55000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Sehra",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80"
    ],
    sizes: [],
    description: "A luxurious groom's sehra (face veil) with strands of freshwater pearls on a gold headband with Kundan work. Drapes in multiple rows across the face.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 98,
    brand: "Kanchan Gold & Diamonds",
    name: "Traditional Groom's Sehra in Gold-Plated Silver",
    price: 28000,
    originalPrice: null,
    badge: null,
    category: "Men's Sehra",
    images: [
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80"
    ],
    sizes: [],
    description: "A traditional groom's sehra in gold-plated silver with pearl and bead strings attached to a floral headpiece. A North Indian wedding essential.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- Men's Moti Haar (3) ---
  {
    id: 99,
    brand: "Suvarni",
    name: "Groom's Moti Haar Pearl Necklace in 22K Gold",
    price: 85000,
    originalPrice: null,
    badge: "new",
    category: "Men's Moti Haar",
    images: [
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80"
    ],
    sizes: ["20 inch", "22 inch", "24 inch"],
    description: "A regal groom's moti haar (pearl necklace) featuring multi-strand South Sea pearls with a 22K gold clasp and emerald centre medallion.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 100,
    brand: "Hemkara Jewellers",
    name: "Five-Layer Moti Haar for Grooms in Gold & Pearls",
    price: 72000,
    originalPrice: 85000,
    badge: "sale",
    category: "Men's Moti Haar",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80"
    ],
    sizes: ["20 inch", "22 inch"],
    description: "A grand five-layer moti haar with freshwater pearls, gold spacer beads, and a Kundan pendant. A signature piece for the Rajput groom.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 101,
    brand: "Padmini",
    name: "Tribal Moti Haar with Gold Coin Pendants",
    price: 45000,
    originalPrice: null,
    badge: null,
    category: "Men's Moti Haar",
    images: [
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80"
    ],
    sizes: ["20 inch", "22 inch", "24 inch"],
    description: "A tribal-inspired moti haar combining freshwater pearls with antique gold coin pendants and silver beads. Bohemian groom styling.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },

  // --- Men's Bajuband (3) ---
  {
    id: 102,
    brand: "Vaidehi",
    name: "Groom's Bajuband Armlet in Gold with Jadau Work",
    price: 110000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Bajuband",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A Vaidehi groom's bajuband in 22K gold with Jadau uncut diamonds and emerald cabochons. Broad cuff design with hinge closure for the upper arm.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 103,
    brand: "Padmini",
    name: "Men's Bajuband in Silver with Gold Accents",
    price: 18000,
    originalPrice: null,
    badge: null,
    category: "Men's Bajuband",
    images: [
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A men's bajuband in oxidized silver with gold wash accents, featuring lion motifs and hammered texture. Ideal for the fashion-forward groom.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 104,
    brand: "Suvarni",
    name: "Men's Bajuband in 22K Gold with Lion Crest",
    price: 75000,
    originalPrice: null,
    badge: "new",
    category: "Men's Bajuband",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A bold men's bajuband in 22K gold featuring a lion crest centre with ruby eyes and engraved scrollwork. A warrior-inspired groom's accessory.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- Men's Kurta Buttons (3) ---
  {
    id: 105,
    brand: "Vaidehi",
    name: "Jadau Kurta Buttons in 22K Gold (Set of 5)",
    price: 42000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Kurta Buttons",
    images: [
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80"
    ],
    sizes: [],
    description: "A set of five Jadau kurta buttons from Vaidehi in 22K gold with uncut diamond centres and meenakari enamel borders. The ultimate groom's detail.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 106,
    brand: "Sonara",
    name: "Diamond Kurta Buttons in 18K Gold (Set of 3)",
    price: 28000,
    originalPrice: null,
    badge: "new",
    category: "Men's Kurta Buttons",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80"
    ],
    sizes: [],
    description: "A set of three modern kurta buttons in 18K gold with channel-set diamonds and brushed finish. Minimalist elegance for the contemporary groom.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },
  {
    id: 107,
    brand: "Suvarni",
    name: "Heritage Kurta Buttons with Emerald Centre (Set of 5)",
    price: 35000,
    originalPrice: null,
    badge: null,
    category: "Men's Kurta Buttons",
    images: [
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: [],
    description: "A set of five heritage kurta buttons in 22K gold with cabochon emerald centres and filigree borders. Traditional Mughal-inspired design.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- Men's Brooch (3) ---
  {
    id: 108,
    brand: "Vaidehi",
    name: "Bengal Tiger Brooch in Gold with Ruby Eyes",
    price: 58000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Brooch",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80"
    ],
    sizes: [],
    description: "A Vaidehi signature Bengal tiger brooch in 22K gold with ruby eyes and diamond-studded stripes. Pin-back design for sherwani or bandhgala.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 109,
    brand: "Padmini",
    name: "Mughal Crest Brooch in Silver with Gold Wash",
    price: 15000,
    originalPrice: null,
    badge: null,
    category: "Men's Brooch",
    images: [
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80"
    ],
    sizes: [],
    description: "A Mughal-inspired crest brooch in sterling silver with gold wash, featuring a peacock motif with turquoise and lapis inlay. For the artistic groom.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },
  {
    id: 110,
    brand: "Hemkara Jewellers",
    name: "Diamond Cluster Brooch in 18K White Gold",
    price: 42000,
    originalPrice: 48000,
    badge: "sale",
    category: "Men's Brooch",
    images: [
      "https://images.unsplash.com/photo-1768341395956-fed92f537228?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: [],
    description: "A contemporary diamond cluster brooch in 18K white gold with a geometric starburst design. Versatile enough for wedding and formal occasions.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },

  // --- Men's Murki (2) ---
  {
    id: 111,
    brand: "Suvarni",
    name: "Groom's Murki Ear Stud in 22K Gold with Pearl",
    price: 18000,
    originalPrice: null,
    badge: "new",
    category: "Men's Murki",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: [],
    description: "A traditional groom's murki (ear stud) in 22K gold with a dangling pearl drop. A small but significant ornament for the Indian groom's baraat look.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 112,
    brand: "Sonara",
    name: "Modern Murki Ear Clip in 18K Gold with Diamond",
    price: 22000,
    originalPrice: null,
    badge: null,
    category: "Men's Murki",
    images: [
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1708221382764-299d9e3ad257?w=800&q=80"
    ],
    sizes: [],
    description: "A contemporary murki ear clip in 18K gold with a bezel-set diamond. Clip-on design — no piercing required. For the modern groom who appreciates subtle luxury.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },

  // ===== ADDITIONAL PRODUCTS (IDs 113–132) =====

  // --- More Necklaces ---
  {
    id: 113,
    brand: "Kanchan Gold & Diamonds",
    name: "Kasumala Long Necklace in 22K Gold with Rubies",
    price: 320000,
    originalPrice: null,
    badge: "new",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80"
    ],
    sizes: ["24 inch", "26 inch", "28 inch"],
    description: "A regal kasumala long necklace in 22K gold featuring cascading ruby and emerald clusters with polki diamond highlights. A South Indian bridal masterpiece.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },
  {
    id: 114,
    brand: "Padmini",
    name: "Tribal Silver Hasli Neckpiece with Turquoise",
    price: 18500,
    originalPrice: null,
    badge: null,
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1751606615009-30f61ff1a510?w=800&q=80"
    ],
    sizes: [],
    description: "A statement tribal hasli neckpiece in oxidized silver with natural turquoise cabochons and coin-charm danglers. Inspired by Rajasthani folk traditions.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },

  // --- More Rings ---
  {
    id: 115,
    brand: "Hemkara Jewellers",
    name: "Peacock Cocktail Ring in 22K Gold with Emerald",
    price: 62000,
    originalPrice: null,
    badge: "best-seller",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1719559746390-57f3af2794ab?w=800&q=80",
      "https://images.unsplash.com/photo-1729751291840-3da5d4b56e6c?w=800&q=80",
      "https://images.unsplash.com/photo-1771782191574-caf77b4522fe?w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "A dazzling peacock-motif cocktail ring in 22K gold with a centre emerald, sapphire feather accents, and meenakari enamel on the shank. A wearable work of art.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 116,
    brand: "Sonara",
    name: "Everyday Diamond Band Ring in 18K Rose Gold",
    price: 28000,
    originalPrice: 34000,
    badge: "sale",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1729751291840-3da5d4b56e6c?w=800&q=80",
      "https://images.unsplash.com/photo-1719559746390-57f3af2794ab?w=800&q=80",
      "https://images.unsplash.com/photo-1720093601709-66ce9c0068a1?w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10", "12"],
    description: "A sleek everyday band ring in 18K rose gold with channel-set diamonds and a satin finish. Stackable and comfortable for daily wear.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },

  // --- More Earrings ---
  {
    id: 117,
    brand: "Suvarni",
    name: "Temple Gold Jhumka Earrings with Kemp Stones",
    price: 52000,
    originalPrice: null,
    badge: null,
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80"
    ],
    sizes: [],
    description: "Classic temple-style jhumka earrings in 22K gold with kemp stones, Lakshmi motifs, and gold bead fringe. A South Indian festive essential.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 118,
    brand: "Kanchan Gold & Diamonds",
    name: "Diamond Hoop Earrings in 18K White Gold",
    price: 65000,
    originalPrice: 75000,
    badge: "sale",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1762686130435-897de4b26aac?w=800&q=80",
      "https://images.unsplash.com/photo-1681152322586-7ddde43866a4?w=800&q=80",
      "https://images.unsplash.com/photo-1767971958465-16d986fad8df?w=800&q=80"
    ],
    sizes: [],
    description: "Elegant diamond hoop earrings in 18K white gold with inside-out pave-set brilliant-cut diamonds. Secure click-lock clasp. A wardrobe staple.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- More Bangles ---
  {
    id: 119,
    brand: "Vaidehi",
    name: "Jadau Bridal Bangle Set in 22K Gold (Set of 4)",
    price: 285000,
    originalPrice: null,
    badge: "best-seller",
    category: "Bangles",
    images: [
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80"
    ],
    sizes: ["2.4", "2.6", "2.8"],
    description: "A bridal Jadau bangle set of four in 22K gold with uncut diamonds, rubies, emeralds, and intricate meenakari enamel on the inner face. Vaidehi's regal craftsmanship.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },
  {
    id: 120,
    brand: "Sonara",
    name: "Sleek Diamond Kada in 18K Yellow Gold",
    price: 72000,
    originalPrice: null,
    badge: "new",
    category: "Bangles",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80"
    ],
    sizes: ["2.4", "2.6", "2.8"],
    description: "A modern diamond kada in 18K yellow gold with a row of bezel-set diamonds running along the top edge. Hinged opening with safety clasp.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },

  // --- More Watches ---
  {
    id: 121,
    brand: "Shringar",
    name: "Raga Aurora Diamond Watch in Rose Gold Tone",
    price: 11995,
    originalPrice: null,
    badge: "new",
    category: "Watches",
    images: [
      "https://images.unsplash.com/photo-1766518303334-aaa928ceed45?w=800&q=80",
      "https://images.unsplash.com/photo-1762071775668-68a2dfda0318?w=800&q=80",
      "https://images.unsplash.com/photo-1767009951352-a271b6155eeb?w=800&q=80"
    ],
    sizes: [],
    description: "A Shringar Aurora watch with a rose gold-tone case studded with Swarovski crystals, mother-of-pearl dial, and a leather strap in blush pink.",
    aboutBrand: "Shringar, is India's leading women's watch brand, known for elegant designs that celebrate the spirit of the Indian woman."
  },

  // --- More Mangalsutra ---
  {
    id: 122,
    brand: "Suvarni",
    name: "Rivaah Mangalsutra Pendant in 22K Gold with Diamond",
    price: 58000,
    originalPrice: null,
    badge: "best-seller",
    category: "Mangalsutra",
    images: [
      "https://images.unsplash.com/photo-1514178703120-3fa66528901d?w=800&q=80",
      "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=800&q=80",
      "https://images.unsplash.com/photo-1587918046988-e6deb6106218?w=800&q=80"
    ],
    sizes: ["18 inch", "20 inch", "22 inch"],
    description: "A Rivaah mangalsutra by Suvarni with a contemporary pendant in 22K gold and diamond centre, strung on traditional black beads. The perfect everyday bridal keepsake.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- More Pendants ---
  {
    id: 123,
    brand: "Vaidehi",
    name: "Polki Pendant Necklace with Emerald Drop",
    price: 135000,
    originalPrice: null,
    badge: null,
    category: "Pendants",
    images: [
      "https://images.unsplash.com/photo-1502780033682-7c480d8624b3?w=800&q=80",
      "https://images.unsplash.com/photo-1605812276723-c31bb1a68285?w=800&q=80",
      "https://images.unsplash.com/photo-1509047629538-3762c0b404e5?w=800&q=80"
    ],
    sizes: ["18 inch chain", "20 inch chain"],
    description: "An opulent polki diamond pendant on a gold chain with a pear-shaped Zambian emerald drop. Handcrafted by Vaidehi's master karigars in Jaipur.",
    aboutBrand: "Vaidehi's jewellery line celebrates India's rich heritage, blending Bengal's artistic legacy with Rajasthani Jadau craftsmanship."
  },

  // --- More Nose Pins ---
  {
    id: 124,
    brand: "Suvarni",
    name: "Mia Diamond Nose Ring in 18K Gold",
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
    description: "A dainty diamond-studded nose ring from Mia by Suvarni in 18K gold. Continuous hoop design with a single bezel-set diamond. Perfect for everyday wear.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- More Maang Tikka ---
  {
    id: 125,
    brand: "Padmini",
    name: "Rajputana Maang Tikka with Kundan & Pearls",
    price: 32000,
    originalPrice: null,
    badge: null,
    category: "Maang Tikka",
    images: [
      "https://images.unsplash.com/photo-1760461805697-7aff3e93c5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1771992226261-c1efb190ed34?w=800&q=80",
      "https://images.unsplash.com/photo-1762708594532-46345d574457?w=800&q=80"
    ],
    sizes: [],
    description: "A Rajputana-style maang tikka in silver with gold wash, featuring Kundan centre stone, pearl border, and a delicate chain. Inspired by royal Mewar jewellery.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
  },

  // --- More Men's items ---
  {
    id: 126,
    brand: "Suvarni",
    name: "Men's Gold Chain with Diamond-Cut Links in 22K",
    price: 145000,
    originalPrice: null,
    badge: "best-seller",
    category: "Men's Chain",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=800&q=80",
      "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?w=800&q=80"
    ],
    sizes: ["20 inch", "22 inch", "24 inch"],
    description: "A premium men's chain in 22K gold with diamond-cut flat links that catch the light beautifully. Lobster-claw clasp. A staple for the Indian man.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },
  {
    id: 127,
    brand: "Hemkara Jewellers",
    name: "Men's Kada in 22K Gold with Lion Motif",
    price: 95000,
    originalPrice: null,
    badge: null,
    category: "Men's Kada",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A bold men's kada in 22K gold with a lion head motif at the terminals and a brushed matte finish. Hinged opening with safety catch.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },
  {
    id: 128,
    brand: "Sonara",
    name: "Men's Diamond Ring in 18K White Gold",
    price: 52000,
    originalPrice: 62000,
    badge: "sale",
    category: "Men's Ring",
    images: [
      "https://images.unsplash.com/photo-1762505464962-4c7b93dcc8d4?w=800&q=80",
      "https://images.unsplash.com/photo-1729751291840-3da5d4b56e6c?w=800&q=80",
      "https://images.unsplash.com/photo-1719559746390-57f3af2794ab?w=800&q=80"
    ],
    sizes: ["8", "9", "10", "11", "12"],
    description: "A masculine diamond ring in 18K white gold with a satin-brushed band and channel-set diamonds. Contemporary design for the modern man.",
    aboutBrand: "Sonara, a modern jewellery collective, is India's largest online jewellery brand, making beautiful diamond jewellery accessible with a try-at-home experience."
  },

  // --- More Anklets ---
  {
    id: 129,
    brand: "Hemkara Jewellers",
    name: "Bridal Gold Anklet with Kundan Medallions (Pair)",
    price: 48000,
    originalPrice: null,
    badge: "new",
    category: "Anklets",
    images: [
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80"
    ],
    sizes: ["9 inch", "10 inch", "11 inch"],
    description: "A pair of bridal gold anklets with Kundan-set medallions and pearl chain tassels. Traditional North Indian bridal payal design in 22K gold.",
    aboutBrand: "Hemkara Jewellers is one of India's largest and most trusted jewellery chains, with over 150 showrooms across India and the Middle East."
  },

  // --- More Bracelets ---
  {
    id: 130,
    brand: "Kanchan Gold & Diamonds",
    name: "Floral Diamond Bracelet in 18K Gold",
    price: 78000,
    originalPrice: null,
    badge: null,
    category: "Bracelets",
    images: [
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A floral diamond bracelet in 18K gold with pave-set diamond flowers and polished gold leaves. Box clasp with safety chain.",
    aboutBrand: "Kanchan Gold & Diamonds is a leading Indian jewellery group with presence in 10+ countries. Known for guaranteed purity and wide variety of designs."
  },

  // --- More Hathphool ---
  {
    id: 131,
    brand: "Suvarni",
    name: "Modern Hathphool in 18K Gold with Diamonds",
    price: 62000,
    originalPrice: null,
    badge: "new",
    category: "Hathphool",
    images: [
      "https://images.unsplash.com/photo-1728381031272-ba3f537feadd?w=800&q=80",
      "https://images.unsplash.com/photo-1745236549746-199022db5b80?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=800&q=80"
    ],
    sizes: ["S", "M"],
    description: "A contemporary hathphool in 18K gold with diamond-studded geometric motifs connecting a chain bracelet to a statement ring. Modern bridal elegance.",
    aboutBrand: "Suvarni, is India's most trusted jewellery brand. Known for purity, craftsmanship, and timeless Indian designs since 1994."
  },

  // --- More Kamarband ---
  {
    id: 132,
    brand: "Padmini",
    name: "Bohemian Kamarband in Silver with Coin Charms",
    price: 16500,
    originalPrice: null,
    badge: null,
    category: "Kamarband",
    images: [
      "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=800&q=80",
      "https://images.unsplash.com/photo-1758995116288-278d7387cbb6?w=800&q=80",
      "https://images.unsplash.com/photo-1767716507414-7454190a16cb?w=800&q=80"
    ],
    sizes: ["S", "M", "L"],
    description: "A bohemian kamarband waist chain in oxidized silver with dangling coin charms and turquoise stones. Perfect for Indo-Western fusion looks and festival wear.",
    aboutBrand: "Padmini Jewels, founded in Jaipur in 1978, is renowned for reviving ancient Indian jewellery techniques and bringing tribal and royal designs to the modern world."
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
  ["Maang Patti", "Jhoomar", "Jadanagam", "Kan Chain",
   "Hathphool", "Kamarband", "Kardhani", "Bajuband"].includes(p.category) ||
  (p.price >= 100000 && ["Necklaces", "Bangles"].includes(p.category))
);

export const bridalAccessories = products.filter(p =>
  ["Maang Patti", "Jhoomar", "Jadanagam", "Kan Chain",
   "Hathphool", "Kamarband", "Kardhani", "Bajuband"].includes(p.category)
);

export const groomsCollection = products.filter(p =>
  ["Men's Kalgi", "Men's Sehra", "Men's Moti Haar", "Men's Bajuband",
   "Men's Kurta Buttons", "Men's Brooch", "Men's Murki"].includes(p.category)
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
