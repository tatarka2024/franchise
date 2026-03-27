import Image from "next/image";

export default function ThirdStep() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-5 sm:items-start">
      <div className="sm:max-w-[42.6%]">
        <div className="relative mb-0 hidden aspect-[455/98] w-full overflow-hidden rounded-md sm:mb-[30px] sm:block">
          <Image
            src="/images/third-step/img1.webp"
            alt="страва закладу Татарка"
            fill
            priority
            sizes="(max-width: 660px) 100vw, 455px"
            className="object-cover object-center"
          />
        </div>
        <h3 className="text-white font-michelin mb-3 sm-mb-[10px] text-lg">
          Створення детального проекту
        </h3>
      </div>

      <div className="flex flex-col gap-6 sm:gap-5 relative l:max-w-[57.5%]">
        {/* стрілка */}
        <Image
          src="/icons/steps/arr-3.svg"
          alt="іконка стрілки"
          width={130}
          height={128}
          className="absolute w-[126px] l:w-[226px] bottom-[-40px] left-[-9%] xs:left-0 sm:left-full sm:-translate-x-full l:-translate-x-3/4  sm:scale-x-[-1] sm:bottom-0 "
        />
        {/* /стрілка */}
        <p className="text-white text-m-resp leading-[1.22]">
          в якому враховуються особливості дизайну i внутрішнього оформлення
          чебуречної, планування простору та розміщення обладнання.
        </p>
        <div className="relative h-[158px] w-full overflow-hidden rounded-xl xs:h-[250px] sm:h-[158px]">
          <Image
            src="/images/third-step/img2.webp"
            alt="працівник закладу Татарка демонструє меню"
            fill
            sizes="(max-width: 660px) 100vw, 400px"
            className="object-cover object-center xs:object-[center_80%]"
          />
        </div>
      </div>
    </div>
  );
}
