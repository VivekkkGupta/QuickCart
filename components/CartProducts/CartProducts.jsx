'use client'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
// id,
//     image,
//     name,
//     price,
//     discount,
//     rating,
//     reviews,
//     slug
function CartProducts({ products }) {

    const [count, setCount] = useState(1)
    return (

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[400px]">Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Sub Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">
                            {
                                <div className='flex items-center gap-2'>
                                    <Image src={product.image} width={50} height={50} alt={product.name} />
                                    <span>{product.name}</span>
                                </div>
                            }
                        </TableCell>
                        <TableCell>₹{product.price}</TableCell>
                        <TableCell>{count}</TableCell>
                        <TableCell className="text-right">₹{product.price * count}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow className={`h-8 text-lg`}>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right ">
                        ₹{products.reduce((acc, product) => acc + product.price, 0)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>

    )
}

export default CartProducts
