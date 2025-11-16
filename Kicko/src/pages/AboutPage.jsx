import React from 'react'
import { Target, Heart, Award, Users, TrendingUp, ShieldCheck, Truck, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Kicko</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            More than just shoes – we're on a mission to help you step confidently into every moment of your life.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded in 2020, Kicko was born from a simple belief: everyone deserves footwear that doesn't compromise on style, comfort, or quality. What started as a small passion project has grown into a thriving community of shoe enthusiasts.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We partner with the world's leading brands to bring you an incredible selection of footwear for every occasion – from casual weekends to intense workouts, from business meetings to special celebrations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we're proud to serve over 50,000 happy customers worldwide, and we're just getting started.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80" 
              alt="Shoe collection"
              className="rounded-2xl shadow-2xl w-[300px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold mb-1">50K+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're guided by principles that keep our customers at the heart of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We only stock 100% authentic products from trusted brands. Every pair is verified to meet our strict quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. From browsing to delivery, we ensure a seamless and delightful shopping experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of trends and continuously update our collection with the latest styles and technologies in footwear.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                <div className="text-5xl font-bold mb-2">500+</div>
              </div>
              <div className="text-gray-600 font-medium">Shoe Models</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                <div className="text-5xl font-bold mb-2">50K+</div>
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                <div className="text-5xl font-bold mb-2">20+</div>
              </div>
              <div className="text-gray-600 font-medium">Top Brands</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                <div className="text-5xl font-bold mb-2">4.9★</div>
              </div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Kicko?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We go the extra mile to ensure your shopping experience is exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Authentic</h3>
              <p className="text-gray-400">All products are genuine and sourced directly from authorized distributors.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
              <p className="text-gray-400">Enjoy free delivery on all orders over $50 with fast processing.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Returns</h3>
              <p className="text-gray-400">30-day return policy. Not satisfied? Send it back hassle-free.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-400">Our customer service team is always ready to help you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Pair?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who trust Kicko for their footwear needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
             onClick={() => navigate('/products')}
             className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
              Shop Now →
            </button>
            <button
            onClick={() => navigate('/contact')}
            className="bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage