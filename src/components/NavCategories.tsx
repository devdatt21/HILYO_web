"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

// Define category types
interface SubCategory {
  name: string;
  path: string;
}

interface Category {
  name: string;
  path: string;
  subCategories?: SubCategory[];
}

const NavCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Example categories data - replace with your actual categories
  const categories: Category[] = [
    {
      name: "New",
      path: "/collections/new-arrivals",
    },
    {
      name: "Clothing",
      path: "/collections/clothing",
      subCategories: [
        { name: "Dresses", path: "/collections/dresses" },
        { name: "Tops", path: "/collections/tops" },
        { name: "Bottoms", path: "/collections/bottoms" },
        { name: "Outerwear", path: "/collections/outerwear" },
      ],
    },
    {
      name: "Accessories",
      path: "/collections/accessories",
      subCategories: [
        { name: "Jewelry", path: "/collections/jewelry" },
        { name: "Bags", path: "/collections/bags" },
        { name: "Hats", path: "/collections/hats" },
      ],
    },
    {
      name: "Beauty",
      path: "/collections/beauty",
      subCategories: [
        { name: "Skincare", path: "/collections/skincare" },
        { name: "Makeup", path: "/collections/makeup" },
        { name: "Fragrance", path: "/collections/fragrance" },
      ],
    },
    {
      name: "Sale",
      path: "/collections/sale",
    },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCategory = (categoryName: string) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="bg-pale-pink hidden md:block" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ul className="flex justify-center space-x-8">
          {categories.map((category) => (
            <li
              key={category.name}
              className="relative group py-4"
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center cursor-pointer">
                <Link href={category.path}>
                  <span className="text-white font-medium hover:text-pink-500 transition-colors duration-200">
                    {category.name}
                  </span>
                </Link>
                {category.subCategories && (
                  <FiChevronDown 
                    className={`ml-1 text-white transition-transform duration-200 ${
                      activeCategory === category.name ? "transform rotate-180" : ""
                    }`} 
                    size={14} 
                  />
                )}
              </div>

              {/* Dropdown menu for categories with subcategories */}
              {category.subCategories && activeCategory === category.name && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  {category.subCategories.map((subCategory) => (
                    <Link 
                      key={subCategory.name} 
                      href={subCategory.path}
                      className="block px-4 py-2 text-sm text-white hover:bg-pink-50 hover:text-pink-500"
                    >
                      {subCategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavCategories;