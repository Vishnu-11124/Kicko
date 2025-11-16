import React, { useContext } from 'react'
import { DataList } from '../db/data'
import { ShoppingCart, Zap, Heart, ArrowRight, TrendingUp, Star, Award, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const HomeBody = () => {
  const productsList = useContext(DataList)
  const navigate = useNavigate()
  
  // Get featured products (first 8 products)
  const featuredProducts = productsList.slice(0, 8)
  
  // Get trending products (products with star rating)
  const trendingProducts = productsList.slice(8, 12)
  
  // Get brands
  const brands = ['Nike', 'Adidas', 'Puma', 'Vans']

  return (
    <div className="bg-white">
      {/* Categories Banner */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group">
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">👟</div>
                <h3 className="font-bold text-gray-900">Sneakers</h3>
                <p className="text-sm text-gray-600">200+ Styles</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group">
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏃</div>
                <h3 className="font-bold text-gray-900">Running</h3>
                <p className="text-sm text-gray-600">150+ Styles</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group">
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">👞</div>
                <h3 className="font-bold text-gray-900">Casual</h3>
                <p className="text-sm text-gray-600">180+ Styles</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group">
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚽</div>
                <h3 className="font-bold text-gray-900">Sports</h3>
                <p className="text-sm text-gray-600">120+ Styles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Handpicked favorites just for you</p>
          </div>
          <button onClick={() => navigate('/products')} className="hidden md:flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative bg-gray-100 p-6 overflow-hidden">
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors z-10">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
                {product.prevPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    SALE
                  </div>
                )}
                <img 
                  src={product.img} 
                  alt={product.title}
                  className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <div className="text-xs text-orange-600 font-semibold uppercase mb-2">
                  {product.company}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-2 min-h-[3.5rem]">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-3 text-yellow-500">
                 {product.rating}  {product.star} 
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.newPrice}</span>
                  {product.prevPrice && (
                    <span className="text-lg text-gray-400 line-through">{product.prevPrice}</span>
                  )}
                </div>

                {/* <div className="flex flex-col gap-2">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Banner
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Summer Sale is Here!</h2>
              <p className="text-xl mb-6 opacity-90">Get up to 50% off on selected items. Limited time offer!</p>
              <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all">
                Shop Sale Now →
              </button>
            </div>
            <div className="text-white text-center">
              <div className="text-7xl font-bold mb-2">50%</div>
              <div className="text-2xl">OFF</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Shop by Brand
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Brand</h2>
          <p className="text-gray-600 text-lg">Explore your favorite brands</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div 
              key={brand}
              className="bg-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-2xl p-8 text-center cursor-pointer transition-all group"
            >
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">
                {brand}
              </h3>
            </div>
          ))}
        </div>
      </div> */}

      {/* Trending Now */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                <h2 className="text-4xl font-bold text-gray-900">Trending Now</h2>
              </div>
              <p className="text-gray-600">What's hot this week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative bg-gray-100 p-6 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    HOT
                  </div>
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {product.title}
                  </h3>
                  
                  <div className="flex items-center mb-3 text-yellow-500">
                    {product.rating} {product.star}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{product.newPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Shop With Kicko?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to providing the best shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              100% authentic products from trusted brands. Every pair is verified for quality.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">50K+ Happy Customers</h3>
            <p className="text-gray-600">
              Join thousands of satisfied customers who trust Kicko for their footwear needs.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4.9 Star Rating</h3>
            <p className="text-gray-600">
              Rated excellent by our customers for quality, service, and fast delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default HomeBody