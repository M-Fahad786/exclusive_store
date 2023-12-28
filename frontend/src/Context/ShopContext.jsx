import React, { createContext, useState } from "react";
import allProducts from "../Components/Assets/allProducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      return updatedCart;
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item),
          (totalAmount += cartItem[item] * itemInfo.newPrice)
        );
      }
      return totalAmount;
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      return updatedCart;
    });
  };

  const contextValue = {
    allProducts,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
