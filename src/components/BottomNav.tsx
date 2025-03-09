"use client";
import React from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const BottomNav: React.FC = () => {
  return (
    <div className="fixed text-white bottom-0 left-0 w-full bg-pale-pink shadow-md flex justify-around items-center p-3 md:hidden border-t">
      <button className="p-2" aria-label="Search">
        <FiSearch size={22} />
      </button>

      <button className="p-2" aria-label="User account">
        <FiUser size={22} />
      </button>

      <button className="p-2" aria-label="Wishlist">
        <FiHeart size={22} />
      </button>

      <button className="p-2" aria-label="Shopping bag">
        <FiShoppingBag size={22} />
      </button>

      <button className="p-2 text-green-600" aria-label="WhatsApp">
        <FaWhatsapp size={22} />
      </button>
    </div>
  );
};

export default BottomNav;
