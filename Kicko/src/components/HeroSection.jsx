import React from 'react'
import { ShoppingBag, TrendingUp, Award, ArrowRight, Sparkles } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Main Hero */}
      <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white z-10">              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Step Into Your
                <span className="block text-yellow-300">Dream Shoes</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
                Discover the perfect blend of style, comfort, and quality. From casual sneakers to premium athletic footwear, we've got every step covered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all flex items-center justify-center gap-2">
                  Explore Collection
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-1">500+</div>
                  <div className="text-sm opacity-90">Shoe Models</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">50K+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Authentic</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:block">
              <div className="relative">
                {/* Floating shoe image */}
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                    alt="Featured Shoe"
                    className="w-full max-w-lg mx-auto transform hover:scale-105 hover:rotate-3 transition-all duration-500 drop-shadow-2xl"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white rounded-full opacity-20 blur-3xl"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 -left-6 bg-white rounded-2xl p-4 shadow-2xl animate-bounce">
                <div className="flex items-center gap-3 ">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Premium</div>
                    <div className="text-xs text-gray-600">Quality Guaranteed</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-6 bg-white rounded-2xl p-4 shadow-2xl" style={{animation: 'bounce 2s infinite', animationDelay: '0.5s'}}>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Trending</div>
                    <div className="text-xs text-gray-600">Best Sellers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section
      <div className="bg-white py-16 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Kicko?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're not just selling shoes – we're delivering an experience that keeps you coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl w-fit mb-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free delivery on all orders over $50. Fast and reliable shipping to your doorstep.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl w-fit mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                100% authentic products from top brands. We guarantee quality in every pair.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl w-fit mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Latest Trends</h3>
              <p className="text-gray-600">
                Stay ahead with new arrivals every week. Be the first to rock the latest styles.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default HeroSection