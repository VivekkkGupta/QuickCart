"use client";

import { createContext, useContext, Provider, useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";
import { products } from "@/data/data";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState({});

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
    // console.log("add to cart : ", product);
    const productId = product._id;
    const cartItems = structuredClone(cartProducts);

    if (cartItems[productId]) {
      cartItems[productId] += 1;
    } else {
      cartItems[productId] = 1;
    }
    // console.log(cartItems)
    setCartProducts(cartItems);
    toast.success("Product Added to Cart");

    //API CALL HERE to ADD TO CART
  };

  const getCartCount = () => {
    let count = 0;
    for (const productId in cartProducts) {
      if (cartProducts[productId] > 0) {
        count += cartProducts[productId];
      }
    }
    return count;
  };

  const updateCartQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartProducts);
    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  const values = {
    products,
    cartProducts,
    setCartProducts,
    getCartCount,
    menuItems,
    routesObject,
    handleAddToCart,
    updateCartQuantity,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
