import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";

function FeaturedProductsWithData({ heading = "Featured Products", products}) {
    const headingName = heading.split()
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-4 mt-16">
        <p className="text-3xl font-medium capitalize">
          {headingName[0]} <span className="font-medium text-orange-600">{headingName[1]}</span>
        </p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
        {products.slice(0, 5).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Link href={`/all-products`}>
        <button className="px-8 py-2 mb-16 border-2 rounded text-gray-500/90 hover:bg-slate-50/90 transition cursor-pointer">
          See more
        </button>
      </Link>
    </div>
  );
}

export default FeaturedProductsWithData;
