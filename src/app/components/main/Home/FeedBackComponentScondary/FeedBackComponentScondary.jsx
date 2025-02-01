import FeedbackForm from "@/app/components/common/FeedbackForm";
import ScrollingMarquee from "@/app/components/common/ScrollingMarquee";
import TextBlock from "./TextBlock";
import Image from "next/image";

export default function FeedBackComponentScondary() {
  return (
    <div className=" mb-[120px] lg:mb-[180px] ">
      <div className="secondFormBg w-full xl:w-[1280px] xl:mx-auto relative">
        {/* стрілки */}
        <div className="hidden sm:block">
          <Image
            src="/icons/form/arr2.svg"
            alt="іконка стрілки"
            width={198}
            height={191}
            className="absolute right-0 bottom-[11%]  w-[28%] l:w-[182px] "
          />
          <Image
            src="/icons/form/arr3.svg"
            alt="іконка стрілки"
            width={198}
            height={191}
            className="absolute right-[30%] lg:right-[34%] top-[-10%] lg:top-[0%]  w-[28%] l:w-[280px] "
          />
        </div>
        {/* /стрілки */}
        <div className="sm:flex w-full justify-between">
          <TextBlock />
          <div className="sm:bg-white py-[82px] md:py-[140px] sm:w-[51.8%] l:w-[41.8%] px-7">
            <FeedbackForm
              title="Станьте частиною успішної мережі з мінімальними ризиками"
              variant="secondary"
            />
          </div>
        </div>
      </div>
      <ScrollingMarquee />
    </div>
  );
}
