import React, { useContext, useState } from 'react'
import { DataList } from '../db/data'
import { ShoppingCart, Zap, Heart } from 'lucide-react'
import { SearchContext } from '../db/search'
import { useNavigate } from 'react-router-dom'

const Products = () => {
   const productsList = useContext(DataList);
   const {searchValue} = useContext(SearchContext)

   const navigate = useNavigate()
   
   const [brand, setBrand] = useState('all')

   const filteredProducts = productsList
                            .filter((product) => brand === 'all' || product.company === brand)
                            .filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter by Brand</h2>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setBrand('all')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                brand === 'all' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              All Brands
            </button>
            <button 
              onClick={() => setBrand('Nike')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                brand === 'Nike' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              Nike
            </button>
            <button 
              onClick={() => setBrand('Adidas')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                brand === 'Adidas' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              Adidas
            </button>
            <button 
              onClick={() => setBrand('Vans')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                brand === 'Vans' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              Vans
            </button>
            <button 
              onClick={() => setBrand('Puma')} 
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                brand === 'Puma' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              Puma
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            filteredProducts.map(({id, img,rating, title, star, newPrice, prevPrice }) => {
              return (
                <div 
                  onClick={() => navigate(`/products/${id}`)}
                  key={id} 
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Section */}
                  <div className="relative bg-gray-100 p-6 overflow-hidden">
                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors z-10">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <img 
                      src={img} 
                      alt={title}
                      className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                      {title}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3 text-yellow-500">
                     {rating} {star}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">{newPrice}</span>
                      <span className="text-lg text-gray-400 line-through">{prevPrice}</span>
                    </div>

                    {/* Buttons */}
                    {/* <div className="flex flex-col gap-2">
                      <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                      <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5" />
                        Buy Now
                      </button>
                    </div> */}
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👟</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No shoes found</h3>
            <p className="text-gray-600">Try selecting a different brand</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products