'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from '@/components/ProductCard/ProductCard';

function SectionContent({ products }) {

    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Scroll distance
            if (direction === "left") {
                scrollRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollRef.current.scrollLeft += scrollAmount;
            }
        }
    };
    return (
        <div className="relative">
            {/* Left Scroll Button */}
            <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md hidden md:flex"
                onClick={() => scroll("left")}
            >
                <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Products List */}
            <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productimagesrc={product.image}
                        productname={product.name}
                        productprice={product.price}
                        productdiscount={product.discount}
                        productrating={product.rating}
                        productreviewscount={product.reviews}
                        productslug={product.slug}
                    />
                ))}
            </div>

            {/* Right Scroll Button */}
            <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md hidden md:flex"
                onClick={() => scroll("right")}
            >
                <ChevronRight className="w-5 h-5" />
            </Button>
        </div>
    )
}

export default SectionContent
