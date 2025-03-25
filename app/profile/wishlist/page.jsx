"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard/ProductCard'
import { Trash } from 'lucide-react'
import { wishList as initialWishList } from '@/data/data'  // Renaming to avoid direct mutation

function Page() {
    const [wishList, setWishList] = useState(initialWishList);

    // Function to remove a product from the wishlist
    const handleRemoveFromWishlist = (slug) => {
        setWishList(wishList.filter(product => product.slug !== slug));
    };

    return (
        <div className='max-w-[1240px] mx-auto flex flex-col'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6'>
                <h1 className='font-bold text-xl'>WishList ({wishList.length})</h1>
                <Button variant={"outline"} className={`capitalize px-10 py-6 cursor-pointer`}>
                    Move All To Cart
                </Button>
            </div>

            {/* Wishlist Products */}
            <div className='flex flex-wrap gap-4'>
                {
                    wishList.map((product, index) => (
                        <div key={index} className="relative">
                            <ProductCard
                                productimagesrc={product.image}
                                productname={product.name}
                                productprice={product.price}
                                productdiscount={product.discount}
                                productrating={product.rating}
                                productreviewscount={product.reviews}
                                productslug={product.slug}
                            />
                            {/* Delete Button */}
                            <Button
                                onClick={() => handleRemoveFromWishlist(product.slug)}
                                variant={""}
                                className="absolute top-7 right-7 cursor-pointer "
                            >
                                <Trash className="w-4 h-4" />
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page;
