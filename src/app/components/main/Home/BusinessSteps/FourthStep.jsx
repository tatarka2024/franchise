import Image from "next/image";

export default function FourthStep() {
  return (
    <div className="flex flex-col sm:flex-row-reverse gap-6 sm:gap-5 sm:items-end">
      <div className="sm:max-w-[40.7%]">
        <h3 className="text-white font-michelin mb-3 sm-mb-[10px] text-lg">
          Проведення ремонтних робіт
        </h3>
        <p className="text-white text-m-resp leading-[1.22]">
          та придбання необхідного обладнання для повноцінного функціонування
          чебуречної.
        </p>
        <div className="hidden sm:block sm:mt-[30px]">
          <Image
            src="/images/fourth-step/img1.webp"
            alt="заклад Татарка"
            width={455}
            height={102}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full sm:max-w-[57.6%] l:max-w-[57.6%] h-[166] xs:h-[280px] sm:h-[212px] overflow-hidden rounded-xl">
        <Image
          src="/images/fourth-step/img2.webp"
          alt="заклад Татарка"
          width={265}
          height={245}
          className="w-full h-full object-cover object-center rounded-xl"
        />
      </div>
    </div>
  );
}
