"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useCallback } from "react";
import { useState } from "react";
import { toast } from "sonner";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {

  const [currency, setCurrency] = useState("₹")
  const [cartProducts, setCartProducts] = useState([]);
  const [cartLoading,setCartLoading] = useState(true)
  const [loading,setLoading] = useState(true)

  const router = useRouter()

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Category", path: "/category" },
  ];

  const routesObject = {
    profile: { name: "Personal Details", path: "/personal-details" },
    address: { name: "Address Details", path: "/address" },
    payment: { name: "Payment Options", path: "/payment-options" },
    orders: { name: "Orders History", path: "/my-orders" },
    returns: { name: "Return History", path: "/return-history" },
    wishlist: { name: "Wishlist", path: "/wishlist" },
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
      return true; 
    } catch (error) {
      console.error("Failed to sync cart:", error);
      toast.error("Failed to update cart on server");
      return false;
    }
  };
  

  const updateCartQuantity = async (productId, quantity) => {

    // console.log(productId, quantity)

    if (quantity <= 0) {
      setCartProducts((prev) =>
        prev.filter((product) => product.productId !== productId)
      );
      toast.success("Product Removed from Cart")

      try {
        await axios.delete(`/api/cart/delete-products-cart/${productId}`);
      } catch (error) {
        console.error("Failed to delete product from server:", error);
        toast.error("Failed to update server cart");
      }
      return;
    }

    const updatedCart = cartProducts
      .map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity }
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


  const handleBuyNow = async (product) => {
    await handleAddToCart(product);
    router.push("/cart");
  };

  const fetchCartProducts = useCallback(async () => {
    try {
      setCartLoading(true)
      const { data } = await axios.get("/api/cart/get-products-cart");
      setCartProducts(data.products);
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally{
      setCartLoading(false)
    }
  }, []); 

  useEffect(() => {
    if (user?.isSignedIn) {
      fetchCartProducts();
    } else {
      setCartProducts([]);
    }
  }, [user?.isSignedIn]);

  const values = {
    cartProducts,
    setCartProducts,
    cartLoading,
    getCartCount,
    menuItems,
    routesObject,
    handleAddToCart,
    updateCartQuantity,
    getCartAmount,
    currency, router,
    handleBuyNow,
    fetchCartProducts,
    loading,
    setLoading
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
