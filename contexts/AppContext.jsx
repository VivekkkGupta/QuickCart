"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, Provider, useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";


const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {

  const [currency, setCurrency] = useState("₹")
  const [cartProducts, setCartProducts] = useState([]);

  const router = useRouter()

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

  const user = useUser();

  const handleAddToCart = async (product) => {

    if(!user.isSignedIn){
      toast.error("Please Login First!")
      return 
    }
    
    const productId = product._id;
    const cartItems = structuredClone(cartProducts);

    if (cartItems[productId]) {
      cartItems[productId] += 1;
      toast.success("Increased Item quantity by 1");
    } else {
      cartItems[productId] = 1;
      toast.success("Product Added to Cart");
    }

    // console.log(cartItems)
    setCartProducts(cartItems);

    // console.log(cartItems)
    // API CALL HERE to ADD TO CART
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

  const updateCartQuantity = (itemId, quantity) => {
    let cartData = structuredClone(cartProducts);
    if (quantity === 0) {
      delete cartData[itemId];
      toast.success("Removed Item from Cart")
    } else {
      cartData[itemId] = quantity;
      toast.success(`Decreased Item quantity`)
    }
    setCartProducts(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartProducts) {
      if (item.quantity > 0) {
        totalAmount += item.product.price * cartProducts.quantity;
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  }

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    router.push("/cart")
  }

  const fetchCartProducts = async ()=>{
    try {
      const {data} = await axios.get("/api/cart/get-products-cart");
      setCartProducts(data.products)    
      console.log(data.products)
      console.log("Running ")  
    } catch (error) {
      toast.error("Something Went Wrong.")
      console.log(error)
    } 
  }

  // useEffect(() => {
  //   console.log(cartProducts);
  // }, [cartProducts]);

  const values = {
    cartProducts,
    setCartProducts,
    getCartCount,
    menuItems,
    routesObject,
    handleAddToCart,
    updateCartQuantity,
    getCartAmount,
    currency, router,
    handleBuyNow,
    fetchCartProducts
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
