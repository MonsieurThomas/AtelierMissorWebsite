import {createContext, useState} from 'react'
import { DATA } from '../data';

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < DATA.length + 1; i++) {
        cart[i] = 0;
    }
    cart[8] = 3; // a supprimer
    return cart;

}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [showNavbar, setShowNavbar] = useState(true);
  
  const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = DATA.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.priceNumber
        }
      }
      return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  };

  const removeFromCart = (itemId) => {  
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const setCartToZero = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]:0 }))
  }

  const checkout = () => {
      setCartItems(getDefaultCart());
  }

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    setCartToZero,
    showNavbar,
    setShowNavbar,
  }
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
