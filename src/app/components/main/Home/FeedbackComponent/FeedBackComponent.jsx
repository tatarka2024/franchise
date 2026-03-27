import FeedbackForm from "@/app/components/common/FeedbackForm";
import ScrollingMarquee from "@/app/components/common/ScrollingMarquee";
import Image from "next/image";

export default function FeedBackComponent() {
  return (
    <div className=" mb-[120px] lg:mb-[180px] ">
      <div className="firsFormBg w-full xl:w-[1280px] xl:mx-auto">
        <div className="flex w-full min-h-0 flex-col sm:flex-row sm:items-stretch">
          <div className="sm:bg-white py-16 md:py-[115px] sm:w-[51.8%] l:w-[41.8%] px-7 sm:shrink-0">
            <FeedbackForm title="Почніть свій шлях до успіху вже сьогодні — станьте нашим партнером!" />
          </div>
          <div className="relative hidden min-h-0 min-w-0 flex-1 overflow-hidden sm:block">
            <div className="absolute inset-0 min-h-full w-full">
              <Image
                src="/images/form/bg.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 640px"
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollingMarquee variant="yellow" />
    </div>
  );
}
