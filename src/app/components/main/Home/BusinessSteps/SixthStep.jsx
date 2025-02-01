import Image from "next/image";

export default function SixthStep() {
  return (
    <div className="flex flex-col sm:flex-row  sm:gap-5 sm:items-start">
      <div className="sm:w-[57.5%] sm:flex flex-col-reverse">
        <h3 className="text-white font-michelin text-lg mb-3 sm:mb-0">
          Урочисте відкриття
          <br /> чебуречної
        </h3>
        <p className="sm:hidden text-white text-m-resp leading-[1.22] mb-6">
          включає в себе рекламну кампанію, акції для перших клієнтів та
          виведення продукції на ринок.
        </p>
        <div className=" sm:mb-[25px] ">
          <div className="w-full sm:h-[124px] overflow-hidden rounded-xl">
            <Image
              src="/images/sixth-step/img1.webp"
              alt="страва закладу Татарка"
              width={455}
              height={98}
              className="w-full h-auto sm:h-full sm:object-cover sm:object-top rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-5 sm:max-w-[40.6%]">
        <p className="hidden sm:block text-white text-m-resp leading-[1.22]">
          включає в себе рекламну кампанію, акції для перших клієнтів та
          виведення продукції на ринок.
        </p>
        <div className="w-full rounded-xl hidden sm:block">
          <Image
            src="/images/sixth-step/img2.webp"
            alt="закладу Татарка"
            width={265}
            height={245}
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
}
