import React, { useContext, useState } from 'react'
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react'
import { SearchContext } from '../db/search'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../db/Cart'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {searchValue, setValue} = useContext(SearchContext)
  const {cartCount} = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Banner */}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Kicko
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Products
            </Link>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Women
            </a>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contact
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for shoes..."
                value={searchValue}
                onChange={(e) => setValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-orange-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-gray-700 hover:text-orange-600 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button
             onClick={() => navigate('/cart')}
             className="text-gray-700 hover:text-orange-600 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-700 hover:text-orange-600 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              {{cartCount} > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for shoes..."
                value={searchValue}
                onChange={(e) => setValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Mobile Links */}
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors">
              New Arrivals
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors">
              Men
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors">
              Women
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors">
              Kids
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors">
              Sale
            </a>

            {/* Mobile Icons */}
            <div className="flex items-center justify-around pt-4 border-t border-gray-200">
              <button className="flex flex-col items-center text-gray-700 hover:text-orange-600 transition-colors">
                <Heart className="w-6 h-6 mb-1" />
                <span className="text-xs">Wishlist</span>
              </button>
              <button className="flex flex-col items-center text-gray-700 hover:text-orange-600 transition-colors">
                <User className="w-6 h-6 mb-1" />
                <span className="text-xs">Account</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar