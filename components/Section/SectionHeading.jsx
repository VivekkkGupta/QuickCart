"use client";

import React from "react";
import { Button } from "../ui/button";

function SectionHeading({ tagheading = "", heading = "" }) {
  const handleViewAllProducts = () => {
    console.log();
  };

  return (
    <div className="flex flex-col">
      {tagheading !== "" && (
        <div className="flex items-center font-bold">
          <span className="bg-orange-500 rounded-sm h-6 w-3"></span>
          <span className="ml-4 capitalize text-orange-700 text-lg">
            {tagheading}
          </span>
        </div>
      )}
      {heading !== "" && (
        <div className="flex items-center justify-between">
          <h2 className="my-4 mb-4 font-medium text-gray-800 text-xl md:text-2xl capitalize">
            {heading}
          </h2>
        </div>
      )}
    </div>
  );
}

export default SectionHeading;
