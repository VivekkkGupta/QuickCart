import { productDetails } from "@/data/data"; 
import ProductImages from "./ProductImages";
import AboutProduct from "./AboutProduct";

// Mark as Server Component by removing 'use client'
async function ProductPage({ params }) {
  const { category, product } = await params;

  // Move data fetching to server-side
  const currentProduct = productDetails.find(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() &&
      p.slug.toLowerCase() === product.toLowerCase()
  );

  // If product not found, show a message
  if (!currentProduct) {
    return <div className="text-center text-red-500">Product Not Found</div>;
  }

  return (
    <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row w-full gap-10 relative">
      {/* Pass data to Client Components */}
      <ProductImages productimages={currentProduct.images}/>
      <AboutProduct currentproduct={currentProduct}/>
    </div>
  );
}

export default ProductPage;
