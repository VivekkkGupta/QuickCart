"use client"

import OrderSummary from './OrderSummary'
import CartProducts from './CartProducts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
// import { toast } from 'sonner';

function Page() {

  const {fetchCartProducts} = useAppContext()

  useEffect(()=>{
    fetchCartProducts()
  },[])


  return (
    <>
    <div className="flex flex-col md:flex-row gap-10">
      <CartProducts />
      <OrderSummary />
    </div>
    </>
  )
}

export default Page;
