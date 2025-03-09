import { FiUser, FiHeart, FiShoppingBag} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SearchBar from "./Search";


const NavIcons : React.FC = () => {
    return (
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
    )
}

export default NavIcons;