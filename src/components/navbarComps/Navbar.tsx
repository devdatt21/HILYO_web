import React from "react";
import BottomNav from "./BottomNav";
import SearchBar from "./Search";
import NavCategories from "./NavCategories";
import Image from "next/image";
import Link from "next/link";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-pale-pink w-full h-[60px] flex items-center fixed top-0 left-0 z-50 shadow-md">
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

            {/* Categories  */}
            <NavCategories />
            
            {/* Search bar */}
            <SearchBar/>

            {/* Header Icons */}
            <NavIcons/>
            
          </div>
        </div>
      </nav>
      
      {/* Add the NavCategories component here */}
      
      
      <BottomNav/>
      
    </header>
  );
};

export default Navbar;