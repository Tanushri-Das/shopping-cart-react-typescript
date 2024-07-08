import Drawer from "@/components/Drawer/Drawer";
import { useCart } from "@/Contexts/CartContext/CartContext";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, toggleDrawer } = useCart();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-[#3944bc] py-2">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="flex items-center justify-between h-16">
            <NavLink
              to="/"
              className="mr-10 text-xl lg:text-3xl text-white font-mono font-bold flex-shrink-0"
            >
              Sip Coffee
            </NavLink>
            <div className="flex items-center">
              <div className="hidden lg:block ml-auto">
                <div className="flex justify-center space-x-4">
                  <NavLink
                    to="/"
                    className="links text-white text-xl font-bold"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/products"
                    className="link text-xl text-white font-bold px-5"
                  >
                    Products
                  </NavLink>
                  <button className="btn relative" onClick={toggleDrawer}>
                    <FaShoppingCart className="text-2xl text-white" />
                    <div className="absolute top-[-15px] left-[15px] p-1 bg-white rounded-full w-7 h-7 flex items-center justify-center">
                      <p className="text-lg text-black font-semibold">
                        {cartCount}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
                <a
                  onClick={toggleNavbar}
                  href="#"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
              <NavLink
                to="/"
                onClick={closeNavbar}
                className="links text-white text-xl px-3 pb-3 font-bold block"
              >
                Home
              </NavLink>
              <NavLink
                onClick={closeNavbar}
                to="/products"
                className="link text-xl text-white px-3 pb-3 font-bold block"
              >
                Products
              </NavLink>
            </div>
          </div>
        )}
      </nav>
      <Drawer />
    </>
  );
};

export default Header;
