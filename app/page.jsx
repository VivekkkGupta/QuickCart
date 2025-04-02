import SectionHeading from "@/components/Section/SectionHeading";
import { productsForHomePage } from '@/data/data'
import SectionContent from "@/components/Section/SectionContent";
import HeaderSlider from "@/components/HeaderSlider/HeaderSlider";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";

export default function page() {

  return (
    <section className="flex flex-col w-full gap-10 max-w-[1240px] mx-auto">
      <div className="w-full relative">
        <HeaderSlider/> 
        <SectionHeading tagheading={"Today's"} heading={"Best Selling Products"}/>
        <SectionContent listOfProducts={productsForHomePage} />
        <FeaturedProduct />
      </div>
    </section>
  );
}
