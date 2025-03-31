"use client";

import StarReviews from "@/components/ProductCard/StarReviews";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeartIcon, Minus, Plus, Recycle, ShoppingBasket, ShoppingCart, ShoppingCartIcon, Truck } from "lucide-react";
import { toast } from "sonner";

const AboutProduct = ({ currentproduct }) => {
  const InStock = currentproduct.stockAvailability > 0;
  const [countBuyProduct, setCountBuyProduct] = useState(0);
  const [selectedSize,set]

  const handleCountBuyProduct = (e) => {
    if (e.target.name === "increment") {
      if (currentproduct.stockAvailability > countBuyProduct)
        setCountBuyProduct((prev) => prev + 1);
      else
        toast.error("You can't get More!", {
          description: `Stock of this product is ${currentproduct.stockAvailability}`,
          action: {
            label: "close",
          },
        });
    } else if (e.target.name === "decrement" && countBuyProduct > 0)
      setCountBuyProduct((prev) => prev - 1);
  };

const handleAddToCart = (e) =>{
    console.log("Added to Cart")
}
const handleAddToWishlist = (e)=>{

    console.log("Added to WishList")
  }

  return (
    <div className="flex flex-col w-full md:w-1/2 space-y-4">
      <h1 className="text-2xl font-bold">{currentproduct.name}</h1>
      <div className="flex gap-3 flex-wrap items-center">
        <StarReviews
          rating={currentproduct.rating}
          reviewsCount={currentproduct.reviews}
        />
        |
        {InStock ? (
          <span className="text-sm text-green-500">In Stock</span>
        ) : (
          <span className="text-sm text-red-500">Out of Stock</span>
        )}
      </div>
      <p className="text-gray-500">{currentproduct.description}</p>
      {/* Colors */}
      {currentproduct.colors && (
        <div className="flex items-center gap-2 flex-wrap">
          <h3>Colors:</h3>
          {currentproduct.colors.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="rounded-full h-6 w-6 border"
            ></span>
          ))}
        </div>
      )}

      {/* Sizes */}
      {currentproduct.sizes && (
        <div className="flex items-center gap-2 flex-wrap">
          <h3>Size:</h3>
          {currentproduct.sizes.map((size, index) => (
            <span key={index} className="rounded-md px-3 py-1 border">
              {size}
            </span>
          ))}
        </div>
      )}

      {/* Buy Section */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handleCountBuyProduct} name="decrement">
            <Minus />
          </Button>
          <p className="w-10 text-center">{countBuyProduct}</p>
          <Button onClick={handleCountBuyProduct} name="increment">
            <Plus />
          </Button>
        </div>
        <Button className="bg-red-400 text-white px-6">Buy Now</Button>
        <ShoppingCartIcon className="cursor-pointer" onClick={handleAddToCart}/>
        <HeartIcon className="cursor-pointer text-red-400" onClick={handleAddToWishlist}/>
      </div>

      {/* Delivery & Returns */}
      <div className="space-y-3">
        <div className="flex items-center gap-4 border p-2 rounded-md">
          <Truck className="text-gray-600" />
          <div>
            <h4 className="text-sm">Free Delivery</h4>
            <p className="text-xs text-gray-500">
              Enter your postal code for availability
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 border p-2 rounded-md">
          <Recycle className="text-gray-600" />
          <div>
            <h4 className="text-sm">Return Policy</h4>
            <p className="text-xs text-gray-500">Free 30-day returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
