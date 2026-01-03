export const products = [
  {
    id: 1,
    name: "Classic Tee",
    price: 29.99,
    category: "clothing",
    description: "Premium cotton t-shirt with a classic fit. Perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Navy"]
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 89.99,
    category: "electronics",
    description: "Noise-cancelling wireless earbuds with 24-hour battery life.",
    image: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e8?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 256,
    inStock: true,
    colors: ["Black", "White", "Blue"]
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 19.99,
    category: "home",
    description: "Ceramic mug with ergonomic handle and heat-retaining design.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w-400&h=400&fit=crop",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  // Add 9+ more products with varied categories
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "clothing", name: "Clothing" },
  { id: "electronics", name: "Electronics" },
  { id: "home", name: "Home & Kitchen" },
  { id: "books", name: "Books" }
];