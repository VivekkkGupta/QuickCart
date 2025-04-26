import SectionHeading from "@/components/Section/SectionHeading";
import SectionContent from "@/components/Section/SectionContent";
import HeaderSlider from "@/components/HeaderSlider/HeaderSlider";
import FeaturedProductHomepage from "@/components/FeaturedProduct/FeaturedProductHomepage";


export default function page() {


  return (
    <section className="flex flex-col w-full gap-10 max-w-[1240px] mx-auto">
      <div className="w-full relative">
        
        <HeaderSlider/> 
        <SectionHeading tagheading={"Today's"} heading={"Best Selling Products"}/>
        <SectionContent />
        <FeaturedProductHomepage/>
      </div>
    </section>
  );
}
