"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import SectionHeading from "@/components/Section/SectionHeading";
import { useAppContext } from "@/contexts/AppContext";
import axios from "axios";
import React, { useState, useEffect } from "react"; // Removed wrong { use }
import { toast } from "sonner";

function Page({ params }) {
  const { category } = params;
  const [products, setProducts] = useState([]);

  const { loading, setLoading } = useAppContext();

  const fetchProductsFromCategory = async () => {
    setLoading(true); // important to set loading before API call
    try {
      const { data } = await axios.get(`/api/${category}`);
      console.log(data.products.product);
      setProducts(data.products.product);
      toast.success("Fetched the Products");
    } catch (error) {
      toast.error("No Products with This category");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsFromCategory();
  }, [category]); // add [category] in dependency array

  return (
    <>
      <SectionHeading tagheading="Category" heading={category} />
      <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center w-full min-h-[400px]">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
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
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-2 md:col-span-5 flex flex-col items-center justify-center text-center text-red-500 text-lg font-semibold">
            No Products Found in "{category}"
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
