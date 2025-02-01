import FeedbackForm from "@/app/components/common/FeedbackForm";
import ScrollingMarquee from "@/app/components/common/ScrollingMarquee";
import TextBlock from "./TextBlock";

export default function FeedBackComponent() {
  return (
    <div className=" mb-[120px] lg:mb-[180px] ">
      <div className="firsFormBg w-full xl:w-[1280px] xl:mx-auto">
        <div className="sm:flex w-full">
          <div className="sm:bg-white py-16 md:py-[115px] sm:w-[51.8%] l:w-[41.8%] px-7">
            <FeedbackForm title="Почніть свій шлях до успіху вже сьогодні — станьте нашим партнером!" />
          </div>
          <TextBlock />
        </div>
      </div>
      <ScrollingMarquee variant="yellow" />
    </div>
  );
}
