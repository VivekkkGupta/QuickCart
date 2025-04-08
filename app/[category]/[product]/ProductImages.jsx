"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, ChevronLeft, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/constants/constants";

const ProductImages = ({ productimages }) => {

  console.log(productimages)

  const [selectedImage, setSelectedImage] = useState(productimages[0].url);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 4 < productimages.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleImages = productimages.slice(startIndex, startIndex + 4);
  const hasMoreImages = productimages.length > 4;

  return (
    <div className="flex flex-col-reverse md:flex-row w-full md:w-1/2 gap-4">
      {/* Thumbnails */}
      <div className="relative">
        <div className="flex md:flex-col gap-5 overflow-hidden">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer border-2 rounded-lg overflow-hidden flex items-center justify-center 
                ${selectedImage === image ? "border-red-500" : "border-transparent"}
              `}
              onClick={() => setSelectedImage(image.url)}
            >
              <Image
                src={`${BASE_URL}${image.url}`}
                width={50}
                height={50}
                alt={`product-thumbnail-${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {hasMoreImages && (
          <>
            {/* mobile buttons  */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute md:hidden -right-2 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute md:hidden -left-2 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Laptop Button  */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute hidden md:flex -top-2 left-1/2 transform -translate-x-1/2 bg-white/80"
              onClick={handlePrev}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute hidden md:flex -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80"
              onClick={handleNext}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>

          </>
        )}
      </div>

      {/* Main Image */}
      <div className="flex-1 flex items-start justify-center">
        <Image
          src={selectedImage}
          width={500}
          height={600}
          alt="product-main-image"
          className="w-full h-[400px] md:h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
