"use client"
import React, { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-cream-50">
      <nav className="bg-pale-pink w-full h-[50px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button - Only visible on mobile */}
            <button 
              className="md:hidden p-2" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
    
            {/* Ship To - Hidden on smaller mobile screens */}
            <div className="hidden sm:flex items-center">
              <span className="text-sm">Location : </span>
              <select className="ml-2 bg-transparent border-none focus:outline-none text-sm">
                <option>Surat</option>
              </select>
            </div>
    
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/HILYO (3).svg"
                alt="HILYO Logo"
                className="h-8 md:h-10"
              />
            </div>
    
            {/* Header Icons - Show fewer icons on mobile */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="p-1 md:p-2" aria-label="Search">
                <FiSearch size={18} />
              </button>
              <button className="hidden sm:block p-1 md:p-2" aria-label="User account">
                <FiUser size={18} />
              </button>
              <button className="hidden sm:block p-1 md:p-2" aria-label="Wishlist">
                <FiHeart size={18} />
              </button>
              <button className="p-1 md:p-2" aria-label="Shopping bag">
                <FiShoppingBag size={18} />
              </button>
              <button className="hidden sm:block p-1 md:p-2 text-green-600" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navigation - Hidden on mobile */}
      <div className="hidden md:block bg-cream-50 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex justify-center space-x-4 lg:space-x-8 text-xs lg:text-sm overflow-x-auto">
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">WOMEN</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">MEN</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">WEDDING</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">JEWELRY</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">ACCESSORIES</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">GIFTING</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">GRASSROOT BY ANITA DONGRE</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">DISCOVER</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">CELEBRITY CLOSET</a>
            <a href="#" className="px-2 py-2 whitespace-nowrap hover:underline">SALE</a>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 pt-16 px-4 overflow-y-auto">
          <button 
            className="absolute top-4 right-4" 
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
          
          <div className="flex flex-col space-y-4 text-center">
            <a href="#" className="py-3 border-b border-gray-200">WOMEN</a>
            <a href="#" className="py-3 border-b border-gray-200">MEN</a>
            <a href="#" className="py-3 border-b border-gray-200">WEDDING</a>
            <a href="#" className="py-3 border-b border-gray-200">JEWELRY</a>
            <a href="#" className="py-3 border-b border-gray-200">ACCESSORIES</a>
            <a href="#" className="py-3 border-b border-gray-200">GIFTING</a>
            <a href="#" className="py-3 border-b border-gray-200">GRASSROOT BY ANITA DONGRE</a>
            <a href="#" className="py-3 border-b border-gray-200">DISCOVER</a>
            <a href="#" className="py-3 border-b border-gray-200">CELEBRITY CLOSET</a>
            <a href="#" className="py-3 border-b border-gray-200">SALE</a>
            
            {/* Mobile-only country selector */}
            <div className="py-3 border-b border-gray-200 flex justify-center">
              <span>Ship to : </span>
              <select className="ml-2 bg-transparent border-none focus:outline-none">
                <option>India ₹</option>
              </select>
            </div>
            
            {/* Mobile-only user icons */}
            <div className="flex justify-center space-x-6 py-4">
              <button className="p-2" aria-label="User account">
                <FiUser size={20} />
              </button>
              <button className="p-2" aria-label="Wishlist">
                <FiHeart size={20} />
              </button>
              <button className="p-2 text-green-600" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;