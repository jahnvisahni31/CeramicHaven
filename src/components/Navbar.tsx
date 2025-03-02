import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // GSAP animation for navbar
    gsap.from('.navbar', { 
      y: -50, 
      opacity: 0, 
      duration: 1, 
      ease: 'power3.out' 
    });

    // Cart badge animation when items change
    if (totalItems > 0) {
      gsap.from('.cart-badge', {
        scale: 0.5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    }
  }, [totalItems]);

  return (
    <nav className="navbar fixed w-full bg-black text-black z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            CERAMIC ELEGANCE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-300 transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="hover:text-gray-300 transition-colors">
              Categories
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="cart-badge absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="cart-badge absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link to="/shop" className="hover:text-gray-300 transition-colors">
                Shop
              </Link>
              <Link to="/categories" className="hover:text-gray-300 transition-colors">
                Categories
              </Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;