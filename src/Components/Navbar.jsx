import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#151515d1] text-white fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <h1 className="text-xl">BISTRO BOSS</h1>
          <span className="text-sm font-light tracking-wider">RESTAURANT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-400 font-semibold"
          >
            HOME
          </a>
          <a href="#" className="hover:text-yellow-500">
            CONTACT US
          </a>
          <a href="#" className="hover:text-yellow-500">
            DASHBOARD
          </a>
          <a href="#" className="hover:text-yellow-500">
            OUR MENU
          </a>
          <a href="#" className="hover:text-yellow-500">
            OUR SHOP
          </a>
          <a
            href="#"
            className="relative flex items-center hover:text-yellow-500"
          >
            <FaShoppingCart size={20} />
            <span className="absolute top-0 right-0 text-xs bg-red-500 rounded-full text-white px-1">
              3
            </span>
          </a>
          <a href="#" className="hover:text-yellow-500 flex items-center">
            SIGN OUT
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FiUser size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-yellow-500 hover:text-yellow-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#" className="hover:text-yellow-500">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                DASHBOARD
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                OUR MENU
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                OUR SHOP
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                SIGN OUT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
