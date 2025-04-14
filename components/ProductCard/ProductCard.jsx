"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Price from "./Price";
import StarReviews from "./StarReviews";
import Link from "next/link";
import { useAppContext } from "@/contexts/AppContext";
import { BASE_URL } from "@/lib/constants/constants";

function ProductCard({ product }) {
  const { handleAddToCart } = useAppContext();

  const handleCart = async (e, product) => {
    await handleAddToCart(product);
  };

  if (!product) return <div className="text-center text-red-500">Unable to fetch Products</div>;

  const { name, description, price, discount, images, slug } = product;

  return (
    <div className="relative z-0 flex flex-col w-full md:max-w-[250px] p-2">
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
      <Link href={slug}>
        <button className="flex items-center justify-center">
          <Image
            src={images[0]}
            width={500}
            height={500}
            className="cursor-pointer w-full h-auto object-cover p-4 hover:scale-[1.2] transition-all duration-700 ease-in-out"
            alt={name}
          />
        </button>
        <div className="cursor-pointer">
          <h2 className="text-sm truncate">{name}</h2>
          <p className="mb-2 text-xs truncate text-gray-500">{description}</p>
          <StarReviews />
          <div className="mt-2">
            <Price price={price} discount={discount || 10} />
          </div>
          <div className="mt-4 w-full">
            <button
              className="w-full text-xs border-2 rounded-lg px-4 py-2 cursor-pointer hover:shadow-lg transition-all duration-700  text-gray-800"
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