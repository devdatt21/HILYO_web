"use client"
import React, { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const AnitaDongreHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="font-sans">
      {/* Top Banner */}
      <div className="bg-green-900 text-white text-center py-2">
        <p className="text-sm">
          Shop At Special Prices | <span className="font-semibold underline">Discover Now</span>
        </p>
      </div>

      {/* Header with Logo and Navigation */}
      <header className="bg-cream-50 py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            {/* Mobile Menu Button - Only visible on mobile */}
            <button 
              className="md:hidden p-2" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Ship To - Hidden on smaller mobile screens */}
            <div className="hidden sm:flex items-center">
              <span className="text-sm">Ship to : </span>
              <select className="ml-2 bg-transparent border-none focus:outline-none text-sm">
                <option>India ₹</option>
              </select>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              {/* <img
                src="/logo-placeholder.png"
                alt="Anita Dongre"
                className="h-8 md:h-10"
              /> */}
              <h1 className="text-lg md:text-xl text-amber-700 font-serif ml-2">HILYO</h1>
            </div>

            {/* Header Icons - Show fewer icons on mobile */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="p-1 md:p-2">
                <FiSearch size={18} />
              </button>
              <button className="hidden sm:block p-1 md:p-2">
                <FiUser size={18} />
              </button>
              <button className="hidden sm:block p-1 md:p-2">
                <FiHeart size={18} />
              </button>
              <button className="p-1 md:p-2">
                <FiShoppingBag size={18} />
              </button>
              <button className="hidden sm:block p-1 md:p-2 text-green-600">
                <FaWhatsapp size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-grey-900 fixed inset-0 z-50 pt-16 px-4 overflow-y-auto">
              <button 
                className="absolute top-4 right-4" 
                onClick={toggleMobileMenu}
              >
                <FiX size={24} />
              </button>
              
              <div className="flex flex-col space-y-4 text-center">
                <a href="#" className="py-3 border-b border-gray-700">WOMEN</a>
                <a href="#" className="py-3 border-b border-gray-700">MEN</a>
                <a href="#" className="py-3 border-b border-gray-700">WEDDING</a>
                <a href="#" className="py-3 border-b border-gray-700">JEWELRY</a>
                <a href="#" className="py-3 border-b border-gray-700">ACCESSORIES</a>
                <a href="#" className="py-3 border-b border-gray-700">GIFTING</a>
                <a href="#" className="py-3 border-b border-gray-700">GRASSROOT BY ANITA DONGRE</a>
                <a href="#" className="py-3 border-b border-gray-700">DISCOVER</a>
                <a href="#" className="py-3 border-b border-gray-700">CELEBRITY CLOSET</a>
                <a href="#" className="py-3 border-b border-gray-700">SALE</a>
                
                {/* Mobile-only country selector */}
                <div className="py-3 border-b border-gray-200 flex justify-center">
                  <span>Ship to : </span>
                  <select className="ml-2 bg-transparent border-none focus:outline-none">
                    <option>India ₹</option>
                  </select>
                </div>
                
                {/* Mobile-only user icons */}
                <div className="flex justify-center space-x-6 py-4">
                  <button className="p-2">
                    <FiUser size={20} />
                  </button>
                  <button className="p-2">
                    <FiHeart size={20} />
                  </button>
                  <button className="p-2 text-green-600">
                    <FaWhatsapp size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Navigation - Hidden on mobile */}
          <nav className="hidden md:flex justify-center space-x-4 lg:space-x-8 text-xs lg:text-sm overflow-x-auto">
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
      </header>

      {/* Hero Section with Image and Text */}
      <section className="relative">
        {/* <img
          src="/eid-collection-hero.jpg"
          alt="The Eid Edit Collection"
          className="w-full h-screen object-cover"
        /> */}
        {/* <div className="absolute inset-0 flex flex-col justify-end items-end pr-8 sm:pr-16 md:pr-24 pb-16 sm:pb-24 md:pb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif italic">The Eid Edit</h2>
          <a href="#" className="text-white text-xl sm:text-2xl underline mt-4 sm:mt-8 font-light">
            Shop Now
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default AnitaDongreHomepage;