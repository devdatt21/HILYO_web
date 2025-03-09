"use client";
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
}

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Elegant Evening Gown",
    imageUrl: "/images/evening-gown.jpeg",
    price: 129.99,
    originalPrice: 159.99,
    rating: 5,
    isNew: true,
  },
  {
    id: "2",
    name: "Casual Denim Jacket",
    imageUrl: "/images/denim-jacket.jpeg",
    price: 79.99,
    rating: 4,
  },
  {
    id: "3",
    name: "Luxury Silk Saree",
    imageUrl: "/images/silk-saree.jpeg",
    price: 249.99,
    originalPrice: 299.99,
    rating: 5,
    isSale: true,
  },
  {
    id: "4",
    name: "Classic Women's Blazer",
    imageUrl: "/images/womens-blazer.jpeg",
    price: 199.99,
    rating: 4,
  },
  {
    id: "5",
    name: "Trendy Women's Handbag",
    imageUrl: "/images/handbag.jpeg",
    price: 59.99,
    rating: 4,
    isNew: true,
  },
  {
    id: "6",
    name: "Sporty Running Shoes",
    imageUrl: "/images/running-shoes.jpeg",
    price: 99.99,
    rating: 4,
  },
  {
    id: "7",
    name: "Elegant Pearl Necklace",
    imageUrl: "/images/pearl-necklace.jpeg",
    price: 149.99,
    rating: 5,
    isSale: true,
  },
  {
    id: "8",
    name: "Casual Cotton T-Shirt",
    imageUrl: "/images/cotton-tshirt.jpeg",
    price: 29.99,
    rating: 4,
  },
];

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle, products, viewAllLink }) => {
  return (
    <section className="py-10 px-4 md:px-6">
      {/* Section header */}
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
      )}

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* View all link */}
      {viewAllLink && (
        <div className="text-center mt-8">
          <a
            href={viewAllLink}
            className="inline-block border border-pale-pink text-pale-pink hover:bg-pale-pink hover:text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
          >
            View All
          </a>
        </div>
      )}
    </section>
  );
};

// ✅ Use default props or pass `prodprop` when using <ProductGrid />
export default function ProductGridWrapper() {
  return (
    <ProductGrid
      title="Featured Products"
      subtitle="Discover our latest collection"
      products={dummyProducts}
      viewAllLink="/shop"
    />
  );
}
