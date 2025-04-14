import { productsForHomePage } from "@/data/data";
import ProductImages from "../app/(frontend)/[category]/[slug]/ProductImages";
import AboutProduct from "../app/(frontend)/[category]/[slug]/AboutProduct";
import FeaturedProductsWithData from "@/components/FeaturedProduct/FeaturedProductsWithData";
import { getProductBySlug } from "@/lib/helpers/apiFunctions";

// Mark as Server Component by removing 'use client'
async function ProductPage({ params }) {
  const { category, product } = await params;

  const currentProduct = await getProductBySlug(`${product}`);

  // If currentProduct not found, show a message
  if (!currentProduct) {
    return <div className="text-center text-red-500">Product Not Found</div>;
  }

  const { ProductName, ProductDescription, ProductPrice, discount, ProductImage, product_category, slug } = currentProduct

  return (
    <div className="max-w-[1240px] mx-auto flex-col gap-10">
      <div className="flex flex-col md:flex-row w-full gap-10 relative">
        {/* Pass data to Client Components */}
        <ProductImages productimages={currentProduct.ProductImage} />
        <AboutProduct currentproduct={currentProduct} />

      </div>
      {/* <FeaturedProductsWithData heading="Featured Products" products={productsForHomePage} /> */}
    </div>
  );
}

export default ProductPage;
