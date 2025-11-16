import { useContext } from "react";
import { CartContext } from "../db/Cart";

function CartPage() {
  const { cart, removeFromCart, updateCartItemQuantity, totalPrice } = useContext(CartContext);
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shopping Cart</h2>
        <p className="text-center text-xl text-gray-400 mt-16 py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          Your cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Shopping Cart ({cart.length} items)
      </h2>
      
      {cart.map(item => (
        <div 
          key={item.id} 
          className="flex flex-col md:flex-row items-center gap-5 bg-white border border-gray-200 rounded-xl p-5 mb-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {/* Product Image */}
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-[30px] md:w-[80px]  object-cover rounded-lg bg-gray-100"
          />
          
          {/* Item Details */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-base text-gray-600">
              Price: <span className="line-through text-gray-400 text-sm mr-2">${item.prevPrice}</span>
              <span className="font-medium">${item.newPrice}</span>
            </p>
          </div>

          {/* Cart Item Quantity Controls */}
          <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg">
            <button 
              onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 cursor-pointer flex items-center justify-center bg-white text-gray-800 text-lg font-bold rounded-md shadow-sm hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            >
              -
            </button>
            <span className="text-base font-semibold text-gray-900 min-w-8 text-center">
              {item.quantity}
            </span>
            <button 
              onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 cursor-pointer flex items-center justify-center bg-white text-gray-800 text-lg font-bold rounded-md shadow-sm hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            >
              +
            </button>
          </div>

          {/* Subtotal */}
          <p className="text-xl font-bold text-blue-600 min-w-24 text-center md:text-right">
            ${(item.newPrice * item.quantity).toFixed(2)}
          </p>

          {/* Remove Button */}
          <button 
            onClick={() => removeFromCart(item.id)}
            className="w-full cursor-pointer md:w-auto px-5 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Cart Total */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-xl mt-8 text-center shadow-xl">
        <h3 className="text-3xl font-bold mb-5">
          Grand Total: ${totalPrice.toFixed(2)}
        </h3>
        <button className="bg-white cursor-pointer text-purple-600 px-10 py-4 text-lg font-bold rounded-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 active:translate-y-0">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;