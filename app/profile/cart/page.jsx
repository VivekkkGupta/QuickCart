"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard/ProductCard'
import { Trash } from 'lucide-react'
import { cartList as initialCartList, products } from '@/data/data'  // Renaming to avoid direct mutation
import CartProducts from '@/components/CartProducts/CartProducts'

function Page() {
  const [cartListState, setCartListState] = useState(initialCartList);

  const handleRemoveFromWishlist = (slug) => {
    setCartListState(cartListState.filter(product => product.slug !== slug));
  };

  return (
    <div className='max-w-[1240px] mx-auto flex flex-col'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h1 className='font-bold text-xl'>Cart ({cartListState.length})</h1>
        <Button variant={"outline"} className={`capitalize px-10 py-6 cursor-pointer`}>
          Move All To Cart
        </Button>
      </div>

      <div className='flex flex-wrap gap-4'>
        <CartProducts products={cartListState} />
      </div>
    </div>
  )
}

export default Page;
