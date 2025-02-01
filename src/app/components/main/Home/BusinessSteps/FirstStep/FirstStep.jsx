import Image from "next/image";
import AbsoluteArr from "./AbsoluteArr";

export default function FirstStep() {
  return (
    <div className="flex flex-col sm:flex-row-reverse gap-6 sm:gap-5 sm:items-end">
      <div>
        <h3 className="text-white font-michelin mb-3 sm-mb-[10px] text-lg">
          Пошук i вибір <br /> ідеального місця
        </h3>
        <p className="text-white text-mlg leading-[1.22]">
          для чебуречної перший та важливий крок
        </p>
        <div className="hidden sm:block sm:mt-10">
          <Image
            src="/images/first-step/img1.webp"
            alt="інтерʼєр закладу Татарка"
            width={455}
            height={102}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-5 sm:max-w-[45%] md:max-w-[57.6%] l:max-w-[57.6%]">
        <div className="w-full h-[245] xs:h-[340px] sm:h-[245px] md:h-[200px] l:h-[245px] overflow-hidden rounded-md">
          <Image
            src="/images/first-step/img2.webp"
            alt="заклад Татарка"
            width={265}
            height={245}
            className="w-full h-full object-cover object-top rounded-md"
          />
        </div>

        <div className="relative md:max-w-[46%] lg:max-w-[55.8%]">
          <AbsoluteArr />
          <div className="hidden md:block sm:mb-5">
            <Image
              src="/images/first-step/img3.webp"
              alt="інтерʼєр закладу Татарка"
              width={360}
              height={138}
              className="w-full h-auto"
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
