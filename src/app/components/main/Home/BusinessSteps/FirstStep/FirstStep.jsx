import Image from "next/image";

export default function FirstStep() {
  return (
    <div className="flex w-full min-w-0 flex-col sm:flex-row-reverse sm:items-end gap-6 sm:gap-5">
      <div className="w-full shrink-0 sm:max-w-[40.7%]">
        <h3 className="text-white font-michelin mb-3 sm-mb-[10px] text-lg">
          Пошук i вибір <br /> ідеального місця
        </h3>
        <p className="text-white text-mlg leading-[1.22]">
          для чебуречної перший та важливий крок
        </p>
        <div className="relative hidden aspect-[455/102] w-full overflow-hidden rounded-md sm:mt-10 sm:block">
          <Image
            src="/images/first-step/img1.webp"
            alt="інтерʼєр закладу Татарка"
            fill
            sizes="(max-width: 660px) 100vw, 455px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="flex min-w-0 w-full flex-col md:flex-row-reverse gap-6 sm:gap-5 sm:max-w-[57.6%] l:max-w-[57.6%]">
        <div className="relative h-[245px] w-full min-w-0 overflow-hidden rounded-md xs:h-[340px] sm:h-[245px] md:h-[200px] l:h-[245px]">
          <Image
            src="/images/first-step/img2.webp"
            alt="заклад Татарка"
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover object-top"
          />
        </div>

        <div className="relative min-w-0 md:max-w-[46%] lg:max-w-[55.8%]">
          <div className="relative hidden aspect-[360/138] w-full overflow-hidden rounded-md sm:mb-5 md:block">
            <Image
              src="/images/first-step/img3.webp"
              alt="інтерʼєр закладу Татарка"
              fill
              sizes="(max-width: 989px) 45vw, 360px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-white text-m-resp max-w-[82.2%] sm:max-w-full leading-[1.22]">
            Узгодження локації враховує аналіз потенційного попиту та зручність
            доступу для вашої цільової аудиторії
          </p>
        </div>
      </div>
    </div>
  );
}
