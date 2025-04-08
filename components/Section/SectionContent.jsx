import ProductCard from "@/components/ProductCard/ProductCard";
import axios from "axios";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import Link from "next/link";


const SectionContent = async () => {

  const {data} = await axios.get("https://ecommerce-cms-41dp.onrender.com/api/products?populate=*")

  const products = data.data;

  console.log(products)

  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <div className="realtive grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center w-full">
        {products.map((product) => (
          <ProductCard key={product.documentId} product={product} />
        ))}
      </div>
      <Link href={`/all-products`}>
        <button className="px-8 py-2 mb-16 border-2 rounded text-gray-500/90 hover:bg-slate-50/90 transition cursor-pointer">
          See more
        </button>
      </Link>
    </div>
  );
};

export default SectionContent;

