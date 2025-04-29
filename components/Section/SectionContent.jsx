"use client";

import axios from "axios";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useAppContext } from "@/contexts/AppContext";

const SectionContent = () => {

  const { loading, products } = useAppContext()

  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center w-full">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="relative z-0 flex flex-col w-full md:max-w-[250px] p-2 animate-pulse"
              >
                <div className="w-full h-[200px] bg-gray-300 rounded-md"></div>
                <div className="mt-4 h-4 bg-gray-300 rounded-md w-3/4"></div>
                <div className="mt-2 h-3 bg-gray-300 rounded-md w-1/2"></div>
                <div className="mt-4 h-6 bg-gray-300 rounded-md w-full"></div>
              </div>
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <Link href={`/all-products`}>
        <button className="px-8 py-2 mb-16 border-2 rounded text-gray-500/90 hover:bg-slate-50/90 transition cursor-pointer">
          See more
        </button>
      </Link>
    </div>
  );
};

export default SectionContent;