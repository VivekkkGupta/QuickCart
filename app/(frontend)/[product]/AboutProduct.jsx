"use client";

import StarReviews from "@/components/ProductCard/StarReviews";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  Minus,
  Plus,
  Recycle,
  ShoppingCartIcon,
  Truck,
} from "lucide-react";
import { toast } from "sonner";
import Price from "@/components/ProductCard/Price";
import { Separator } from "@/components/ui/separator";
import { useAppContext } from "@/contexts/AppContext";

const AboutProduct = ({ currentproduct }) => {

  const { ProductName, ProductDescription, ProductPrice, discount, ProductImage, product_category, slug, product_reviews } = currentproduct

  const InStock = currentproduct.ProductStock > 0;
  const AverageRating = product_reviews.map((review, index) => {
    console.log(review)
  })
  const ReviewCount = product_reviews.length;

  const { handleAddToCart, router, handleBuyNow } = useAppContext()

  const [countBuyProduct, setCountBuyProduct] = useState(0);
  // const [selectedSize, setSelectedSize] = useState(
  //   currentproduct.sizes[0] || ""
  // );
  // const [selectedColor, setSelectedColor] = useState(
  //   currentproduct.colors[0] || ""
  // );

  const handleCart = async (product) => {
    await handleAddToCart(product);
  };
  const handleAddToWishlist = (e) => {
    console.log("Added to WishList");
  };

  return (
    <>
      <div className="flex flex-col w-full md:w-1/2 space-y-4">
        <h1 className="text-2xl font-bold text-gray-700">
          {ProductName}
        </h1>
        <div className="flex gap-3 flex-wrap items-center">
          <StarReviews
            rating={AverageRating}
            reviewsCount={ReviewCount}
          />
          |
          {InStock ? (
            <span className="text-sm text-green-500">In Stock</span>
          ) : (
            <span className="text-sm text-red-500">Out of Stock</span>
          )}
        </div>
        <p className="text-gray-600 text-sm">{ProductDescription}</p>

        <Price
          price={ProductPrice}
          discount={10}
          StrikeClass="text-sm"
          PriceClass="text-2xl font-bold text-gray-700"
        />

        <Separator />

        {/* Colors */}
        {/* {currentproduct.colors && (
          <div className="flex items-center gap-2 flex-wrap">
            <h3>Colors:</h3>
            {currentproduct.colors.map((color, index) => (
              <span
                key={index}
                style={{ backgroundColor: color }}
                className={`rounded-full h-6 w-6 border-2 border-gray-300 cursor-pointer ${selectedColor === color ? "border-2 border-gray-700" : ""
                  }`}
                onClick={() => setSelectedColor(color)}
              ></span>
            ))}
          </div>
        )} */}

        {/* Sizes */}
        {/* {currentproduct.sizes && (
          <div className="flex items-center gap-2 flex-wrap">
            <h3>Size:</h3>
            {currentproduct.sizes.map((size, index) => (
              <span
                key={index}
                className={`rounded-md px-3 py-1 border cursor-pointer ${selectedSize === size ? "border-2 border-gray-500" : ""
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            ))}
          </div>
        )} */}

        {/* Add to cart and buy now button */}
        <div className="w-full flex gap-2 items-center justify-between">
          <button
            onClick={() => handleCart(currentproduct)}
            className="flex items-center justify-center gap-2 bg-transparent border rounded-sm w-full py-4  cursor-pointer hover:bg-gray-200 transition-all duration-300"
          >
            Add to Cart
            <ShoppingCartIcon />
          </button>

          <button
            onClick={() => handleBuyNow(currentproduct)}
            className="flex items-center justify-center gap-2 bg-orange-500 border-2 border-transparent rounded-sm w-full py-4 text-white cursor-pointer hover:bg-orange-600 transition-all duration-300">
            Buy Now
          </button>
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


    </>
  );
};

export default AboutProduct;
