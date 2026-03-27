import Image from "next/image";

export default function SixthStep() {
  return (
    <div className="flex w-full min-w-0 flex-col sm:flex-row sm:items-end sm:gap-5">
      <div className="flex w-full min-w-0 flex-col-reverse sm:w-[57.5%] sm:shrink-0">
        <h3 className="text-white font-michelin text-lg mb-3 sm:mb-0">
          Урочисте відкриття
          <br /> чебуречної
        </h3>
        <p className="sm:hidden text-white text-m-resp leading-[1.22] mb-6">
          включає в себе рекламну кампанію, акції для перших клієнтів та
          виведення продукції на ринок.
        </p>
        <div className="sm:mb-[25px]">
          <div className="relative aspect-[455/98] w-full max-w-full overflow-hidden rounded-xl sm:aspect-auto sm:h-[124px]">
            <Image
              src="/images/sixth-step/img1.webp"
              alt="страва закладу Татарка"
              fill
              sizes="(max-width: 660px) 100vw, 455px"
              className="object-cover object-center sm:object-top"
            />
          </div>
        </div>
      </div>

      <div className="flex min-w-0 w-full flex-col gap-3 sm:max-w-[40.6%] sm:gap-5">
        <p className="hidden sm:block text-white text-m-resp leading-[1.22]">
          включає в себе рекламну кампанію, акції для перших клієнтів та
          виведення продукції на ринок.
        </p>
        <div className="relative hidden h-[200px] w-full max-w-full overflow-hidden rounded-xl sm:block sm:h-[180px] md:h-[200px]">
          <Image
            src="/images/sixth-step/img2.webp"
            alt="закладу Татарка"
            fill
            sizes="(max-width: 989px) 40vw, 320px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
