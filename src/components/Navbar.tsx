"use client";
import React, { useState } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import BottomNav from "./BottomNav";
import SearchBar from "./Search";
import NavCategories from "./NavCategories";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-pale-pink w-full h-[60px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex text-white justify-center md:justify-between items-center">
            
            {/* Logo on the left */}
            <div className="flex items-center">
            <Link href="/">
              <Image
                src="/HILYO (3).svg"
                alt="HILYO Logo"
                width={80}
                height={80}
                className="h-8 md:h-10 cursor-pointer"
              />
            </Link>
            </div>
            <NavCategories />
            
            {/* Header Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              
              <SearchBar/>
              {/* User Account Button - Only visible on larger screens */}
              <div className="relative group hidden sm:block">
                <button className="p-1 md:p-2" aria-label="User account">
                  <FiUser size={18} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Account
                </span>
              </div>
              
              {/* Wishlist Button */}
              <div className="relative group hidden sm:block">
                <button className="p-1 md:p-2" aria-label="Wishlist">
                  <FiHeart size={20} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Wishlist
                </span>
              </div>
              
              {/* Shopping Bag Button */}
              <div className="relative group hidden sm:block" >
                <button className="p-1 md:p-2" aria-label="Shopping bag">
                  <FiShoppingBag size={18} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 text-black text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Cart
                </span>
              </div>
              
              {/* WhatsApp Button - Only visible on larger screens */}
              <div className="relative group hidden sm:block">
                <button className="p-1 md:p-2 text-green-600" aria-label="WhatsApp">
                  <FaWhatsapp size={18} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  WhatsApp
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
      
      {/* Add the NavCategories component here */}
      
      
      <BottomNav/>
      
    </header>
  );
};

export default Navbar;