import { Product } from '../types';

// Generate 50 products across 10 categories
export const products: Product[] = [
  // Vases (5 products)
  {
    id: 1,
    name: "Minimalist Ceramic Vase",
    price: 89.99,
    description: "A sleek, minimalist vase with a matte black finish, perfect for modern home decor.",
    image: "https://images.unsplash.com/photo-1612196808214-b40b3aedb72c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Vases",
    featured: true
  },
  {
    id: 2,
    name: "Textured White Vase",
    price: 79.99,
    description: "A handcrafted white vase with a unique textured surface, adding depth to any space.",
    image: "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Vases",
    featured: false
  },
  {
    id: 3,
    name: "Geometric Ceramic Vase",
    price: 94.99,
    description: "A bold geometric vase with alternating black and white patterns.",
    image: "https://images.unsplash.com/photo-1616486447077-f8d3f7bae6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Vases",
    featured: true
  },
  {
    id: 4,
    name: "Tall Cylindrical Vase",
    price: 109.99,
    description: "An elegant tall cylindrical vase with a smooth black glaze finish.",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Vases",
    featured: false
  },
  {
    id: 5,
    name: "Asymmetrical Ceramic Vase",
    price: 129.99,
    description: "A unique asymmetrical vase with a striking silhouette in contrasting black and white.",
    image: "https://images.unsplash.com/photo-1602404366855-dbbdc9b3cba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Vases",
    featured: false
  },
  
  // Dinnerware (5 products)
  {
    id: 6,
    name: "Monochrome Dinner Set",
    price: 199.99,
    description: "A complete 16-piece dinner set in elegant black and white ceramic.",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dinnerware",
    featured: true
  },
  {
    id: 7,
    name: "Matte Black Plates",
    price: 89.99,
    description: "Set of 4 matte black ceramic dinner plates with a subtle texture.",
    image: "https://images.unsplash.com/photo-1578991624414-df726180dd5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dinnerware",
    featured: false
  },
  {
    id: 8,
    name: "White Ceramic Bowls",
    price: 69.99,
    description: "Set of 4 handcrafted white ceramic bowls with a natural unglazed rim.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dinnerware",
    featured: false
  },
  {
    id: 9,
    name: "Serving Platter Set",
    price: 119.99,
    description: "A set of 3 ceramic serving platters in varying sizes with a sleek black finish.",
    image: "https://images.unsplash.com/photo-1576788903709-5c3a7b4f146b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dinnerware",
    featured: true
  },
  {
    id: 10,
    name: "Contrast Edge Dinnerware",
    price: 159.99,
    description: "A 12-piece dinnerware set with white centers and contrasting black edges.",
    image: "https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dinnerware",
    featured: false
  },
  
  // Sculptures (5 products)
  {
    id: 11,
    name: "Abstract Ceramic Sculpture",
    price: 249.99,
    description: "A striking abstract sculpture in matte black ceramic, perfect as a statement piece.",
    image: "https://images.unsplash.com/photo-1619698134127-7c1b873b6c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sculptures",
    featured: true
  },
  {
    id: 12,
    name: "Minimalist Human Form",
    price: 189.99,
    description: "A simplified human form sculpture in white ceramic with a smooth finish.",
    image: "https://images.unsplash.com/photo-1619698139733-81d15617cb85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sculptures",
    featured: false
  },
  {
    id: 13,
    name: "Geometric Ceramic Art Piece",
    price: 159.99,
    description: "A geometric sculpture with intersecting planes in contrasting black and white.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sculptures",
    featured: false
  },
  {
    id: 14,
    name: "Ceramic Animal Figurine",
    price: 129.99,
    description: "A stylized ceramic animal figurine with a matte black finish.",
    image: "https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sculptures",
    featured: true
  },
  {
    id: 15,
    name: "Twisted Form Sculpture",
    price: 219.99,
    description: "A dynamic twisted form sculpture in white ceramic with a high-gloss finish.",
    image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sculptures",
    featured: false
  },
  
  // Mugs (5 products)
  {
    id: 16,
    name: "Minimalist Black Mug",
    price: 29.99,
    description: "A sleek, minimalist mug with a matte black exterior and glossy white interior.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mugs",
    featured: true
  },
  {
    id: 17,
    name: "Textured White Mug",
    price: 27.99,
    description: "A handcrafted white mug with a unique textured exterior.",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mugs",
    featured: false
  },
  {
    id: 18,
    name: "Geometric Handle Mug",
    price: 32.99,
    description: "A black ceramic mug with a distinctive geometric handle design.",
    image: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mugs",
    featured: false
  },
  {
    id: 19,
    name: "Two-Tone Ceramic Mug",
    price: 34.99,
    description: "A stylish mug with a black exterior and contrasting white interior.",
    image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mugs",
    featured: true
  },
  {
    id: 20,
    name: "Espresso Cup Set",
    price: 59.99,
    description: "A set of 4 small ceramic espresso cups in alternating black and white.",
    image: "https://images.unsplash.com/photo-1551539441-1ca3e5eada0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mugs",
    featured: false
  },
  
  // Planters (5 products)
  {
    id: 21,
    name: "Minimalist Ceramic Planter",
    price: 49.99,
    description: "A sleek, cylindrical planter in matte black ceramic with drainage hole.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Planters",
    featured: true
  },
  {
    id: 22,
    name: "Textured White Planter",
    price: 54.99,
    description: "A white ceramic planter with a subtle textured exterior pattern.",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Planters",
    featured: false
  },
  {
    id: 23,
    name: "Geometric Hanging Planter",
    price: 64.99,
    description: "A geometric hanging planter in black ceramic with leather straps.",
    image: "https://images.unsplash.com/photo-1595351475754-8a520e8ff6d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Planters",
    featured: true
  },
  {
    id: 24,
    name: "Set of 3 Mini Planters",
    price: 79.99,
    description: "A set of three small ceramic planters in varying heights, perfect for succulents.",
    image: "https://images.unsplash.com/photo-1604762512526-b7068d08e01c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Planters",
    featured: false
  },
  {
    id: 25,
    name: "Sculptural Ceramic Planter",
    price: 89.99,
    description: "An artistic planter with an irregular form in matte white ceramic.",
    image: "https://images.unsplash.com/photo-1600411192008-aca71ef918c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Planters",
    featured: false
  },
  
  // Wall Art (5 products)
  {
    id: 26,
    name: "Ceramic Wall Disc Set",
    price: 149.99,
    description: "A set of 5 ceramic wall discs in varying sizes with black and white finishes.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Wall Art",
    featured: true
  },
  {
    id: 27,
    name: "Abstract Ceramic Wall Panel",
    price: 179.99,
    description: "A large abstract ceramic wall panel with textured surface in matte white.",
    image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Wall Art",
    featured: false
  },
  {
    id: 28,
    name: "Geometric Wall Tiles",
    price: 199.99,
    description: "A set of 9 geometric ceramic wall tiles that can be arranged in various patterns.",
    image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Wall Art",
    featured: true
  },
  {
    id: 29,
    name: "Ceramic Wall Hanging",
    price: 129.99,
    description: "A sculptural ceramic wall hanging with an organic form in black ceramic.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Wall Art",
    featured: false
  },
  {
    id: 30,
    name: "Minimalist Ceramic Wall Art",
    price: 159.99,
    description: "A minimalist ceramic wall piece with subtle raised patterns in white.",
    image: "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Wall Art",
    featured: false
  },
  
  // Teapots (5 products)
  {
    id: 31,
    name: "Modern Ceramic Teapot",
    price: 89.99,
    description: "A sleek, modern teapot in matte black ceramic with a minimalist handle.",
    image: "https://images.unsplash.com/photo-1563826904577-6b72c5d75e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Teapots",
    featured: true
  },
  {
    id: 32,
    name: "White Ceramic Teapot",
    price: 79.99,
    description: "A classic white ceramic teapot with a smooth glossy finish.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Teapots",
    featured: false
  },
  {
    id: 33,
    name: "Geometric Teapot",
    price: 99.99,
    description: "A geometric teapot with angular forms in black ceramic.",
    image: "https://images.unsplash.com/photo-1578079999841-339b1e587760?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Teapots",
    featured: false
  },
  {
    id: 34,
    name: "Teapot and Cup Set",
    price: 129.99,
    description: "A matching teapot and two cup set in contrasting black and white ceramic.",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Teapots",
    featured: true
  },
  {
    id: 35,
    name: "Sculptural Teapot",
    price: 119.99,
    description: "An artistic teapot with an unconventional form in white ceramic.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Teapots",
    featured: false
  },
  
  // Decorative Items (5 products)
  {
    id: 36,
    name: "Ceramic Sphere Set",
    price: 69.99,
    description: "A set of 3 decorative ceramic spheres in varying sizes with matte black finish.",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Decorative Items",
    featured: true
  },
  {
    id: 37,
    name: "Abstract Ceramic Object",
    price: 89.99,
    description: "An abstract decorative object in white ceramic with an organic form.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Decorative Items",
    featured: false
  },
  {
    id: 38,
    name: "Ceramic Candle Holder Set",
    price: 59.99,
    description: "A set of 3 geometric ceramic candle holders in black and white.",
    image: "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Decorative Items",
    featured: false
  },
  {
    id: 39,
    name: "Minimalist Ceramic Box",
    price: 49.99,
    description: "A sleek ceramic box with lid in matte black, perfect for small storage.",
    image: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Decorative Items",
    featured: true
  },
  {
    id: 40,
    name: "Ceramic Incense Holder",
    price: 39.99,
    description: "A minimalist ceramic incense holder in white with a sleek design.",
    image: "https://images.unsplash.com/photo-1602437038696-33d7eb33d3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Decorative Items",
    featured: false
  },
  
  // Tableware (5 products)
  {
    id: 41,
    name: "Ceramic Utensil Holder",
    price: 44.99,
    description: "A cylindrical ceramic utensil holder in matte black with a minimalist design.",
    image: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tableware",
    featured: true
  },
  {
    id: 42,
    name: "Salt and Pepper Set",
    price: 39.99,
    description: "A minimalist ceramic salt and pepper shaker set in contrasting black and white.",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tableware",
    featured: false
  },
  {
    id: 43,
    name: "Ceramic Trivet Set",
    price: 49.99,
    description: "A set of 3 geometric ceramic trivets in black with cork backing.",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tableware",
    featured: false
  },
  {
    id: 44,
    name: "Napkin Ring Set",
    price: 34.99,
    description: "A set of 6 ceramic napkin rings with a minimalist design in white.",
    image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tableware",
    featured: true
  },
  {
    id: 45,
    name: "Ceramic Coaster Set",
    price: 29.99,
    description: "A set of 6 ceramic coasters with geometric patterns in black and white.",
    image: "https://images.unsplash.com/photo-1579438282950-5a1a2a816098?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tableware",
    featured: false
  },
  
  // Custom Pieces (5 products)
  {
    id: 46,
    name: "Custom Ceramic Name Plate",
    price: 79.99,
    description: "A personalized ceramic name plate for your desk or door in matte black.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Custom Pieces",
    featured: true
  },
  {
    id: 47,
    name: "Custom House Number",
    price: 59.99,
    description: "A custom ceramic house number in your choice of black or white.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Custom Pieces",
    featured: false
  },
  {
    id: 48,
    name: "Personalized Ceramic Mug",
    price: 39.99,
    description: "A custom ceramic mug with personalized text or design in black or white.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Custom Pieces",
    featured: false
  },
  {
    id: 49,
    name: "Custom Ceramic Plaque",
    price: 89.99,
    description: "A personalized ceramic plaque with custom text in an elegant design.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Custom Pieces",
    featured: true
  },
  {
    id: 50,
    name: "Custom Ceramic Pet Bowl",
    price: 49.99,
    description: "A personalized ceramic pet bowl with your pet's name in black or white.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Custom Pieces",
    featured: false
  }
];