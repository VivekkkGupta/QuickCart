'use client'

import SectionHeading from "@/components/Section/SectionHeading";
import { useAppContext } from "@/contexts/AppContext";
import React, { useEffect } from "react";

function Page() {

  const { router, loading, categories ,fetchCategories} = useAppContext()

  return (
    <div className="flex max-w-[1240px] mx-auto w-full flex-col gap-5 py-20">
      <div className="flex flex-col w-full">
        <SectionHeading tagheading="category" heading="" />
        <div className="flex items-center justify-between">
          <h2 className="my-4 mb-4 font-extrabold tracking-wide text-900 text-3xl capitalize">
            All Categories
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-6 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-full max-w-[200px] flex flex-col items-center justify-center gap-2 p-4 bg-white shadow-md rounded-lg animate-pulse"
              >
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
              </div>
            ))
          : categories.map((category) => (
              <div
                key={category.id}
                className="w-full max-w-[200px] flex flex-col items-center justify-center gap-2 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => router.push(`/${category.name}`)}
              >
                <div className="flex items-center justify-center bg-gray-200 rounded-full p-3">
                  {category.emoji || "📦"}
                </div>
                <span className="text-lg font-semibold capitalize">{category.name}</span>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Page;
