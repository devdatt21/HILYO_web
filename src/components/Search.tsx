"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC = () => {
  return (
    <div className="relative group hidden sm:block">
      <button className="p-2" aria-label="Search">
        <FiSearch size={22} />
      </button>
      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        Search
      </span>
    </div>
  );
};

export default SearchBar;
