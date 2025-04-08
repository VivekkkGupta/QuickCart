import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export const getProductBySlug = async (slug) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
    );

    const product = data.data[0];
    // console.log(product);
    return product;
  } catch (error) {
    console.log(error);
    return error;
  }
};
