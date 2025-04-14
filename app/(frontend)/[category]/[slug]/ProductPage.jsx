import ProductImages from "./ProductImages";
import AboutProduct from "./AboutProduct";

// Mark as Server Component by removing 'use client'
async function ProductPage({currentProduct}) {

  if (!currentProduct) {
    return <div className="text-center text-red-500">Product Not Found</div>;
  }

  return (
    <div className="max-w-[1240px] mx-auto flex-col gap-10">
      <div className="flex flex-col md:flex-row w-full gap-10 relative">
        <ProductImages productimages={currentProduct.images} />
        <AboutProduct currentproduct={currentProduct} />

      </div>
      {/* <FeaturedProductsWithData heading="Featured Products" products={productsForHomePage} /> */}
    </div>
  );
}

export default ProductPage;
