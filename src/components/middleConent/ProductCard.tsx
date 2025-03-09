"use client";
import React, { useState } from "react";
import { FiHeart, FiShoppingBag, FiEye } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  price,
  originalPrice,
  rating,
  isNew = false,
  isSale = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement quick view functionality here
    console.log("Quick view for product:", id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement add to cart functionality here
    console.log("Add to cart product:", id);
  };

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
            NEW
          </span>
        )}
        {isSale && originalPrice && (
          <span className="bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Favorite button */}
      <button
        className="absolute top-2 right-2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition-colors duration-200"
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
      >
        <FiHeart
          size={18}
          className={isFavorite ? "fill-pink-500 text-pink-500" : "text-gray-600"}
        />
      </button>

      {/* Product image with hover actions */}
      <Link href={`/products/${id}`} className="block relative">

      <div className="relative pb-[125%] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>


        {/* Hover actions */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 flex justify-center gap-2 transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors duration-200"
            onClick={handleQuickView}
            aria-label="Quick view"
          >
            <FiEye size={18} />
          </button>
          <button
            className="bg-pale-pink hover:bg-pink-600 text-white rounded-full p-2 transition-colors duration-200"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <FiShoppingBag size={18} />
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4">
        <Link href={`/products/${id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 mb-1 hover:text-pale-pink transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Star rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through mr-1">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-sm font-medium text-pale-pink">${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;