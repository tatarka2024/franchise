import Image from "next/image";

export default function FifthStep() {
  return (
    <div className="flex flex-col sm:flex-row-reverse gap-6 sm:gap-5 md:items-end">
      <div className="l:max-w-[40.6%]">
        <h3 className="text-white font-michelin mb-3 sm-mb-[10px] text-lg">
          Проведення тренінгів
        </h3>
        <p className="text-white text-mlg leading-[1.22]">
          та практичних занять для персоналу з підготовки та обслуговування
          клієнтів
        </p>
        <div className="hidden sm:block sm:mt-[30px]">
          <Image
            src="/images/fifth-step/img1.webp"
            alt="інтерʼєр закладу Татарка"
            width={455}
            height={102}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="md:relative flex flex-col md:flex-row gap-6 sm:gap-5 sm:max-w-[45%] md:max-w-[57.6%]">
        <Image
          src="/icons/steps/arr-5.svg"
          alt="іконка стрілки"
          width={130}
          height={128}
          className="absolute hidden md:block  w-[226px] top-0 right-[54px] -translate-y-1/3 "
        />
        <div className=" md:max-w-[46%] lg:max-w-[55.8%]">
          <div className="mb-6 sm:mb-5 w-full h-[156px] xs:h-[250px] sm:h-[112px] l:h-[156px] overflow-hidden rounded-xl">
            <Image
              src="/images/fifth-step/img3.webp"
              alt="персонал закладу Татарка"
              width={360}
              height={138}
              priority
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <p className="text-white text-m-resp leading-[1.22]">
            також вивчення особливостей роботи з обладнанням.
          </p>
        </div>

        <div className="w-full h-[212px] xs:h-[340px] sm:h-[120px] md:h-[212px] l:max-w-[41.1%] overflow-hidden rounded-xl">
          <Image
            src="/images/fifth-step/img2.webp"
            alt="заклад Татарка"
            width={265}
            height={245}
            priority
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
