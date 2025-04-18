"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, Provider, useEffect, useCallback } from "react";
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
    if (!user?.isSignedIn) {
      toast.error("Please Login First!");
      return;
    }
    console.log(product)
    const productId = product.id;
    const existing = cartProducts.find((item) => item.productId === productId);

    let updatedCart;

    if (existing) {
      updatedCart = cartProducts.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      toast.success("Increased item quantity by 1");
    } else {
      updatedCart = [...cartProducts, { productId, quantity: 1, product }];
      toast.success("Product added to cart");
    }

    setCartProducts(updatedCart);

    try {
      await axios.post("/api/cart/set-products-cart", {
        productId,
        quantity: existing ? existing.quantity + 1 : 1,
      });
    } catch (error) {
      console.error("Failed to sync cart:", error);
      toast.error("Failed to update cart on server");
    }
  };



  const updateCartQuantity = async (productId, quantity) => {
    const updatedCart = cartProducts
      .map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
  
    setCartProducts(updatedCart);
  
    toast.success(quantity === 0 ? "Removed from cart" : "Quantity updated");
  
    // ✅ Sync with backend
    try {
      await axios.post("/api/cart/set-products-cart", {
        productId,
        quantity,
      });
    } catch (error) {
      console.error("Cart update failed:", error);
      toast.error("Failed to update cart on server");
    }
  };
  

  const getCartCount = useCallback(() => {
    return cartProducts.reduce((total, item) => total + item.quantity, 0);
  }, [cartProducts]);

  const getCartAmount = useCallback(() => {
    const total = cartProducts.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    return Math.floor(total * 100) / 100;
  }, [cartProducts]);


  const handleBuyNow = (product) => {
    handleAddToCart(product);
    router.push("/cart")
  }

  const fetchCartProducts = async () => {
    try {
      const { data } = await axios.get("/api/cart/get-products-cart");
      setCartProducts(data.products)
      console.log(data.products)
      console.log("Running ")
    } catch (error) {
      toast.error("Something Went Wrong.")
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCartProducts()
  }, []);

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
