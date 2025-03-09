"use client";
import React from "react";
import Link from "next/link";

interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
  itemCount: number;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, imageUrl, itemCount, link }) => {
  return (
    <Link href={link} className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
        {/* Category image */}
        <div className="relative pb-[120%]">
          <img
            src={imageUrl}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-pale-pink transition-colors duration-200">
              {name}
            </h3>
            <p className="text-sm text-gray-200">{itemCount} items</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;