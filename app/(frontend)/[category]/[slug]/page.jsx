import axios from "axios";
import ProductPage from "./ProductPage";

const Page = async ({ params }) => {
  const { category, slug } = await params;

  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-product-details/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.error) {
      console.error("Error from API:", data.error);
      return <div>Something went wrong!</div>;
    }

    const productDetails = await data.product;

    return (
      <>
        <ProductPage currentProduct={productDetails} />
      </>
    );

  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Failed to load product</div>;
  }
};

export default Page;
