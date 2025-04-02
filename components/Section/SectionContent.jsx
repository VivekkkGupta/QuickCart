import ProductCard from "@/components/ProductCard/ProductCard";

function SectionContent({ listOfProducts }) {
  // const [products, setProducts] = useState(listOfProducts);

  return (
    <div
      className="realtive grid grid-cols-2 md:flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
    >
      {listOfProducts.map((product) => (
        <ProductCard
          key={product.id}
          productimagesrc={product.image}
          productname={product.name}
          productprice={product.price}
          productdiscount={product.discount}
          productrating={product.rating}
          productreviewscount={product.reviews}
          productslug={`${product.category}/${product.slug}`}
        />
      ))}
    </div>
  );
}

export default SectionContent;
