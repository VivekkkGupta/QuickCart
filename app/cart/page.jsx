import OrderSummary from './OrderSummary'
import CartProducts from './CartProducts';

function Page() {
  return (
    <>
    <div className="flex flex-col m:flex-row gap-10">
      <CartProducts />
      {/* <OrderSummary products={products}/> */}
    </div>
    </>
  )
}

export default Page;
