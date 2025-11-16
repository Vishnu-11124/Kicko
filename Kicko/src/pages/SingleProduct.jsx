import React, { useState, useContext } from 'react'
import { DataList } from '../db/data'
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Check, Minus, Plus, ArrowLeft } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import { CartContext } from '../db/Cart'

const SingleProduct = () => {
  const productList = useContext(DataList)
  const { addToCart, quantity, increaseQuantity, decreaseQuantity} = useContext(CartContext)
  const { id } = useParams()
  const navigate = useNavigate()


  if (!id) {
    return (
      <h1>Invalid Product ID</h1>
    )
  }
  
  // For demo purposes, using first product. Replace with: const product = productList.find((product) => product.id === Number(productId))
  const product = productList.find((item) => item.id === Number(id))

  
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group">
              <img 
                src={product.img} 
                alt={product.title}
                className="w-full h-[500px] object-contain p-8"
              />
              
              {/* Favorite Button */}
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Heart 
                  className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                />
              </button>

              {/* Discount Badge (if applicable) */}
              {product.prevPrice && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                  SALE
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Brand/Company */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                {product.company}
              </span>
              <span className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                <Check className="w-4 h-4" />
                In Stock
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-yellow-500">
                {product.star}
              </div>
              <span className="text-gray-600">
                (245 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-900">{product.newPrice}</span>
              {product.prevPrice && (
                <>
                  <span className="text-2xl text-gray-400 line-through">{product.prevPrice}</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Save Big!
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <div className="mb-6 p-4 bg-white rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                Experience premium comfort and style with these exceptional shoes. Crafted with high-quality materials and innovative design, these shoes provide all-day comfort while keeping you looking sharp. Perfect for any occasion, from casual outings to active lifestyles.
              </p>
            </div>

            {/* Category */}
            {product.category && (
              <div className="mb-6">
                <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Category: {product.category}
                </span>
              </div>
            )}

            {/* Color (if available) */}
            {product.color && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Color: <span className="text-orange-600">{product.color}</span>
                </label>
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-md" style={{backgroundColor: product.color.toLowerCase()}}></div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button 
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-2 font-semibold text-lg">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-gray-600">
                  Only 15 left in stock
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
               onClick={() => addToCart(product)}
               className="flex-1 cursor-pointer bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Features
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
                <Truck className="w-8 h-8 text-orange-600 mb-2" />
                <span className="text-sm font-semibold text-gray-900">Free Shipping</span>
                <span className="text-xs text-gray-600">Orders over $50</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
                <Shield className="w-8 h-8 text-orange-600 mb-2" />
                <span className="text-sm font-semibold text-gray-900">Authentic</span>
                <span className="text-xs text-gray-600">100% Genuine</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
                <RotateCcw className="w-8 h-8 text-orange-600 mb-2" />
                <span className="text-sm font-semibold text-gray-900">Easy Returns</span>
                <span className="text-xs text-gray-600">30-day policy</span>
              </div>
            </div> */}

            {/* Product Features List
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Premium quality materials for durability</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comfortable cushioning for all-day wear</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Stylish design suitable for multiple occasions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Excellent grip and traction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Breathable construction keeps feet cool</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productList.filter((relatedProduct) => relatedProduct.company === product.company && relatedProduct.id !== product.id).map((relatedProduct) =>(
              <div
              onClick={()=> navigate(`/products/${relatedProduct.id}`)}
                key={relatedProduct.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative bg-gray-100 p-6 overflow-hidden">
                  <img 
                    src={relatedProduct.img} 
                    alt={relatedProduct.title}
                    className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {relatedProduct.title}
                  </h3>
                  <div className="flex items-center mb-3 text-yellow-500">
                    {relatedProduct.star}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">{relatedProduct.newPrice}</span>
                    {relatedProduct.prevPrice && (
                      <span className="text-sm text-gray-400 line-through">{relatedProduct.prevPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct