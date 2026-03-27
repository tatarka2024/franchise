import Image from "next/image";

export default function FifthStep() {
  return (
    <div className="flex w-full min-w-0 flex-col sm:flex-row-reverse md:items-end gap-6 sm:gap-5">
      <div className="w-full shrink-0 sm:max-w-[40.7%]">
        <h3 className="text-white font-michelin mb-3 sm-mb-[10px] text-lg">
          Проведення тренінгів
        </h3>
        <p className="text-white text-mlg leading-[1.22]">
          та практичних занять для персоналу з підготовки та обслуговування
          клієнтів
        </p>
        <div className="relative hidden aspect-[455/102] w-full overflow-hidden rounded-md sm:mt-[30px] sm:block">
          <Image
            src="/images/fifth-step/img1.webp"
            alt="інтерʼєр закладу Татарка"
            fill
            priority
            sizes="(max-width: 660px) 100vw, 455px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="flex min-w-0 w-full flex-col gap-6 sm:gap-5 sm:max-w-[57.6%] md:relative md:flex-row">
        <div className="min-w-0 md:max-w-[46%] lg:max-w-[55.8%]">
          <div className="relative mb-6 h-[156px] w-full overflow-hidden rounded-xl xs:h-[250px] sm:mb-5 sm:h-[112px] l:h-[156px]">
            <Image
              src="/images/fifth-step/img3.webp"
              alt="персонал закладу Татарка"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover object-top"
            />
          </div>
          <p className="text-white text-m-resp leading-[1.22]">
            також вивчення особливостей роботи з обладнанням.
          </p>
        </div>

        <div className="relative h-[212px] w-full min-w-0 overflow-hidden rounded-xl xs:h-[340px] sm:h-[120px] md:h-[212px] l:max-w-[41.1%]">
          <Image
            src="/images/fifth-step/img2.webp"
            alt="заклад Татарка"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 280px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
