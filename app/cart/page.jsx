import { cartList as products } from '@/data/data'  
import OrderSummary from './OrderSummary'
import CartProducts from './CartProducts';

function Page() {

  const handleRemoveFromWishlist = (slug) => {
    setCartListState(cartListState.filter(product => product.slug !== slug));
  };

  return (
    <>
    <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-14 mb-20">
      <CartProducts products={products}/>
      {/* <OrderSummary products={products}/> */}
    </div>
    </>
    // <div className='max-w-[1240px] mx-auto flex flex-col'>
    //   {/* Header */}
    //   <div className='flex items-center justify-between mb-6'>
    //     <h1 className='font-bold text-xl'>Cart ({cartListState.length})</h1>
    //     <Button variant={"outline"} className={`capitalize px-10 py-6 cursor-pointer`}>
    //       Move All To Cart
    //     </Button>
    //   </div>

    //   <div className='flex flex-wrap gap-4'>
    //     <CartProducts products={cartListState} />
    //   </div>
    // </div>
  )
}

export default Page;
