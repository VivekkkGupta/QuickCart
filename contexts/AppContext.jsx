"use client";

import { createContext, useContext, Provider, useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Category", path: "/category" },
  ];

  const routesObject = {
    profile: { name: "Personal Details", path: "/profile/personal-details" },
    address: { name: "Address Details", path: "/profile/address-details" },
    payment: { name: "Payment Options", path: "/profile/payment-options" },
    orders: { name: "Orders History", path: "/profile/orders-history" },
    returns: { name: "Return History", path: "/profile/return-history" },
    wishlist: { name: "Wishlist", path: "/profile/wishlist" },
    cart: { name: "Cart", path: "/cart" },
    "sign-in": { name: "Sign In", path: "/sign-in" },
    "sign-up": { name: "Sign Up", path: "/sign-up" },
    home: { name: "Home", path: "/" },
  };

  const handleAddToCart = (product) => {
    console.log("add to cart : ", product);
    setCartProducts((prev) => [...prev, product]);
    //API CALL HERE to ADD TO CART
  };

  const getCartCount = ()=>{
    let count = 0;
    for(const item of cartProducts){
        count += 1;
    }
    return count;
  }

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  const values = {
    cartProducts,
    setCartProducts,
    getCartCount,
    menuItems,
    routesObject,
    handleAddToCart,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
