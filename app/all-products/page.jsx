import FeaturedProductsWithData from '@/components/FeaturedProduct/FeaturedProductsWithData'
import { productsForHomePage as products } from '@/data/data'

function page() {
  return (
    <>
        <FeaturedProductsWithData heading='All Products' products={products}/>
    </>
  )
}

export default page