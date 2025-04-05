"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Price from "./Price";
import StarReviews from "./StarReviews";
import Link from "next/link";
import { useAppContext } from "@/contexts/AppContext";

// function ProductCard({ productimagesrc = "/dummyimage.png", productname = "dummy", productdescription="a sample product" productprice = 100, productdiscount = 10, productrating = 3.5, productreviewscount = 0, productslug = "", }) {
function ProductCard({ product }) {
  if (!product) return null; // Handle missing product

  const slugUrl = `/${product.category}/${product.slug}`;

  const { handleAddToCart } = useAppContext();

  const handleCart = async (e, product) => {
    await handleAddToCart(product);
  };

  return (
    <div className="relative z-0 flex flex-col w-full md:max-w-[250px] p-2 ">
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleCart(e, product);
        }}
        className="absolute z-10 w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full p-1 md:p-2 bg-white shadow shadow-gray-500 right-2 top-2"
      >
        <Heart />
      </div>
      <Link href={slugUrl}>
        <button className="flex items-center justify-center">
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
      </Link>
    </div>
  );
}

export default ProductCard;
