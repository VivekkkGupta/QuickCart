import ProductCard from "@/components/ProductCard/ProductCard";

function SectionContent({ listOfProducts }) {
  // const [products, setProducts] = useState(listOfProducts);

  return (
    <div
      className="realtive grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center w-full"
    >
      {listOfProducts.map((product) => (
        <ProductCard key={product._id || product.slug} product={product} />
      ))}
    </div>
  );
}

export default SectionContent;
