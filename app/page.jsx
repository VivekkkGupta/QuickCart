import SectionHeading from "@/components/Section/SectionHeading";
import { products } from '@/data/data'
import SectionContent from "@/components/Section/SectionContent";

export default function Home({ tagheading = "" }) {

  return (
    <section className="flex flex-col w-full gap-10 max-w-[1240px] mx-auto">
      <div className="w-full  relative">
        <SectionHeading tagheading={"Today's"} heading={"Best Selling Products"} />
        <SectionContent products={products} />
      </div>
    </section>
  );
}
