"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import Price from "./Price";
import StarReviews from "./StarReviews";
import Link from "next/link";
import { toast } from "sonner";

// function ProductCard({ productimagesrc = "/dummyimage.png", productname = "dummy", productdescription="a sample product" productprice = 100, productdiscount = 10, productrating = 3.5, productreviewscount = 0, productslug = "", }) {
function ProductCard({ product }) {
  if (!product) return null; // Handle missing product

  // const {
  //   image = "/placeholder.png",
  //   name = "Unnamed Product",
  //   price = 0,
  //   discount = 0,
  //   rating = 0,
  //   reviews = 0,
  //   category = "misc",
  //   slug = "unknown",
  // } = product;

  const slugUrl = `/${product.category}/${product.slug}`;

  const handleAddToCart = (e,product) => {
    e.stopPropagation();
    e.preventDefault();
    toast.success("Product Added to Cart")
    //Api Call to add to cart
  };

  return (
    <Link href={slugUrl}>
      <div className="relative flex flex-col w-full md:max-w-[250px] p-2 ">
        <div 
        onClick={(e) => handleAddToCart(e, product)}
        className="absolute w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full p-1 md:p-2 bg-white shadow shadow-gray-500 right-2 top-2">
          <Heart />
        </div>
        <button
          className="flex items-center justify-center"
        >
          <Image
            src={product.image}
            width={500}
            height={500}
            className="cursor-pointer w-full h-auto object-cover p-4 hover:scale-[1.2] transition-all duration-700 ease-in-out"
            alt={product.name}
          />
        </button>
        <div className="cursor-pointer">
          <h2 className="text-sm truncate">{product.name}</h2>
          <p className="mb-2 text-xs truncate text-gray-500">
            {product.description}
          </p>
          <StarReviews />
          <div className="mt-2 flex md:flex-row flex-col items-start md:items-center md:justify-between">
            <Price price={product.price} discount={product.discount} />
            <button
              className={`mt-2 md:mt-0 w-full md:w-auto text-xs border-2 rounded-2xl px-3 py-1.5 cursor-pointer hover:shadow-lg transition-all duration-700`}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
