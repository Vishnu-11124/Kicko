import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1); // Add quantity state here

  // Add to cart function (uses quantity state)
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Item exists, increase by current quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      // New item, add with current quantity
      setCart([...cart, { ...product, quantity: quantity }]);
    }
    
    // Reset quantity back to 1 after adding
    setQuantity(1);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update item quantity in cart
  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // Increase quantity selector
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrease quantity selector
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Calculate total
  const totalPrice = cart.reduce((sum, item) => sum + (item.newPrice * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = cart.length

  return (
    <CartContext.Provider value={{ 
      cart, 
      quantity,              // Expose quantity
      increaseQuantity,      // Expose increase function
      decreaseQuantity,      // Expose decrease function
      addToCart, 
      removeFromCart, 
      updateCartItemQuantity, // Renamed for clarity
      totalPrice,
      totalItems,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

