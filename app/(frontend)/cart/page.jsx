"use client"

import OrderSummary from './OrderSummary'
import CartProducts from './CartProducts';

function Page() {
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
