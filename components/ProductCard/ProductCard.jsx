'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Heart } from 'lucide-react'
import Price from './Price'
import StarReviews from './StarReviews'
import Link from 'next/link'

function ProductCard({ productimagesrc = "/dummyimage.png", productname = "dummy", productprice = 100, productdiscount = 10, productrating = 3.5, productreviewscount = 0, productslug = "", }) {
    return (
        <Link href={productslug} className='cursor-pointer'>
            <Card className="w-full md:w-[300px]">
                <CardContent>
                    <div className="md:w-[250px] md:h-[250px] bg-gray-500 flex items-center justify-center">
                        <Image src={productimagesrc} width={250} height={250} alt={productslug} />
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle>{productname}</CardTitle>
                    <CardDescription>
                        <Price price={productprice} discount={productdiscount} />
                        <StarReviews rating={productrating} reviewsCount={productreviewscount} />
                    </CardDescription>
                </CardHeader>

                <CardFooter className="flex justify-between">
                    <Button className={`cursor-pointer`} variant="outline">
                        Buy Now
                    </Button>
                    <Button className={`cursor-pointer`}>
                        <Heart />
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}


export default ProductCard
